class footerWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer
      class="container-fluid p-5 bg-warning fw-bold text-center mt-5 shadow"
    >
      <div class="social-ico d-flex justify-content-center py-2">
        <a href="https://www.dicoding.com/users/3ramayana" target="_blank" class="px-2 hvr-wobble-vertical">
          <i class="fas fa-code fa-2x"></i> 
        </a>
        <a href="https://github.com/3ramayana" target="_blank" class="px-2 hvr-wobble-vertical">
          <i class="fab fa-github-alt fa-2x"></i>
        </a>
      </div>
      <small>
        Create with <i class="fas fa-heart text-danger"></i> for dicoding
        submission</small
      >
    </footer>
    `;
  }
}

customElements.define("footer-web", footerWeb);
