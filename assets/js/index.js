const data = {
    "multiple": {
        "title": "O poder da versatilidade",
        "text": "Desenvolvida com o intuito de ajudar em diversos momentos, o MP plant pode se adaptar as demandas necessárias, podendo avaliar as situações desde um contexto municipal, até um contexto global"
    },
    "growth": {
        "title": "A inteligência ao seu favor",
        "text": "Seu grande diferencial é a capacidade de sugerir as melhores formas de combater aquele devido problema, pois é capaz de detectar as diferentes manifestações da poluição e promover uma solução para cada contexto."
    },
    "delivery": {
        "title": "Sempre atualizado",
        "text": "Além de sugerir algumas soluções, ela entrega de forma mensal um relatório completo informando o estado em que aquele local se encontra, apresentando: gráficos, tabelas, mapas de calor, dentre outras formas de dados. Com isso, o usuário sempre vai está atualizado da situação e se os problemas estão sendo resolvidos"
    }
}

function structuredView(category) {
    const tabWrapper = document.createElement('div')
    const contentTitle = document.createElement('h2')
    const contentText = document.createElement('p')
    const img = document.createElement('img')

    tabWrapper.classList.add('tab-wrapper')
    contentTitle.classList.add('content-title')
    contentText.classList.add('content-text')
    img.classList.add('content-image')

    img.src = `../../assets/images/${category}.png`
    img.alt = `ilustração abstrata de diversas cores`
    contentTitle.innerHTML = data[category].title
    contentText.innerHTML = data[category].text

    tabWrapper.append(contentTitle)
    tabWrapper.append(contentText)

    return { tabWrapper, img }
}

function toOrigin() {
    window.scroll({
        top: 0
    })
}

function renderTabView(category) {
    const tabContent = document.querySelector('.tab-content')
    const value = structuredView(category)

    tabContent.innerHTML = ''
    tabContent.appendChild(value.tabWrapper)
    tabContent.appendChild(value.img)
}

function selectedTab(tab){
    const tabs = document.querySelectorAll('.tab-item')
    tabs.forEach(tab => {
        tab.classList.remove('active')
    })

    tab.classList.add('active')
}

function addTabView() {
    const listTab = document.querySelectorAll('.tab-item')
    console.log(listTab[1])

    listTab.forEach(item => {

        item.addEventListener('click', (e) => {
            console.log(e.target)
            const category = e.target.dataset.category
            renderTabView(category)
            selectedTab(e.target)
        })
    })

}

const btnOrigin = document.querySelector('.btn-origin')

btnOrigin.addEventListener('click', toOrigin)
renderTabView('multiple')
addTabView()