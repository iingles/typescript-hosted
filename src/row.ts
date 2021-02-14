import { el, create } from  './domUtil'

export const row = ():HTMLElement => {
    const row: HTMLElement = create('div')
    row.classList.add('row')

    return row
}
