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
          background-color: #FFFFFF;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
          font-family: Inter, system-ui, sans-serif;
        }

        nav {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0F172A;
          text-decoration: none;
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
          transition: color 0.3s ease;
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
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background-color: #EAB308;
          transform: translateY(-2px);
        }

        .menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        .menu-icon {
          width: 24px;
          height: 24px;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #FFFFFF;
            flex-direction: column;
            align-items: flex-start;
            padding: 1.5rem 2rem;
            gap: 1.25rem;
            display: none;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          }

          .nav-links.open {
            display: flex;
          }

          .menu-button {
            display: block;
          }
        }
      </style>

      <nav role="navigation" aria-label="Menu principal">
        <a href="/" class="logo">EnergiaFuncional</a>

        <div class="nav-links" id="nav-links">
          <a href="#" class="nav-link">Início</a>
          <a href="#" class="nav-link">O Método</a>
          <a href="#" class="nav-link">Diagnóstico</a>
          <a href="#" class="nav-link">Para quem é</a>
          <a href="#" class="cta-button">Iniciar diagnóstico</a>
        </div>

        <button class="menu-button" aria-label="Abrir menu">
          <svg class="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>
    `;

    this.setupMenuToggle();
  }

  setupMenuToggle() {
    const button = this.shadowRoot.querySelector('.menu-button');
    const links = this.shadowRoot.querySelector('.nav-links');

    button.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
