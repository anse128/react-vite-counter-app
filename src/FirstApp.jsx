// import {Fragment} from 'react'

// cuando vamos a tener dos elementos en el functionalcomponent no se debe contener en un div
// para eso se usa un fragment pero se debe de importar
// lo mejor es usar <> y asi no hay que importar nada
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
            <h2>FirstApp</h2>
            <p>Soy un subtitulo</p>
        </>
    )
}
