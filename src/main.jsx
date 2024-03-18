import React from 'react' // imr
import ReactDOM from 'react-dom/client' //imp
import { HelloWorldApp } from './HelloWorldApp'
import { FirstApp } from './FirstApp'
// componente inicial
//los componentes no suelen estar en el main
// function App() {     // todos los nombres de sus functional components van capitalizados con PascalCase o UpperCamelCase
//     // document.createElement....
//     return <h1>Hola Mundo!!!</h1>
// }

// forma de renderizar el componente
ReactDOM.createRoot(document.getElementById('root')).render( // id = root del html
    <React.StrictMode> {/* se aconseja trabajar en modo estricto*/}
        <HelloWorldApp />   {/*      renderizamos el app */}
        <FirstApp />
    </React.StrictMode>
)





