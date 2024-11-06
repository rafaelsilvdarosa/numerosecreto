let chute = 0
let numeroSecreto = 0
game.showLongText("Bem vindo ao jogo do número secreto!", DialogLayout.Bottom)
forever(function () {
    numeroSecreto = randint(1, 10)
    chute = game.askForNumber("Escolha um número de 1 a 20")
    if (chute == numeroSecreto) {
        game.splash("Você acertou!!! Parabéns!")
        game.gameOver(true)
    } else {
        game.splash("Não foi dessa vez :(")
    }
    if (chute < numeroSecreto) {
        game.splash("O número secreto é maior.")
    } else {
        game.splash("O número secreto é menor.")
    }
})
