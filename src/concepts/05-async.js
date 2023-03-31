/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes"

export const asyncComponents = (element) => {

    const id1 = '5d86371f2343e37870b91ef1'
    console.log('Inicio de componente');
    
    findHeroe(id1)
    .then(name => element.innerHTML = name)
    .catch(error => element.innerHTML = error)
    
    console.log('Fin  de componente');
}


const findHeroe = async(id) => {
    const heroe = heroes.find(heroe => heroe.id === id);
    if(!heroe)
        throw `Heroe with id ${id} not found`

    return heroe?.name
}