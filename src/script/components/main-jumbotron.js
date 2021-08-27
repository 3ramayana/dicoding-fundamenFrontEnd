import ChefMom from "../../assets/images/chef-mom.png";

class MainJumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div data-aos="zoom-in-down">
      <div class="container">
        <div class="px-5 pt-5 pb-0 m-5 text-white jumbotron">
          <div class="row">
            <div class="col-md-7 col-sm-12 pb-4">
              <h2 class="">Mau ide menu mingguan,<br>promo dan tips masak ?</h2>
              <button class="btn btn-danger rounded-pill" type="button">
                <i class="fas fa-sign-in-alt"></i>
                Daftar Sekarang
              </button>
            </div>
            <img src="${ChefMom}" alt="chef mom">          
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define("main-jumbotron", MainJumbotron);
