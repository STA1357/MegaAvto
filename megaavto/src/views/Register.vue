<template>
  <div class="login-page">
    <transition name="fade">
      <div v-if="!registerActive" class="wallpaper-login"></div>
    </transition>
    <div class="wallpaper-register"></div>
    <div class="cont">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 mx-auto">
          <div class="card register" style="width: 600px; border-radius: 15px;">
            <div class="card_header" style="margin-bottom: 0; margin-top: 30px">
              <h1 style="margin-bottom: 0">M<b>ega</b>A<b>uto</b></h1>
            </div>
            <form class="form">
              <div style="width: 300px">
                <label for="name">Имя</label>
                <input
                  v-model="userRegister.first_name"
                  class="form-control"
                  type="text"
                  placeholder=""
                  id="name"
                  :class="{
                  'is-invalid':
                    registerSubmitted && $v.userRegister.first_name.$error,
                }"
                />
                <div
                  v-if="registerSubmitted && $v.userRegister.first_name.$error"
                  class="invalid-feedback"
                >
                <span v-if="!$v.userRegister.first_name.required"
                >Введите имя</span
                >
                </div>
              </div>

              <div style="width: 300px">
                <label for="lastname">Фамилия</label>
                <input
                  v-model="userRegister.last_name"
                  class="form-control"
                  placeholder=""
                  id="lastname"
                  :class="{
                  'is-invalid':
                    registerSubmitted && $v.userRegister.last_name.$error,
                }"
                />
                <div
                  v-if="registerSubmitted && $v.userRegister.last_name.$error"
                  class="invalid-feedback"
                >
                <span v-if="!$v.userRegister.last_name.required"
                >Введите Фамилию</span
                >
                </div>
              </div>


              <div style="width: 300px">
                <label for="username">Логин</label>
                <input
                  class="form-control"
                  placeholder=""
                  id="username"
                  v-model="userRegister.username"
                  :class="{
                  'is-invalid':
                    registerSubmitted && $v.userRegister.username.$error,
                }"
                />
                <div
                  v-if="registerSubmitted && $v.userRegister.username.$error"
                  class="invalid-feedback"
                >
                <span v-if="!$v.userRegister.username.required"
                >Введите имя пользователя</span
                >
                </div>
              </div>


              <div style="width: 300px">
                <label for="phone">Телефон</label>
                <input
                  class="form-control"
                  placeholder=""
                  id="phone"
                  v-model="userRegister.phone"
                  v-mask="'+38(###)###-##-##'"
                  :class="{
                  'is-invalid':
                    registerSubmitted && $v.userRegister.phone.$error,
                }"
                />
                <div
                  v-if="registerSubmitted && $v.userRegister.phone.$error"
                  class="invalid-feedback"
                >
                <span v-if="!$v.userRegister.phone.required"
                >Введите телефон</span
                >
                  <span v-if="!$v.userRegister.phone.minLength"
                  >Введите телефон полностью</span
                  >
                </div>
              </div>


              <div style="width: 300px">
                <label for="email">Email</label>
                <input
                  v-model="userRegister.email"
                  type="email"
                  class="form-control"
                  placeholder=""
                  id="email"
                  style="font-size: 14px"
                  required
                  :class="{
                  'is-invalid':
                    registerSubmitted && $v.userRegister.email.$error,
                }"
                />
                <div
                  v-if="registerSubmitted && $v.userRegister.email.$error"
                  class="invalid-feedback"
                >
                <span v-if="!$v.userRegister.email.required"
                >Введите почту</span
                >
                  <span v-if="!$v.userRegister.email.email"
                  >Не правильная почта</span
                  >
                </div>
              </div>


              <div style="width: 300px">
                <label for="pass">Пароль</label>
                <input
                  v-model="userRegister.password"
                  type="password"
                  class="form-control"
                  placeholder=""
                  id="pass"
                  style="font-size: 14px"
                  required
                  :class="{
                  'is-invalid':
                    registerSubmitted && $v.userRegister.password.$error,
                }"
                />
                <div
                  v-if="registerSubmitted && $v.userRegister.password.$error"
                  class="invalid-feedback"
                >
                <span v-if="!$v.userRegister.password.required"
                >Введите пароль</span
                >
                </div>
              </div>


              <div style="width: 300px">
                <label for="checkpass">Повторите пароль</label>
                <input
                  v-model="userRegister.confirm"
                  type="password"
                  class="form-control"
                  placeholder=""
                  id="checkpass"
                  style="font-size: 14px"
                  required
                  :class="{
                  'is-invalid':
                    registerSubmitted && $v.userRegister.confirm.$error,
                }"
                />
                <div
                  v-if="registerSubmitted && $v.userRegister.confirm.$error"
                  class="invalid-feedback"
                >
                <span v-if="!$v.userRegister.confirm.required"
                >Повторите пароль</span
                >
                </div>
                <div
                  v-if="userRegister.password !== userRegister.confirm"
                  class="confirm_error"
                >
                  Пароли не совпадают
                </div>
              </div>


              <div>
                <v-btn
                  @click="registration"
                  style="
                  color: white;
                  background: linear-gradient(88.75deg, #F9B751 0%, #FF7A7A 159.85%);
                  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                  border-radius: 5px;
                  font-weight: 400;
                  margin-top: 20px;
                  padding: 20px;
                  width: 300px;
                "
                >Регистрация</v-btn
                >
              </div>


              <p class="mt-3" style="font-size: 14px">
                У Вас уже есть аккаунт?<router-link to="/login"
                  >Войти</router-link
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
  name: "Register",
  components: {},
  directives: { mask },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  data() {
    return {
      userRegister: {
        first_name: "",
        last_name: "",
        username: "",
        phone: "",
        email: "",
        password: "",
        confirm: "",
      },
      registerActive: false,
      emptyFields: false,
      registerSubmitted: false,
    };
  },
  validations: {
    userRegister: {
      first_name: { required },
      last_name: { required },
      username: { required },
      phone: { required, minLength: minLength(17) },
      email: { required, email },
      password: { required },
      confirm: { required },
    },
  },
  methods: {
    async registration() {
      this.registerSubmitted = true;
      console.log("hey2");

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("reg error");
        return;
      }
      console.log("hey");
      await this.$store.dispatch("register", {
        first_name: this.userRegister.first_name,
        last_name: this.userRegister.last_name,
        username: this.userRegister.username,
        phone: this.userRegister.phone,
        email: this.userRegister.email,
        password: this.userRegister.password,
      });
      if (this.isLoggedIn) {
        this.$router.push("/admin");
        this.$router.visibility('visible')
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .login-page{
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #F2994A 0%, #FF7A7A 100%);
    background-size: cover;
    height: 100%;
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
</style>
