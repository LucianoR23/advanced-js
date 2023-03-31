import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
// import { enviromentsComponents } from './src/concepts/01-enviroments'
// import { callbacksComponents } from './src/concepts/02-callbacks'
// import { promiseComponents } from './src/concepts/03-promises'
import { promiseRaceComponents } from './src/concepts/04-promise-race'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">

    </div>
  </div>
`

const element = document.querySelector('.card');

// enviromentsComponents(element);
// callbacksComponents(element);
// promiseComponents(element);
promiseRaceComponents(element)