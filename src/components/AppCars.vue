.<template>
  <b-container class="d-flex flex-column">
    <b-container>
      <b-row>
        <b-col>Model</b-col> |
        <b-col>Brand</b-col> |
        <b-col>Year of Production</b-col> |
        <b-col>Max Speed</b-col>
      </b-row>
    </b-container>
    <b-card class="d-flex flex-wrap">
      <b-card-body class="d-flex justify-content-around" v-for="car in cars" :key="car.id">
        <span>{{ car.model }}</span> - <span>{{ car.brand }}</span> - <span>{{ car.year }}</span> -
        <span>{{ car.maxSpeed }}</span> 
        <b-button variant="danger" @click.prevent="Edit">Edit</b-button>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
import HTTPService from "../services/Cars.js";
export default {
  data() {
    return {
      cars: [],
    };
  },
  methods: {
    Edit(){
      this.$router.push({path: '/edit/:id'})
    }
  },
  async created() {
    this.cars = await HTTPService.getAll();
  },
};
</script>

<style scoped>
</style>