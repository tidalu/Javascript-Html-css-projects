// set initial count to 0
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.target.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        } if(count < 0){
            value.style.color = "red";
        } else if(count > 0){
            value.style.color = "green";
        }
        else{
            value.style.color = "blue";
        }
        value.textContent = count;
        
    });
});