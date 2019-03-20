var choix_player
var choix_ordi
var random
var victoire = '<img src="victorie".jpg>'
var defaite = '<img src="defaite.jpg">'

choix_player = window.prompt("Faites vos jeux")
document.write("<p>Vous avez choisi: " + choix_player + "</p>")
random = Math.random()

if (random < 0.33) {
    choix_ordi = "pierre";
} else if (random <= 0.66) {
    choix_ordi = "feuille";
} else {
    choix_ordi = "ciseau";
}


if (choix_player == choix_ordi) {
    document.write("<p>l'ordinateur a choisi: " + choix_ordi + "</p>")
    document.write("<p>Egalité</p>")
}
else {
    if (choix_player == "pierre") {
        if (choix_ordi == "feuille") {
            document.write("<p>l'ordinateur a choisi: " + choix_ordi + "</p>")
            document.write('<p>La pierre est enveloppée par la feuille. Vous avez perdu.</p>')
            document.write(defaite)
        }
        else {
            document.write("<p>l'ordinateur a choisi: " + choix_ordi + "</p>")
            document.write('<p>Le ciseau est écrasé par la pierre. Victoire.</p>')
            document.write(victoire)
        }
    }
    if (choix_player == "feuille") {
        if (choix_ordi == "pierre") {
            document.write("<p>l'ordinateur a choisi: " + choix_ordi + "</p>")
            document.write('<p>La pierre est enveloppée par la feuille. Victoire.</p>')
            document.write(victoire)
        }
        else {
            document.write("<p>l'ordinateur a choisi: " + choix_ordi + "</p>")
            document.write('<p>La feuille est découpée par le ciseau. Vous avez perdu.</p>')
            document.write(defaite)
        }
    }
    if (choix_player == "ciseau") {
        if (choix_ordi == "pierre") {
            document.write("<p>l'ordinateur a choisi: " + choix_ordi + "</p>")
            document.write('<p>Le ciseau est écrasé par la pierre. Vous avez perdu.</p>')
            document.write(defaite)
        }
        else {
            document.write("<p>l'ordinateur a choisi: " + choix_ordi + "</p>")
            document.write('<p>La feuille est découpée par le ciseau. Victoire.</p>')
            document.write(victoire)
        }
    }
}






