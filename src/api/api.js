import axios from "axios";
import api from "../config/env";

class GetApi {
    static async getCharacters() {
        const response = await axios.get(`${api}/?status=alive`);
        return response.data.results;
    }

    static async getCharacterByName(name) {
        const response = await axios.get(`${api}/?name=${name}&status=alive`);
        return response.data.results;
    }
}

export default GetApi;
