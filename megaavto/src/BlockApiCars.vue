<template>
  <div id="app" class="apiCar">
    <header class="header ticker-wrapper">
      <div class="ticker-wrapper__first-half">
        <p class="p-title">Обмен машин</p>

        <img :src="firstCar.photoData.seoLinkM" />
        <p class="p-sub">
          <b>New!!!</b><br />
          {{ firstCar.markName }}<br />
          {{ firstCar.locationCityName }}<br />
          {{ firstCar.autoData.year }}<br />
          {{ firstCar.autoData.race }}
        </p>

        <img :src="secondCar.photoData.seoLinkM" />
        <p class="p-sub">
          <b>New!!!</b><br />
          {{ secondCar.markName }}<br />
          {{ secondCar.locationCityName }}<br />
          {{ secondCar.autoData.year }}<br />
          {{ secondCar.autoData.race }}
        </p>

        <img :src="thirdCar.photoData.seoLinkM" />
        <p class="p-sub">
          <b>New!!!</b><br />
          {{ thirdCar.markName }}<br />
          {{ thirdCar.locationCityName }}<br />
          {{ thirdCar.autoData.year }}<br />
          {{ thirdCar.autoData.race }}
        </p>
      </div>
      <div class="ticker-wrapper__second-half">
        <p class="p-title">Обмен машин</p>

        <img :src="fourCar.photoData.seoLinkM" />
        <p class="p-sub">
          <b>New!!!</b><br />
          {{ fourCar.markName }}<br />
          {{ fourCar.locationCityName }}<br />
          {{ fourCar.autoData.year }}<br />
          {{ fourCar.autoData.race }}
        </p>


      </div>
    </header>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BlockApiCars",
  data() {
    return {
      firstCar: "",
      secondCar: "",
      thirdCar: "",
      fourCar: "",
      loading: true,
      errored: false,
    };
  },
  methods: {},
  mounted() {
    let one =
      "https://developers.ria.com/auto/info?api_key=7SOvB6WswjByVG5cZQ05yhHJYOnp3jcZR2NeRlw0&auto_id=19050985";
    let two =
      "https://developers.ria.com/auto/info?api_key=7SOvB6WswjByVG5cZQ05yhHJYOnp3jcZR2NeRlw0&auto_id=29139873";
    let three =
      "https://developers.ria.com/auto/info?api_key=7SOvB6WswjByVG5cZQ05yhHJYOnp3jcZR2NeRlw0&auto_id=29164470";
    let four =
      "https://developers.ria.com/auto/info?api_key=7SOvB6WswjByVG5cZQ05yhHJYOnp3jcZR2NeRlw0&auto_id=29112534";

    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);
    const requestFour = axios.get(four);

    console.log(requestOne);

    requestOne
      .then((response) => {
        this.firstCar = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });

    requestTwo
      .then((response) => {
        this.secondCar = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });

    requestThree
      .then((response) => {
        this.thirdCar = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });

    requestFour
      .then((response) => {
        this.fourCar = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });
  },
};
</script>

<style scoped lang="scss">
.apiCar {
  margin-top: 30px;
}
.info-p {
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 600;
}
.header {
  border-top: 5px solid white;
  background: #212121;
  overflow: hidden;
  height: 200px;
  position: relative;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    width: 100%;
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
      color: darkorange;
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

  $duration: 30s;

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
