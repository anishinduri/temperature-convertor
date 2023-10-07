function convert(unit) {
    if (unit === 'celsius') {
        let celsius = parseFloat(document.getElementById('celsius').value);
        let fahrenheit = (celsius * 9/5) + 32;
        let kelvin = celsius + 273.15;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
        document.getElementById('kelvin').value = kelvin.toFixed(2);
    } else if (unit === 'fahrenheit') {
        let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
        let celsius = (fahrenheit - 32) * 5/9;
        let kelvin = celsius + 273.15;
        document.getElementById('celsius').value = celsius.toFixed(2);
        document.getElementById('kelvin').value = kelvin.toFixed(2);
    } else if (unit === 'kelvin') {
        let kelvin = parseFloat(document.getElementById('kelvin').value);
        let celsius = kelvin - 273.15;
        let fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('celsius').value = celsius.toFixed(2);
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    }
}
