import PropTypes from 'prop-types'

const handleAdd = (event, newValue) => {
    console.log(event)
    // console.log(newValue)
}

export const CounterApp = ({ value }) => {

    // function handleAdd(event, newValue) {
    //     console.log(event)
    //     console.log(newValue)
    // }
    return (
        <>
            <h1>CounterApp</h1>
            <h1>{value}</h1>
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







