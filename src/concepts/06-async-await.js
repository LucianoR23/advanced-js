import { heroes } from "../data/heroes"


/**
 * 
 * @param {HTMLDivElement} element 
 */


export const asyncAwaitComponents = async(element) => {

    const id1 = '5d86371fd55e2e2a30fe1cc3';
    const id2 = '5d86371fd55e2e2a30fe1cc4';

    const {name} = await findHeroe(id1);
    const {name: name2} = await findHeroe(id2);

    element.innerHTML = `${name} and ${name2}`;

    //* Controlar el error de encontrar heroe
    // try {
    //     const {name} = await findHeroe(id1);
    //     const {name: name2} = await findHeroe(id2);
    
    //     element.innerHTML = `${name} and ${name2}`;
        
    // } catch (error) {
    //     element.innerHTML = error;
    // }
}


const findHeroe = async(id) => {

    const heroe = heroes.find(heroe => heroe.id === id)
    if(!heroe)
        throw `Heroe not found`
    
    return heroe;

}