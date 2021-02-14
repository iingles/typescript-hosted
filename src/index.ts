import './css/main.css'
import { el, create } from './domUtil'
import { layout } from './layout'
import { mainHeader } from './header'
import { dataDisplay } from './dataDisplay'

window.addEventListener('load', ()=> {
   const app: HTMLElement = document.getElementById('app')

   app.appendChild( mainHeader() )

   app.appendChild( layout() )

   app.appendChild( dataDisplay() )
   
 

   // I'm not sure why this works, but it does, so I'm leaving it
   window.addEventListener('loadData', (event: Event) => { 
      const detail = (event as CustomEvent).detail

      const dataDisplay: HTMLElement= document.querySelector('#dataDisplay')

      const dataContainer = dataDisplay.firstElementChild
      dataContainer.innerHTML = ""
      
      for (let prop in detail ) {
         dataContainer.innerHTML += `<p><h4>${prop}:</h4>${detail[prop]}</p>`
      }
   });

})