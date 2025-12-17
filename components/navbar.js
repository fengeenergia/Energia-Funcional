class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .logo img {
          height: 54px;
          width: auto;
          display: block;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          color: #334155;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-link:hover {
          color: #1E40AF;
        }

        .cta-button {
          background-color: #F59E0B;
          color: #0F172A;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
        }

        .cta-button:hover {
          background-color: #EAB308;
          transform: translateY(-2px);
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-menu-button {
            display: block;
          }
        }
      </style>

      <div class="navbar-container">
        <a href="#" class="logo">
          <img
            src="images/logo-energiafuncional.png"
            >
        </a>

        <div class="nav-links">
          <a href="#" class="nav-link">Início</a>
          <a href="#metodo" class="nav-link">O Método</a>
          <a href="#diagnostico" class="nav-link">Diagnóstico</a>
          <a href="#para-quem" class="nav-link">Para Quem É</a>
          <a href="#diagnostico" class="cta-button">Iniciar Diagnóstico</a>
        </div>

        <button class="mobile-menu-button" aria-label="Abrir menu">
          <i data-feather="menu"></i>
        </button>
      </div>
    `;

    if (window.feather) {
      feather.replace();
    }
  }
}

customElements.define('custom-navbar', CustomNavbar);
