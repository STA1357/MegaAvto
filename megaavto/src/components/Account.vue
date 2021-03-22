<!-- @format -->
<template>
  <div class="content-admin">
    <v-row>
      <v-col cols="12"> <h1 style="color: darkorange">Личный счёт</h1></v-col>
      <v-col cols="12">
        <form action="https://secure.wayforpay.com/pay" method="post">
          <input type="hidden" name="merchantAccount" value="avto_obmen_net" />
          <input
            type="hidden"
            name="merchantDomainName"
            value="https://avto-obmen.net"
          />
          <input
            type="hidden"
            name="merchantSignature"
            value="fbaa2ae5b58d3992f3926917a5b937a4d2110e5f"
          />
          <input type="hidden" name="merchantTransactionType" value="AUTO" />
          <input
            type="hidden"
            name="merchantTransactionSecureType"
            value="AUTO"
          />
          <input type="hidden" name="orderReference" value="" />
          <input type="hidden" name="orderDate" value="1434359159" />
          <input name="amount" :value="amount" @input="amountHandler($event)" />
          <input type="hidden" name="currency" value="UAH" />
          <input
            type="hidden"
            name="productName[]"
            value="Apple iPhone 6 16GB"
          />
          <input type="hidden" name="productPrice[]" value="1" />
          <input type="hidden" name="productCount[]" value="1" />
          <input type="hidden" name="language" value="RU" />
          <button type="submit" class="btn btn-blue pay hover-black mt-15">
            Оплатить
          </button>
        </form>
        <input type="text" id="moneyInput" class="money" />
        <v-btn depressed color="#f69e30" class="white--text" @click="pay"
          >Пополнить счёт</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import axios from "axios";
import Wayforpay from "wayforpay";

export default {
  data() {
    return {
      amount: "",
    };
  },
  methods: {
    amountHandler(event) {
      // console.log(event.target.value);
      this.amount = event.target.value;
      console.log(this.amount);
    },
    pay() {
      const wayforpay = new Wayforpay();
      console.log(wayforpay);
      wayforpay.buildWidgetButton(
        {
          merchantAccount: "test_merch_n1",
          merchantDomainName: "www.market.ua",
          authorizationType: "SimpleSignature",
          merchantSignature: "b95932786cbe243a76b014846b63fe92",
          orderReference: "DH783023",
          orderDate: "1415379863",
          amount: "1547.36",
          currency: "UAH",
          productName: "Процессор Intel Core i5-4670 3.4GHz",
          productPrice: "1000",
          productCount: "1",
          clientFirstName: "Вася",
          clientLastName: "Васечкин",
          clientEmail: "some@mail.com",
          clientPhone: "380631234567",
          language: "UA",
        },
        function(response) {
          // on approved
          console.log(response);
        },
        function(response) {
          console.log(response);
          // on declined
        },
        function(response) {
          console.log(response);
          // on pending or in processing
        }
      );
    },
  },
};
</script>

<style scoped>
.account {
  margin-left: 180px;
}
.money {
  background-color: #fff;
}
</style>
