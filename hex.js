let click_btn = document.querySelector(".click-me");
let main_content = document.querySelector('.home--left');
let text_content = document.querySelector('.color-text')

let color_box = [0, 1,2 ,3 , 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "g"]

click_btn.addEventListener('click', function name() {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += color_box[getrandomNumber()];    
    }
    console.log(hexColor)
    main_content.style.backgroundColor = hexColor
    text_content.textContent = hexColor
})

function getrandomNumber() {
    return Math.floor(Math.random() * color_box.length);
}

function myFunction() {
    // Copy the text inside the text field
    navigator.clipboard.writeText(text_content.textContent);
}
