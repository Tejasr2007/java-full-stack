function great_afternoon() 
{
    let text = document.getElementById("great");
    text.innerText = "good afternoon";
}
function change_color()
{
    let color = document.getElementById("capture");
    color.style.backgroundColor = "lightblue";
    let text = document.getElementById("capture");
    text.innerText = "color changed";
    let text_color = document.getElementById("capture");
    text_color.style.color = "red";
}