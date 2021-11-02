const settings = document.querySelector(".settings");
const settingsBtn = document.querySelector(".settings-btn");
const imageSection = document.querySelector(".image-section");

// pobieram inputy

const eventName = document.querySelector("#event-name")
const eventDay = document.querySelector("#event-day")
const eventMonth = document.querySelector("#event-month")
const eventYear = document.querySelector("#event-year")
const eventImage = document.querySelector("#event-image")

// liczniki

const daysCount = document.querySelector(".days-count");
const hoursCount = document.querySelector(".hours-count");
const minutesCount = document.querySelector(".minutes-coun");
const secondsCount = document.querySelector(".seconds-count");

// zapisz
const saveBtn = document.querySelector(".save");
// zmiana napisu domyślnego nowy rok za 
const eventSpan = document.querySelector(".event");
let userName;
// inicjalizujem zmienną globalną, która jeszcze nie będziemy definiować, a będzie przechowywać date wpisaną w inpucie
const setTIme = () => {
    const currentTime = new Date()
    const result = currentTime - userName;
    console.log(result)
}

const update = () => {
    eventSpan.textContent = eventName.value;
    // w spanie ma się wyswietlać wartość inputa name
    // imageSection.style.backgroundImage = url`${eventImage.value}`
    // obazki mają być wyświetlan na podstawie wartości value`
    // 
    userName = new Date(`${eventYear.eventDay} ${eventMonth.value} `)

}



// funkcja dodająca i odejmująca klase aktiw przez co widać i nie widać ustawień po kliknięciu na button settings
settingsBtn.addEventListener("click", () => {
    settings.classList.toggle("active")
})
saveBtn.addEventListener("click", update)
setTIme()