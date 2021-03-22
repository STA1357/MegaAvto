<!-- @format -->

<template>
  <div class="content-admin ">
    <v-col v-if="getEdit" cols="12" md="10">
      <v-img
        class="rounded-img"
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="150"
        max-width="100"
        :src="getUser.image"
      ></v-img>
      <v-card class="trans" elevation="0">
        <form class="profile-form">
          <v-row>
            <v-col cols="12">
              <v-text-field label="Баланс" disabled></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="getUser.first_name"
                label="Имя"
                disabled
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="getUser.last_name"
                label="Фамилия"
                disabled
              ></v-text-field
            ></v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="getUser.email"
                label="E-mail"
                disabled
              ></v-text-field
            ></v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="getUser.phone_number"
                label="Телефон"
                disabled
              ></v-text-field
            ></v-col>
          </v-row>
          <v-btn
            :ripple="false"
            depressed
            color="#EF9E30"
            class="white--text link-btn"
            @click="setEdit"
            style="text-decoration: none; text-transform: capitalize;"
            to="/admin/profile/edit"
            >Редактировать</v-btn
          >
          <!-- <v-select
          v-model="select"
          :items="cars"
          item-value="carsId"
          :error-messages="selectErrors"
          label="Item"
          required
        ></v-select>
        <v-select
          v-model="select2"
          :hint="`${select2.state}, ${select2.abbr}`"
          :items="cars"
          item-text="state"
          item-value="abbr"
          label="Select"
          persistent-hint
          return-object
          single-line
        ></v-select>
        <v-select
          label="Марка"
          :items="cars.name"
          :item-value="cars.value"
          item-text="name"
          single-line
        ></v-select>  -->

          <!-- <v-checkbox
          v-model="checkbox"
          :error-messages="checkboxErrors"
          label="Do you agree?"
          required
        ></v-checkbox> -->
          <!-- <v-select
            solo
            v-model="select"
            :items="cars"
            item-text="name"
            item-value="value"
            label="Выберите марку"
          ></v-select> -->

          <!-- <v-btn class="mr-4" @click="onClick">
            submit
          </v-btn>
          <v-btn @click="onReset">
            clear
          </v-btn> -->
        </form>
      </v-card>
    </v-col>
    <!-- <select v-model="select">
      <option v-for="(car, i) in cars" :value="car.value" :key="i">{{
        car.name
      }}</option>
    </select> -->
  </div>
</template>

<script>
import axios from 'axios';
export default {
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
    getEdit() {
      return this.$store.getters.getEdit;
    },
  },
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: [],
      },
      show: true,
      cars: [],
      select: '',
      used: [],
      checkbox: '',
      checkboxErrors: '',
    };
  },

  methods: {
    setEdit() {
      this.$store.dispatch('changeEdit');
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    onClick() {
      console.log(this.select);
    },
    async getCars() {
      const { data } = await axios(
        'http://94.237.97.139:8000/api/v1/autoria_parameters/mark_parameters/',
      );
      this.cars = data;
      // console.log(this.select);
    },
    async usedCars() {
      const { data } = await axios(
        'https://developers.ria.com/auto/search?api_key=7SOvB6WswjByVG5cZQ05yhHJYOnp3jcZR2NeRlw0&category_id=1&bodystyle%5B0%5D=3&bodystyle%5B4%5D=2&marka_id%5B0%5D=79&model_id%5B0%5D=0&s_yers%5B0%5D=2010&po_yers%5B0%5D=2017&marka_id%5B1%5D=84&model_id%5B1%5D=0&s_yers%5B1%5D=2012&po_yers%5B1%5D=2016&brandOrigin%5B0%5D=276&brandOrigin%5B1%5D=392&price_ot=1000&price_do=60000&currency=1&auctionPossible=1&with_real_exchange=1&with_exchange=1&exchange_filter%5Bmarka_id%5D=0&exchange_filter%5Bmodel_id%5D=0&state%5B0%5D=1&city%5B0%5D=0&state%5B1%5D=2&city%5B1%5D=0&state%5B2%5D=10&city%5B2%5D=0&abroad=2&custom=1&auto_options%5B477%5D=477&type%5B0%5D=1&type%5B1%5D=2&type%5B3%5D=4&type%5B7%5D=8&gearbox%5B0%5D=1&gearbox%5B1%5D=2&gearbox%5B2%5D=3&engineVolumeFrom=1.4&engineVolumeTo=3.2&powerFrom=90&powerTo=250&power_name=1&countpage=50&with_photo=1',
      );
      this.used = data;
      // console.log(this.used);
    },
  },
  mounted() {
    // console.log(this.getEdit);
    this.usedCars();
    this.getCars();
    // console.log(this.getUser.image);
  },
};
</script>

<style lang="scss">
.link-btn {
  text-decoration: none;
  text-transform: capitalize;
  font-size: 14px !important;
}
// .rounded-img {
//   position: absolute;
//   top: 20px;
//   left: 50%;
//   right: 50%;
//   transform: translate(-50%, 0%);
//   z-index: 500 !important;
//   border-radius: 50%;
//   height: 100px;
//   width: 100px;
// }
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
  /* background-color: #f3f5fb; */
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
