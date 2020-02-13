export default class Car {
  constructor(data) {
    this._id = data._id;
    this.make = data.make;
    this.model = data.model;
    this.year = data.year;
    this.description = data.description;
    this.price = data.price;
    this.imgUrl = data.imgUrl;
  }

  get Template() {
    return /* html */ `
    <div class="col-12 col-md-4 col-lg-3" style="max-width: 100%">
        <div class="card" style="margin-top: 10px; margin-left: 20%;">
            <img src="${this.imgUrl}" class="card-img-top" alt="a car image">
            <div class="card-body">
                <div class="card-title">${this.make} - ${this.model}</div>
                <div class="card-subtitle">${this.price}</div>
                <p class="card-text">${this.description}</p>
            </div>
            <button class="btn btn-info" onclick="app.carsController.editCar('${this._id}')">Edit</button>
            <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this._id}')">Delete</button>
        </div>
     </div>
        `;
  }
}
