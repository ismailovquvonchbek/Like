var buttonlike = document.querySelectorAll(".buttons");
var TextLike = document.querySelector(".cound")
var cound = 0;
setInterval(function add() {
    TextLike.textContent = cound
})
for(var i = 0; i < buttonlike.length; i++) {
    buttonlike[i].addEventListener("click", (evt) => {
        if(evt.target.dataset.uuid == "close") {
            cound += 1;
            evt.target.dataset.uuid = "open"
        } else if (evt.target.dataset.uuid == "open") {
            cound -= 1;
            evt.target.dataset.uuid = "close"
        }
    })
}