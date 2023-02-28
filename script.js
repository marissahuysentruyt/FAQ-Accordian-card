const getAccordionButtons = () => {
    const accordion = document.querySelector(".faq-accordion");
    return accordion.querySelectorAll("button");
};

const findCollapsableHeaders = () => {
    const accordion = document.querySelector(".faq-accordion");
    return accordion.querySelectorAll("h3");
};

const collapseAll = () => {
    findCollapsableHeaders().forEach((header) => {
        header.classList.add("collapsed");
    });
    getAccordionButtons().forEach((button) => {
        button.setAttribute("aria-expanded", "false");
    })
};

const handleAccordionClick = (e) => {
    const panelWasClosed = e.target.getAttribute("aria-expanded") === "false";

    collapseAll();

    if(panelWasClosed) {
        e.target.setAttribute("aria-expanded", true);
        e.target.parentElement.classList.remove("collapsed");
    }
};

const addButtonListeners = () => {
    getAccordionButtons().forEach((button) => {
        button.addEventListener("click", handleAccordionClick);
    });
};

addButtonListeners();