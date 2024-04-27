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

    let person = {
        name: petitionInputs[0].value,
        hometown: petitionInputs[1].value,
        email: petitionInputs[2].value

    }
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
        addSignature(person);

        for(let i = 0; i < petitionInputs.length; i++){
            petitionInputs[i].value = "";
        }
        containsErrors = false;
        toggleModal(person);

    }

}
sign_button.addEventListener('submit',validateForm);

const addSignature = (personObj) => {
    // Write your code to manipulate the DOM here
    //part 3

    const signature = document.querySelector(".signatures");
    const text = document.createElement('p');
    text.textContent = `🖊️ ${personObj.name} from ${personObj.hometown} supports this.`;    
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

//Unit 8: Animation
let animation = {
    revealDistance: 150,
    initialOpacity: 0,
    transitionDelay: 0, 
    transitionDuration: '2s',
    transitionProperty: 'all',
    trnasitionTimingFunction: 'ease'
}  

let revealableContainers = document.getElementsByClassName('revealable')

const reveal = () => {
    for(let i = 0; i < revealableContainers.length; i++){
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
        if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
            /* add the active class to the revealableContainer's classlist */
            revealableContainers[i].classList.add('action');
        }else {
            /* remove the active class to the revealableContainer's classlist */
            revealableContainers[i].classList.remove('action');
        }

    }
}
let reduceMotionButton = document.getElementById('reduce-motion')
const reduceMotion = () =>{
    animation.transitionDelay = 25;
    for(let i = 0; i < revealableContainers.length; i++){
        
        revealableContainers[i].style.transitionDelay = animation.transitionDelay;
    }
}
reduceMotionButton.addEventListener("click",reduceMotion)
window.addEventListener("scroll",reveal)

/*Unit 9*/
let modal = document.getElementById('thanks-modal')
let modalContent = document.getElementById('thanks-content-modal')
let scaleFactor = 1
let modalImage = document.getElementById('thank-you')
const toggleModal = (personObj) => { 
    modal.style.display = "flex";    
    setTimeout(() => {
        modal.style.display = "none";
      }, 4000)
    modalContent.textContent = `Thank you ${personObj.name} for the support!`; 
      
}
const scaleImage = ()=>{
    if (scaleFactor === 1) {
        scaleFactor = 0.8;
    } else {
        scaleFactor = 1;
    }
    modalImage.style.transform = `scale(${scaleFactor})`;  
}
