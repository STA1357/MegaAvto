<template>
    <div class="secondBlock">
      <div class="row">
        <div class="col-md-4 col-12 outsideCounter">
          <div class="counter">
            <div class="fakecounter">
              <FakeCounter></FakeCounter>
            </div>
          </div>
        </div>
        <div class="col-md-8 col-12 pl-7">
          <h4 style="font-family: Roboto; font-weight: 400; font-size: 33px; color: black; margin-top: 10px">O Нас</h4>
          <p class="pt-2">Поможем обменять Ваш автомобиль на сайте auto.ria.com в 10 раз быстрее!</p>
          <p>Наш робот за 1 час работы разошлёт Ваше предложение обмена по заданным параметрам всем подходящим респондентам.</p>
          <p>Вы указываете регион и диапазон цен, а мы добавляем Ваш автомобиль на обмен ко всем автомобилям на сайте AutoRIA по этим параметрам</p>
        </div>
      </div>
    </div>
</template>

<script>
    import FakeCounter from "../../components/FakeCounter";
    export default {
        name: "SecondBlock",
      components: {FakeCounter}
    }
</script>

<style scoped>
.secondBlock{
  margin-top: 10px;
  height: auto;
}
.col-md-4{
  background: linear-gradient(135deg, #F395BA 0%, #FED182 100%)!important;
  border-radius: 15px 0 0 15px;
  height: 330px;
  width: 400px;
  padding: 18px;
}
.col-md-8{
  border-left: 1px solid #F6F6F6;
}
.counter{
  border: 1px solid #F6F6F6;
  padding: 25px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 100%;
}
.grey-border{
  padding: 20px 15px;
  font-size: 42px;
  font-weight: 600;
  border-radius: 15px;
  background-color: #EDF2FF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
p{
  font-size: 18px;
  line-height: 1.8;
}
.row{
  text-align: left;
  padding: 0 15px 0 0;
  margin: 0 20px 0 40px;
  border: 1px solid #F6F6F6;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
@media screen and (max-width: 960px){
  .row{
    padding: 0;
  }
  .outsideCounter{
    border-radius: 15px 15px 0 0 !important;
  }
}
</style>
