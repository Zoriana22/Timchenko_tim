import { getMainTitle } from "../components/mainTitle.js"
import { getDesc } from "../components/desc.js"
import { router } from "../main.js"

//Каталог
export function getCatalogPage() {
    const page = document.createElement("div")
    page.classList.add("page", "catalog-page", "container")
    
    const mainTitle = getMainTitle("Каталог")
    const desc = getDesc("Страница в разработке")

    const catalogCharters = document.createElement("ul")
    catalogCharters.classList.add("catalogCharters", "list-reset")

    let charterTitleLi1 = document.createElement("li")
    charterTitleLi1.classList.add("charterTitle")

    let charterLink1 = document.createElement("a")
    charterLink1.href = ""
    charterLink1.classList.add("charter-link")
    charterLink1.textContent = "Горно-шахтное оборудование"
    
    charterLink1.addEventListener("click", function (event){
        event.preventDefault()
        router.navigate('/charterList');
    })

    let charterTitleLi2 = document.createElement("li")
    charterTitleLi2.classList.add("charterTitle")

    let charterLink2 = document.createElement("a")
    charterLink2.href = ""
    charterLink2.classList.add("charter-link")
    charterLink2.textContent = "Запчасти к горно-шахтному оборудованию"

    let charterTitleLi3 = document.createElement("li")
    charterTitleLi3.classList.add("charterTitle")

    let charterLink3 = document.createElement("a")
    charterLink3.href = ""
    charterLink3.classList.add("charter-link")
    charterLink3.textContent = "Проходческое оборудование"

    let charterTitleLi4 = document.createElement("li")
    charterTitleLi4.classList.add("charterTitle")

    let charterLink4 = document.createElement("a")
    charterLink4.href = ""
    charterLink4.classList.add("charter-link")
    charterLink4.textContent = "Запчасти к проходческому оборудованию"

    let charterTitleLi5 = document.createElement("li")
    charterTitleLi5.classList.add("charterTitle")

    let charterLink5 = document.createElement("a")
    charterLink5.href = ""
    charterLink5.classList.add("charter-link")
    charterLink5.textContent = "Оборудование и материалы для ведения проходки"

    let charterTitleLi6 = document.createElement("li")
    charterTitleLi6.classList.add("charterTitle")

    let charterLink6 = document.createElement("a")
    charterLink6.href = ""
    charterLink6.classList.add("charter-link")
    charterLink6.textContent = "Запчасти к проходческому оборудованию"

    let charterTitleLi7 = document.createElement("li")
    charterTitleLi7.classList.add("charterTitle")

    let charterLink7 = document.createElement("a")
    charterLink7.href = ""
    charterLink7.classList.add("charter-link")
    charterLink7.textContent = "Запчасти к обогатительному оборудованию"
    
    let charterTitleLi8 = document.createElement("li")
    charterTitleLi8.classList.add("charterTitle")

    let charterLink8 = document.createElement("a")
    charterLink8.href = ""
    charterLink8.classList.add("charter-link")
    charterLink8.textContent = "Осветительное оборудование для промышленных объектов"

    let charterTitleLi9 = document.createElement("li")
    charterTitleLi9.classList.add("charterTitle")

    let charterLink9 = document.createElement("a")
    charterLink9.href = ""
    charterLink9.classList.add("charter-link")
    charterLink9.textContent = "Аутсорсинг закупочной деятельности"


    charterTitleLi1.append(charterLink1)
    charterTitleLi2.append(charterLink2)
    charterTitleLi3.append(charterLink3)
    charterTitleLi4.append(charterLink4)
    charterTitleLi5.append(charterLink5)
    charterTitleLi6.append(charterLink6)
    charterTitleLi7.append(charterLink7)
    charterTitleLi8.append(charterLink8)
    charterTitleLi9.append(charterLink9)
    catalogCharters.append(charterTitleLi1, charterTitleLi2, charterTitleLi3, charterTitleLi4, charterTitleLi5, charterTitleLi6, charterTitleLi7, charterTitleLi8, charterTitleLi9)
    
    router.on('/charterList', async () => {
        page.innerHTML = ""
        const moduleSubcharter = await import("./charterList.js")
                const subCharterGroup = moduleSubcharter.subCharter()
                page.append(subCharterGroup)
      }); 
    
    router.resolve();
        
    
    page.append(mainTitle, /*desc*/ catalogCharters)

    return page
}