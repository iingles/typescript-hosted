import { el, create } from  './domUtil'

export const button = (text: string, callBack?:() => void, className?: string,  ) :HTMLElement => {
    const btn: HTMLElement = create('button')
    btn.classList.add('btn')

    btn.innerHTML = text

    if ( className !== undefined ) btn.classList.add( className )

    if ( callBack !== undefined ) {
        btn.addEventListener('click', () => {
            callBack()
        })
    }

    return btn
}
