<template>
    <div class="blockFour">
      <div class="row d-flex justify-center align-center" style="height: 100%">
        <div class="col-md-12 col-12">
          <h1>Отзывы</h1>
        </div>
        <div class="col-md-4 col-12">
          <div class="review-block">
            <div class="maga">
              <img src="../../assets/Ellipse.png" alt="">
            </div>
            <h4 class="name">Ереван</h4>
            <p>Супер Сервис и прочий текс который мы можем вместить для отзывов это вот такой лимит</p>
          </div>
        </div>
        <div class="col-md-4 col-12">
          <div class="review-block">
            <div class="maga">
              <img src="../../assets/Ellipse.png" alt="">
            </div>
            <h4 class="name">Ереван</h4>
            <p>Супер Сервис и прочий текс который мы можем вместить для отзывов это вот такой лимит</p>
          </div>
        </div>
        <div class="col-md-4 col-12">
          <div class="review-block">
            <div class="maga">
              <img src="../../assets/Ellipse.png" alt="">
            </div>
            <h4 class="name">Ереван</h4>
            <p>Супер Сервис и прочий текс который мы можем вместить для отзывов это вот такой лимит</p>
          </div>
        </div>
      </div>

      <carousel :autoplay="false" :nav="false" :items="1" class="carousel">
        <div class="review">
          <div class="maga">
            <img src="../../assets/Ellipse.png" alt="">
          </div>
          <h4 class="name">Ереван</h4>
          <p>Супер Сервис и прочий текс который мы можем вместить для отзывов это вот такой лимит</p>
        </div>
        <div class="review">
          <div class="maga">
            <img src="../../assets/Ellipse.png" alt="">
          </div>
          <h4 class="name">Ереван</h4>
          <p>Супер Сервис и прочий текс который мы можем вместить для отзывов это вот такой лимит</p>
        </div>
        <div class="review">
          <div class="maga">
            <img src="../../assets/Ellipse.png" alt="">
          </div>
          <h4 class="name">Ереван</h4>
          <p>Супер Сервис и прочий текс который мы можем вместить для отзывов это вот такой лимит</p>
        </div>
      </carousel>
    </div>
</template>

<script>
  import carousel from 'vue-owl-carousel'
    export default {
        name: "BlockFour",
      components: { carousel }
    }
</script>

<style scoped lang="scss">
.blockFour{
  background-color: white;
  height: 600px;
}
.maga img{
  border-top: 5px solid #F2994A;
  border-bottom: 5px solid #FF7A7A;
  border-left: 5px solid #F2994A;
  border-right: 5px solid #FF7A7A;
  border-radius: 50%;
  padding: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.maga{
  padding-bottom: 15px;
}
.review-block{
  margin-bottom: 40px;
}
.review{
  display: none;
}
h1{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 53px;
  /* identical to box height */


  color: #081F32;
  margin-bottom: -40px;
}
h4{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 33px;

  color: #000000;
}
p{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
  padding-top: 15px;
}
@media screen and (max-width: 960px){
  .blockFour{
    height: auto;
  }
  .review-block{
    display: none;
  }
  .review{
    display: block;
  }
  .maga{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .maga img{
    width: 200px;
    height: 200px;
  }
}
</style>
