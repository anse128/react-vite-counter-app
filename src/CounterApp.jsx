import PropTypes from 'prop-types'
import { useState } from 'react'



export const CounterApp = ({ value }) => {
    
    const [counter, setCounter] = useState(value)
    
    const handleAdd = (event) => {
        console.log(event)
        // setCounter(counter + 1)
        setCounter((c)=>c+1)           //otra forma
    }

    // function handleAdd(event, newValue) {
    //     console.log(event)
    //     console.log(newValue)
    // }
    return (
        <>
            <h1>CounterApp</h1>
            <h1>{counter}</h1>
            {/* <button onClick={(event) => handleAdd(event, 'Hola')}> */}
            <button onClick={handleAdd}>
                +1
            </button >
        </>

    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
CounterApp.defaultProps = {
    value: 1
}







