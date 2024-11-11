import heroes from "../../src/data/heroes";
import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
describe('Pruebas en 08-im-exp', () => { 

    test('getHeroeById debe retornar un héroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        //const heroeData = heroes.find(h => h.id === id);
        //expect(heroe).toEqual(heroeData);
        expect(heroe).toEqual({id: 1, name: 'Batman', owner: 'DC'});
    });

    test('getHeroeById debe retornar undefined', () => {
        const id = 100;
        const heroe = getHeroeById(id);
        //const heroeData = heroes.find(h => h.id === id);
        //expect(heroe).toEqual(heroeData);
        expect(heroe).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar un arreglo de DC', ()=>{
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        const heroesFilter = heroes.filter(h => h.owner === owner);
        
        expect(heroes).toEqual(heroesFilter);
        expect(heroes.length).toBe(heroesFilter.length);
    });

    test('getHeroesByOwner debe retornar un arreglo de Marvel', ()=>{
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        const heroesFilter = heroes.filter(h => h.owner === owner);

        expect(heroes).toEqual(heroesFilter);
        expect(heroes.length).toBe(heroesFilter.length);
    });

 })