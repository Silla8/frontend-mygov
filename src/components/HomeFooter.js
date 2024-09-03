import logo from "../images/mygov_logo.png";

export default function HomeFooter() {
  return (
  
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center my-4 border-top pt-2">
        <p class="col-md-4 mb-0 text-muted">© 2024 SilloGic Solutions & Idda, Inc</p>

        <a
          href="https://my.gov.az/"
          class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <img
            className="logo"
            width="100"
            height="30"
            src={logo}
            alt="mygov logo"
          />
        </a>

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <a href="/home" class="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="/home" class="nav-link px-2 text-muted">
              About
            </a>
          </li>
          <li class="nav-item">
            <a href="/home" class="nav-link px-2 text-muted">
              Contacts
            </a>
          </li>
          <li class="nav-item">
            <a href="/home" class="nav-link px-2 text-muted">
              Address
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
