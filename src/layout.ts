import { el, create } from  './domUtil'
import { button } from './button'
import { actionColumn } from './actionColumn'
import { row } from './row'
// import { dataDisplay } from './dataDisplay'


export const layout = ():HTMLElement => {
    const main: HTMLElement = create('main')
    const container: HTMLElement = create('div')
    container.classList.add('container')

    const actionRow = row()
    const dataRow = row()

    actionRow.appendChild(actionColumn('Person', 'Star Wars People', 'people'))
    actionRow.appendChild(actionColumn('Planet', 'Star Wars Planets', 'planets'))
    actionRow.appendChild(actionColumn('Starship', 'Star Wars Starships', 'starships'))
    actionRow.appendChild(actionColumn('Species', 'Star Wars Species', 'species'))

    container.appendChild(actionRow)
    container.appendChild(dataRow)

    main.appendChild(container)    

    return main
}
