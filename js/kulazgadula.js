/*Projekt #4 - Spróbuj sam/a!
Najpierw przeczytajcie Wskazówki oraz Podpowiedzi do wskazówek.
Na samym dole artykułu znajdziecie Podpowiedzi do funkcji, ale to zostawcie sobie na sam koniec. ;)
Wskazówki
Pobierz odpowiednie elementy.
Zastanów się, skąd możemy brać losowe odpowiedzi.
astanów się ilu funkcji w tym projekcie nam potrzeba i jakie ma być ich zadanie. Dla ułatwienia możesz ponownie obejrzeć odcinek, w którym prezentowałem działanie aplikacji.
Zastanów się, w jakiej kolejności powinniśmy wywołać te funkcje. Wszystkie na raz? A może trzeba je zazębić? Czyli funkcja A odpala funkcję B, a funkcja B odpala funkcję C.
Która funkcja powinna zostać odpalona jako pierwsza?
Podpowiedzi do wskazówek
Do pobrania są 4 elementy – obrazek, input, paragraf na odpowiedź i na błąd.
Moglibyśmy stworzyć kilka zmiennych i do nich przypisać jakąś odpowiedź, ale tablica byłaby chyba dużo lepszym rozwiązaniem, prawda? :)
Potrzebujemy:
funkcję od wywoływania animacji,
funkcję od sprawdzania, czy input został wypełniony oraz, czy na końcu jest znak zapytania,
funkcję, która generuje losową odpowiedź.
Oczywiście musimy zazębić nasze funkcje.
Ponownie odsyłam do odcinka, w którym prezentuje działanie aplikacji.
Najpierw widzimy animację, potem pokazuje nam się błąd lub losowa odpowiedź.
Zatem najpierw musimy odpalić animacje, potem sprawdzamy, czy input został uzupełniony oraz, czy ma znak zapytania, a na końcu odpalamy funkcję, która generuje losową odpowiedź.
Podpowiedzi do funkcji
Animacja:
animacja trwa 1 sekundę i wywołuje się po kliknięciu obrazka,
po wykonaniu animacji (ale dopiero po wykonaniu!) musimy odpalić funkcję, która sprawdzi, czy input został poprawnie wypełniony.
Sprawdzanie inputa:
sprawdź, czy input nie jest pusty,
sprawdź, czy na końcu inputa znajduje się znak zapytania (jest taka metoda, która pozwala na wydobycie konkretnego znaku ze stringa),
jeśli wszystko jest ok, odpal funkcję generującą odpowiedź.
Generowanie odpowiedzi:
odpowiedzi są w tablicy – zastanów się, jak można dostać się do konkretnego elementu tablicy,
odpowiedź na powyższe pytanie jest niżej, więc najpierw chwilę pomyśl :P
jeszcze jedna warstwa ochronna, żebyś za szybko nie przeczytał/a odpowiedzi :)
ok, niżej jest odpowiedź na pytanie,
oczywiście do elementów tablicy możemy odwoływać się za pomocą ich indeksów,
w jaki sposób możemy generować losowy indeks? Jest taka funkcja matematyczna od tego ;)
na sam koniec wklej losową odpowiedź do naszego paragrafu.
*/

const image = document.querySelector("img");
const questionHolder = document.querySelector("input");
const answerText = document.querySelector(".answer");
const errorText = document.querySelector(".error");

// zbiór odpowiedzi  najlepiej umieścic w ttablicy
const answerArray = ["Tak", "Nie", "Może", "Mało realne", "Hipotetycznie tak, ale ...", "Całkiem realne", "So so", "Nie, ale", "tak", "..j wie"];





// najpierw ma być funkcja shakeball

const shakeBall = () => {
    image.classList.add("shake-animation")
    // dodajemy kalse do img
    setTimeout(checkInput, 1000)
    // wywołujemy funkcje chcekinput po animacji shakeball stąd ustawiamy opóxnienie remove}
}
// sprawdzamy poprawność naszego inputa
// czy ostatnia ciąg wartości value to ?
const checkInput = () => {
    if (questionHolder.value !== "" && questionHolder.value.slice(-1) === "?") {
        createAnswer();
        errorText.textContent = "";
        // wywołaj funkcje jeżeli  wartość inputa jest różna od pustego stringu
        // i jeżeli wartość  inputa ma końcowy znak ?
    }
    else if (questionHolder.value !== "" && questionHolder.value.slice(-1) !== "?") {
        // jeżeli jest rózny od pustego striny i ostatni znak jest różny od znaku zapytania 
        // umieść tekst
        errorText.textContent = "Zdanie musi być zakończone znakiem `?`"
        answerText.textContent = "";

        // by nie było wyświetlanej odpowiedzi i błędu t o dlatego ansewt text ""

    }
    else {

        errorText.textContent = "Musisz zadać pytanie"
        answerText.textContent = "";

    }
    image.classList.remove("shake-animation")
    // wustarczy raz iumieścić poza ifem 
}



// tworzymy funkcje generującą losową liczbę z indeksu
// math floor i math random pozwalaj a na zaokrąglenie liczb na liczby całkowite. Losowość indeksów poprze pomonożenie  * lenght
const createAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answerArray.length)
    // dodaliśmy elemnt do struktury html, z kolei wcześniej w css była dodanan ostylowana instrukcja dla spanu
    answerText.innerHTML = `<span>Odpowiedź: ${answerArray[randomIndex]}</span>`
    // W tej chwili wyświetla napis Odpowiedź i wartość przypadkowego indeksu
    // wartość INPUTA MA ZNIKAĆ PO KLIKNIĘCIU
    questionHolder.value = ""
    // 
}


// na kliknięcie obrazka ma być wwywoawana wydarzenie
image.addEventListener("click", shakeBall)