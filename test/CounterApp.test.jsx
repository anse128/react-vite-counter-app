import { render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas en el <CounterApp/>', () => {

    
    test('Debe de hacer match con el snapshot', () => {
        
        const initialValue = 1
        const { container } = render(<CounterApp value={initialValue} />)
        // console.log(container)
        expect(container).toMatchSnapshot()
    })
    
    test('Debe de mostrar el valor inicial de 100', () => {
        
        render(<CounterApp value={100} />)
        expect(screen.getByText(100)).toBeTruthy()
        // expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('100')
    })
})