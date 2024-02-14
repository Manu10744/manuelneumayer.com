var buttonClicks = [];

anime.timeline({ easing: 'easeOutQuad' })
    .add({
        targets: '.caro-flower-intro',
        opacity: [1, 0],
        delay: 3000,
        duration: 1000,
        complete: () => { 
            var introHeadline = document.querySelector(".caro-flower-intro h1")
            introHeadline.innerHTML = "Hab ein paar Fragen an dich ❤️";
        }
    })
    .add({
        targets: '.caro-flower-intro',
        opacity: [0, 1],
        duration: 1000
    })

    .add({
        targets: '.caro-flower-intro',
        opacity: [1, 0],
        delay: 500,
        duration: 1000,
        complete: () => {
            var introContainer = document.querySelector(".caro-flower-intro");
            introContainer.style.display = 'none'; 

            document.querySelector(".caro-flower-textcontainer").style.display = 'block';
        }
    })

    document.querySelector(".yes-btn").addEventListener("click", handleButtonClick)
    document.querySelector(".no-btn").addEventListener("click", handleButtonClick)

    function handleButtonClick() {
        var yesButton = document.querySelector(".yes-btn");
        var noButton = document.querySelector(".no-btn");

        if (buttonClicks.length < 2) {
            alert("Richtig! ❤️");
        }

        if (buttonClicks.length == 2) {
            alert("Sehr schön, ich freu mich auf dich ❤️");
            document.querySelector(".caro-flower-textcontainer").style.display = "none";

            var introHeadline = document.querySelector(".caro-flower-intro h1")

            anime.timeline({ easing: 'easeOutQuad' })
            .add({
                targets: '.caro-flower-intro',
                opacity: [0, 1],
                duration: 1000,
                scale: 4,
                begin: () => {
                    introHeadline.innerText = "❤️";

                    var introContainer = document.querySelector(".caro-flower-intro");
                    introContainer.style.display = 'block';                 }
            })

            .add({
                targets: '.caro-flower-intro',
                duration: 1000,
                scale: 1.5,
            })
        }



        if (buttonClicks.length == 0) {
            document.querySelector(".caro-flower-textcontainer h3").innerHTML = "Gibt es eine süßere Frau? ❤️";
            buttonClicks.push("1");
        }

        else if (buttonClicks.length == 1) {
            document.querySelector(".caro-flower-textcontainer h3").innerHTML = "Gehen wir heute einen Kaffee trinken? ❤️";
            yesButton.innerText = "Ja";
            noButton.innerText = "Ja";
            buttonClicks.push("2");
        }
    }