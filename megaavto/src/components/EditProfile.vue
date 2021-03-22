<!-- @format -->

<template>
  <div class="content-admin mt-0">
    <v-col v-if="!getEdit" cols="12" md="10">
      <v-img
        class="rounded-img"
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="100"
        max-width="100"
        :src="getUser.image"
      ></v-img>

      <v-card class="trans" elevation="0">
        <form class="profile-form pos-rel">
          <!-- <v-col cols="4"
            ><v-file-input prepend-icon="mdi-camera"></v-file-input
          ></v-col> -->

          <v-col>
            <label for="file">
              <v-icon>mdi-camera</v-icon>
            </label>
            <input
              style="display:none"
              type="file"
              name="file"
              id="file"
              @change="uploadImage"
            />
          </v-col>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="user.first_name"
                label="Имя"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="user.last_name"
                label="Фамилия"
                required
              ></v-text-field
            ></v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="user.email"
                label="E-mail"
                required
              ></v-text-field
            ></v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="user.phone_number"
                label="Телефон"
                required
                v-mask="'+38(###)###-##-##'"
              ></v-text-field
            ></v-col>
          </v-row>
          <v-btn
            :ripple="false"
            depressed
            color="#EF9E30"
            class="white--text mr-2"
            style="text-decoration: none; text-transform: capitalize;"
            @click="updateUser"
            >Сохранить</v-btn
          >
          <v-btn
            :ripple="false"
            depressed
            color="#EF9E30"
            class="white--text"
            to="/admin/profile"
            style="text-decoration: none; text-transform: capitalize;"
            >Назад</v-btn
          >
        </form>
      </v-card>
      <v-col
        cols="12"
        :class="
          getNotification.active
            ? ' d-flex justify-content-center alert-notification alert-notification-active'
            : 'd-flex justify-content-center alert-notification alert-notification-unactive'
        "
      >
        <v-alert type="success">{{ getNotification.message }}</v-alert>
      </v-col>
    </v-col>
  </div>
</template>

<script>
import axios from 'axios';
import { mask } from 'vue-the-mask';

export default {
  directives: { mask },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
    // user() {
    //   return JSON.parse(localStorage.getItem('user'));
    // },
    getEdit() {
      return this.$store.getters.getEdit;
    },
    getNotification() {
      return this.$store.getters.getNotification;
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
      user: JSON.parse(localStorage.getItem('user')),
      show: true,
      cars: [],
      select: '',
      used: [],
      checkbox: '',
      checkboxErrors: '',
      editActive: false,
    };
  },
  destroyed() {
    this.$store.dispatch('changeEdit');
  },
  mounted() {
    // console.log(this.getUser);
  },
  methods: {
    async uploadImage(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.image = files[0];
        let formData = new FormData();
        formData.append('image', this.image);
        const { data } = await axios.post(
          'http://localhost:5002/upload',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${this.user.token}`,
            },
          },
        );
        // console.log(data);
        await this.$store.dispatch('updateImage', data);
        // const { data: updatedUser } = await axios.put(
        //   'http://localhost:5002/api/updateImage',
        //   { image: data },
        //   {
        //     headers: {
        //       Authorization: `Bearer ${this.user.token}`,
        //     },
        //   },
        // );
        // // this.imagePath = data;
        // console.log(updatedUser);
        // localStorage.setItem('user', JSON.stringify(updatedUser.response));
      } else {
        // this.image = '';
        console.log('Not uploaded');
      }
    },
    async updateUser() {
      await this.$store.dispatch('updateUser', {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        phone: this.user.phone_number,
        email: this.user.email,
      });
      console.log('updated');
    },
  },
};
</script>

<style lang="scss">
// .v-file-input input[type='file'] {
//   display: none !important;
//   border: none;
//   margin-top: 20px;
// }
// .v-file-input__text input[type='file'] {
//   display: none !important;
// }
.alert-notification {
  transition: all 1s;
  position: relative;
  z-index: -1;
}
.alert-notification.alert-notification-active {
  opacity: 1;
  transform: translateY(0px);
}
.alert-notification.alert-notification-unactive {
  opacity: 0;
  transform: translateY(-100px);
}
.rounded-img {
  position: absolute;
  top: 20px;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 0%);
  z-index: 500 !important;
  border-radius: 50%;
  height: 80px;
  width: 80px;
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
  padding: 20px 20px 10px 20px;
  /* background-color: #f3f5fb; */
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.25) !important;
}
.pos-rel {
  position: relative;
  z-index: 1;
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
