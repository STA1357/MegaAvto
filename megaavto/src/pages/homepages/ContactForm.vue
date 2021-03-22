<template>
  <div class="contactForm">
    <div class="row">
      <div class="col-md-8 dark col-12">
        <div class="centered mt-3 mb-3">
          <div class="mydropdown">
            <span class="title-span">Свяжитесь с нами</span>
          </div>
          <div class="flow">
            <form class="form-group">
              <span class="title" style="color: darkorange"
                >Введите данные</span
              >
              <input
                v-model="first_name"
                id="first_name"
                class="form-control"
                type="text"
                placeholder="Имя..."
              />
              <input
                v-model="last_name"
                class="form-control"
                placeholder="Фамилия..."
              />
              <input
                class="form-control"
                placeholder="Телефон..."
                v-model="phone"
                v-mask="'+38(###)###-##-##'"
              />
              <input
                v-model="email"
                type="email"
                class="form-control"
                placeholder="Email"
                style="font-size: 14px"
                required
              />
              <textarea
                v-model="textarea"
                placeholder="Введите текст..."
                name="text"
                id=""
                cols="30"
                rows="3"
                style="background-color: black; color:darkorange; width: 100%;
                  outline: none; height:150px; border-radius: 5px; padding-left: 15px; padding-top: 10px;
border: 1px solid orange; max-height: 170px"
              >
              </textarea>
              <div class="pt-2">
                <v-btn
                  class="btn mb-2"
                  @click="sending"
                  style="color: black; background-color:orange; font-weight: 800;
                       border: 1px solid darkorange; width: 100%;"
                  >Отправить</v-btn
                >
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-12 clear">
        <img
          class="contactCar"
          src="../../assets/inside.jpg"
          alt=""
          data-aos="fade-left"
          data-aos-duration="1200"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import Vuelidate from "vuelidate";
import Vue from "vue";
import axios from "axios";

Vue.use(Vuelidate);

export default {
  directives: { mask },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  components: {},
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      textarea: "",
    };
  },
  methods: {
    async sending() {
      console.log("Send");
      const { data } = await axios.post("http://localhost:5002/sendmail", {
        name: this.first_name,
        lastname: this.last_name,
        email: this.email,
        text: this.textarea,
      });
      console.log(data);
    },
  },
};
</script>

<style scoped lang="scss">
.contactForm {
  height: 600px;
  display: block;
 }

.contactCar {
  width: 100%;
  height: 600px;
}
.dark {
  background-color: black;
  margin-right: -2px;
  padding-top: 0;
  border-top: 3px solid white;

}
.clear {
  padding: 0;
  background-color: black;
  border-top: 3px solid white;
}
.centered {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.mydropdown {
  position: relative;
  display: inline-block;
  color: white;
  font-size: 44px;
  font-weight: 600;
  padding: 5px 10px;
}

.flow {
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 0 7px;
  z-index: 1;
  text-align: center;
  text-align: left;
}
.flow p {
  font-size: 22px;
  line-height: 1.4;
  color: white;
}
.mydropdown:hover {
  color: lightgrey;
  transition: color 0.7s;
}

.mydropdown:hover .mydropdown-content {
  display: block;
  margin-top: 10px;
  color: white;
}
b {
  color: darkorange;
}

.form-control{
  background-color: black;
  border: 1px solid orange;
  color: orange;
}
@media screen and (max-width: 960px) {
  // .contactForm {
  // }
  // .row {
  // }
  .dark {
    margin-top: 14px;
    margin-right: 0;
    padding-top: 0;
    margin-bottom: 0;
  }
  .clear {
    margin-top: 0;
    padding: 0;
    background-color: black;
    height: 380px;
  }
  .centered {
    position: relative !important;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
  }
  .mydropdown {
    left: 0;
    font-size: 32px;
    padding: 0 10px;
    margin-top: 30px;
  }
}
@media screen and (max-width: 1200px){
  .title-span{
    font-size: 32px;
  }
}
</style>
