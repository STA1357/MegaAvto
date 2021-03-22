<!-- @format -->

<template>
  <div class="content-admin ">
    <v-row>
      <v-col cols="12" md="8" class="mt-3">
        <v-card class="trans" elevation="0">
          <form class="profile-form">
            <v-row>
              <v-col cols="12" md="6">
                <v-select
                  v-model="form.typeOfCarsSelect"
                  :items="typeOfCars"
                  item-text="name"
                  item-value="value"
                  label="Тип транспорта"
                  @change="getMarksOfCars"
                ></v-select>
              </v-col>
              <v-col cols="12" md="3">
                <v-select
                  v-model="form.yearSelectFrom"
                  :items="optionYears"
                  item-text="name"
                  item-value="value"
                  label="Год от"
                ></v-select>
              </v-col>
              <v-col cols="12" md="3">
                <v-select
                  v-model="form.yearSelectTo"
                  :items="optionYears"
                  @input="setYearto"
                  item-text="name"
                  item-value="value"
                  label="Год до"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-select
                  v-if="this.form.typeOfCarsSelect"
                  v-model="form.marksOfCarsSelect"
                  :items="marksOfCars"
                  item-text="name"
                  item-value="value"
                  label="Марка"
                  @input="getModels"
                  @change="getMarksOfCars"
                  attach
                  chips
                  multiple
                  @changed="changed(marksOfCars)"
                >
                  <template v-slot:selection="{ item, select, selected }">
                    <v-chip
                      :input-value="selected"
                      close
                      @click="select"
                      @click:close="remove(item, marksOfCars)"
                      :ripple="false"
                    >
                      {{ item.name }}
                    </v-chip>
                  </template></v-select
                >
              </v-col>
              <v-col cols="12">
                <v-select
                  v-if="!this.form.typeOfCarsSelect"
                  disabled
                  label="Модель"
                >
                </v-select>
              </v-col>
              <v-col cols="12">
                <v-select
                  v-if="this.form.marksOfCarsSelect"
                  v-model="form.modelsOfCarsSelect"
                  :items="modelsOfCars"
                  item-text="name"
                  item-value="value"
                  label="Модель"
                  attach
                  chips
                  multiple
                  @changed="changed(modelsOfCars)"
                >
                  <template v-slot:selection="{ item, select, selected }">
                    <v-chip
                      :input-value="selected"
                      close
                      @click="select"
                      @click:close="remove(item, modelsOfCars)"
                      :ripple="false"
                    >
                      {{ item.name }}
                    </v-chip>
                  </template></v-select
                >
              </v-col>
              <v-col cols="12">
                <v-select
                  v-if="!this.form.marksOfCarsSelect"
                  disabled
                  label="Марка"
                >
                </v-select>
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="form.statesSelect"
                  :items="states"
                  item-text="name"
                  item-value="value"
                  label="Область"
                  attach
                  chips
                  multiple
                  @changed="changed(states)"
                >
                  <template v-slot:selection="{ item, select, selected }">
                    <v-chip
                      :input-value="selected"
                      close
                      @click="select"
                      @click:close="remove(item, states)"
                      :ripple="false"
                    >
                      {{ item.name }}
                    </v-chip>
                  </template></v-select
                >
              </v-col>
              <v-col cols="12" md="6" class="cmt">
                <v-text-field
                  v-model="form.priceFrom"
                  label="Цена от"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" class="cmt">
                <v-text-field
                  v-model="form.priceTo"
                  label="Цена до"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="form.exchangeTypeSelect"
                  :items="exchangeType"
                  item-text="name"
                  item-value="value"
                  label="Тип обмена"
                ></v-select>
              </v-col>
            </v-row>
            <v-btn
              :ripple="false"
              depressed
              color="#EF9E30"
              class="white--text link-btn"
              style="text-decoration: none; text-transform: capitalize;"
              @click="sendExchangeRequest(setSearchParams)"
              >Начать рассылку</v-btn
            >
          </form>
        </v-card>
      </v-col>
      <v-col
        v-if="!userCredentials"
        cols="12"
        md="4"
        class="d-flex justify-content-center"
      >
        <form elevation="0" class="autoria-login-form mt-3">
          <v-text-field
            v-model="autoRiaId"
            label="Auto Ria Id"
            required
            elevation="0"
            class="mt-3"
          ></v-text-field>
          <v-btn
            @click="setAutoRiaCredentials"
            depressed
            :ripple="false"
            color="#F69E30"
            class="white--text"
            >Вход</v-btn
          >
        </form>
      </v-col>
      <v-col v-if="userCredentials" cols="12" md="4" class="cars-list">
        <div v-for="(userCar, i) in userCars" :key="i">
          <Car :userCar="userCar" />
          <!-- <Car :userCar="userCar" />
          <Car :userCar="userCar" /> -->
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import Car from "./Car";
export default {
  components: {
    Car,
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
    getEdit() {
      return this.$store.getters.getEdit;
    },
    userCars() {
      return this.$store.getters.getMyCars;
    },
    userCredentials() {
      return this.$store.getters.getCredentials;
    },
    apiKey() {
      return this.$store.getters.getApiKey;
    },
  },
  data() {
    return {
      form: {
        typeOfCarsSelect: "",
        yearSelectFrom: "",
        yearSelectTo: "",
        marksOfCarsSelect: "",
        modelsOfCarsSelect: "",
        priceFrom: "",
        priceTo: "",
        statesSelect: "",
        exchangeTypeSelect: "",
      },
      typeOfCars: [],
      used: [],
      checkbox: "",
      checkboxErrors: "",
      optionYears: [],
      marksOfCars: [],
      modelsOfCars: [],
      states: [],
      exchangeType: [
        { name: "Без доплаты", value: "1" },
        { name: "С вашей доплатой", value: "2" },
        { name: "С моей доплатой", value: "3" },
      ],
      autoRiaId: "",
      models: [],
    };
  },

  methods: {
    setYearto() {
      if (this.form.yearSelectFrom > this.form.yearSelectTo) {
        this.form.yearSelectTo = this.form.yearSelectFrom;
      }
    },
    async sendExchangeRequest(setSearchParams) {
      const marks = setSearchParams(this.form.marksOfCarsSelect, "&marka_id");
      const models = setSearchParams(this.form.modelsOfCarsSelect, "&model_id");
      const states = setSearchParams(this.form.statesSelect, "&state_id");

      const {
        typeOfCarsSelect,
        yearSelectFrom,
        yearSelectTo,
        priceFrom,
        priceTo,
        exchangeTypeSelect,
      } = this.form;

      const { data } = await axios(
        `https://developers.ria.com/auto/search?api_key=${
          this.apiKey
        }&category_id=${typeOfCarsSelect}&s_yers=${
          yearSelectFrom ? yearSelectFrom : ""
        }&po_yers=${
          yearSelectTo ? yearSelectTo : ""
        }${marks}${models}${states}&price_ot=${
          priceFrom ? priceFrom : ""
        }&price_do=${priceTo ? priceTo : ""}&exchangeTypeId=${
          exchangeTypeSelect ? exchangeTypeSelect : 1
        }$with_exchange=1&countpage=50&with_photo=1`
      );
      console.log(data);
    },
    setSearchParams(select, string) {
      let arr = [];
      if (select) {
        select.forEach((item) => {
          item = `${string}=${item}`;
          arr.push(item);
        });
        return (arr = arr.join().replace(/[\s.,%]/g, ""));
      } else {
        return (arr = "");
      }
    },
    async setAutoRiaCredentials() {
      if (this.autoRiaId !== "") {
        await this.$store.dispatch("createCredentials", {
          autoRiaId: this.autoRiaId,
        });
        if (this.userCredentials) {
          await this.$store.dispatch("fetchMyCars");
        }
      }
    },
    remove(item, arr) {
      arr.splice(arr.indexOf(item), 1);
      arr = [...arr];
    },
    changed(arr) {
      this.$emit("changed", arr);
    },
    yearsList() {
      let currentYear = new Date().getFullYear();
      for (let year = currentYear - 100; year <= currentYear; year++) {
        this.optionYears.unshift({ name: year, value: year });
      }
    },
    setEdit() {
      this.$store.dispatch("changeEdit");
    },
    async getTypesOfCars() {
      const { data } = await axios(
        `https://developers.ria.com/auto/categories/?api_key=${this.apiKey}`
      );
      this.typeOfCars = data;
      // console.log(this.select);
    },
    async getMarksOfCars() {
      const { data } = await axios(
        `https://developers.ria.com/auto/categories/${this.form.typeOfCarsSelect}/marks?api_key=${this.apiKey}`
      );
      this.marksOfCars = data;
      // console.log("marksOfCarsSelect: ", this.marksOfCarsSelect);
    },
    async getModels() {
      for (let i of this.form.marksOfCarsSelect) {
        const { data } = await axios(
          `http://api.auto.ria.com/categories/${this.form.typeOfCarsSelect}/marks/${i}/models?api_key=${this.apiKey}`
        );
        this.models = data;
      }
      for (let j of this.models) {
        this.modelsOfCars.push(j);
      }
      // console.log('modelsOfCars: ', this.modelsOfCars);
    },
    async getStates() {
      const { data } = await axios(
        `https://developers.ria.com/auto/states?api_key=${this.apiKey}`
      );
      // console.log(data);
      this.states = data;
    },
  },
  beforeMount() {
    this.getTypesOfCars();
    this.yearsList();
    this.getStates();
    if (this.userCredentials) {
      this.$store.dispatch("fetchMyCars");
    }
  },
};
</script>

<style lang="scss">
@media (min-width: 960px) {
  .cars-list {
    overflow-y: auto;
    max-height: 650px;
    margin-bottom: 0 !important;
    margin-top: 14px;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      width: 5px;
      background-color: #f69e30;
      color: #f69e30;
    }
    &::-webkit-scrollbar-track {
      margin-top: 25px;
    }
  }
  .autoria-login-form {
    margin-bottom: 50px;
    height: 200px;
  }
}
.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  border-image: repeating-linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.38) 0,
      rgba(0, 0, 0, 0.38) 2px,
      transparent 0,
      transparent 4px
    )
    1 repeat;
}
.autoria-login-form {
  padding: 10px 20px;
  background-color: #fff !important;
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.25) !important;
  width: 100%;
  height: 150px;
}
.cmt {
  margin-top: 10px;
}
.link-btn {
  text-decoration: none;
  text-transform: capitalize;
  font-size: 14px !important;
}
.theme--light.v-input--is-disabled,
.theme--light.v-input--is-disabled input,
.theme--light.v-input--is-disabled textarea {
  color: #000 !important;
}

/* .trans {
  transform: scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg)
    rotate(2deg);
} */
.profile-form {
  padding: 50px 20px 10px 20px;
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.25) !important;
}
.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: none !important;
}
.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.25) !important;
}
</style>
