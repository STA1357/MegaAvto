<template>
  <div>
    <v-card elevation="0" class="mb-4">
      <v-img :src="userCar.photoData.seoLinkB" height="200px"></v-img>

      <v-card-title>
        <!-- <a :href="`https://auto.ria.com/uk${userCar.linkToView}`"
                > -->
        {{ userCar.title }} {{ userCar.autoData.year }}
        <!-- </a> -->
      </v-card-title>

      <v-card-subtitle style="text-align: left">
        Цена {{ userCar.USD }}$
      </v-card-subtitle>

      <div :class="carSpecs ? 'car-specs' : ''">
        <p><b>Пробег:</b> {{ userCar.autoData.race }}</p>
        <p><b>Топливо:</b> {{ userCar.autoData.fuelName }}</p>
        <p><b>Коробка:</b> {{ userCar.autoData.gearboxName }}</p>
      </div>

      <div>
        <v-divider></v-divider>

        <v-card-text style="text-align: left">
          {{ userCar.autoData.description }}
        </v-card-text>

        <!-- <v-checkbox
          v-model="checkboxSelect"
          label="Выберите авто на обмен"
          :value="userCar.autoData.autoId"
          @change="checkbox"
          class="cars_checkbox ml-3"
        >
        </v-checkbox> -->
        <div class="checkbox-wrapper">
          <input
            @change="checkbox"
            :true-value="userCar"
            :false-value="''"
            type="checkbox"
            id="check"
            v-model="checkData"
          />
          <label for="check" class="checkmark mr-2"></label>
          <label for="check">Добавьте авто на обмен</label>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkData: "",
    };
  },
  props: {
    userCar: Object,
    carSpecs: Boolean,
  },
  methods: {
    checkbox() {
      console.log(this.checkData);
    },
  },
};
</script>

<style lang="scss">
.car-specs {
  display: flex;
  justify-content: flex-start;
  font-size: 10px;
  p {
    text-align: left;
    padding-left: 18px;
    padding-right: 18px;
    margin: 0 0 5px 0;
  }
  .v-application p {
    padding: 0;
    margin: 0;
  }
}
.checkbox-wrapper {
  display: flex;
  justify-content: center;
}
.checkmark {
  display: block;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 3px;
  position: relative;
  border: 1px solid grey;
  transition: background-color 0.5s;
  cursor: pointer;
}
.checkmark:hover {
  border: 1px solid black;
}
#check:checked + .checkmark {
  background-color: #f69e30;
}
.checkmark::after {
  content: "";
  position: absolute;
  width: 7px;
  height: 10px;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%) rotateZ(40deg);
  opacity: 0;
  transition: opacity 0.5s;
}
#check:checked + .checkmark::after {
  opacity: 1;
}
#check {
  opacity: 0;
}
</style>
