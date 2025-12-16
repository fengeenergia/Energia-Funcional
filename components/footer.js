class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #0F172A;
          color: white;
          padding: 3rem 2rem;
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
          display: block;
        }
        
        .footer-tagline {
          color: #94A3B8;
          margin-bottom: 1.5rem;
        }
        
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .footer-link {
          color: #E2E8F0;
          text-decoration: none;
          transition: color 0.3s;
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
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      
      <div class="footer-container">
        <div>
          <a href="#" class="footer-logo">EnergiaFuncional</a>
          <p class="footer-tagline">Método prático para adultos funcionais cansados</p>
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">Links</h3>
          <div class="footer-links">
            <a href="#" class="footer-link">Início</a>
            <a href="#metodo" class="footer-link">O Método</a>
            <a href="#diagnostico" class="footer-link">Diagnóstico</a>
          </div>
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">Legal</h3>
          <div class="footer-links">
            <a href="#" class="footer-link">Termos</a>
            <a href="#" class="footer-link">Privacidade</a>
            <a href="#contato" class="footer-link">Contato</a>
          </div>
        </div>
      </div>
      
      <div class="copyright">
        &copy; 2025 EnergiaFuncional. Todos os direitos reservados.
      </div>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
