/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes";

export const callbacksComponents = (element) => {

    const id1 = '5d86371f1efebc31def272e2'
    const id2 = '5d86371f25a058e5b1c8a65e'
    findHeroe(id1, (error, heroe1) => {
        if(error){
            element.innerHTML = error;
            return;
        }
        findHeroe(id2, (error, heroe2) => {
            if(error){
                element.innerHTML = error;
                return;
            }

            element.innerHTML = `${heroe1.name}/${heroe2.name}`;
        })
        // element.innerHTML = cualquierNombre?.name || 'No hay heroe';
    })
    
}

/**
 * 
 * @param {String} id 
 * @param {(error: String|Null, hero: Object) => void} callback 
 */

const findHeroe = (id, callback) => {
    const heroe = heroes.find(heroe => heroe.id === id);

    if(!heroe){
        callback(`Heroe with id ${id} not found.`);
        return;
    }

    callback(null, heroe);
}