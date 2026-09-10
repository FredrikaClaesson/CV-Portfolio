// =========================================================
// FREDRICA CLAESSON - CV & PORTFOLIO
// JavaScript
// =========================================================


// =========================
// 1. MOBILMENY
// =========================

// Hämtar menyknappen från HTML
const menuButton = document.querySelector(".menu-button");

// Hämtar navigationen från HTML
const mainNavigation = document.querySelector(".main-navigation");


// Kontrollerar att både knappen och navigationen finns på sidan
if (menuButton && mainNavigation) {

    // När användaren klickar på menyknappen
    menuButton.addEventListener("click", function () {

        // Växlar klassen "is-active" på menyknappen
        menuButton.classList.toggle("is-active");

        // Växlar klassen "is-open" på navigationen
        mainNavigation.classList.toggle("is-open");


        // Kontrollerar om menyn är öppen
        const menuIsOpen = mainNavigation.classList.contains("is-open");


        // Uppdaterar aria-expanded för bättre tillgänglighet
        menuButton.setAttribute("aria-expanded", menuIsOpen);


        // Ändrar knappens aria-label beroende på menyens läge
        if (menuIsOpen) {
            menuButton.setAttribute("aria-label", "Stäng meny");
        } else {
            menuButton.setAttribute("aria-label", "Öppna meny");
        }

    });

}


// =========================
// 2. STÄNG MENYN NÄR EN LÄNK KLICKAS
// =========================

// Hämtar alla länkar som finns i huvudnavigationen
const navigationLinks = document.querySelectorAll(
    ".main-navigation a"
);


// Går igenom alla länkar
navigationLinks.forEach(function (link) {

    // När användaren klickar på en navigationslänk
    link.addEventListener("click", function () {

        // Kontrollerar att menyknappen och navigationen finns
        if (menuButton && mainNavigation) {

            // Tar bort klassen som öppnar menyn
            mainNavigation.classList.remove("is-open");

            // Tar bort klassen som ändrar hamburgerikonen
            menuButton.classList.remove("is-active");

            // Sätter tillbaka aria-expanded till false
            menuButton.setAttribute("aria-expanded", "false");

            // Återställer knappens beskrivning
            menuButton.setAttribute("aria-label", "Öppna meny");

        }

    });

});


// =========================
// 3. STÄNG MOBILMENYN MED ESCAPE
// =========================

// Lyssnar efter tangenttryckningar på hela sidan
document.addEventListener("keydown", function (event) {

    // Kontrollerar om användaren trycker på Escape
    if (event.key === "Escape") {

        // Kontrollerar att elementen finns
        if (menuButton && mainNavigation) {

            // Stänger navigationen
            mainNavigation.classList.remove("is-open");

            // Återställer menyknappen
            menuButton.classList.remove("is-active");

            // Uppdaterar tillgänglighet
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Öppna meny");

        }

    }

});


// =========================
// 4. KONTAKTFORMULÄR
// =========================

// Hämtar kontaktformuläret
const contactForm = document.querySelector("#contact-form");

// Hämtar området där meddelandet ska visas
const formMessage = document.querySelector("#form-message");


// Kontrollerar att kontaktformuläret finns på aktuell sida
if (contactForm && formMessage) {

    // När användaren försöker skicka formuläret
    contactForm.addEventListener("submit", function (event) {

        // Hindrar webbläsaren från att ladda om sidan
        event.preventDefault();


        // Hämtar formulärets olika fält
        const nameInput = document.querySelector("#name");
        const emailInput = document.querySelector("#email");
        const subjectInput = document.querySelector("#subject");
        const messageInput = document.querySelector("#message");


        // Hämtar värdena och tar bort onödiga mellanslag
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();


        // Kontrollerar om något fält är tomt
        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            // Visar ett felmeddelande
            formMessage.textContent =
                "Vänligen fyll i alla fält innan du skickar formuläret.";

            return;
        }


        // Kontrollerar om e-postadressen ser rimlig ut
        if (!email.includes("@") || !email.includes(".")) {

            // Visar ett felmeddelande
            formMessage.textContent =
                "Kontrollera att du har skrivit in en giltig e-postadress.";

            return;
        }


        // Visar ett bekräftelsemeddelande
        formMessage.textContent =
            `Tack ${name}! Tyvärr kan jag inte ta emot några meddelanden via kontaktformuläret för närvarande.`;

        // Tömmer formuläret
        contactForm.reset();

    });

}


// =========================
// 5. ÅTERSTÄLL MENYN VID STOR SKÄRM
// =========================

// När webbläsarens storlek förändras
window.addEventListener("resize", function () {

    // Kontrollerar om fönstret är minst 950 pixlar brett
    if (window.innerWidth >= 950) {

        // Kontrollerar att elementen finns
        if (menuButton && mainNavigation) {

            // Tar bort mobilmenyns öppna läge
            mainNavigation.classList.remove("is-open");

            // Tar bort aktiv klass från menyknappen
            menuButton.classList.remove("is-active");

            // Återställer aria-expanded
            menuButton.setAttribute("aria-expanded", "false");

            // Återställer knappens aria-label
            menuButton.setAttribute("aria-label", "Öppna meny");

        }

    }

});
