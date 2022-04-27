/* Script Responsavel por controlar opções do game*/
const storage = localStorage


function showSettingsPanel() {
    const modal = document.querySelector(".popup-settings")

    modal.classList.add('show')

    modal.addEventListener('click', (e)=> {
        console.log(e)
        if(e.target.className == "popup-settings show" ) {
            modal.classList.remove("show")
        }else if(e.target.className == "close-button") {
            modal.classList.remove("show")
        }

    })
}

function choiceBackground(i) {
    storage.setItem('Background', '')
    storage.setItem('Background', i)

    applyModify()

}

function applyModify() {
    let imageBackground = storage.getItem('Background')
    if(imageBackground == null){
        imageBackground = '1'
    }
    let background = document.body
    background.style.backgroundImage = `url(../assets/${imageBackground}.png)`
}

applyModify()
