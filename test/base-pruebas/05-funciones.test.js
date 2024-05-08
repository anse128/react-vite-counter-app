import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(testUser).toEqual(user)
        //cuando son objetos se compara con el espacio de memoría, y al ser diferente no se puede usar el toBe, debe usarse toEqual o toStricEqual

    })

    test('getUsuario debe de retornar un objeto', () => {

        const name = 'Sebastian'

        const user = getUsuarioActivo(name);

        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        })
    })
})