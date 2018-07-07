var controller, retina;

retina = window.devicePixelRatio > 1;

controller = AnsiLove.animate("images/TV.ans", function (canvas, sauce) {
    var body = document.getElementById("body");
    body.appendChild(canvas);
    controller.play(4800, function() {
        AnsiLove.render("images/TV.ans", function (canvas2, sauce) {
            body.replaceChild(canvas2, canvas);
            body.style.height = 'initial';
        }, { "bits": "8", "2x": (retina ? 1 : 0) });
    });
}, { "bits": "8", "2x": (retina ? 1 : 0) });