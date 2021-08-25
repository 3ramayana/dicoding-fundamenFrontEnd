class DataSource {
  static getResep() {
    return fetch(
      "https://cors.bridged.cc/https://masak-apa.tomorisakura.vercel.app/api/recipes"
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject("Tidak ada data");
        }
      });
  }

  static searchResep(keyword) {
    return fetch(
      `https://cors.bridged.cc/https://masak-apa.tomorisakura.vercel.app/api/search/?q=${keyword}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} tidak ditemukan`);
        }
      });
  }

  static detailResep(key) {
    return fetch(
      `https://cors.bridged.cc/https://masak-apa.tomorisakura.vercel.app/api/recipe/${key}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${key} tidak ditemukan`);
        }
      });
  }

  static getCategory() {
    return fetch(
      "https://cors.bridged.cc/https://masak-apa.tomorisakura.vercel.app/api/categorys/recipes"
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject("Tidak ada data");
        }
      });
  }

  static filterByCategory(category) {
    return fetch(
      `https://cors.bridged.cc/https://masak-apa.tomorisakura.vercel.app/api/categorys/recipes/${category}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject("Tidak ada data");
        }
      });
  }
}

export default DataSource;
