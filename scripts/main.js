/**
 * Main.js -  Logic for the app
 * 
 */
// first import
import getLocation from './location.js';


// event handlers

async function locationHandler() {
    const locText = await getLocation();
    document.getElementById('locationAnswer').innerHTML = locText;
}
function clearErrorText() {
    document.getElementById('error-message').innerHTML = '';
}
// declare main method
function main() {
    console.log('Starting main method')
    //get references to html elements

    const locationElement = document.getElementById('location')
    const errorElement = document.getElementById('error-message');

    // init error to empty string
    errorElement.innerHTML = '';

    locationElement.addEventListener('click', locationHandler)
    locationElement.addEventListener('touch', locationHandler);

}

// this is where it begins
window.addEventListener('load', main);