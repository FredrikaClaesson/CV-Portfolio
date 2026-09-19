// =========================================================
// FREDRICA CLAESSON - CV & PORTFOLIO
// JavaScript
// =========================================================


// =========================
// 1. MOBILMENY
// =========================

// Hämtar menyknappen och huvudnavigationen
const menuButton = document.querySelector(".menu-button");
const mainNavigation = document.querySelector(".main-navigation");


// Funktion som stänger mobilmenyn
function closeMenu() {

    // Avslutar funktionen om elementen inte finns på sidan
    if (!menuButton || !mainNavigation) {
        return;
    }

    // Stänger navigationen
    mainNavigation.classList.remove("is-open");

    // Återställer hamburgerikonen
    menuButton.classList.remove("is-active");

    // Uppdaterar tillgänglighetsattribut
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Öppna meny");
}


// Kontrollerar att menyknappen och navigationen finns
if (menuButton && mainNavigation) {

    // Öppnar eller stänger menyn när användaren klickar
    menuButton.addEventListener("click", function () {

        // Växlar navigationens öppna läge
        mainNavigation.classList.toggle("is-open");

        // Växlar hamburgerikonens utseende
        menuButton.classList.toggle("is-active");


        // Kontrollerar om menyn är öppen
        const menuIsOpen =
            mainNavigation.classList.contains("is-open");


        // Uppdaterar aria-expanded
        menuButton.setAttribute(
            "aria-expanded",
            String(menuIsOpen)
        );


        // Uppdaterar knappens beskrivning
        if (menuIsOpen) {

            menuButton.setAttribute(
                "aria-label",
                "Stäng meny"
            );

        } else {

            menuButton.setAttribute(
                "aria-label",
                "Öppna meny"
            );

        }

    });

}


// =========================
// 2. STÄNG MENYN NÄR EN LÄNK KLICKAS
// =========================

// Hämtar alla länkar i huvudnavigationen
const navigationLinks =
    document.querySelectorAll(".main-navigation a");


// Går igenom alla navigationslänkar
navigationLinks.forEach(function (link) {

    // Stänger mobilmenyn när en länk klickas
    link.addEventListener("click", closeMenu);

});


// =========================
// 3. STÄNG MOBILMENYN MED ESCAPE
// =========================

// Lyssnar efter tangenttryckningar på sidan
document.addEventListener("keydown", function (event) {

    // Stänger menyn om användaren trycker på Escape
    if (event.key === "Escape") {

        closeMenu();

        // Flyttar tillbaka fokus till menyknappen
        if (menuButton) {
            menuButton.focus();
        }

    }

});


// =========================
// 4. ÅTERSTÄLL MENYN PÅ STOR SKÄRM
// =========================

// Lyssnar efter förändringar av webbläsarens storlek
window.addEventListener("resize", function () {

    // Samma brytpunkt används i CSS för desktop
    if (window.innerWidth >= 950) {
        closeMenu();
    }

});


// =========================
// 5. KONTAKTFORMULÄR
// =========================

// Hämtar kontaktformuläret
const contactForm =
    document.querySelector("#contact-form");

// Hämtar området där meddelanden visas
const formMessage =
    document.querySelector("#form-message");


// Kontrollerar att formuläret finns på aktuell sida
if (contactForm && formMessage) {

    // Hämtar formulärets fält
    const nameInput =
        contactForm.querySelector("#name");

    const emailInput =
        contactForm.querySelector("#email");

    const subjectInput =
        contactForm.querySelector("#subject");

    const messageInput =
        contactForm.querySelector("#message");


    // Lyssnar efter att formuläret skickas
    contactForm.addEventListener("submit", function (event) {

        // Hindrar sidan från att laddas om
        event.preventDefault();


        // Kontrollerar att alla formulärfält finns
        if (
            !nameInput ||
            !emailInput ||
            !subjectInput ||
            !messageInput
        ) {
            return;
        }


        // Hämtar värden och tar bort extra mellanslag
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();


        // =========================
        // KONTROLL AV TOMMA FÄLT
        // =========================

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            formMessage.textContent =
                "Vänligen fyll i alla fält innan du skickar formuläret.";

            return;
        }


        // =========================
        // KONTROLL AV E-POST
        // =========================

        /*
            HTML-fältet använder type="email",
            vilket redan hjälper webbläsaren att
            kontrollera e-postadressen.

            Här görs även en enkel kontroll i JavaScript.
        */

        if (
            !email.includes("@") ||
            !email.includes(".")
        ) {

            formMessage.textContent =
                "Kontrollera att du har skrivit in en giltig e-postadress.";

            return;
        }


        // =========================
        // BEKRÄFTELSE
        // =========================

        /*
            Formuläret är ännu inte kopplat till
            någon server eller e-posttjänst.

            Därför skickas inget riktigt meddelande.
        */

        formMessage.textContent =
            `Tack ${name}! Tyvärr kan jag inte ta emot några meddelanden via kontaktformuläret för närvarande.`;


        // Tömmer formuläret efter inskick
        contactForm.reset();

    });

}
