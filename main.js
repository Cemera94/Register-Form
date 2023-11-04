let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let line1 = document.querySelector('.one');
let line2 = document.querySelector('.two');
let line3 = document.querySelector('.three');
let circle1 = document.querySelector('.border-one');
let circle2 = document.querySelector('.border-two');
let circle3 = document.querySelector('.border-three');
let circle4 = document.querySelector('.border-four');

let page2 = document.querySelector('.second-page');
let page1 = document.querySelector('.first-page');
let page3 = document.querySelector('.third-page');

let nameInput = document.querySelector('input[name="name"]');
let lastNameInput = document.querySelector('input[name="surname"]');
let emailInput = document.querySelector('input[name="email"]');

let countrySelect = document.querySelector('#country');
countryValue = "";
let citySelect = document.querySelector('#city');
let countryDiv = document.querySelector('.country-div')


let name = document.querySelector('.name');
let lastName = document.querySelector('.last-name');
let email = document.querySelector('.email');



let counter = 0;
const citiesByCountry = {
    serbia: ["Belgrade", "Novi Sad", "Nis", "Beocin"],
    montenegro: ['Podgorica', 'Niksic', 'Bar'],
    russia: ['Moscow', 'Krasnodar', 'Rostov'],
    greece: ['Athens', 'Solun', 'Itaka']
  };



prev.style.opacity = 0.5;
circle1.style.border = "2px solid #0456c8";
circle1.style.opacity = 1;
circle1.style.color = "white";



prev.addEventListener('click', function () {
    if (counter > 0) {
        prev.disabled = false;
        counter--
        showBtnNext();
        
        if (counter === 0) {
            prev.style.opacity = 0.5;
            counter = 0;
            line1.style.width = "0px"
            setTimeout(() => {
                circle2.style.border = "1px solid black";
                circle2.style.opacity = 0.7;
                circle2.style.color = "gray";
                circle2.style.transition = "0.3s ease-in"
                page2.style.display = "none";
                page1.style.display = "flex";
                
            },300)
        } else if (counter === 1){
            line2.style.width = "0px"
            line3.style.width = "0px"
            setTimeout(() => {
                circle3.style.border = "1px solid black";
                circle3.style.opacity = 0.7;
                circle3.style.color = "gray";
                circle3.style.transition = "0.3s ease-in"
                page3.style.display = "none";
                page2.style.display = "flex";
            },300)
        } else if (counter === 2){
            line3.style.width = "0px"
            setTimeout(() => {
                circle4.style.border = "1px solid black";
                circle4.style.opacity = 0.7;
                circle4.style.color = "gray";
                circle4.style.transition = "0.3s ease-in"
            },300)
        }
    }
})

next.addEventListener('click', function nextClick() {

    if (counter === 0) {
        let emailParts = emailInput.value.split('@');
        let emailSecondPart = emailParts[1];

        if (nameInput.value === "") {
            name.innerHTML = "Name field required"
            name.style.opacity = 1;
            return;
        } else if (/\d/.test(nameInput.value)){
            name.innerHTML = "Please, type only letters"
            name.style.opacity = 1;
            return;
        } else if (nameInput.value.length < 2 || nameInput.value.length > 13){
            name.innerHTML = "Name must have more than 2 and less tha 13 characters"
            name.style.opacity = 1;
            return;
        } else {
            name.style.opacity = 0;
        }

        if (lastNameInput.value === "") {
            lastName.innerHTML = "Last name field required"
            lastName.style.opacity = 1;
            return;
        }else if (/\d/.test(lastNameInput.value)){
            lastName.innerHTML = "Please, type only letters"
            lastName.style.opacity = 1;
            return;
        } else {
            lastName.style.opacity = 0;
        }

        if (emailInput.value === "") {
            email.innerHTML = "Email field required"
            email.style.opacity = 1;
            return;
        } else if (!emailInput.value.includes('@') || emailParts[0].length < 1 || !emailParts[1].includes('.')) {
            email.innerHTML = "Invalid email"
            email.style.opacity = 1;
            return;
        } else {
            email.style.opacity = 0;
            counter++
            showBtn();
            displayPageOne();
        }

    }
        
             
        /* if (counter === 3){
            line3.style.width = "100px"
            line3.style.background = "#0456c8";
            setTimeout(() => {
                circle4.style.border = "2px solid #0456c8"
                circle4.style.opacity = 1;
                circle4.style.color = "white";
                circle4.style.transition = "0.3s ease-in";
            }, 300) 
            next.style.opacity = 0.5;
            counter = 3;
    } */
})



function showBtn() {
    prev.style.opacity = 1;
}

function showBtnNext() {
    next.style.opacity = 1;
}

/* function hideBtn() {
    prev.style.opacity = 0.5;
} */


function displayPageOne() {
    line1.style.width = "100px"
    line1.style.background = "#0456c8";
            
    setTimeout(() => {
        circle2.style.border = "2px solid #0456c8"
        circle2.style.opacity = 1;
        circle2.style.color = "white";
        circle2.style.transition = "0.3s ease-in"
        page1.style.display = "none";
        page2.style.display = "flex";
                
    }, 800)

    next.removeEventListener('click', nextPageHandler);
            
    countrySelect.addEventListener('change', function onNextChange() {
                
        let selectedCountry = countrySelect.value;
        let cities = citiesByCountry[selectedCountry] || [];

        citySelect.innerHTML = '';

        cities.forEach(function(city) {
            let option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
 
        if (selectedCountry === "") {
            citySelect.innerHTML = '<option value=""> Choose City </option>';
            next.addEventListener('click', function () {
                countryDiv.innerHTML = "Must choose country";
                countryDiv.style.color = "red"
                countryDiv.style.opacity = 1;
            })
            next.removeEventListener('click', nextPageHandler)
        } else if (selectedCountry !== "") {
            // Dodaj event listener za "Next" ako nije prazan
            next.addEventListener('click', nextPageHandler);
        }
    });

} 

function nextPageHandler() {
    countryDiv.style.opacity = 0;
    counter++;
    displayPageTwo();
}


function displayPageTwo() {
    line2.style.width = "100px"
            line2.style.background = "#0456c8";
            setTimeout(() => {
                circle3.style.border = "2px solid #0456c8"
                circle3.style.opacity = 1;
                circle3.style.color = "white";
                circle3.style.transition = "0.3s ease-in"
                page2.style.display = "none";
                page3.style.display = "flex";
            }, 300)
}