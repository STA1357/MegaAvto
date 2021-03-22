<!-- @format -->

<template>
  <div class="login-page">
    <transition name="fade">
      <div v-if="!registerActive" class="wallpaper-login"></div>
    </transition>
    <div class="wallpaper-register"></div>

    <div class="cont" style="margin: 0 auto;">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div
            class="card login"
          >
            <div class="card_header" style="margin-bottom: 0; margin-top: 30px">
              <h1 style="margin-bottom: 0">M<b>ega</b>A<b>uto</b></h1>
            </div>
            <form class="form">
              <div style="width: 300px">
                <label for="email">Логин</label>
                <input
                  v-model="userLogin.email2"
                  type="email"
                  id="email"
                  class="form-control"
                  :class="{
                  'is-invalid': loginSubmitted && $v.userLogin.email2.$error,
                }"
                  placeholder=""
                  required
                />
                <div
                  v-if="loginSubmitted && $v.userLogin.email2.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.userLogin.email2.required">Введите почту</span>
                  <span v-if="!$v.userLogin.email2.email"
                  >Не правильная почта</span
                  >
                </div>
              </div>
              <div style="width: 300px">
                <label for="password">Пароль</label>
                <input
                  v-model="userLogin.password2"
                  type="password"
                  id="password"
                  class="form-control"
                  :class="{
                  'is-invalid': loginSubmitted && $v.userLogin.password2.$error,
                }"
                  placeholder=""
                  required
                />
                <div
                  v-if="loginSubmitted && $v.userLogin.password2.$error"
                  class="invalid-feedback"
                >
                <span v-if="!$v.userLogin.password2.required"
                >Введите пароль</span
                >
                </div>
              </div>
              <div>
                <v-btn
                  @click="login"
                  class=" mt-8"
                  style="background: linear-gradient(180deg, #F2994A 0%, #FF7A7A 100%); color: white;padding: 0 125px;"
                >Войти</v-btn
                >
              </div>
              <p class="mt-5">
                Не имеете акаунт?<router-link to="/register"
                  >Зарегистрируйтесь</router-link
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import { mask } from "vue-the-mask";


export default {
  name: "LogIn",
  directives: { mask },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  components: {},
  data() {
    return {
      userLogin: {
        email2: "",
        password2: "",
      },
      registerActive: false,
      emptyFields: false,
      registerSubmitted: false,
      loginSubmitted: false,
    };
  },
  validations: {
    userLogin: {
      email2: { required, email },
      password2: { required, minLength: minLength(4) },
    },
  },
  methods: {
    async login() {
      this.loginSubmitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      await this.$store.dispatch("login", {
        email: this.userLogin.email2,
        password: this.userLogin.password2,
      });
      if (this.isLoggedIn) {
        this.$router.push("/admin");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
label{
  margin: 0;
  width: 100%;
  text-align: left;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */


  color: #2A4365;

}
.form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.form input{
  background-color: #EDF2F7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
  margin-bottom: 15px;
}
 .wallpaper-login{
   height: 100% !important;
 }

p {
  line-height: 1rem;
  font-size: 14px;
}

.card {
  padding-bottom: 20px;
  border-radius: 10px;
  width: 600px;
}


.login-page {
  align-items: center;
  display: flex;

  .wallpaper-login {
    background: linear-gradient(180deg, #F2994A 0%, #FF7A7A 100%);
    background-size: cover;
    height: 100%;
    position: absolute;
    z-index: 0;
    .wallpaper-register {
      display: none;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .wallpaper-register {
    background-size: cover;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: -1;
    .wallpaper-login {
      display: none;
    }
  }

  h1 {
    margin-bottom: 1.5rem;
  }
}

.error {
  animation-name: errorShake;
  animation-duration: 0.3s;
}

@keyframes errorShake {
  0% {
    transform: translateX(-25px);
  }
  25% {
    transform: translateX(25px);
  }
  50% {
    transform: translateX(-25px);
  }
  75% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(0);
  }
}
.card_header {
  display: block;
  padding-top: 20px;
  margin-bottom: 30px;
}
.confirm_error {
  color: #f1612c;
  font-size: 80%;
}
.no-border {
  margin-top: 15px;
  border-bottom: 1px solid lightgrey;
  outline: none;
}
.register {
  margin-top: 20px;
  display: block;
  border: 1px solid lightgrey;
  border-radius: 15px;
  background: white;
  // padding: 20px 10px;
}
.login-page {
  background: linear-gradient(180deg, #F2994A 0%, #FF7A7A 100%);
  background-size: cover;
  height: 100%;

}
@media screen and (max-width: 960px){
  .form-group{
    padding: 0 40px;
  }
}
b{
  font-weight: 600;
  color: darkorange;
}
h1{
  font-family: Roboto;
  font-weight: 600;
  font-size: 32px;
}
</style>
