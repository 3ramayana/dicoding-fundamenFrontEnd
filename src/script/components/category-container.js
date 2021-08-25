import "./category-item.js";

class CategoryContainer extends HTMLElement {
  set categories(categories) {
    this._categories = categories;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this.className = "col d-flex flex-wrap";
    this._categories.forEach((category) => {
      const categoryItemElement = document.createElement("category-item");
      categoryItemElement.category = category;
      this.appendChild(categoryItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = "";
    this.innerHTML += `<small class="text-secondary text-center">${message}</small>`;
  }
}

customElements.define("category-container", CategoryContainer);
