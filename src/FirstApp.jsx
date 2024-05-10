
import PropTypes from 'prop-types' // para definirle el tipo a las propiedades

export const FirstApp = ({ title, subTitle, name }) => { // 


    return (

        <>
            <h1>{title}</h1>
            <p>{subTitle}</p> {/*  */}
            <p>{name}</p>
        </>
    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired, // manda error si no es mandado
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    // title: 'No hay título',
    subTitle: 'No hay subtítulo',
    name: 'hola hp'
}











// // import {Fragment} from 'react'

// // cuando vamos a tener dos elementos en el functionalcomponent no se debe contener en un div
// // para eso se usa un fragment pero se debe de importar
// // lo mejor es usar <> y asi no hay que importar nada

// // const newMessage = 'Fernando' // Regla si la variable no esta cambiando de valor debe de ir fuera del functional component, porque react no va a reprocesar algo que este fuera del componente

// import PropTypes from 'prop-types' // para definirle el tipo a las propiedades

// // const newMessage = {
// //     message: 'Hola Mundo',
// //     title: 'Sebastian'
// // }

// // const getResult = (i) => {
// //     return (2 + 2 + i)
// // }


// // export const FirstApp = (props) => { // no es lo comun usar las props así 
// // export const FirstApp = ({ title = 'Hola, Soy Sebastián'}) => { // valor por defecto
// export const FirstApp = ({ title, subTitle, name }) => { // 

//     // console.log(title)

//     // if (!title) {
//     //     throw new Error('El title no existe')
//     // }


//     return (
//         // <div>
//         //     <h2>FirstApp</h2>
//         //     <h2>FirstApp</h2>
//         // </div>
//         // <Fragment>
//         //     <h2>FirstApp</h2>
//         //     <h2>FirstApp</h2>
//         // </Fragment>
//         <>
//             {/* <h2>{newMessage.title}</h2> */}
//             {/* <h2>{props.title}</h2> */}
//             <h1>{title}</h1>

//             {/* <h2>{getResult(2)}</h2>  no puede ser una función asincrona */}

//             {/* <code>{JSON.stringify(newMessage)}</code> */}

//             <p>{subTitle}</p> {/*  */}
//             <p>{name}</p>
//         </>
//     )
// }


// FirstApp.propTypes = {
//     title: PropTypes.string.isRequired, // manda error si no es mandado
//     subTitle: PropTypes.string
// }

// FirstApp.defaultProps = {
//     title: 'No hay título',
//     subTitle: 'No hay subtítulo',
//     name: 'hola hp'
// }
