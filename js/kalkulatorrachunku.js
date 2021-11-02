/*Projekt #2 - Spróbuj sam/a!
Tak jak przy pierwszym projekcie tak i w tym przygotowałem dla chętnych kilka wskazówek, które ułatwią Wam samodzielne podejście do tego zadania. :)
Wskazówki
Pobierz odpowiednie elementy.
Stwórz funkcję, będzie sprawdzała, czy wszystkie pola zostały uzupełnione. Jeśli nie, pokaż błąd. Jeśli tak, wywołaj kolejną funkcję, która zajmie się obliczaniem rachunku.
Funkcja obliczająca rachunek musi przechwycić dane z input i select oraz wykonać działanie wg wzoru:
(kwota do zapłaty + (kwota do zapłaty * napiwek)) / ilość osób
Wynik działania wypisz w odpowiednim paragrafie. Nie zapomnij zaokrąglić kwoty do dwóch miejsc po przecinku!
Podpowiedzi do wskazówek
Musimy pobrać:
inputy (kwota do zapłaty, ilość osób),
select z napiwkiem,
przycisk,
paragraf do wyświetlania błędu,
paragraf i span do wyświetlania wyniku.
Instrukcja warunkowa if nada się do tego zadania idealnie. ;)
Jeśli pojawi się problem z obliczeniami, sprawdź, czy na pewno operujesz na liczbach, a nie np. na stringach. ;)
*/

const addPrice = document.querySelector("#price")
const addPeople = document.querySelector("#people")
const addTip = document.querySelector("#tip")
// inputy pobrane
const counterBtn = document.querySelector(".count")
// [przycisk pobrany]
const errrorInformation = document.querySelector(".error")
// error
const generalCost = document.querySelector(".cost-info")
const textInformation = document.querySelector(".cost")


const showBill = () => {

    // sprawdzamy czy tekst winpucie jest wogóle wstawiony pusty string jeśli dobrze pamietam oraz zero mają wartość logiczną false, więc można sprawdzić potem czy będzie działąć
    // nie musimy stosować sprawdzania szczegółowego bo w inpucie zastosowaliśmy zapis 
    //   <input type="number" id="price">

    if (addPrice.value == "" || addPeople.value == "" || addTip.value == 0) {
        errrorInformation.textContent = "Uzupełnij wszystkie pola"
    }

    else {
        // jeśli wszystkie pozycje są uuzupłnione to wywolaj funkcje countbill i jednoczęsnie nie wyświetlaj info o błędzie

        errrorInformation.textContent = "";
        countBill();
    }

}

// countbill nie jest hostingowany, tak jak tradycyjna funkcja, będzie widoczny w momencie wykonania funkcji showbill przez klik

const countBill = () => {

    //  wewnarz tej funkcji będziem chcieli zsumować wypełnione wartośći inputy i zamiast stosować zapis  addPeople.value + add tip to to samo zapisujemy w zmiennych, ktre będą przechowywać te informacje

    const newPrice = parseFloat(addPrice.value);
    // parseInt zamienia string na liczbe
    const newPeople = parseInt(addPeople.value);
    const newTip = parseFloat(addTip.value);

    /*parseFloat()
    Podsumowanie
    Przetwarza argument w postaci łańcucha znaków zwracając liczbę zmiennoprzecinkową.*/

    // przechowuje dane 

    const sum = (newPrice + (newPrice * newTip)) / newPeople;
    // wynik ma zostać wyświetlony
    generalCost.style.display = "block";
    textInformation.textContent = sum.toFixed(2);
    // to fixed zaokrąglamy do dwóch miejssc po przecinku
}










counterBtn.addEventListener("click", showBill)