const pushback = new Pushback();

document.addEventListener("keydown", e => {

    if (e.shiftKey && e.code === "KeyP") {
        pushback.toggle();
    }

});

setInterval(() => {

    pushback.update();

},20);
