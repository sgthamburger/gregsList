import HousesService from "../Services/HousesService.js";
import store from "../store.js";

//Private
function _draw() {
  let houses = store.State.houses;
  let template = "";
  houses.forEach(house => (template += house.houseTemplate));
  document.getElementById("houses").innerHTML = template;
  console.log(houses);
}

//Public
export default class HousesController {
  constructor() {
    store.subscribe("houses", _draw);
  }

  async getHouses() {
    try {
      await HousesService.getHouses();
    } catch (error) {
      console.log(error);
    }
    let x = document.getElementById("house-form");
    if (x.style.display == "none") {
   x.style.display = "block";
    } else {
   console.log("trying to show/hide house form");   
  } 
  let c = document.getElementById("houses");
    if (c.style.display == "none") {
   c.style.display = "block";
    } else {
   console.log("trying to show/hide houses");   
  } 
  let h = document.getElementById("car-form");
    if (h.style.display == "block") {
   h.style.display = "none";
    } else {
   console.log("trying to show/hide house form");   
  } 
  let y = document.getElementById("cars");
    if (y.style.display == "block") {
   y.style.display = "none";
    } else {
   console.log("trying to show/hide card-group");   
  } 
  }

  async createHouse() {
    try {
      event.preventDefault();
      let form = event.target;
      let houseData = {
        // @ts-ignore
        bedrooms: form.bedrooms.value,
        // @ts-ignore
        bathrooms: form.bathrooms.value,
        // @ts-ignore
        levels: form.levels.value,
        // @ts-ignore
        year: form.year.value,
        // @ts-ignore
        price: form.price.value,
        // @ts-ignore
        description: form.description.value,
        // @ts-ignore
        imgUrl: form.imgUrl.value,
      };

      // @ts-ignore
      let id = form._id.value;
      if (id) {
        houseData._id = id;
        await HousesService.updateHouse(houseData);
      } else {
        await HousesService.createHouse(houseData);
      }
      // @ts-ignore
      form.reset();
    } catch (error) {
      console.log(error);
    }
  }
  async editHouse(id) {
    let house = store.State.houses.find(c => c._id == id);
    let form = document.getElementById("house-form");
    // @ts-ignore
    form.bedrooms.value = house.bedrooms;
    // @ts-ignore
    form.bathrooms.value = house.bathrooms;    
    // @ts-ignore
    form.levels.value = house.levels;
    // @ts-ignore
    form.year.value = house.year;
    // @ts-ignore
    form.price.value = house.price;
    // @ts-ignore
    form.description.value = house.description;
    // @ts-ignore
    form.imgUrl.value = house.imgUrl;
    // @ts-ignore
    form._id.value = house._id;
    { 
      window.scrollTo(0, 140); 
      console.log("trying to scroll to top");
      
      
  } 
  }

  async updateHouse() {
    try {
      // @ts-ignore
      await HousesService.editHouse();
    } catch (error) {
      console.log(error);
    }
  }

  async deleteHouse(id) {
    try {
      await HousesService.deleteHouse(id);
    } catch (error) {
      console.log(error);
    }
  }
}
