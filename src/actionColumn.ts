import { el, create } from  './domUtil'
import { button } from './button'
import { Person, Planet, Starship, Species } from './interfaces'

export const actionColumn = (heading: string, text: string, action: string):HTMLElement => {
    const actionColumn: HTMLElement = create('div')
    actionColumn.classList.add('action-col')

    // Header
    const actionColumnHeader: HTMLElement = create('header')
    actionColumnHeader.classList.add('action-column-header')
    actionColumnHeader.innerHTML = `<h2>${heading}</h2>`
    
    // Content
    const actionColumnContent: HTMLElement = create('p')
    actionColumnContent.classList.add('action-column-content')
    actionColumnContent.innerHTML = text

    // Append header and content
    actionColumn.appendChild( actionColumnHeader )
    actionColumn.appendChild( actionColumnContent )
    actionColumn.appendChild( button('click', async () => {
        const random: number = Math.floor(Math.random() * (1 + 10) + 1)

        const response = await fetch(`https://swapi.dev/api/${action}/${random}`)

        // const data: JSON = await response.json()

        if (action === 'people') {
            const data:Person = await response.json()

            window.dispatchEvent(new CustomEvent("loadData", { detail: data }))
        }

        if (action === 'planets') {
            const data:Planet = await response.json()

            window.dispatchEvent(new CustomEvent("loadData", { detail: data }))
        }

        if (action === 'starships') {
            const data:Starship = await response.json()
            
            window.dispatchEvent(new CustomEvent("loadData", { detail: data }))
        }

        if (action === 'species') {
            const data:Species = await response.json()

            window.dispatchEvent(new CustomEvent("loadData", { detail: data }))
        }

        
        
    }, 'action-box-button' ) )

    return actionColumn
}