import store from "../store.js";
import House from "../Models/House.js";

const _SANDBOX_URL = "https://bcw-sandbox.herokuapp.com/api/houses/";
class HousesService {
  async getHouses() {
    let results = await fetch(_SANDBOX_URL);
    let data = await results.json();
    let houses = data.data.map(c => new House(c));
    houses.reverse();
    store.commit("houses", houses);
  }

  async createHouse(houseData) {
    let response = await fetch(_SANDBOX_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(houseData)
    });
    let data = await response.json();
    let newHouse = new House(data.data);
    store.State.houses.push(newHouse);
    store.commit("houses", store.State.houses);
  }

  async updateHouse(houseData) {
    let response = await fetch(_SANDBOX_URL + houseData._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(houseData)
    });
    let data = await response.json();
    let newHouse = new House(houseData);

    let i = store.State.houses.findIndex(c => c._id == newHouse._id);
    if (i != -1) {
      store.State.houses.splice(i, 1, newHouse);
      store.commit("houses", store.State.houses);
    }
  }
  async deleteHouse(id) {
    let response = await fetch(_SANDBOX_URL + id, {
      method: "DELETE"
    });
    let i = store.State.houses.findIndex(c => c._id == id);
    if (i != -1) {
      store.State.houses.splice(i, 1);
      store.commit("houses", store.State.houses);
    }
  }
}

const service = new HousesService();
export default service;
