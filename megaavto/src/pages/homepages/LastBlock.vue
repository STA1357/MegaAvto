<template>
    <div class="lastBlock mt-5">
        <div class="myForm">
          <div class="row">
            <div class="col-md-12 col-12">
              <h1>Оставить заявку</h1>
            </div>

            <div class="col-md-6 col-12 d-flex flex-column align-center justify-center">

              <div class="input-field text-left">
                <label for="first_name">Имя</label>
                <div>
                  <input
                    v-model="first_name"
                    id="first_name"
                    type="text"
                    placeholder="Введите имя..."
                    class="inp"
                  />
                </div>
              </div>

              <div class="input-field text-left pt-4">
                <label for="phone">Телефон</label>
                <div>
                  <input
                    placeholder="Введите телефон..."
                    v-model="phone"
                    id="phone"
                    v-mask="'+38(###)###-##-##'"
                    class="inp"
                  />
                </div>
              </div>
              <div class="input-field text-left pt-4">
                <label for="text">Сообщение</label>
                <div>
                  <textarea
                    v-model="textarea"
                    placeholder="Введите текст..."
                    name="text"
                    id="text"
                    cols="30"
                    rows="3"
                    class="inp-text"
                  >
              </textarea>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-12">
              <img src="../../assets/contactImage.svg" alt="handWithPhone" class="handWithPhone">
              <div class="pt-10">
                <v-btn
                  class="btn"
                  @click="sending"
                >О<b>тправить</b></v-btn
                >
              </div>
            </div>
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
        name: "LastBlock",

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
          phone: "",
          textarea: "",
        };
      },
      methods: {
        async sending() {
          console.log("Send");
          const { data } = await axios.post("http://localhost:5002/sendmail", {
            name: this.first_name,
            phone: this.phone,
            text: this.textarea
          });
          console.log(data);
        },
      }
    }
</script>

<style scoped lang="scss">
.lastBlock{
  height: 665px;
  background: linear-gradient(180deg, #F2994A 0%, #FF7A7A 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
}
.myForm{
  background-color: white;
  height: 500px;
  margin-top: 50px;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
h1{
  color: #F2994A;
  text-shadow: 1px 1px #FF7A7A;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  margin-top: 40px;
}
.inp{
  background-color: #EDF2F7;
  width: 400px;
  height: 44px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-left: 0;
}
.inp-text{
  background-color: #EDF2F7;
  width: 400px;
  height: 142px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-left: 0;
}
label{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */


  color: #2A4365;
  margin-left: 0;
}
.btn{
  color: white !important;
  background: linear-gradient(180deg, #F2994A 0%, #FF7A7A 100%);
  width: 80%;
  border-radius: 10px;
  font-family: Roboto !important;
  font-style: normal;
  font-weight: normal;
  font-size: 23px !important;
  line-height: 27px !important;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 47px !important;
}
b{
  text-transform: lowercase !important;
  font-weight: normal !important;
}
input::placeholder{
  padding-left: 5px;
}
textarea::placeholder{
  padding-left: 5px;
  padding-top: 5px;
}

@media screen and (max-width: 960px){
  .lastBlock{
    height: auto;
  }
  .handWithPhone{
    display: none;
  }
  .myForm{
    background-color: white;
    width: auto;
    height: 600px;
    margin: 50px 10px;
  }
  .inp{
    width: 365px;
    margin: 0;
  }
  .inp-text{
    width: 365px;
    margin: 0;
  }
  label{
    margin-left: 0;
  }
}
</style>
