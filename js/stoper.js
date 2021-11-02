// pobieramy przyciski
const btnStart = document.querySelector(".start");
const btnPause = document.querySelector(".pause");
const btnStop = document.querySelector(".stop");
const btnReset = document.querySelector(".reset");
const btnHistory = document.querySelector(".history");

// generalny czas wyświetlany w p
const generalTime = document.querySelector(".stopwatch");
const lapTime = document.querySelector(".time");
// wyświetlana lista orkążeń
const lapsList = document.querySelector(".time-list");
// pobraliśmy modal-shadow
const modalShadow = document.querySelector(".modal-shadow");
// pobraliśmy przycisk znaku zapytania
const informationBtn = document.querySelector(".info");
// pobrany przycisk zamknięcia
const closeWindow = document.querySelector(".close");

// zmienna globalna do której będziemy przypisywać różne wartość
let countTime;
// zmienna counttime nie ma przypisanej wartośći globalnej
let minute = 0;
let seconds = 0;
// zmiennazachowując wyniki pomiarów
let allTimes = [];

// funkcja rozpoczynająca pomiar

const commencCounting = () => {
    //   // wielokrotne kliknięcie na play powoduje przyspizenie odliczneia, by z tym sobie poradzić stosujem funkcje clear interval. W argumencie podajemy nazwe zmienne do której jest przypisany setInterval
    clearInterval(countTime)

    // korzystamy z metody setInterval czyli coś ma się wykonywać co jakiś określony czas
    // zmienna countime w zakresie lokalnym jest przypisana funkcja set interval
    countTime = setInterval(() => {


        // zmienna let ma wzrastać co sekunde o 1 co pokazuje console.log
        // zajmujemy się generalTime czyli paragrafem wyświetljącym generalny czas
        if (seconds < 9) {
            // funkcja mówi, że jestśli sekund jest mnie niż 9 to zmienna sekund ma zrastać to wartości 9
            // jednocześnie w paragrafie ma dodany napis tambple string ,k óry pokazuke wartość zmiennej minute czyli 0 i waerość zmiennej second
            seconds++
            generalTime.textContent = `${minute}:0${seconds}`;
        }
        else if (9 <= seconds && seconds < 59) {
            seconds++
            generalTime.textContent = `${minute}:${seconds}`;
        }
        else {
            // jeżeli wartość osiągnie 60
            minute++;
            // minuta ma wzrosną co jeden
            // odliczanie sekund ma cofnąć się do 0 czyli dla sekund warunek if i else if. Brak tego spowodowałby pozostawienie licznika sekund na wartośći 59
            seconds = 0;
            generalTime.textContent = `${minute}:${seconds}`;

        }
    }, 1000);

}

// funkcja pause
/*JavaScript - clearInterval()
Jest to metoda obiektu:

Window

Opis
Metoda ta usuwa wywoływanie funkcji co określony odstęp czasu określony wcześniej przez metodę setInterval().*/
const pauseTime = () => { clearInterval(countTime) }

// funkcja sto
const stopTime = () => {
    // zawartość tekstu lapTime ma wyświetla element html dlatego stosujemy inner html
    lapTime.innerHTML = `Ostatni czas wynosi: ${generalTime.textContent}`
    // jeżeli zawartość tekstu paragrafu time stop jest różna od 0 to styl laptime ma być widoczny
    if (generalTime.textContent !== "0:00") {
        lapTime.style.visibility = "visible";
        allTimes.push(generalTime.textContent)
        console.log(allTimes)
        // po kliknięciu ma być widoczny style lap time, ale też do tablicy globalne ma być wpisywane wyniki 
    }

    // jedną z rzeczy jest zatrzymanie funkcji przypisanej do zmiennej counttime
    clearInterval(countTime)
    // koleją rzeczą jest wyzerowanie zawartośći paragrafu stopwatch
    generalTime.textContent = "0:00";
    // lista okrążęń po kliknięciu w archiwum i następnie kliknięciu stop ma się chować
    lapsList.textContent = "";
    // resetujemy wartość sekund i minut by by ło to zgodne z wyświetlanym tekstem w paragrafie
    minute = 0;
    seconds = 0;

}
// funkcja, którą wpisujemy w funkcje reset
const clearData = () => {
    // jedną z rzeczy jest zatrzymanie funkcji przypisanej do zmiennej counttime
    clearInterval(countTime)
    // koleją rzeczą jest wyzerowanie zawartośći paragrafu stopwatch
    generalTime.textContent = "0:00";
    // lista okrążęń po kliknięciu w archiwum i następnie kliknięciu stop ma się chować
    lapsList.textContent = "";
    // bardzo ważne dla wyświetlane archiwum
    // resetujemy wartość sekund i minut by by ło to zgodne z wyświetlanym tekstem w paragrafie
    minute = 0;
    seconds = 0;
    lapTime.style.visibility = "hidden";

}

const resetTime = () => {
    clearData();
    allTimes = [];

}
// parametr tine który będzie odnosił się do 
const showStory = () => {
    let number = 1;
    // do wyświetlania numeru pomiaru
    lapsList.textContent = "";
    /*Pomiar nr X
    0:02
    Pomiar nr X
    0:01 zapobiega przed sytuacjamy by po kliknięciu w archiwum nie dublowały nam się wyniki*/
    allTimes.forEach(time => {
        const newTime = document.createElement("li");
        // dla każdego elementu time tablic allTime  będzie tworzony element li
        newTime.innerHTML = `Pomiar nr ${number} <span>${time}</span>`
        lapsList.appendChild(newTime)
        number++
        // number ma się zwiększać o 1
    })
}

const showModal = () => {
    if (!(modalShadow.style.display === "block")) {
        modalShadow.style.display = "block"
        // jeżeli modal show jest różne od displau block to przypisz display block
    }
    else {
        modalShadow.style.display = "none";
        // wykorzystany dla przycisku close. Jeśli ma taką klase to ma wyświetlić none
    }
    modalShadow.classList.toggle("modal-animation")
    // włączaj i wyłączaj klase, 
}



// podpinamy wydarzenie na klik do przycisku start. Czyli funkcja commenccounting ma być wywołana na klik
btnStart.addEventListener("click", commencCounting)
btnPause.addEventListener("click", pauseTime)
btnStop.addEventListener("click", stopTime)
btnReset.addEventListener("click", resetTime)
btnHistory.addEventListener("click", showStory)
informationBtn.addEventListener("click", showModal)
closeWindow.addEventListener("click", showModal)

// kliknięcie na window

window.addEventListener("click", e => e.target === modalShadow ? showModal() : false);
// sprawdzamy na kliknięcie w window czy to co klikneliśmy jest równe modal SHadow. Jeżeli tak jest to wywołujemy
// show modal, a winnym przypadku nic nie robimy