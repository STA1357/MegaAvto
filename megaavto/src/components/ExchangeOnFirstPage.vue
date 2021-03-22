<!-- @format -->

<template>
  <div class="content" style="display: -webkit-box;transform: translateY(112px);">
    <v-row>
      <v-col cols="12" md="10" class="col-margin">
        <v-card elevation="0">
          <form class="form">
            <v-row style="margin: 0 1vw">
              <v-col cols="12" md="6" class="mySelect">
                <v-select
                  v-model="form.typeOfCarsSelect"
                  :items="typeOfCars"
                  solo
                  class="rounded-lg pr-2"
                  item-text="name"
                  item-value="value"
                  label="Тип транспорта"
                  @change="getMarksOfCars"
                ></v-select>
              </v-col>
              <v-col cols="12" md="3" class="mySelect">
                <v-select
                  v-model="form.yearSelectFrom"
                  :items="optionYears"
                  solo
                  class="rounded-lg"
                  item-text="name"
                  item-value="value"
                  label="Год от"
                  style=" padding: 0 !important;"
                ></v-select>
              </v-col>
              <v-col cols="12" md="3" class="mySelect">
                <v-select
                  v-model="form.yearSelectTo"
                  :items="optionYears"
                  solo
                  class="rounded-lg ml-2"
                  @input="setYearto"
                  item-text="name"
                  item-value="value"
                  label="Год до"
                  style=" padding: 0 !important;"
                ></v-select>
              </v-col>
              <v-col cols="12"  class="mySelect">
                <v-select
                  v-if="this.form.typeOfCarsSelect"
                  v-model="form.marksOfCarsSelect"
                  :items="marksOfCars"
                  solo
                  class="rounded-lg pr-2"
                  item-text="name"
                  item-value="value"
                  label="Марка"
                  @input="getModels"
                  @change="getMarksOfCars"
                  attach
                  chips
                  multiple
                  @changed="changed(marksOfCars)"
                  style=" padding: 0 !important;"
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
              <v-col cols="12" class="mySelect">
                <v-select
                  v-if="!this.form.typeOfCarsSelect"
                  solo
                  class="rounded-lg"
                  label="Модель"
                  style=" padding: 0 !important;"
                >
                </v-select>
              </v-col>
              <v-col cols="12" class="mySelect">
                <v-select
                  v-if="this.form.marksOfCarsSelect"
                  v-model="form.modelsOfCarsSelect"
                  :items="modelsOfCars"
                  solo
                  class="rounded-lg"
                  item-text="name"
                  item-value="value"
                  label="Модель"
                  attach
                  chips
                  multiple
                  @changed="changed(modelsOfCars)"
                  style=" padding: 0 !important;"
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
              <v-col cols="12" class="mySelect">
                <v-select
                  v-if="!this.form.marksOfCarsSelect"
                  solo
                  class="rounded-lg"
                  label="Марка"
                >
                </v-select>
              </v-col>
              <v-col cols="12" class="mySelect">
                <v-select
                  v-model="form.statesSelect"
                  :items="states"
                  solo
                  class="rounded-lg"
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
<!--              <v-col cols="12" md="6" class="cmt">-->
<!--                <v-text-field-->
<!--                  v-model="form.priceFrom"-->
<!--                  label="Цена от"-->
<!--                  solo-->
<!--                  rounded-->
<!--                ></v-text-field>-->
<!--              </v-col>-->
<!--              <v-col cols="12" md="6" class="cmt">-->
<!--                <v-text-field-->
<!--                  v-model="form.priceTo"-->
<!--                  label="Цена до"-->
<!--                  solo-->
<!--                  rounded-->
<!--                ></v-text-field>-->
<!--              </v-col>-->
              <v-col cols="12" class="mySelect">
                <v-select
                  v-model="form.exchangeTypeSelect"
                  :items="exchangeType"
                  solo
                  class="rounded-lg"
                  item-text="name"
                  item-value="value"
                  label="Тип обмена"
                ></v-select>
              </v-col>
            </v-row>
            <v-btn
              :ripple="false"
              depressed
              class="white--text link-btn mr-3"
              @click="sendExchangeRequest(setSearchParams)"
            >Поиск</v-btn
            >
          </form>
        </v-card>
      </v-col>

    </v-row>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    components: {

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
         console.log(this.select);
      },
      async getMarksOfCars() {
        const { data } = await axios(
          `https://developers.ria.com/auto/categories/${this.form.typeOfCarsSelect}/marks?api_key=${this.apiKey}`
        );
        this.marksOfCars = data;
         console.log("marksOfCarsSelect: ", this.marksOfCarsSelect);
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
         console.log('modelsOfCars: ', this.modelsOfCars);
      },
      async getStates() {
        const { data } = await axios(
          `https://developers.ria.com/auto/states?api_key=${this.apiKey}`
        );
         console.log(data);
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

<style lang="scss" scoped>
  .v-input__slot{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
  }
  .mySelect {
    padding: 0!important;
    border-bottom: none!important;
    margin-left: 0 !important;
  }
  .v-card{
    height: 450px;
    padding: 15px 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
  }
  .col-margin{
    margin-top: 80px;
  }
  .white--text{
    text-decoration: none;
    text-transform: capitalize;
    background: linear-gradient(180deg, #F2994A 0%, #FF7A7A 100%)!important;
    color: white !important;
    margin-top: -10px;
    padding: 0 75px !important;
    border-radius: 15px; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    float: right; font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 960px) {
    .v-card{
      width: 360px !important;
      height: 600px !important;
    }
    .cars-list {
      overflow-y: auto;
      max-height: 650px;
      margin-bottom: 0 !important;
      margin-top: 14px;
      &::-webkit-scrollbar {
        width: 5px;
      }
      .col-margin{
        margin-left: 0;
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
    width: 100%;
    height: 150px;
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
    padding: 0;
    box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.25) !important;
    height: 700px;
  }
  .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
    background-color: #EDF2F7;
    border-right: 1px solid #E6E7E8;
    border-left: 1px solid #E6E7E8;
    border-top: 1px solid #E6E7E8;
    border-bottom: 2px solid rgba(0, 0, 0, 0.25);
  }


</style>
