class receipeDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set detailResep(detail) {
    this._detail = detail;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div
      class="modal fade receipe-detail"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row info-resep mb-5">
                <div class="col-lg-6 col-md-5 col-sm-12 my-3">
                  <img
                    id="image-tag"
                    src=""
                    alt="ilustrasi"
                    class="img-fluid rounded shadow"
                    data-aos="zoom-in-up" data-aos-duration="1000" data-aos-anchor=".modal"
                  />
                </div>
                <div class="col-lg-6 col-md-7 col-sm-12">
                  <h5 id="title-tag" class="title text-success"></h5>
                  <hr />
                  <p id="desc-tag"></p>
                  <div class="author my-3 d-flex">
                    <div class="mx-3 bg-light rounded-pill p-1 px-4 shadow-sm">
                      <i class="fas fa-user-edit me-2"></i>
                      <p id="author-tag" class="d-inline"></p>
                    </div>
                    <div class="mx-3 bg-light rounded-pill p-1 px-4 shadow-sm">
                      <i class="far fa-calendar-alt me-2"></i>
                      <p id="time-tag" class="d-inline"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center detail-resep">
                <div class="col-lg-6 col-md-5 col-sm-12">
                  <div class="card text-dark bg-light mb-3">
                    <div class="card-header bg-warning">
                      <i class="fas fa-shopping-basket"></i>
                      Bahan-bahan
                    </div>
                    <div class="card-body">
                      <ul id="bahan-tag" class="list-group list-group-flush">
                                        
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 col-md-7 col-sm-12">
                  <div class="card border-light mb-3">
                    <div class="card-header">
                      <i class="fas fa-tasks"></i>
                      Langkah-langkah
                    </div>
                    <div class="card-body">
                      <ul id="step-tag" class="list-group list-group-flush">
                        
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define("receipe-detail", receipeDetail);
