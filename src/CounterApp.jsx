import PropTypes from 'prop-types'

export const CounterApp = ({value}) => {
    return (
        <>
            <h1>CounterApp</h1>
            <h1>{value}</h1>
        </>

    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
CounterApp.defaultProps = {
    value: 1
}