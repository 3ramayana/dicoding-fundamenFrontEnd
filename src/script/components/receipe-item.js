// import "../components/receipe-detail";
// import DataSource from "../data/data-source";

class ReceipeItem extends HTMLElement {
  set receipe(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div
        class="card shadow-sm position-relative hvr-float-shadow card-receipe"
        data-aos="zoom-in-up" data-aos-duration="1000" data-aos-anchor=".btn-category"
        data-id="${this._item.key}"
      >
        <i class="fas fa-heart tap-like fa-2x opacity-75"></i>
        <img
          src="${this._item.thumb}"
          class="card-img-top"
          alt="${this._item.key}"
        />
        <div
          class="card-footer d-flex justify-content-between bg-warning text-black"
        >
          <small class="text-center text-white">
            <i class="far fa-clock fs-6"></i>
            <br />
            ${this._item.times}
          </small>
          <small class="text-center text-white">
            <i class="fas fa-user-friends fs-6"></i>
            <br />
            ${this._item.portion || this._item.serving}
          </small>
          <small class="text-center text-white">
            <i class="fas fa-concierge-bell fs-6"></i>
            <br />
            ${this._item.dificulty || this._item.difficulty}
          </small>
        </div>
        <div class="card-body">
          <h5 class="card-title text-success">${this._item.title}</h5>
        </div>
      </div>
    `;
    this.className = "col-lg-3 col-md-6 mb-5";
  }
}

customElements.define("receipe-item", ReceipeItem);
