function sortearFrase() {
    const fraseManha = [
        "Que seu dia comece com energia!",
        "Hoje é uma nova oportunidade para evoluir.",
        "Pequenos passos geram grandes resultados.",
        "Faça algo hoje que seu futuro agradecerá."
    ]

    const fraseTarde = [
        "A tarde ainda guarda grandes oportunidades.",
        "Continue avançando, você está mais perto do que imagina.",
        "Persistência hoje gera resultados amanhã.",
        "Mantenha o foco e termine o dia com orgulho."
    ]

    const fraseNoite = [
        "Descanse, amanhã será uma nova chance.",
        "Reflita sobre as conquistas de hoje.",
        "Grandes resultados são construídos dia após dia.",
        "Uma boa noite prepara um grande amanhã."
    ]

    const hora = new Date().getHours()

    let frases

    if (hora < 12) {
        frases = fraseManha
    } else if (hora < 18) {
        frases = fraseTarde
    } else {
        frases = fraseNoite
    }

    const sorteio = Math.floor(Math.random() * frases.length)

    document.getElementById('frase').innerHTML = frases[sorteio]
}

function carregar() {
    const manha = document.getElementById('manha')
    const tarde = document.getElementById('tarde')
    const noite = document.getElementById('noite')

    const data = new Date()

    const hora = data.getHours()
    const minutos = String(data.getMinutes()).padStart(2, '0')
    const segundos = String(data.getSeconds()).padStart(2, '0')

    const msg = document.getElementById('msg')
    const cumprimento = document.getElementById('cumprimento')

    msg.innerHTML = `${hora}:${minutos}:${segundos}`

    const dia = String(data.getDate()).padStart(2, '0')
    const mes = String(data.getMonth() + 1).padStart(2, '0')
    const ano = data.getFullYear()

    document.getElementById('data').innerHTML =
        `${dia}/${mes}/${ano}`

    if (hora < 12) {

        cumprimento.innerHTML = 'Bom dia! ☀️'

        manha.style.display = 'block'
        tarde.style.display = 'none'
        noite.style.display = 'none'

        manha.src = 'pexels-edanur-sonkaya-194758981-16077009.jpg'

        document.body.style.background = '#e2cd9f'

    } else if (hora < 18) {

        cumprimento.innerHTML = 'Boa tarde! 🌤️'

        manha.style.display = 'none'
        tarde.style.display = 'block'
        noite.style.display = 'none'

        tarde.src = 'pexels-oandremoura-11264148.jpg'

        document.body.style.background = '#b9846f'

    } else {

        cumprimento.innerHTML = 'Boa noite! 🌙'

        manha.style.display = 'none'
        tarde.style.display = 'none'
        noite.style.display = 'block'

        noite.src = 'pexels-lucaspezeta-27958874.jpg'

        document.body.style.background = '#515154'
    }
}

sortearFrase()
carregar()
setInterval(carregar, 1000)