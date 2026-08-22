const pages = {
    home: {
        title: "Farid's Portfolio",
    },
    projects: {
        title: "Projects - Farid's Portfolio",
    },
    contact: {
        title: "Contact - Farid's Portfolio",
    },
};

const sections = document.querySelectorAll("section[data-page]");
const navLinks = document.querySelectorAll("nav a[data-page]");

function showPage(page) {
    const target = pages[page] ? page : "home";

    sections.forEach((section) => {
        section.hidden = section.dataset.page !== target;
    });

    navLinks.forEach((link) => {
        link.setAttribute("aria-current", link.dataset.page === target ? "page" : "false");
    });

    document.title = pages[target].title;
}

function getPageFromHash() {
    const hash = window.location.hash.slice(1);
    return pages[hash] ? hash : "home";
}

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const page = link.dataset.page;
        history.pushState({ page }, "", `#${page}`);
        showPage(page);
    });
});

window.addEventListener("popstate", () => {
    showPage(getPageFromHash());
});

window.addEventListener("hashchange", () => {
    showPage(getPageFromHash());
});

if (!window.location.hash) {
    history.replaceState({ page: "home" }, "", "#home");
}

showPage(getPageFromHash());
