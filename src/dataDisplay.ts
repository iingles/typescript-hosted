import { el, create } from  './domUtil'

export const dataDisplay = () => {
    const dataDisplay = create('div')
    dataDisplay.id = "dataDisplay"

    const container = create('div')
    container.classList.add('container')

    dataDisplay.appendChild(container)

    return dataDisplay
}