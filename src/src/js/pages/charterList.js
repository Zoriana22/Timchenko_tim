import { router } from "../main.js"
import { router } from "../pages/catalog.js"

//Подраздел каталога (перечень)
export function subCharter() {
    const page = document.createElement("div")
    page.classList.add("page", "main-page", "container")
    
    let subCharterTitle = document.createElement("h3")
    subCharterTitle.classList.add("subCharterTitle")
    subCharterTitle.textContent = "Горно-шахтное оборудование"
    
    let subCharterList = document.createElement("ul")
    subCharterList.classList.add("product-list", "list-reset")
    
    let subCharterItem__Li1 = document.createElement("li")
    subCharterItem__Li1.classList.add("sub-charterTitle")

    let subCharterItem__link1 = document.createElement("a")
    subCharterItem__link1.href = ""
    subCharterItem__link1.classList.add("sub-charter-link")
    subCharterItem__link1.textContent = "Лебедки"
    
    let subCharterItem__Li2 = document.createElement("li")
    subCharterItem__Li2.classList.add("sub-charterTitle")

    let subCharterItem__link2 = document.createElement("a")
    subCharterItem__link2.href = ""
    subCharterItem__link2.classList.add("sub-charter-link")
    subCharterItem__link2.textContent = "Вентиляторы"

    let subCharterItem__Li3 = document.createElement("li")
    subCharterItem__Li3.classList.add("sub-charterTitle")

    let subCharterItem__link3 = document.createElement("a")
    subCharterItem__link3.href = ""
    subCharterItem__link3.classList.add("sub-charter-link")
    subCharterItem__link3.textContent = "Насосы"


    subCharterItem__Li1.append(subCharterItem__link1)
    subCharterItem__Li2.append(subCharterItem__link2)
    subCharterItem__Li3.append(subCharterItem__link3)

    subCharterList.append(
        subCharterItem__Li1,
        subCharterItem__Li2,
        subCharterItem__Li3
    )
       
    page.append(subCharterTitle, subCharterList)
    return page
}
