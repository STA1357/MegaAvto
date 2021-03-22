<template>
  <header class="header ticker-wrapper">
    <div class="ticker-wrapper__first-half">
      <p class="p-title">Быстрый обмен машин</p>
<!--      <img src="../../assets/Autoria1.png">-->
<!--      <p><b>New!!!</b><br>Reno Logan 2007 Харьков</p>-->
<!--      <img src="../../assets/autoria2.png" alt="BorisCooper">-->
<!--      <p><b>New!!!</b><br>Reno Logan 2003 Киев</p>-->
<!--      <img src="../../assets/autoria5.png" alt="BorisCooper">-->
<!--      <p><b>New!!!</b><br>Dacia Copot 2009 Днепр</p>-->
    </div>
    <div class="ticker-wrapper__second-half">
      <p class="p-title">Быстрый обмен машин</p>
<!--      <img src="../../assets/autoria3.png" alt="BorisCooper">-->
<!--      <p><b>New!!!</b><br>Suzuki Bon 2006 Харьков</p>-->
<!--      <img src="../../assets/autoria4.png" alt="BorisCooper">-->
<!--      <p><b>New!!!</b><br>Nissan X-Trail 2009 Киев</p>-->
<!--      <img src="../../assets/autoria6.png" alt="BorisCooper">-->
<!--      <p><b>New!!!</b><br>Fiat Tourist 2005 Днепр</p>-->
    </div>

  </header>
</template>

<script>
    export default {
        name: "RunningLine"
    }
</script>

<style scoped lang="scss">
  .header {
    background-color: rgba(0, 0, 0, 0.8);
    overflow: hidden;
    height: 140px;
    position: relative;
    border-radius: 10px;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      overflow: hidden;
      width: 100%;
      height: 140px;
      transform: translate(100%, 0);

      p {
        font-family: 'Roboto', sans-serif;
        color: white;
        text-align: left;
        font-size: 24px;
        line-height: 1.2;
        padding-right: 50px;
        padding-left: 10px;
        margin-bottom: 0;
      }
      b{
        color: darkorange;
        font-size: 28px;
      }
      img{
        width: 200px;
        height: 150px;
      }
      .p-title{
        text-transform: uppercase;
        text-align: center;
        color: #fff339;
      }
    }

    $duration: 20s;

    .ticker-wrapper__first-half, .ticker-wrapper__second-half {
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
</style>
