/*Wskazówki
Zastanów się jakich elementów będziesz potrzebował/a (jakie elementy będziesz musiał/a pobrać za pomocą np. querySelectora).
Stwórz funkcję, która będzie się odpalała, kiedy wpiszemy coś do inputa.
Funkcja ma porównywać to, co wpisaliśmy w inputa z każdym napojem na liście.
Za pomocą instrukcji warunkowej sprawdź, czy dane z inputa pokrywają się z nazwą napoju. Jeśli nie, ukryj taki napój.
Żeby aplikacja działała poprawnie, musimy się zabezpieczyć. Użytkownik może podać nazwę napoju dużymi lub małymi literami. Musimy więc sprowadzić to, co wpisuje użytkownik do np. małych liter (tak samo trzeba zrobić z listą napojów).
Podpowiedzi do wskazówek
Trzeba będzie stworzyć 2 zmienne, które będą przechowywały inputa oraz listę napojów (wszystkie <li>).
addEventListener na event 'keyup'.
Chcemy przeszukać całą listę napojów i na każdym z nich wykonać dokładnie tę samą funkcję. Brzmi jak zadanie dla pętli, prawda? ;)
Warto też zauważyć, że skoro pobraliśmy wszystkie <li> do jednej zmiennej, to mamy obiekt tablico podobny – idealnie! Pętle z tablicami się przecież bardzo lubią. :)
Co więcej, mamy taką metodę (coś z indeksem w nazwie), która sprawdza, czy jakiś znak / jakieś znaki są w danym stringu. Jeśli nie ma, to zwraca wartość -1.
Jeśli coś zwróci -1 to taki napój należy ukryć. display: none; robi robotę. ;)
Mamy takie dwie fajne metody – toUpperCase lub toLowerCase. :)*/


/*Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
    at pierwszyprojektjavascript.js:29
(anonymous) @ pierwszyprojektjavascript.js:29 jeśli wywali taki błąd czy właściwie podałemm nazwy w pobieraniu, bo pisze, że nie może znaleźć takiego elemenu*/

const searchTool = document.querySelector(".search");
const searchedPositions = document.querySelectorAll("li");
/*searchedPositions
NodeList(13) [li, li, li, li, li, li, li, li, li, li, li, li, li] element tablicopodobny to wyświetliło mi console log po wpisani zmiennej do któej skopiowaliśmy */
// pobraliśmy input i pozycje w menu

// tworzymy funkcje, któe będzie porównywać produkt do wpisanego tekstu 

const searchEngine = e => {
    // e wskazuje na obiekt , w którym funkcja jest wywoływana
    const text = e.target.value.toLowerCase();
    // value pobiera wartość  przycisku. lower cas zmniejsza  wartość o mniejszy rozmiar. Zapobiega to rozróżnieniu na małe i duże litery
    // w zmiennej text będziemy przechowywać informacje 
    // e target jest całym naszym inputem
    searchedPositions.forEach(el => {
        // dla każdego elementu zmiennej przechowującej list tworzymy funkcje, gdzie tworzona jest stała
        /*zawierająca stałą zawierającą zawartość tekstu li. Jeśli zawartość pojedynczego elementu listy, zamienionego na małą litere o indeksie wskazanym przez zmniejszoną na mniejszą czcionkę wartość e.target jest znaleziona, bo nie zwraca -1 to wyświetl*/
        const task = el.textContent
        if (task.toLowerCase().indexOf(text) !== -1) {
            el.style.display = "block"
        }
        else {

            el.style.display = "none"
        }
    })

}

searchTool.addEventListener("keyup", searchEngine);

