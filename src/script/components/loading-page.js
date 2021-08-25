class loadingPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="loading d-flex justify-content-center">
          <h1>Loading...</h1>
          <div id="cooking">
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div id="area">
              <div id="sides">
                <div id="pan"></div>
                <div id="handle"></div>
              </div>
              <div id="pancake">
                <div id="pastry"></div>
              </div>
            </div>
          </div>
        </div>
    `;
  }
}

customElements.define("loading-page", loadingPage);
