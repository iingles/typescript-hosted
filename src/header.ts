import { el, create } from  './domUtil'

export const mainHeader = ():HTMLElement => {
    const mainHeader: HTMLElement = create('header')
    mainHeader.classList.add('main-header')
    

    const container: HTMLElement = create('div')
    container.classList.add('container')
    container.innerHTML = `
                        <h1>Isaac's Typescript Project</h1>                        
                        <a href="https://swapi.dev"><h4>Using the Star Wars API</h4></a>
                        `

    mainHeader.appendChild(container)

    return mainHeader
}
