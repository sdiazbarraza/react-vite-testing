
import { getHeroeByIdAsync} from "../../src/base-pruebas/09-promesas";
describe('Pruebas en 09-promesas', () => { 

    test('getHeroeByIdAsync debe retornar un héroe async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toEqual({id: 1, name: 'Batman', owner: 'DC'});
                // done() es una función que se llama para indicar que la prueba ha terminado
                done();
            });
    });

    test('getHeroeByIdAsync debe retornar un error si el héroe por id no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    });

 });