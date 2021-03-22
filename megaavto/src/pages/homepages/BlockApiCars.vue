<template>
  <div id="app" class="apiCar">
    <header class="header ticker-wrapper">
      <div class="ticker-wrapper__first-half">
        <div v-for="(newCar, i) in newCars" :key="i">
          <img :src="newCar.photoData.seoLinkM" />
          <p class="p-sub">
            <b>New!!!</b><br />
            {{ newCar.markName }}<br />
            {{ newCar.locationCityName }}<br />
            {{ newCar.autoData.year }}<br />
            {{ newCar.autoData.race }}
          </p>
        </div>
      </div>
      <div class="ticker-wrapper__second-half">
        <div v-for="(newCar, i) in newCars" :key="i">
          <img :src="newCar.photoData.seoLinkM" />
          <p class="p-sub">
            <b>New!!!</b><br />
            {{ newCar.markName }}<br />
            {{ newCar.locationCityName }}<br />
            {{ newCar.autoData.year }}<br />
            {{ newCar.autoData.race }}
          </p>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BlockApiCars",
  computed: {
    apiKey() {
      return this.$store.getters.getApiKey;
    },
  },
  data() {
    return {
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
      newCars: "",
    };
  },
  methods: {
    async findAddCars() {
      const { data } = await axios(
        `https://developers.ria.com/auto/search?api_key=${this.apiKey}&category_id=1&$with_exchange=1&countpage=100&with_photo=1`
      );
      const myCars = [];
      for (let car of data.result.search_result.ids) {
        const { data: myCar } = await axios(
          `https://developers.ria.com/auto/info?api_key=${this.apiKey}&auto_id=${car}`
        );
        myCars.push(myCar);
      }
      const today = this.$moment().format("YYYY-MM-DD");
      const twoDaysAgo = this.$moment()
        .subtract(2, "d")
        .format("YYYY-MM-DD");
      const dayAgo = this.$moment()
        .subtract(1, "d")
        .format("YYYY-MM-DD");
      console.log(today, twoDaysAgo, dayAgo);

      const filteredCars = myCars.filter(
        (car) =>
          this.$moment(car.addDate).format("YYYY-MM-DD") === twoDaysAgo ||
          this.$moment(car.addDate).format("YYYY-MM-DD") === dayAgo ||
          this.$moment(car.addDate).format("YYYY-MM-DD") === today
      );

      console.log(filteredCars);
      if (filteredCars.length > 0) {
        this.newCars = filteredCars;
      }
    },
  },
  beforeMount() {
    this.findAddCars();
  },
};
</script>

<style scoped lang="scss">

.info-p {
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 600;
}
.header {
  display: flex;
  justify-content: space-between;
  background: linear-gradient(180deg, #F2994A 0%, #FF7A7A 100%);
  overflow: hidden;
  height: 200px;
  position: relative;
  margin-top: 200px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    height: 200px;
    transform: translate(100%, 0);

    p {
      font-family: "Roboto", sans-serif;
      color: white;
      text-align: left;
      font-size: 24px;
      line-height: 1.2;
      padding-right: 50px;
      padding-left: 10px;
    }
    b {
      color: white;
      text-shadow: 1px 1px black;
      font-size: 28px;
    }
    img {
      width: 200px;
      height: 150px;
    }
    .p-title {
      text-transform: uppercase;
      text-align: center;
      color: #fff339;
      width: 300px;
    }
  }

  $duration: 800s;

  .ticker-wrapper__first-half,
  .ticker-wrapper__second-half {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    animation: ticker $duration infinite linear forwards;
  }

  .ticker-wrapper__second-half {
    animation: $duration ticker $duration/2 infinite linear forwards;
  }
}

@keyframes ticker {
  0% {
    transform: translate(100%, 0);
  }

  50% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-100%, 0);
  }
}
.p-sub {
  color: white;
  font-size: 20px;
  width: 300px;
}
@media screen and (max-width: 960px) {
  .p-sub {
    font-size: 14px !important;
  }
  .ticker-wrapper__second-half {
    display: none;
  }
  .p-title {
    width: auto !important;
    font-size: 16px !important;
    padding-right: 10px !important;
  }
}
</style>
