<template>
  <div class="navbar">
    <a href="#home">Home</a>
    <p style="color: orange;">MegaAvto 2021</p>
  </div>
</template>

<script>
    export default {
        name: "BottomBar"
    }
</script>

<style scoped lang="scss">
  .navbar {
    overflow: hidden;
    background-color: #333;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 30px;
  }

  .navbar a {
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 0 16px;
    text-decoration: none;
    font-size: 17px;
    visibility: hidden;
  }

  .navbar a:hover {
    background-color: #ddd;
    color: black;
  }

  .navbar a.active {
    background-color: #4CAF50;
    color: white;
  }

  .navbar .icon {
    display: none;
  }

  @media screen and (max-width: 600px) {
    .navbar a:not(:first-child) {display: none;}
    .navbar a.icon {
      float: right;
      display: block;
    }
  }

  @media screen and (max-width: 600px) {
    .navbar.responsive .icon {
      position: absolute;
      right: 0;
      bottom:0;
    }
    .navbar.responsive a {
      float: none;
      display: block;
      text-align: left;
    }

  }
</style>
