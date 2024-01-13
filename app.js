
let count = 0;
let p = 0;

const buttons = document.getElementsByClassName('btn')
for (const btn of buttons) {
    btn.addEventListener("click", function (event) {
        count = count + 1;
        setTextById('total-Products', count)

        const info = event.target.parentNode.querySelector('.fw-bold').innerHTML
        const price = parseFloat(info)

        setTextById('Price', (p += price))

        updateTaxAndCharge(p);

        // grand total calculate
        const grandTotal = valueFromText('Price') + valueFromText('delivery-charge') + valueFromText('total-tax');
        setTextById('total', grandTotal)
    })
};


// get text value
function valueFromText(id) {
    const element = document.getElementById(id).innerText;
    const converted = parseFloat(element);
    return converted;
};


// update delivery charge and total Tax

let charge = 10;
function updateTaxAndCharge(value) {
    const addedProducts = valueFromText('total-Products');

    if (addedProducts > 5) {
        setTextById('delivery-charge', (charge += 10));
        setTextById('total-tax', (value * 0.2).toFixed(2));
    }
};


// set value to text
function setTextById(elementId, value) {
    const valueTextField = document.getElementById(elementId);
    valueTextField.innerText = value;
};