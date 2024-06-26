import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"



describe('Prubeas en 09-promesas', () => {

    // done es una funcion que voy a mandar a llamar cuando se termina el codigo, si no jest se va a quedar esperando esa respuesta
    test('getHeroeByIdAsync debe de retornar un héroe', (done) => {

        const id = 1
        getHeroeByIdAsync(id)
            .then(hero => {

                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })

                done()

            })

    })

    test('getHeroeByIdAsync debe de obtener un error si heroe no existe', (done) => {

        const id = 100
        getHeroeByIdAsync(id)
            .then(hero=>{
                expect(hero).toBeFalsy()
                done()
            })
            .catch(error => {

                expect(error).toBe(`No se pudo encontrar el héroe ${id}`)

                done()
            })


    })

})

