<template>
  <footer>
    <cookie-law>
      <div slot-scope="props">
        <div class="row">
          <div class="col-md-11">
            <p>
              Принимаю пользовательское соглашение и я выпил бы чайку и пару пив, а также соглашаюсь отдать все свои куки и тд 🍪
            </p>
          </div>
          <div class="col-md-1">
            <button class="accept" @click="props.accept"><span>Соглашаюсь</span></button>
          </div>
        </div>
      </div>

    </cookie-law>
  </footer>
</template>

<script>
  import CookieLaw from 'vue-cookie-law'
  export default {
    components: { CookieLaw }
  }
</script>
<style lang="scss" scoped>
  .Cookie{
    border-radius: 10px;
    border: 1px solid lightgrey;
    background-color: white;
  }
.accept{
  padding: 1px 20px;
  border-radius: 15px;
  background: linear-gradient(180deg, #F2994A 0%, #FF7A7A 100%)!important;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
