import axios from 'axios';

class HttpService {
    constructor(){
        const instance = axios.create({
            baseURL:'http://localhost:3000/',
        });
        this.client = instance;
    }
    async getAll(){
        const { data } = await this.client.get('/api/cars');
        return data;
    }
    async addCar(car){ 
        await this.client.post('/api/cars', car);
    }

    async get () {
        const { carData } = await this.client.get('/api/cars/{id}');
        return carData;
    }
}

export default new HttpService();