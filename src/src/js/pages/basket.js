import { getMainTitle } from "../components/mainTitle.js"
import { getDesc } from "../components/desc.js"


//Страница корзины
export function getBasketPage() {
    const page = document.createElement("div")
    page.classList.add("page", "basket-page", "container")
    
    const mainTitle = getMainTitle("Каталог услуг")
    const desc = getDesc("Страница в разработке")
  
    page.append(mainTitle, desc)
    return page
}