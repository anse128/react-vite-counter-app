import React from 'react' // imr
import ReactDOM from 'react-dom/client' //imp
import { HelloWorldApp } from './HelloWorldApp'
import { FirstApp } from './FirstApp'

import { CounterApp } from './CounterApp'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render( // id = root del html
    <React.StrictMode> 
        <CounterApp value={10} />
        {/* <FirstApp  title = "Hola, Soy Vegeta"/> */}
    </React.StrictMode>
)



// react testing library es una libreria que está mas enfocada en lo que sucede en la pantalla despues de hacer las interacciones, hacer todo lo que hariamos de manera manual, clicks etc...

// Jest está mas orientada a hacer las acerciones y hacer mocks de funciones que queremos evaluar












// import React from 'react' // imr
// import ReactDOM from 'react-dom/client' //imp
// import { HelloWorldApp } from './HelloWorldApp'
// import { FirstApp } from './FirstApp'

// import { CounterApp } from './CounterApp'
// import './styles.css'
// // componente inicial
// //los componentes no suelen estar en el main
// // function App() {     // todos los nombres de sus functional components van capitalizados con PascalCase o UpperCamelCase
// //     // document.createElement....
// //     return <h1>Hola Mundo!!!</h1>
// // }

// // forma de renderizar el componente
// ReactDOM.createRoot(document.getElementById('root')).render( // id = root del html
//     <React.StrictMode> {/* se aconseja trabajar en modo estricto*/}
//         {/* <HelloWorldApp />        renderizamos el app */}
//         {/* <FirstApp title="Hola, soy Sebastian" subTitle={123} /> */}
//         {/* <FirstApp title /> booleano */}
//         <FirstApp />
//         {/* <CounterApp value={10} /> */}
//         {/* <FirstApp  /> */}
//     </React.StrictMode>
// )



// // react testing library es una libreria que está mas enfocada en lo que sucede en la pantalla despues de hacer las interacciones, hacer todo lo que hariamos de manera manual, clicks etc...

// // Jest está mas orientada a hacer las acerciones y hacer mocks de funciones que queremos evaluar



