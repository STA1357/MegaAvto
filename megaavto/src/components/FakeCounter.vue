<template>
    <div class="container">
      <div class="row counter-border">
        <div class="col-md-12">
          <p class="counter-title">Количество <br>запросов на обмен</p>
        </div>
        <div class="col-md-3 col-3 grey-box d-flex justify-center">
          <div class="counter-item">{{displayThousends}}</div>
        </div>
        <div class="col-md-3 col-3 grey-box d-flex justify-center">
          <div class="counter-item">{{displayHundreds}}</div>
        </div>
        <div class="col-md-3 col-3 grey-box d-flex justify-center">
          <div class="counter-item">{{displayThens}}</div>
        </div>
        <div class="col-md-3 col-3 grey-box d-flex justify-center">
          <div class="counter-item">{{displaySmalls}}</div>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "FakeCounter",
      data() {
        return {
          displayThousends: 0,
          displayHundreds: 0,
          displayThens: 0,
          displaySmalls: 0
        }
      },
      computed:{
          _smalls: () => 10000,
        _thens() {
            return this._smalls * 10
        },
        _hundreds(){
            return this._thens * 10
        },
        _thousends(){
            return this._hundreds * 100
        }
      },
      mounted() {
          this.showRemain();
      },
      methods:{
          showRemain(){
            const counter = setInterval(() => {
              const now = new Date();
              const end = new Date(2021, 3, 21, 1, 1, 1, 1);
              const distance = now.getTime() + end.getTime();

              if(distance < 0){
                clearInterval(counter);
                return;
              }

              const thousands = (Math.floor(distance/this._thousends)/100000).toFixed(0).slice(0,1);
              const hundreds = (Math.floor((distance % this._thousends)/ this._hundreds)).toFixed(0).slice(0,1);
              const tens = Math.floor((distance % this._hundreds)/ this._thens);
              const smalls = Math.floor((distance % this._thens)/ this._smalls);
              this.displayThousends = thousands < 10 ? thousands : thousands;
              this.displayHundreds = hundreds < 10 ? hundreds : hundreds;
              this.displayThens = tens < 10 ? tens : tens;
              this.displaySmalls = smalls < 10 ? smalls : smalls;

            })
          }
      }
    }
</script>

<style scoped>
  .counter-border{
    width: auto;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -50px;
  }
  .counter-item{
    font-size: 51px;
    font-weight: 600;
    padding: 15px 10px;
    width: 60px;
    background-color: #EDF2FF;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .counter-title{
    text-align: left;
    font-style: normal;
    font-weight: 500;
    font-size: 33px;
    line-height: 49px;

    color: #000000;
    margin-bottom: 0 !important;
  }
  @media screen and (max-width: 960px){
    .counter-border{
      width: auto;
      margin-top: -45px;
    }

    .counter-title{
      font-size: 24px;
      line-height: 1.2;
      font-weight: bold;
    }
    .grey-box{
      padding: 0;
    }
    .counter-item{

    }
  }
</style>
