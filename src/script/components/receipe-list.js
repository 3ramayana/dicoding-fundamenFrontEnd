import "./receipe-item.js";
import noImage from "../../assets/images/no-image-post.png";
import { Modal } from "bootstrap";

import DataSource from "../data/data-source.js";

class ReceipeList extends HTMLElement {
  set receipes(items) {
    this._items = items;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this.className = "row justify-content-start";
    this._items.forEach((item) => {
      const receipeItemElement = document.createElement("receipe-item");
      receipeItemElement.receipe = item;
      this.appendChild(receipeItemElement);

      receipeItemElement.addEventListener("click", () => {
        // console.log(item.key);
        loadingItem();
        const keyResep = item.key;
        getDetailResep(keyResep);
      });
    });

    const titleTag = document.getElementById("title-tag");
    const descTag = document.getElementById("desc-tag");
    const imageTag = document.getElementById("image-tag");
    const authorTag = document.getElementById("author-tag");
    const timeTag = document.getElementById("time-tag");
    const bahanTag = document.getElementById("bahan-tag");
    const stepTag = document.getElementById("step-tag");
    var myModal = new Modal(document.getElementById("staticBackdrop"), {
      keyboard: false,
    });

    const getDetailResep = async (key) => {
      try {
        const result = await DataSource.detailResep(key);
        renderDetailResep(result);
      } catch (message) {
        this.renderError(message);
      }
    };

    const renderDetailResep = (item) => {
      resetModal();

      titleTag.innerHTML = item.title;
      descTag.innerHTML = item.desc;

      if (item.thumb != null) {
        imageTag.setAttribute("src", item.thumb);
      }

      authorTag.innerHTML = item.author.user;
      timeTag.innerHTML = item.author.datePublished;

      item.ingredient.forEach((bahan) => {
        $("#bahan-tag").append(`<li class="list-group-item">
        <i class="fas fa-pepper-hot me-2 text-danger"></i>
        ${bahan}
      </li>`);
      });

      let stepNum = 1;
      item.step.forEach((step) => {
        $("#step-tag").append(`
        <li class="row d-flex align-items-center list-group-item">
          <div class="col-auto">
            <span class="fs-3 step text-success">${stepNum}</span>
          </div>
          <div class="col">${step.slice(1, -1)}</div>
        </li>
        `);

        stepNum += 1;
      });

      myModal.toggle();
      showItem();
    };

    const resetModal = () => {
      titleTag.innerHTML = "";
      descTag.innerHTML = "";
      authorTag.innerHTML = "";
      imageTag.setAttribute("src", noImage);
      timeTag.innerHTML = "";
      bahanTag.innerHTML = "";
      stepTag.innerHTML = "";
    };

    // loading item
    const loadingItem = () => {
      const spinner = document.querySelector("#spinner");
      spinner.classList.remove("loading-inactive");
      // receipeListElement.classList.add("loading-inactive");
    };

    const showItem = () => {
      const spinner = document.querySelector("#spinner");
      spinner.classList.add("loading-inactive");
      // receipeListElement.classList.remove("loading-inactive");
    };
  }

  renderError(message) {
    this.innerHTML = "";
    this.innerHTML += `<h2 class="text-secondary text-center">${message}</h2>`;
  }
}

customElements.define("receipe-list", ReceipeList);
