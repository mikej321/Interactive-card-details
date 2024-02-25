import './styles/style.sass';


let cardNameRegex = /(?=\b^[a-zA-Z]{1,15}\b\s\b[a-zA-Z]{1,15}\b$).*/;
let cardNumRegex = /(?=^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}).*/;
let cardMonthRegex = /(?=^[0]?[0-9]$|^[1][0-2]$).*/;
let cardYearRegex = /(?=^[2][4-9]$|^[3][0-2]).*/;
let cvcRegex = /(?=^[0-9][0-9][0-9]$).*/;

// Card details Variables
let cardNumInteractive = document.querySelector('.card_number_interactive');
let cardNameInteractive = document.querySelector('.card_name_interactive');
let expDateMonthInteractive = document.querySelector('.exp_date_month_interactive');
let expDateYearInteractive = document.querySelector('.exp_date_year_interactive');
let cardBackInteractive = document.querySelector('.card_back_interactive');

// Form Variables for state
let incompleteStateForm = document.querySelector('.incomplete_state');
let completeStateForm = document.querySelector('.complete_state');

// Input Variables for Card
let cardHolderName = document.querySelector('#cardholder_name');
let cardHolderNumber = document.querySelector('#cardholder_number');
let expDateMonth = document.querySelector('#exp_date_mm');
let expDateYear = document.querySelector('#exp_date_yy');
let cvcCode = document.querySelector('#cvc_code');

// Submit Variable
const thisForm = document.querySelector('form');
const continueButton = document.querySelector('.continue_button');

class Form {
    constructor() {
        // These will change on completion for further js if I desire
        this.cardNumber = null;
        this.cardName = null;
        this.expMonth = null;
        this.expYear = null;
        this.userCVC = null;
    }

    nameValidation() {
        let userInput = cardHolderName.value;
        let errorMessage = cardHolderName.nextElementSibling;

        if (userInput == '' && cardHolderName.hasAttribute('error')) {
            errorMessage.textContent = 'Can\'t be blank';
            this.cardName = null;
            return false;    
        } else if (userInput == '' && !cardHolderName.hasAttribute('error')) {
            errorMessage.textContent = 'Can\'t be blank';
            cardHolderName.setAttribute('error', '');
            errorMessage.setAttribute('error', '');
            this.cardName = null;
            return false;
        }

        if (userInput !== '' && cardHolderName.hasAttribute('error') && !cardNameRegex.test(userInput)) {
            errorMessage.textContent = 'Please enter first name & last name correctly';
            this.cardName = null;
            return false;
        } else if (userInput !== '' && cardHolderName.hasAttribute('error') && cardNameRegex.test(userInput)) {
            cardHolderName.removeAttribute('error');
            errorMessage.removeAttribute('error');
            this.cardName = userInput;
            return true;
        } else if (userInput !== '' && !cardHolderName.hasAttribute('error') && cardNameRegex.test(userInput)) {
            this.cardName = userInput;
            return true;
        }
    }

    numberValidation() {
        let userInput = cardHolderNumber.value;
        let errorMessage = cardHolderNumber.nextElementSibling;

        if (userInput == '' && cardHolderNumber.hasAttribute('error')) {
            errorMessage.textContent = 'Can\'t be blank';
            this.cardNumber = null;
            return false;
        } else if (userInput == '' && !cardHolderNumber.hasAttribute('error')) {
            errorMessage.textContent = 'Can\'t be blank';
            cardHolderNumber.setAttribute('error', '');
            errorMessage.setAttribute('error', '');
            this.cardNumber = null;
            return false;
        }

        if (userInput !== '' && cardHolderNumber.hasAttribute('error') && !cardNumRegex.test(userInput)) {
            errorMessage.textContent = 'Wrong format, numbers only with a space after every 4 numbers';
            this.cardNumber = null;
            return false;
        } else if (userInput !== '' && !cardHolderNumber.hasAttribute('error') && !cardNumRegex.test(userInput)) {
            errorMessage.textContent = 'Wrong format, numbers only with a space after every 4 numbers';
            this.cardNumber = null;
            cardHolderNumber.setAttribute('error', '');
            errorMessage.setAttribute('error', '');
            return false;
        } else if (userInput !== '' && cardHolderNumber.hasAttribute('error') && cardNumRegex.test(userInput)) {
            cardHolderNumber.removeAttribute('error');
            errorMessage.removeAttribute('error');
            this.cardNumber = userInput;
            return true;
        } else if (userInput !== '' && !cardHolderNumber.hasAttribute('error') && cardNumRegex.test(userInput)) {
            this.cardNumber = userInput;
            return true;
        }
    }

    expValidation() {
        let userInputMonth = expDateMonth.value;
        let userInputYear = expDateYear.value;
        let errorMessage = expDateMonth.parentElement.nextElementSibling;

        if (userInputMonth == '' && expDateMonth.hasAttribute('error') || userInputYear == '' && expDateYear.hasAttribute('error')) {
            errorMessage.textContent = 'Can\'t be blank';
            this.expMonth = null;
            this.expYear = null;
            return false;
        } else if (userInputMonth == '' && !expDateMonth.hasAttribute('error') || userInputYear == '' && !expDateYear.hasAttribute('error')) {
            errorMessage.textContent = 'Can\'t be blank';
            expDateMonth.setAttribute('error', '');
            expDateYear.setAttribute('error', '');
            errorMessage.setAttribute('error', '');
            this.expMonth = null;
            this.expYear = null;
            return false;
        }

        if (userInputMonth !== '' && expDateMonth.hasAttribute('error') && !cardMonthRegex.test(userInputMonth)) {
            if (userInputYear !== '' && expDateYear.hasAttribute('error') && !cardYearRegex.test(userInputYear)) {
                errorMessage.textContent = 'Year must be between 2024 & 2028';
                this.expMonth = null;
                this.expYear = null;
                return false;
            }
        } else if (userInputMonth !== '' && expDateMonth.hasAttribute('error') && cardMonthRegex.test(userInputMonth)) {
            if (userInputYear !== '' && expDateYear.hasAttribute('error') && cardYearRegex.test(userInputYear)) {
                expDateMonth.removeAttribute('error');
                expDateYear.removeAttribute('error');
                errorMessage.removeAttribute('error');
                this.expMonth = userInputMonth;
                this.expYear = userInputYear;
                return true;
            }
        } else if (userInputMonth !== '' && !expDateMonth.hasAttribute('error') && cardMonthRegex.test(userInputMonth)) {
            if (userInputYear !== '' && !expDateYear.hasAttribute('error') && cardYearRegex.test(userInputYear)) {
                this.expMonth = userInputMonth;
                this.expYear = userInputYear;
                return true;
            } else {
                errorMessage.textContent = 'Year must be between 2024 & 2028';
                expDateMonth.setAttribute('error', '');
                expDateYear.setAttribute('error', '');
                errorMessage.setAttribute('error', '');
                this.expMonth = null;
                this.expYear = null;
                return false;
            }
        }
    }

    cvcCodeValidation() {
        let userInput = cvcCode.value;
        let errorMessage = cvcCode.nextElementSibling;

        if (userInput == '' && cvcCode.hasAttribute('error')) {
            errorMessage.textContent = 'Can\'t be blank';
            this.userCVC = null;
            return false;
        } else if (userInput == '' && !cvcCode.hasAttribute('error')) {
            errorMessage.textContent = 'Can\'t be blank';
            cvcCode.setAttribute('error', '');
            errorMessage.setAttribute('error', '');
            this.userCVC = null;
            return false;
        }

        if (userInput !== '' && cvcCode.hasAttribute('error') && !cvcRegex.test(userInput)) {
            errorMessage.textContent = 'Wrong format, numbers only';
            this.userCVC = null;
            return false;
        } else if (userInput !== '' && cvcCode.hasAttribute('error') && cvcRegex.test(userInput)) {
            cvcCode.removeAttribute('error');
            errorMessage.removeAttribute('error');
            this.userCVC = userInput;
            return true;
        } else if (userInput !== '' && !cvcCode.hasAttribute('error') && cvcRegex.test(userInput)) {
            this.userCVC = userInput;
            return true;
        }
    }
}


let myForm = new Form();

window.onload = formReset();

function formReset() {
    cardHolderName.value = '';
    cardHolderNumber.value = '';
    expDateMonth.value = '';
    expDateYear.value = '';
    cvcCode.value = '';
    cardNameInteractive.textContent = '---- ---------';
    cardNumInteractive.textContent = '---- ---- ---- ----';
    expDateMonthInteractive.textContent = '--';
    expDateYearInteractive.textContent = '--';
    cardBackInteractive.textContent = '---';
}

thisForm.addEventListener('submit', (e) => {
    e.preventDefault();
    myForm.nameValidation();
    myForm.numberValidation();
    myForm.expValidation();
    myForm.cvcCodeValidation();

    if (
        myForm.cardName !== null 
        && myForm.cardNumber !== null 
        && myForm.expMonth !== null 
        && myForm.expYear !== null 
        && myForm.userCVC !== null) 
    {
        incompleteStateForm.setAttribute('complete', '');
        completeStateForm.setAttribute('complete', '');
    }
})

function cardNameTextChange() {
    let inputText = cardHolderName.value;
    cardNameInteractive.textContent = inputText;
}

cardHolderName.addEventListener('input', cardNameTextChange);

function cardNumTextChange() {
    let inputText = cardHolderNumber.value;
    cardNumInteractive.textContent = inputText;
}

cardHolderNumber.addEventListener('input', cardNumTextChange);

function cardExpMonthChange() {
    let inputText = expDateMonth.value;
    expDateMonthInteractive.textContent = inputText;
}

expDateMonth.addEventListener('input', cardExpMonthChange);

function cardExpYearChange() {
    let inputText = expDateYear.value;
    expDateYearInteractive.textContent = inputText;
}

expDateYear.addEventListener('input', cardExpYearChange);

function backCVCCodeChange() {
    let inputText = cvcCode.value;
    cardBackInteractive.textContent = inputText;
}

cvcCode.addEventListener('input', backCVCCodeChange);

function goBackToMainPage() {
    formReset();
    completeStateForm.removeAttribute('complete');
    incompleteStateForm.removeAttribute('complete');
}

continueButton.addEventListener('click', goBackToMainPage);