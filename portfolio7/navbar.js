document.addEventListener('DOMContentLoaded', () => {
  const currentPage = document.body.dataset.page || '';

  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  navbar.innerHTML = `
    <ul class="navbar-menu">
      <li><a href="/index.html" ${currentPage === 'home' ? 'class="active"' : ''}>Accueil</a></li>
      <li><a href="/presentation.html" ${currentPage === 'presentation' ? 'class="active"' : ''}>Présentation</a></li>
      <li class="has-dropdown">
        <a href="/competences.html" ${currentPage === 'competences' ? 'class="active"' : ''}>Compétences</a>
        <div class="dropdown">
          <div class="has-subdropdown">
            <span class="dropdown-label-arrow">Techniques ›</span>
            <div class="subdropdown">
              <a href="/competences/tech-1.html">Git &amp; Versioning</a>
              <a href="/competences/tech-2.html">Virtualisation &amp; Conteneurisation</a>
              <a href="/competences/tech-3.html">Administration Réseau</a>
              <a href="/competences/tech-4.html">Configuration Système</a>
              <a href="/competences/tech-5.html">Tooling &amp; Scripting</a>
            </div>
          </div>
          <div class="has-subdropdown">
            <span class="dropdown-label-arrow">Humaines ›</span>
            <div class="subdropdown">
              <a href="/competences/hum-1.html">Gestion de projet</a>
              <a href="/competences/hum-2.html">Esprit d'analyse</a>
              <a href="/competences/hum-3.html">Autonomie</a>
              <a href="/competences/hum-4.html">Faire preuve d'initiative</a>
              <a href="/competences/hum-5.html">Persévérance &amp; Engagement</a>
            </div>
          </div>
        </div>
      </li>
      <li class="has-dropdown">
        <a href="/realisations.html" ${currentPage === 'realisations' ? 'class="active"' : ''}>Réalisations</a>
        <div class="dropdown">
          <a href="/realisations/real-1.html">Infrastructure sécurisée (Valesys)</a>
          <a href="/realisations/real-2.html">Sonde IDS conteneurisée</a>
          <a href="/realisations/real-3.html">Laboratoire Proxmox</a>
          <a href="/realisations/real-4.html">Scripts de durcissement</a>
          <a href="/realisations/real-5.html">Portfolio auto-hébergé</a>
        </div>
      </li>
      <li><a href="/parcours.html" ${currentPage === 'parcours' ? 'class="active"' : ''}>Parcours</a></li>
      <li><a href="/contact.html" ${currentPage === 'contact' ? 'class="active"' : ''}>Contact</a></li>
    </ul>
    <div class="navbar-logo">
      <a href="https://www.esiea.fr" target="_blank" title="ESIEA — École du monde numérique">
        <img src="/esiea-logo.png" alt="ESIEA" class="logo-img" />
      </a>
    </div>
  `;
  document.body.prepend(navbar);

  const footer = document.createElement('footer');
  footer.innerHTML = `
    <span>Nicolas Lages — Portfolio</span>
    <span>Apprenti Cybersécurité &amp; Réseaux</span>
    <a href="/contact.html">Contact</a>
  `;
  document.body.append(footer);

  // Shrink navbar on scroll
  const nav = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
      document.body.style.paddingTop = '54px';
    } else {
      nav.classList.remove('scrolled');
      document.body.style.paddingTop = 'var(--nav-h)';
    }
  }, { passive: true });
});
