//headline element
const display = document.querySelector('#display')

//input elements
const fontSize = document.querySelector('#input-size')
const fontType = document.querySelector('#select-font')
const fontColor = document.querySelector('#input-color')
const bgColor = document.querySelector('#input-bg-color')
const inputText = document.querySelector('#enter-text')

//display elements
const sampleText = document.querySelector('#display')
const showSize = document.querySelector('#show-size')
const showFont = document.querySelector('#show-font')
const showColor = document.querySelector('#show-color')
const showBgColor = document.querySelector('#show-bg-color')

//event listeners
fontSize.addEventListener('input', handleInput)
fontType.addEventListener('input', handleInput)
fontColor.addEventListener('input', handleInput)
bgColor.addEventListener('input', handleInput)
inputText.addEventListener('input', handleInput)

//input handler function
function handleInput() {
    //font size
    const newSize = fontSize.value + 'px'
    display.style.fontSize = newSize
    showSize.innerHTML = newSize
    //font family
    const newFont = fontType.value
    display.style.fontFamily = newFont
    showFont.innerHTML = newFont
    //font color
    const newColor = fontColor.value
    display.style.color = newColor
    showColor.innerHTML = newColor 
    //background color
    const newBgColor = bgColor.value
    display.style.backgroundColor = newBgColor
    showBgColor.innerHTML = newBgColor
    //display text
    const newText = inputText.value
    sampleText.innerHTML = newText

}