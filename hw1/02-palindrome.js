const elem = document.querySelector('input');

elem.addEventListener('input', handleInput);
var pal = document.getElementById("pal");
var nopal = document.getElementById("nopal");
pal.style.display = "none";
nopal.style.display = "none";


function isPalindrome(str) {
    // Reverse the string
    const reversedStr = str.split('').reverse().join('');
    // Check if the original and reversed strings are the same
    return str === reversedStr;
}
function handleInput(event) {
    // Handle input event here and show hide as per the condition 
    if(isPalindrome(event.target.value))
    {
        pal.style.display = "block";
        nopal.style.display = "none";
    }
    else
    {
        pal.style.display = "none";
        nopal.style.display = "block";
    }

}