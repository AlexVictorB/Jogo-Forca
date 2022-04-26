/* Script Responsavel por controlar opções do game*/

function showSettingsPanel() {
    const modal = document.querySelector(".popup-settings")

    modal.classList.add('show')

    modal.addEventListener('click', (e)=> {
        console.log(e)
        if(e.target.id == ".popup-settings" ) {
            modal.classList.remove("show")
        }else if(e.target.id == "close") {
            modal.classList.remove("show")
        }

    })
}