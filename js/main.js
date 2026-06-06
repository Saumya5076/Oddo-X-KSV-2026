// ============================
// VendorBridge Main JavaScript
// ============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("VendorBridge Loaded Successfully");

    initializeButtons();
    initializeCards();
    initializeTables();

});

// ============================
// BUTTON ACTIONS
// ============================

function initializeButtons() {

    const buttons = document.querySelectorAll(
        ".add-btn, .send-btn, .approve-btn, .download-btn"
    );

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            showToast(
                button.innerText + " Clicked"
            );

        });

    });

}

// ============================
// CARD ANIMATION
// ============================

function initializeCards() {

    const cards = document.querySelectorAll(
        ".kpi-card, .feature-card, .stat-card"
    );

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
                "translateY(-8px)";

            card.style.transition =
                "0.3s ease";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "translateY(0px)";

        });

    });

}

// ============================
// TABLE ROW EFFECT
// ============================

function initializeTables() {

    const rows =
        document.querySelectorAll("tbody tr");

    rows.forEach(row => {

        row.addEventListener("mouseenter", () => {

            row.style.background =
                "#F8FAFC";

        });

        row.addEventListener("mouseleave", () => {

            row.style.background =
                "transparent";

        });

    });

}

// ============================
// TOAST NOTIFICATION
// ============================

function showToast(message) {

    const toast =
        document.createElement("div");

    toast.className = "toast";

    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 2500);

}

// ============================
// DARK MODE SUPPORT
// ============================

function toggleDarkMode() {

    document.body.classList.toggle(
        "dark-mode"
    );

}

// ============================
// SIDEBAR COLLAPSE
// ============================

function toggleSidebar() {

    const sidebar =
        document.querySelector(".sidebar");

    if (!sidebar) return;

    sidebar.classList.toggle(
        "collapsed"
    );

}

// ============================
// SEARCH FILTER
// ============================

function filterTable(inputId, tableId) {

    const input =
        document.getElementById(inputId);

    const filter =
        input.value.toUpperCase();

    const table =
        document.getElementById(tableId);

    const tr =
        table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {

        let td =
            tr[i].getElementsByTagName("td")[0];

        if (td) {

            let txtValue =
                td.textContent ||
                td.innerText;

            if (
                txtValue.toUpperCase()
                .indexOf(filter) > -1
            ) {

                tr[i].style.display = "";

            } else {

                tr[i].style.display = "none";

            }

        }

    }

}

// ============================
// DUMMY DASHBOARD COUNTERS
// ============================

function animateCounter(
    element,
    start,
    end,
    duration
) {

    let current = start;

    const increment =
        (end - start) /
        (duration / 16);

    const timer =
        setInterval(() => {

            current += increment;

            if (current >= end) {

                current = end;

                clearInterval(timer);

            }

            element.innerText =
                Math.floor(current);

        }, 16);

}

// ============================
// FUTURE API PLACEHOLDER
// ============================

async function fetchDashboardData() {

    try {

        console.log(
            "Connect API here"
        );

    } catch (error) {

        console.error(error);

    }

}