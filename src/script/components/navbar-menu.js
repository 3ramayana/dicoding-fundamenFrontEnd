import Logo from "../../assets/images/masakapahariini-logo.png";

class NavbarMenu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `    
    <nav class="navbar navbar-expand-md navbar-light bg-warning shadow">
      <div class="container px-5">
        <a class="navbar-brand" href="#">
          <img src="${Logo}" width="84" class="d-inline-block align-top position-absolute" alt="logo">
          <p class="opacity-0">Bootstrap</p>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Resep</a>
            <a class="nav-link" href="#">Artikel</a>
            <a class="nav-link" href="#">Produk</a>
            <a class="nav-link" href="#">Favorite</a>
          </div>
        </div>
      </div>
    </nav>
    `;
  }
}

customElements.define("navbar-menu", NavbarMenu);
