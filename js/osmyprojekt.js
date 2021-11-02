// pobieramy zieloną strefę

const incomeArea = document.querySelector(".income-area");
// strefa wydatków pobrana
const expansesArea = document.querySelector(".expanses-area");
const avaiableMoney = document.querySelector(".available-money");
// dodajemy panel do tranzakcji
const transactionPanel = document.querySelector(".add-transaction-panel")


// pobieram inputy  i selektor

const nameInput = document.querySelector("#name");
const amountInput = document.querySelector("#amount");
const optionSelector = document.querySelector("#category");

// pobieram przyciski

const addTransaction = document.querySelector(".add-transaction");
const saveTransaction = document.querySelector(".save");
const cancelTransaction = document.querySelector(".cancel");
const deleteTransaction = document.querySelector(".delete");
const deleteAllTranscation = document.querySelector(".delete-all");

// stworzenie zmiennej 
let root = document.documentElement;
// dzięki stworzeniu tej zmiennej będe mógł się odwoływać do elementu root
// ponieważ elementy mają id stworzymy zmienną gglobalną o nazwie id i wartości 0

let ID = 0;
// zmieniać będziemy kategorie dynamicznie
let categoryIcon;
let selectedCategory;
let moneyArr = [0];
// tablica, która będzie przechowywać kwoty

// funkcja pokazująca panel
const showPanel = () => {
    transactionPanel.style.display = "flex"
}
// zamknięcie panelu
const closePanel = () => {
    transactionPanel.style.display = "none";
    clearData();
    // te instrukcje moge zapisać w osobnej funkcji np. clear data . optionSelector. selectedIndex ma cofnąć wybrany indeks do indkesy 0

}

const clearData = () => {
    nameInput.value = ""
    amountInput.value = ""
    optionSelector.value = "none"
    optionSelector.selectedIndex = 0
}

// valiadator inputów
const checkForm = () => {
    if (nameInput.value !== "" && amountInput.value !== "" && optionSelector.value !== "none") {
        // czy inpusty są wypełnione. Jeśli są to
        createTransaction();
    }
    else {
        alert("Nie wypełniono wszystkich miejsc")
    }
}


const createTransaction = () => {
    const newTransaction = document.createComment("div")
    //     //  <div class="transaction" id="0">
    //     <p class="transaction-name"><i class="fas fa-money-bill-wave"></i> Wypłata</p>
    //     <p class="transaction-amount">2000zł<button class="delete"><i class="fas fa-times"></i></button>
    //     </p>
    // </div>
    newTransaction.classList.add("transaction")
    newTransaction.setAttribute("id", ID)
    // tworzymy atrybut id o wartośći równej zmiennej let ID = 0
    checkCategory(selectCategory)
    // funkcje chackcategory wstawiamy tutaj bo najpierw chcemy stworzyć trazakcje, następnie jaś sprawdzić, ap óźniej ustalenia umieścić w inner html
    newTransaction.innerHTML = `
    <p class="transaction-name">${categoryIcon} ${nameInput.value}</p>
    <p class="transaction-amount">${amountInput.value}
    <button class="delete" onclick="deleteTransaction(${ID})"><i class="fas fa-times"></i></button>
    `


    // sprawzdzamy czy funkcje dodać do przychodu czy do wydatków
    //  poprzez operator warunkowy
    // czy wydatek czy zysk poprz określenie czy mniejsze czy większe od 0. W momencie większego będzie dodane do seckcji income area i dodana byłaby klasa, jeśli nie to dodaj do expense area
    amountInput.value > 0 ? incomeArea.appendChild(newTransaction) && newTransaction.classList.add("income") : expansesArea.appendChild(newTransaction) && newTransaction.classList.add("expanse");

    // liczby przrechowujemy w tablicy
    moneyArr.push(parseFloat(amountInput.value))
    // input zwraca typ string by zwrot zamienić na number korzystam z ParseInt który zmienia n aliczby całkowite, a dla liczb po przecinku korzystamy z parseFloat
    closePanel();
    // zamykamy panel
    ID++
    // ID przy każdej tranzakcji ma wrastać o 1
    clearData();
    // czyścimy 


}
// ${nameInput.value}< umieszczamy zawarrość inputa name
// categoryIcon dynamicznie będziemy wstawiać ikone
// amountInput dynamicznie wypisuje kwoete
// onclick="deleteTransaction() wywołanie funkcji delate transaction
// W parametrze podajemy id czyli numer tranzakcji zapisany w zmiennej globalnej

// na klik ma być wyświetlany pabel


// sprawdza jaka kategoria została wybrana, jaki tekst przechowuje. Przypisaliśmy to sobie do zmiennej globalnej
const selectCategory = () => {
    selectedCategory = categorySelect.option[categorySelect.selectedIndex].text
}


// funkcja inforumująca jaką mamy wstawić ikone. ponieważ każda trazakcja indywidualnie dlatego parametr 
const checkCategory = transaction => {
    switch (transaction) {
        case "( + ) przychód":
            categoryIcon = `<i class="fas fa-money-bill-wave"></i>`
            break;
        case " - Jedzenie":
            categoryIcon = `<i class="fas fa-hamburger"></i>`
            break;
        case " - Zakupy":
            categoryIcon = `<i class="fas fa-cart-arrow-down"></i>`
            break;
        case " - Kino":
            categoryIcon = `<i class="fas fa-film"></i> `
            break;


    }
}


addTransaction.addEventListener("click", showPanel)
cancelTransaction.addEventListener("click", closePanel)
saveTransaction.addEventListener("click", checkForm)

