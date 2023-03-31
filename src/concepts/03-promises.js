/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes"

export const promiseComponents = (element) => {

    const renderHeroe = (heroe) => {
        element.innerHTML = heroe.name
    }

    const renderTwoHeroes = (heroe1, heroe2) => {
        element.innerHTML = `
        <h3>${heroe1.name}</h3>
        <h3>${heroe2.name}</h3>
        `
    }

    const renderError = (error) => {
        element.innerHTML = `
        <h3>${error}</h3>
        `
    }

    const id1 = '5d86371fd55e2e2a30fe1ccb'
    const id2 = '5d86371f233c9f2425f16916'

    Promise.all([
        findHeroe(id1),
        findHeroe(id2)
    ])
    .then(([heroe1, heroe2]) => renderTwoHeroes(heroe1, heroe2))
    .catch(renderError)
    
    
    
    //! Forma 2
    let heroe1;
    // findHeroe(id1)
    //     .then(heroe => {
    //         heroe1 = heroe;
    //         return findHeroe(id2);
    //     }).then(heroe2 => {
    //         renderTwoHeroes(heroe1, heroe2)
    //     }).catch(renderError)

    //! Forma 1
    // findHeroe(id1)
    //     .then((heroe1) => {

    //         findHeroe(id2)
    //             .then(heroe2 => {
    //                 renderTwoHeroes(heroe1, heroe2)
    //             })
    //             .catch(renderError)
    //     })
    //     .catch(renderError)

}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */

const findHeroe = (id) => {

    return new Promise( (resolve, reject) => {
        const heroe = heroes.find(heroe => heroe.id === id)

        if(heroe){
            resolve(heroe);
            return;
        }

        reject(`Heroe with id ${id} not found`)

    })


}