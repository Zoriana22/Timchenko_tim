//Карточка главной страницы
export function getMainInfo() {
    const mainInfoItem = document.createElement("div")
    mainInfoItem.classList.add("mainInfo")

    const mainInfoTitle = document.createElement("h2")
    mainInfoTitle.classList.add("mainInfo__title")
    mainInfoTitle.textContent = "О компании"

    const mainInfotext = document.createElement("p")
    mainInfotext.classList.add("mainInfotext")
    mainInfotext.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cupiditate eos quo, porro veniam explicabo ex soluta ea maxime voluptates fugit expedita deleniti ipsa itaque doloribus laudantium ad laboriosam animi!"

    //const addBasket = document.createElement("button")
    //addBasket.classList.add("btn")
    //addBasket.textContent = "В корзину"
    
    mainInfoItem.append(mainInfoTitle, mainInfotext)
    return mainInfoItem
}