<template>
  <div class="button-contact">
    <b-button v-b-modal.modal-1 class="btn">Контакты</b-button>
    <div style="overflow: hidden">
      <b-modal id="modal-1" title="Наши контакты">
        <p><b>Адресс:</b> наш адресс</p>
        <p><b>Телефон:</b> наш телефон</p>
        <p><b>Email:</b> наш Email</p>
      </b-modal>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ContactButton"
  }
</script>
<style lang="scss">
  .btn{
  background: none!important;
  color: #f69e30!important;
  padding: 0!important;
  text-transform: uppercase!important;
  font-weight: 600!important;
  font-family: Avenir, Helvetica, Arial, sans-serif!important;
  opacity: 0.8!important;
  font-size: 14px!important;
  padding: 2px 10px!important;
  border: 2px solid lightgrey!important;
  outline: none!important;
}
.btn:hover{
  color: white!important;
  background-color: darkorange!important;
  outline: none!important;
  border: 2px solid lightgrey!important;
}
.btn:focus{
  color: white;
  background-color: darkorange;
  outline: none;
  border: 2px solid lightgrey;
}
  body.modal-open {
    width: 100% !important;
    padding-right: 0 !important;
    overflow-y: scroll !important;
    margin-right: -10px!important;
  }
  #modal-1{
    padding-right: 0!important;
  }
  @media screen and (max-width: 960px){
    .button-contact{
    }
  }
</style>
