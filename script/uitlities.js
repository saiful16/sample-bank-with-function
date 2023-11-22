function getInputFieldvaluById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = "";
    return inputFieldValue;
}

function getElementvalueById(elemenetId) {
    const element = document.getElementById(elemenetId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setElementValueById(elemenetId, newValue) {
    const textElement = document.getElementById(elemenetId)
    textElement.innerText = newValue;
}