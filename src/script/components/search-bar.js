class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set submitEvent(event) {
    this._submitEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `
    <div class="col-lg-6 col-md-8 col-sm-12">
      <form id="searchSubmit">
        <div class="input-group mb-3 search-container">
          <input
            type="search"
            class="form-control"
            placeholder="Telusuri disini..."
            id="inputKeyword"
            autocomplete="off"
            required
          />
          <button
            class="btn btn-warning px-4"
            type="submit"
            id="searchButtonElement"
          >
          <i class="fas fa-search"></i>
          </button>
        </div>
      </form>
    </div>
    `;

    this.className = "row justify-content-center";

    this.querySelector("#searchSubmit").addEventListener(
      "submit",
      this._submitEvent
    );
  }
}

customElements.define("search-bar", SearchBar);
