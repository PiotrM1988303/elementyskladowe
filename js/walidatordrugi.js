const userData = document.querySelector("#username")
const passwordData = document.querySelector("#password")
const passwordConfirm = document.querySelector("#confirme")
const email = document.querySelector("#mail")
// inputy  pobrane
const btnClear = document.querySelector(".clear")
const btnSend = document.querySelector(".send")
const btnClose = document.querySelector(".close")
// przyciski pobrane
// pup up
const risingDiv = document.querySelector(".pop-up")



// przyjmujemy parametr, któy jest niejako zmienną  lkalną ddla naszej funkcji 
// parametr  input przechowuje tablice
// el odnosi się do kazej zmiennej
// tworzymy funkcje , która będzie zajmowałasię przypadkami błędnego formularza, input przechowuje każdego inputa/
// msg przechowuje placeholder każdego inputa
const showError = (input, msg) => {
    const formBox = input.parentElement;
    // formBox jest rodzicem dla inputa czyli div class="form-box"
    const errorMsg = formBox.querySelector(".text-error");
    // szukamy w divie elementu o klasie text error
    formBox.classList.add("error");
    // parametr msg przypisujemy wartość text content const . Czyliu wyświetla
    errorMsg.textContent = msg
}

// funkcja globalna
const clearError = input => {
    const formBox = input.parentElement;
    formBox.classList.remove("error");

}

const validForm = input => {
    input.forEach(el => {
        if (el.value === "") {
            showError(el, el.placeholder);
        }
        else {
            clearError(el)
        }
    })
}

// tworzymy funkcje, któa będzie sprawdzać długość 
const formLenght = (input, min) => {
    if (input.value.length < min)
    // jeżeli długość wartośći inputa jest mniejsza niż  min to whywołaj funkcje show error
    {
        showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} wymaga wprowadzenia min. ${min} ilości znaków`);
        // przyjmuje dwa parametry, inputa, na którym jest wywołany błąd, drugi to długość tekstu
        // by odowłoać siędo rodzeństwa stosujemy metode Previous sibling z inner text co pozwala wyświetlić nazwe
        // slice kasuje niepootrzby dwukropek
    }
}

// sprawdzamy zbieżność haseł 
const checkPasswor = (pass1, pass2) => {
    if (pass1.value !== pass2.value) {
        showError(pass2, "Hasła do siebie nie pasują");
        // wybieramy do wyświetlania inputa gdzie dotychcczas nie było informacji o błedzie wyświetlanej
    }
}

// WYRAŻENIE regulane, jego funkcja sprawdzająca

const checkEmail = email => {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

    // porównujemy czy w inpucie value zachowuje wymagania re to stosujemy funkcje test
    if (re.test(email.value)) {
        // jeżeli zgodne
        { clearError(email) }
    }
    else {
        showError(email, "Email jest niepoprawny")
    }

}
// [a-zA-Z]{2,3 tzn max 2-3 znaki na zakończeniu maula i mogą być duże bądx male litery od a do z



// tworzymy funkcje, któa będzie sprawdzać  ilość błędów w inputach

const countErrors = () => {
    const allInputs = document.querySelectorAll(".form-box")
    // zebraliśmy inputy w jeden pojemnik
    let errorCounter = 0;
    // licznik błędów
    allInputs.forEach(el => {
        if (el.classList.contains("error")) {
            // jeśli zawierały w którymkolwiek inpucie klasy error świadczoące o błedzie to wykonaj instrukcje if
            errorCounter++
        }
    })
    // dla każdego elementu errorcounter ma się zwiększać o 1 jeśli zawierały takaą klase
    if (errorCounter === 0)
    // jeśli nie było błedów to pou up ma się pojawić{
    {
        risingDiv.classList.add("show-pop-up")
    }
}





// funkcja zdefiniowana w zakresie globalnym stąd wywołanie funkcji validform z parametrem input jes dostępne dla pozostaych funkcji
btnSend.addEventListener("click", e => {
    e.preventDefault();
    // na kliknięcie ma się też odpalać funkcja validForm
    validForm([userData, passwordData, passwordConfirm, email]);
    formLenght(userData, 8);
    formLenght(passwordData, 12);
    formLenght(email, 5);
    checkPasswor(passwordData, passwordConfirm)
    checkEmail(email);
    countErrors();

    // funkcja sprawdzająca długość ma być wywoływana na klik dlatego podpinana pod add event listernr
})


// e w w add event listener został wywołany by zapobiec sytuacji opisanej w  html form element: submit event 
btnClear.addEventListener("click", e => {
    e.preventDefault();

    // tworzymy pętle, by dla każdego inputa była wywołwana ta sama instrukcja
    [userData, passwordData, passwordConfirm, email].forEach(el => {
        el.value = "";
        clearError(el);
        // po kliknięciu wyczyść mają czyścić się też napisy o błedach
    })

})
// zastosowanei default na przycisku czyszczącym sprawiwa, że strona nei jest przeładowywana po kliknięciu
// stworzenie tablicy zawierającej stałe i zastsowanie funkcjji for each dla każdego elementu tablicy gdzie wartość inputu zostałą nadpisana na puste stringi

// DO POCZYTANIA O WYRAŻENIU REGULARNY https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

/*RegExp.prototype.test()
Podsumowanie
Wykonuje poszukiwanie łańcucha znaków pomiędzy wyrażeniem regularnym i określonym wzorcem. Zwraca true lub false.

Składnia
regexObj.test(str)
Parametry
str
Łańcuch znaków w zależności od tego, czym jest wyrażenie regularne.
Opis
Jeśli chcesz wiedzieć, czy wzorzec został znaleziony w łańcuchu znaków zastosuj metodę test (podobną do metody String.prototype.search()); aby uzyskać więcej informacji (lecz powolniej wykonywana) zastosuj metodę exec()(podobną do metody String.prototype.match() (en-US) ).*/