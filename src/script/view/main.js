import "../components/receipe-list.js";
import "../components/search-bar.js";
import "../components/category-container";

import DataSource from "../data/data-source";

const main = () => {
  const receipeListElement = document.querySelector("receipe-list");
  const searchElement = document.querySelector("search-bar");
  const categoryContainerElement = document.querySelector("category-container");
  const clearFilter = document.querySelector("#clear-filter");

  const getResep = async () => {
    try {
      const result = await DataSource.getResep();
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const searchResep = async (keyword) => {
    try {
      const result = await DataSource.searchResep(keyword);
      if (result.length === 0) {
        fallbackResult("Yah, resep yang dicari tidak ada ...😔");
      } else {
        renderResult(result);
      }
    } catch (message) {
      fallbackResult(message);
    }
  };

  const onButtonSearchClicked = (e) => {
    e.preventDefault();
    loadingItem();
    resetCategory();
    const inputKeyword = document.querySelector("#inputKeyword");
    const formReset = document.querySelector("#searchSubmit");
    searchResep(inputKeyword.value);
    formReset.reset();
  };

  const renderResult = (results) => {
    showItem();
    receipeListElement.receipes = results;
  };

  const fallbackResult = (message) => {
    showItem();
    receipeListElement.renderError(message);
  };

  const filterByCategory = async (category) => {
    try {
      const result = await DataSource.filterByCategory(category);
      if (result.length === 0) {
        fallbackResult("Yah, resep yang dicari tidak ada ...😔");
      } else {
        renderResult(result);
      }
    } catch (message) {
      fallbackResult(message);
    }
  };

  const displayCategory = async () => {
    try {
      const result = await DataSource.getCategory();
      categoryContainerElement.categories = result;

      // filter by Category
      const categoryElem = document.querySelectorAll(".btn-category");
      categoryElem.forEach((item) => {
        item.addEventListener("click", () => {
          let category = item.getAttribute("id");
          loadingItem();

          // tambahan fix API
          if (category === "dessert") {
            category = "resep-dessert";
          }

          if (item.classList.contains("active")) {
            resetCategory();
            getResep();
          } else {
            resetCategory();
            filterByCategory(category);
            item.classList.add("active");
          }
        });
      });
    } catch (message) {
      categoryContainerElement.renderError(message);
    }
  };

  // const getResepKey = () => {
  //   const receipeItemElem = document.querySelectorAll(".card-receipe");
  // };

  // onLoad
  const onLoad = async () => {
    await displayCategory();
    await getResep();
    loadingActive();
  };
  onLoad();

  // search Resep
  searchElement.submitEvent = onButtonSearchClicked;

  // reset category
  const resetCategory = () => {
    const categoryElem = document.querySelectorAll(".btn-category");
    categoryElem.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });
  };

  // loading page active
  const loadingActive = () => {
    const loadingElem = document.querySelector(".loading");
    loadingElem.classList.add("loading-inactive");
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

  // reset button
  clearFilter.addEventListener("click", () => {
    resetCategory();
    getResep();
  });
};
export default main;
