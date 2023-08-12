let click_btn = document.querySelector(".click-me");
let main_content = document.querySelector('.home--left');
let text_content = document.querySelector('.color-text')
let color_box = ['red', 'green', "blue", "purple", "yellow", "black"]


click_btn.addEventListener('click', function name() {
    const number = getrandomNumber();
    main_content.style.backgroundColor = color_box[number]
    text_content.textContent = color_box[number]
})

function getrandomNumber() {
    return Math.floor(Math.random() * color_box.length);
}

function myFunction() {
    // Copy the text inside the text field
    navigator.clipboard.writeText(text_content.textContent);
}