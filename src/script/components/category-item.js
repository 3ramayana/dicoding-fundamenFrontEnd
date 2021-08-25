class CategoryItem extends HTMLElement {
  set category(category) {
    this._category = category;
    this.render();
  }

  render() {
    this.innerHTML = `
     <div data-aos="zoom-in" data-aos-duration="500">
     <a
        type="button"
        id="${this._category.key}"
        class="btn btn-sm btn-warning me-3 mt-3 rounded-pill px-3 py-2 btn-category"
      >
        ${this._category.category}
      </a>
     </div>
    `;

    let delay = 0;
    $("[data-aos]").each(function () {
      if ($(this).is(":visible") == true) {
        delay = delay + 400;
        $(this).attr("data-aos-delay", delay);
      }
    });
  }
}

customElements.define("category-item", CategoryItem);
