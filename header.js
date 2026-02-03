// Konfiguracja linków w menu - edytujesz tylko TU!
const navLinks = [
    { name: "Home page", url: "index.html" },
    { name: "Registration", url: "registration.html" },
    { name: "Participants", url: "participants.html" },
    { name: "Programme & Abstracts", url: "program.html" },
    { name: "Scientific Committee", url: "scientific.html" },
    { name: "Organizing Committee", url: "organization.html" }
];

function injectHeader() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    
    const headerHTML = `
    <nav class="navbar">
        <a href="index.html" class="nav-logo">
            <img src="logo-impan.png" alt="IMPAN"> XIV FPDE
        </a>
        <div class="nav-links">
            ${navLinks.map(link => `
                <a href="${link.url}" class="${currentPage === link.url ? 'active-link' : ''}">
                    ${link.name}
                </a>
            `).join('')}
        </div>
    </nav>

    <header class="header-banner">
        <div class="header-container">
            <div class="logos">
                    <img src="logo-impan.png" alt="IMPAN Logo" style="height: clamp(70px, 11vw, 100px); width: auto;">
                    <img src="banachcenter.jpg" alt="Banach Center" style="height: clamp(70px, 11vw, 110px); width: auto;">
            </div>
            <div class="header-text">
                <h1>XIV Forum of Partial Differential Equations</h1>
                <p>Institute of Mathematics of Polish Academy of Sciences,</p>
                <p>Poland, 13 - 19 September 2026</p>
            </div>
        </div>
    </header>
    `;

    document.getElementById('header-placeholder').innerHTML = headerHTML;
}

// Uruchom po załadowaniu strony
document.addEventListener('DOMContentLoaded', injectHeader);
