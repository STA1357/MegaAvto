<template>
    <div class="thirdBlock">
        <div class="row d-flex justify-center align-center" style="height: 100%">
          <div class="col-md-4 col-12">
            <div class="block">
              <h3 class="pt-3">Стандарт</h3>
              <p>3 запроса в день</p>
              <hr>
              <h1>99$</h1>
              <p class="pb-5">За месяц</p>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div class="block">
              <h3 class="pt-3">Выгодный</h3>
              <p>3 запроса в день</p>
              <hr>
              <h1>199$</h1>
              <p class="pb-5">За месяц</p>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div class="block">
              <h3 class="pt-3">Супер!</h3>
              <p>3 запроса в день</p>
              <hr>
              <h1>299$</h1>
              <p class="pb-5">За месяц</p>
            </div>
          </div>
        </div>


      <carousel :autoplay="false" :nav="false" :items="1" class="carousel">
        <div class="block-carousel">
          <h3 class="pt-3">Стандарт</h3>
          <p>3 запроса в день</p>
          <hr>
          <h1>99$</h1>
          <p class="pb-5">За месяц</p>
        </div>
        <div class="block-carousel">
          <h3 class="pt-3">Выгодный</h3>
          <p>3 запроса в день</p>
          <hr>
          <h1>199$</h1>
          <p class="pb-5">За месяц</p>
        </div>
        <div class="block-carousel">
          <h3 class="pt-3">Супер!</h3>
          <p>3 запроса в день</p>
          <hr>
          <h1>299$</h1>
          <p class="pb-5">За месяц</p>
        </div>
      </carousel>

    </div>
</template>

<script>
  import carousel from 'vue-owl-carousel'

    export default {
        name: "ThirdBlock",
      components: { carousel }
    }
</script>

<style lang="scss" scoped>

.thirdBlock{
  background: linear-gradient(180deg, #F2994A 0%, #FF7A7A 100%)!important;
  margin-top: 70px;
  height: 385px;
}
.block{
  background-color: white;
  margin: 0 40px;
  padding: 10px 45px;
  border-radius: 35px;
}
h3{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  /* identical to box height */

  letter-spacing: 0.5px;

  color: #000000;
}
h1{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  line-height: 37px;
  /* identical to box height */

  letter-spacing: 0.5px;

  color: #000000;
}
.carousel{
  display: none;
}

@media screen and (max-width: 960px) {
  .thirdBlock {
    height: auto;
  }

  .block-carousel {
    width: 350px;
  }

  .card{
    padding: 10px 20px;
    width: 250px!important;
    margin-right: 100px;
  }
  .block-carousel{
    width: 350px;
    background-color: white;
    border-radius: 15px;
  }
  .block{
    margin: 0;
    display: none;
  }
.carousel{
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  margin-bottom: 15px;
}
}
</style>
