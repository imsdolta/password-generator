let characterAmountRange = document.getElementById('characterAmountRange')
let characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')

const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')


const copyButton = document.getElementById("copy");

const copyText = (e) => {
    window.getSelection().selectAllChildren(passwordDisplay);
    document.execCommand("copy");
};

if (copyButton)
    copyButton.addEventListener("click", (e) => {
        e.preventDefault()
        copyText(e)
    })

    



function getPassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {

    var numChars = "0123456789"
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowerChars = "abcdefghijklmnopqrstuvwxyz"
    var symbolChars = "?></\!@#$%^&*"

    var allChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz?></\!@#$%^&*"


    var chars = ""
    if (includeUppercase && includeNumbers && includeSymbols) {
        chars = lowerChars + upperChars + numChars + symbolChars
    } else if (includeSymbols && includeNumbers) {
        chars = symbolChars + numChars + lowerChars
    } else if (includeSymbols && includeUppercase) {
        chars = symbolChars + upperChars + lowerChars
    } else if (includeNumbers && includeUppercase) {
        chars = numChars + upperChars + lowerChars
    } else if (includeUppercase) {
        chars = lowerChars + upperChars
    } else if (includeNumbers) {
        chars = lowerChars + numChars
    } else if (includeSymbols) {
        chars = symbolCharss
    } else {
        chars = lowerChars
    }
    return generate(characterAmount, chars)

}

function generate(characterAmount, chars) {
    return Array(parseInt(characterAmount)).fill(chars).map((x) => {
        return x[Math.floor(Math.random() * x.length)]
    }).join('')

}

characterAmountNumber.addEventListener('input', sync)
characterAmountRange.addEventListener('input', sync)


function sync(e) {
    const val = e.target.value;
    characterAmountRange.value = val
    characterAmountNumber.value = val
}

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = getPassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password

})