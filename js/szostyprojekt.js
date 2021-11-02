const addBtn = document.querySelector(".add");
const cancelBtn = document.querySelector(".cancel");
const saveBtn = document.querySelector(".save");
const deleteBtn = document.getElementsByClassName("delete-note")
// stosujemy ze względu na żywe kolekcje, by w javascript stan aktualizował się na bierząco w momencie dodawania nowych notatek
const deleteAllBtn = document.querySelector(".delete-all")
const noteArea = document.querySelector(".note-area");
const notePanel = document.querySelector(".note-panel");
const category = document.querySelector("#category");
const textArea = document.querySelector("#text");
const error = document.querySelector(".error");

// zmienne globalne
let selectedValue;
let cardId = 0;

const openPanel = () => {
    notePanel.style.display = "flex";
    // wyświetla się panel
}

const closePanel = () => {
    notePanel.style.display = "none"
    // po kliknięciu panel ma zniknąć
    error.style.visibility = "hidden"
    // informacja o błedzie ma zniknać p[o kliknięciu anuluj]
    textArea.value = ""
    // ma się wyczyścić text area
    category.selectedIndex = 0;
    // ma powrócić do wartości domyślnej 0 w option
}



// waliadacja danych

const addNote = () => {
    if (textArea.value !== "") {
        error.style.visibility = "hidden"
    }
    else {
        error.style.visibility = "visible"
    }
}

addBtn.addEventListener("click", openPanel)
// do przycisku dopisaliśmy wysłuchiwanie i na klik zostanie wywołana funkcja openPanel
cancelBtn.addEventListener("click", closePanel)
saveBtn.addEventListener("click", addNote)

/*https://www.freakyjolly.com/how-to-get-selected-value-in-dropdown-list-using-jquery-javascript/ JAK DOSTAĆ SIĘ DO WARTOŚĆI DROPDOWN MENU*/