// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
    // Write your code to manipulate the DOM here
    document.body.classList.toggle("dark-mode");
}


// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.
themeButton.addEventListener("click", toggleDarkMode);

// Add your query for the sign now button here
const sign_button = document.getElementById("sign-petition");
let count = 3;
const validateForm = (e) => {
    e.preventDefault();

    let containsErrors = false;
  
    var petitionInputs = document.getElementById("sign-petition").elements;
    // TODO: Loop through all inputs
    for(let i = 0; i < 3; i++){
        if(petitionInputs[i].value.length < 2){
            containsErrors = true;
            petitionInputs[i].classList.add('error');
        }
        else{
            petitionInputs[i].classList.remove('error');    
        }
    }
    
    // TODO: Validate the value of each input
  
  
  
    // TODO: Call addSignature() and clear fields if no errors
    if(containsErrors == false){
        addSignature(e);
        for(let i = 0; i < petitionInputs.length; i++){
            petitionInputs[i].value = "";
        }
        containsErrors = false;
    }

  }
  sign_button.addEventListener('submit',validateForm);

const addSignature = (e) => {
    // Write your code to manipulate the DOM here
    //part 3
    e.preventDefault();

    const signature = document.querySelector(".signatures");
    var name = document.getElementById('name');
    var hometown = document.getElementById('hometown');
    const text = document.createElement('p');
    text.textContent = '🖊️ ' + name.value + ' from ' + hometown.value + ' supports this';
    signature.appendChild(text);
    //part 4
    
    var get_count = document.getElementById('count');
    get_count.remove();
    const new_count = document.createElement('p');
    new_count.id = 'count';
    count = count + 1;
    new_count.textContent = '🖊️ ' + count + ' people have signed this petition and support this cause.';
    signature.appendChild(new_count);

}

// Add a click event listener to the sign now button here
//sign_button.addEventListener('submit', addSignature);
// TODO: Remove the click event listener that calls addSignature()


  
  