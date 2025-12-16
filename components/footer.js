class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });

    const year = new Date().getFullYear();

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #0F172A;
          color: #E5E7EB;
          padding: 3rem 2rem;
          font-family: Inter, system-ui, sans-serif;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #FFFFFF;
          text-decoration: none;
          display: inline-block;
        }

        .footer-tagline {
          color: #94A3B8;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .footer-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #FFFFFF;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-link {
          color: #CBD5E1;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #F59E0B;
        }

        .copyright {
          margin-top: 3rem;
          text-align: center;
          color: #64748B;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          :host {
            padding: 2.5rem 1.5rem;
          }
        }
      </style>

      <footer>
        <div class="footer-container">
          <div>
            <a href="/" class="footer-logo">EnergiaFuncional</a>
            <p class="footer-tagline">
              Método prático para adultos funcionais cansados.
            </p>
          </div>

          <div>
            <h3 class="footer-title">Navegação</h3>
            <div class="footer-links">
              <a href="#" class="footer-link">Início</a>
              <a href="#" class="footer-link">O método</a>
              <a href="#" class="footer-link">Diagnóstico</a>
            </div>
          </div>

          <div>
            <h3 class="footer-title">Legal</h3>
            <div class="footer-links">
              <a href="#" class="footer-link">Termos de uso</a>
              <a href="#" class="footer-link">Política de privacidade</a>
              <a href="#" class="footer-link">Contato</a>
            </div>
          </div>
        </div>

        <div class="copyright">
          &copy; ${year} EnergiaFuncional. Todos os direitos reservados.
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
