const display = document.querySelector(".secret-word")
const wordList = []
let categoryList = []
let tip = null

const jsonfile = "./js/words.json"

function getValue(url) {
    let request = new XMLHttpRequest()

    request.open("GET", url, false)
    request.send()

    return request.responseText
}

let json = JSON.parse(getValue(jsonfile))

for(i in json) {
    wordKey = (json[i]["palavra"])
    wordList.push(wordKey)
}

for(i in json) {
    categoryKey = (json[i]["categoria"])
    categoryList.push(categoryKey)
}


/*console.log(wordList)*/

categoryList = categoryList.filter(function(el , i) {
    return categoryList.indexOf(el) === i
})
/*console.log(categoryList)*/

let secretWord =
  wordList[Math.floor(Math.random() * wordList.length)]
const incorretLetter = [];
const correctLetter = [];

for(i in json) {
    sendCategory = (json[i])
    /*console.log(sendCategory)*/
    
    if(sendCategory["palavra"] === secretWord) {
        tip = sendCategory['categoria']
    }
}

secretWord = secretWord.toUpperCase()
console.log(secretWord)
console.log(tip)


function showTip() {
    displayTip = document.querySelector(".tip-display")

    displayTip.innerHTML = tip
}

showTip()

function insertLetter(letter) {
    if (incorretLetter.includes(letter)) {
        mostrarAvisoLetraRepetida();
      } else {
        if (secretWord.includes(letter)) {
          console.log(secretWord.includes(letter))
          correctLetter.push(letter);
        } else {
          console.log(secretWord.includes(letter))
          incorretLetter.push(letter);
        }
      }
      atualizarJogo();
}

function atualizarJogo() {
    mostrarLetrasErradas();
    mostrarLetrasCertas();
    desenharForca();
    checarJogo();
  }

function mostrarLetrasErradas() {
    const div = document.querySelector(".letras-erradas-container");
    div.innerHTML = "<h3>Letras erradas</h3>";
    incorretLetter.forEach((letra) => {
      div.innerHTML += `<span>${letra}</span>`;
    });
  }

function mostrarLetrasCertas() {
    const container = document.querySelector(".secret-word");
    container.innerHTML = "";
    secretWord.split("").forEach((letra) => {
      if (correctLetter.includes(letra)) {
        container.innerHTML += `<span>${letra}</span>`;
      } else {
        container.innerHTML += `<span>_</span>`;
      }
    });
  }

function checarJogo() {
    let mensagem = "";
    const container = document.querySelector(".secret-word");
    const partesCorpo = document.querySelectorAll(".forca-parte");
  
    if (incorretLetter.length === partesCorpo.length) {
      mensagem = "Fim de jogo! Você perdeu!";
    }
  
    if (secretWord === container.innerText) {
      mensagem = "Parabéns! Você ganhou!";
    }
  
    if (mensagem) {
      document.querySelector("#mensagem").innerHTML = mensagem;
      document.querySelector(".popup-container").style.display = "flex";
    }

    console.log(container.innerText)
  }


function desenharForca() {
    const partesCorpo = document.querySelectorAll(".forca-parte");
    for (let i = 0; i < incorretLetter.length; i++) {
      partesCorpo[i].style.display = "block";
    }
  }


function mostrarAvisoLetraRepetida() {
    const aviso = document.querySelector(".aviso-palavra-repetida");
    aviso.classList.add("show");
    setTimeout(() => {
      aviso.classList.remove("show");
    }, 1000);
  }


function reloadGame() {
    window.location.reload();
  }