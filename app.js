// ==========================================================================
// Preloader
// ==========================================================================

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        setTimeout(() => preloader.classList.add("is-hidden"), 400);
    }
});

// ==========================================================================
// Log type toggle (Maintenance/Repair <-> Auto Parts)
// ==========================================================================

const carOption = document.getElementById("carOp");
const partsOption = document.getElementById("partOp");

const formCarLog = document.getElementById("formLayer");
const formPartsLog = document.getElementById("formLayer2");

const mainRepairTitle = document.getElementById("mainRepairTitle");
const autoPartsTitle = document.getElementById("autoPartsTitle");

function showPartsLog() {
    formCarLog.style.display = "none";
    formPartsLog.style.display = "block";
    mainRepairTitle.style.display = "none";
    autoPartsTitle.style.display = "block";
    partsOption.classList.add("is-active");
    partsOption.setAttribute("aria-pressed", "true");
    carOption.classList.remove("is-active");
    carOption.setAttribute("aria-pressed", "false");
}

function showCarLog() {
    formPartsLog.style.display = "none";
    formCarLog.style.display = "block";
    mainRepairTitle.style.display = "block";
    autoPartsTitle.style.display = "none";
    carOption.classList.add("is-active");
    carOption.setAttribute("aria-pressed", "true");
    partsOption.classList.remove("is-active");
    partsOption.setAttribute("aria-pressed", "false");
}

partsOption.addEventListener("click", showPartsLog);
carOption.addEventListener("click", showCarLog);

// ==========================================================================
// Shared helpers
// ==========================================================================

function fieldValue(id) {
    const el = document.getElementById(id);
    return el ? el.value : "";
}

function notifySuccess(title) {
    if (typeof Swal === "undefined") {
        console.warn("SweetAlert2 failed to load; skipping confirmation dialog.");
        return;
    }
    Swal.fire({
        title,
        icon: "success",
        draggable: true,
        timer: 2000,
        backdrop: "rgba(68, 63, 63, 0.466)",
        showConfirmButton: false,
        background: "lightseagreen",
        color: "white",
    });
}

// ==========================================================================
// Maintenance / Repair log -> Google Sheet (via SheetDB)
// ==========================================================================

const submitBtn = document.getElementById("btn");
const formLog = document.getElementById("formLog");

submitBtn.addEventListener("click", () => {
    formLog.classList.add("was-validated");
    if (!formLog.checkValidity()) {
        formLog.reportValidity();
        return;
    }

    async function gSheets() {
        const url = "https://sheetdb.io/api/v1/f85paemez3pqc";
        const data = {
            Date: fieldValue("Date"),
            Mileage: fieldValue("Mileage"),
            MainenanceRepairs: fieldValue("MainenanceRepairs"),
            Parts: fieldValue("Parts"),
            VehicleSide: fieldValue("VehicleSide"),
            Service_Provider: fieldValue("Service_Provider"),
            SPLocation: fieldValue("SPLocation"),
            Cost: fieldValue("Cost"),
            Notes_Issues: fieldValue("Notes_Issues"),
        };

        try {
            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!res.ok) {
                throw new Error(`Response status: ${res.status}`);
            }
            const json = await res.json();
            console.log(json);
        } catch (err) {
            console.error(err.message);
        }
    }

    gSheets();
    notifySuccess("Log Successfully Added");

    setTimeout(() => {
        location.reload();
    }, 2000);
});

// ==========================================================================
// Parts tracking -> Google Sheet (via SheetDB)
// ==========================================================================

const partsBtn = document.getElementById("btnParts");
const formParts = document.getElementById("formParts");

partsBtn.addEventListener("click", () => {
    formParts.classList.add("was-validated");
    if (!formParts.checkValidity()) {
        formParts.reportValidity();
        return;
    }

    async function logToGSheets() {
        const urlParts = "https://sheetdb.io/api/v1/f85paemez3pqc?sheet=Sheet2";
        const dataParts = {
            Date_Purchased: fieldValue("Date_Purchased"),
            Parts_Name: fieldValue("Parts_Name"),
            Parts_Location: fieldValue("Parts_Location"),
            Parts_Brand: fieldValue("Parts_Brand"),
            Price: fieldValue("Price"),
            Purchased: fieldValue("Purchased"),
        };

        try {
            const resParts = await fetch(urlParts, {
                method: "POST",
                body: JSON.stringify(dataParts),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!resParts.ok) {
                throw new Error(`Response Status: ${resParts.status}`);
            }
            const json = await resParts.json();
            console.log(json);
        } catch (error) {
            console.error(error.message);
        }
    }

    logToGSheets();
    notifySuccess("Part Tracked");

    setTimeout(() => {
        location.reload();
    }, 2000);
});

// ==========================================================================
// License plate / VIN lookup modal
// ==========================================================================

const vinPlateTrigger = document.getElementById("vinPlateTrigger");
const closeVinPlate = document.getElementById("closeVinPlate");
const vinPlateModal = document.getElementById("plateAndVinLookUp");

if (vinPlateTrigger && closeVinPlate && vinPlateModal) {
    const openModal = () => {
        vinPlateModal.hidden = false;
    };

    const closeModal = () => {
        vinPlateModal.hidden = true;
    };

    vinPlateTrigger.addEventListener("click", openModal);
    closeVinPlate.addEventListener("click", closeModal);

    vinPlateModal.addEventListener("click", (event) => {
        if (event.target === vinPlateModal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !vinPlateModal.hidden) {
            closeModal();
        }
    });
}
