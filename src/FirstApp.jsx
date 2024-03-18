// import {Fragment} from 'react'

// cuando vamos a tener dos elementos en el functionalcomponent no se debe contener en un div
// para eso se usa un fragment pero se debe de importar
// lo mejor es usar <> y asi no hay que importar nada

// const newMessage = 'Fernando' // Regla si la variable no esta cambiando de valor debe de ir fuera del functional component, porque react no va a reprocesar algo que este fuera del componente

const newMessage = {
    message: 'Hola Mundo',
    title: 'Sebastian'
}

const getResult = (i) =>{
    return(2+2+i)
}


export const FirstApp = () => {

    return (
        // <div>
        //     <h2>FirstApp</h2>
        //     <h2>FirstApp</h2>
        // </div>
        // <Fragment>
        //     <h2>FirstApp</h2>
        //     <h2>FirstApp</h2>
        // </Fragment>
        <>
            <h2>{newMessage.title}</h2>

            <h2>{getResult(2)}</h2> {/*  no puede ser una función asincrona*/}

            <code>{JSON.stringify(newMessage)}</code>

            <p>Soy un subtitulo</p>
        </>
    )
}

