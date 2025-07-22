const darkModeButton = document.getElementById('darkMode');
const caption = document.getElementById('caption');
let x = 0;

function toggleDarkMode(){
    const caption = document.getElementById('caption');
    document.body.classList.toggle('dark-mode');
    if (x ===0){
        caption.style.color = '#C5C5C5'
        x ++;
    }else{
        caption.style.color = '#333333'
        x = 0
    }
    if(darkModeButton.textContent === "Dark Mode"){
        darkModeButton.textContent = "Light Mode"
    }else{
        darkModeButton.textContent = "Dark Mode"
    }
    

}

darkModeButton.addEventListener('click', ()=>toggleDarkMode())
