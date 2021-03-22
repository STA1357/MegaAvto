<!-- @format -->

<template>
  <div class="content-admin">
    <v-col
      v-if="!userCredentials"
      cols="12"
      md="8"
      class="d-flex justify-content-center"
    >
      <form elevation="0" class="autoria-login-form">
        <v-text-field
          v-model="autoRiaId"
          label="Auto Ria Id"
          required
          elevation="0"
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
    <v-col v-if="userCredentials" cols="12">
      <h1>Мои автомобили</h1>
      <v-row v-if="userCredentials">
        <v-col cols="12" md="6" v-for="(userCar, i) in userCars" :key="i">
          <Car :userCar="userCar" :carSpecs="true" />
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
import Car from "./Car";

export default {
  components: {
    Car,
  },
  data() {
    return {
      autoRiaId: "",
    };
  },
  computed: {
    userCars() {
      return this.$store.getters.getMyCars;
    },
    userCredentials() {
      return this.$store.getters.getCredentials;
    },
  },
  methods: {
    async getMyCars() {
      // const { data } = await axios(
      //   `https://developers.ria.com/auto/used/autos/ids?user_id=${this.autoria_id}&api_key=${this.autoria_key}`
      // );
      // console.log("myCars:", data.active.moderated[0]);
      // for (const i of data.active.moderated) {
      //   const { data: myCar } = await axios(
      //     `https://developers.ria.com/auto/info?api_key=${this.autoria_key}&auto_id=${i}`
      //   );
      //   this.myCars.push(myCar);
      // }
      // console.log(this.myCars);
      await this.$store.dispatch("fetchMyCars");
    },
    async setAutoRiaCredentials() {
      if (this.autoRiaId !== "") {
        await this.$store.dispatch("createCredentials", {
          autoRiaId: this.autoRiaId,
        });
        if (this.userCredentials) {
          this.getMyCars();
        }
      }
    },
  },
  mounted() {
    // console.log(this.userCredentials);
    if (this.userCredentials) {
      this.getMyCars();
    }
  },
};
</script>

<style lang="scss" scoped>
.autoria-login-form {
  padding: 10px 20px;
  background-color: #fff !important;
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.25) !important;
  width: 100%;
}
.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: none !important;
}
.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  // box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.25) !important;
  box-shadow: none !important;
}
</style>
