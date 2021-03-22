<template>
    <div class="block">
      <div id="A">
        <div class="row">
          <div class="col-md-5" >
            <div style="position: absolute" class="iphone-pic">
              <img src="../../assets/phoneCar.svg" alt="" style="width: 80%; margin-top: 220px">
            </div>
          </div>
          <div class="col-md-7 d-flex justify-center" style="padding-top: 50px; padding-left: 0">
            <ExchangeOnFirstPage></ExchangeOnFirstPage>
          </div>

        </div>
      </div>


    </div>
</template>

<script>


    import ExchangeOnFirstPage from "../../components/ExchangeOnFirstPage";
    export default {
        name: "FirstBlock",
      components: {ExchangeOnFirstPage}
    }
</script>

<style scoped>
.block{
  display: block;
  overflow: hidden;
  margin-right: -15px;
}
#A {
  background-image: url("../../assets/backroundforfirstblock.svg");
  background-size: cover;
  padding-bottom: 220px;
  margin-left: -5px;
  margin-top: -150px;
}



#A::after {
  content: "";

  float: left;

  display: block;

  height: 1vw;
  width: 110%;

  background-size: 100% 100%;
  margin-left: -5px;





  /*   content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 70 500 60' preserveAspectRatio='none'%3E%3Crect x='0' y='0' width='500' height='500' style='stroke: none; fill: black;' /%3E%3Cpath d='M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z' style='stroke: none; fill:white;'%3E%3C/path%3E%3C/svg%3E"); */
  /**
   * Would there be any advantage to getting this to work via `content` instead?
   */
}





/** Cosmetics **/
* {
  margin: 0;
}
#A, #B {
}
div {
  font-family: monospace;
  font-size: 1.2rem;
  line-height: 1.2;
}
#A {
  color: white;
}







.round-mage img{
  margin-right: -25%;
  border-radius: 50%;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  width: 350px;
  height: 350px;
  border: 3px solid white;
}
 .dark{
   background-color: rgba(0, 0, 0, 0.8);
   margin-bottom: 11px;
 }
 .oran{
   background-color: rgba(255,140,0, 0.8);
   margin-bottom: 11px;
 }
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.myTitle{
  font-size: 72px;
  font-weight: 600;
}
.subtitle{
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  font-size: 22px;
  font-weight: 600;
  color: lightgrey;
}
@media screen and (max-width: 960px){
  .iphone-pic{
    display: none;
  }
  .first-block{
    height: 650px;
  }
  .dark{
    height: 350px;
    margin-bottom: 0;
  }
  .oran{
    height: 250px;
    margin-top: -4px;
  }
  .round-mage{
    top: 100px;
    position: sticky;
  }
  .round-mage img{
    margin-right: 0;
    width: 225px;
    height: 225px;
  }
  .myTitle{
    margin-top: 30px;
font-size: 36px;
  }
  .subtitle{
    font-size: 18px;
    margin: 0 15vw;
  }
  .centered{
    position: sticky;
    top: 0;
    left: 0;
    transform: translate(0, 0);
  }

}
</style>
