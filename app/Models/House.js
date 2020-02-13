export default class House {
  constructor(data) {
    this._id = data._id;
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
    this.imgUrl = data.imgUrl;
    this.levels = data.levels;
    this.year = data.year;
    this.price = data.price;
    this.description = data.description;
  }

  get houseTemplate() {
    return /* html */ `
    <div class="col-12 col-md-4 col-lg-3" style="max-width: 100%">
    <div class="card" style="margin-top: 10px">
        <div class="card">
            <img src="${this.imgUrl}" class="card-img-top" alt="a house image">
            <div class="card-body">
                <div class="card-title">Bedrooms: ${this.bedrooms} - Bathrooms: ${this.bathrooms}</div>
                <div class="card-subtitle">Price: $${this.price}</div>
                <div class="card-subtitle">Levels: ${this.levels}</div>
                <div class="card-subtitle">Year: ${this.year}</div>
                <p class="card-text">Description: ${this.description}</p>
            </div>
            <button class="btn btn-info" onclick="app.housesController.editHouse('${this._id}')">Edit</button>
            <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this._id}')">Delete</button>
        </div>
     </div>
     </div>
        `;
  }
}
