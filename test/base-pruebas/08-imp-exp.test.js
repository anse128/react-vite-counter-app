import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un héroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id)

        // console.log(hero)

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test('getHeroeById debe de retornar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id)

        // console.log(hero)

        expect(hero).toBeFalsy()
    })


    // Tarea:
    // debe de retornar un arreglo con los heroes de DC
    // length === 3
    // toEqual al arreglo filtrado

    // debe de retornar un arreglo con los heroes de Marvel
    // length === 2 

    test('getHeroeById debe de retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const hero = getHeroesByOwner(owner)

        // console.log(hero)

        const heroDC = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ]

        expect(hero).toEqual(heroDC)
        expect(hero.length).toEqual(3)


        expect(hero).toEqual(heroes.filter((heroe) => heroe.owner === owner))
    })

    test('getHeroeById debe de retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner)

        // console.log(hero)

        const heroMarvel = [
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            },
        ]

        expect(hero).toEqual(heroMarvel)

        expect(hero.length).toEqual(2)
    })

})