<template>
  <b-container>
    <b-form @submit.prevent="addCar">
      <b-form-input
        type="text"
        id="brand"
        v-model="newCar.brand"
        placeholder="Car brand"
        minlength="2"
        required
      ></b-form-input>
      <b-form-input
        type="text"
        id="model"
        v-model="newCar.model"
        placeholder="Car model"
        minlength="2"
        required
      ></b-form-input>
      <b-form-input
        type="number"
        id="year"
        v-model="newCar.year"
        placeholder="Year of production"
        min="1990"
        max="2018"
        required
      ></b-form-input>
      <b-form-input
        type="number"
        id="maxSpeed"
        v-model="newCar.maxSpeed"
        placeholder="Car Speed"
      ></b-form-input>
      <b-form-input
        type="text"
        id="numberOfDoors"
        v-model="newCar.numberOfDoors"
        placeholder="Number of doors"
        required
      ></b-form-input>
      <b-form-checkbox
        id="isAutomatic"
        v-model="newCar.isAutomatic"
        name="isAutomatic"
        value="Automatic"
        unchecked-value="Manual"
        checked=""
      >
        Automatic transmission
      </b-form-checkbox>
      <b-form-group label="Type of enginge" v-slot="{ EngineFuel }">
        <b-form-radio
          v-model="newCar.engine"
          :aria-describedby="EngineFuel"
          name="fuelType"
          value="diesel"
          checked
          required
          >Diesel</b-form-radio
        >
        <b-form-radio
          v-model="newCar.engine"
          :aria-describedby="EngineFuel"
          name="fuelType"
          value="petrol"
          >Petrol</b-form-radio
        >
        <b-form-radio
          v-model="newCar.engine"
          :aria-describedby="EngineFuel"
          name="fuelType"
          value="electric"
          checked=""
          >Electric</b-form-radio
        >
        <b-form-radio
          v-model="newCar.engine"
          :aria-describedby="EngineFuel"
          name="fuelType"
          value="hybrid"
          >Hybrid</b-form-radio
        >
      </b-form-group>
      <div class="d-flex justify-content-center">
        <button class="btn btn-primary mr-3">Add a car</button>
        <button @click.prevent="resetForm" class="btn btn-primary">Reset Form</button>
      </div>
    </b-form>
  </b-container>
</template>

<script>
import HTTPService from "../services/Cars.js";
export default {
  data() {
    return {
      newCar: {isAutomatic: 'false'},
    };
  },
  methods: {
    async addCar() {
      await HTTPService.addCar(this.newCar);
      this.$router.push({ path: "/cars"});
    },
    resetForm() {
        let self = this; 
        Object.keys(this.newCar).forEach((key) => self.newCar[key] = '');
      }
  },
};
</script>

<style>
</style>