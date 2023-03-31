/**
 * 
 * @param {HTMLDivElement} element 
 */

export const generatorsFunctionComponents = (element) => {

    // const myGenerator = myFirstGenerator();
    // console.log(myGenerator.next( ));

    const genId = idGenerator();
    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button);

    const renderButton = () => {
        const {value} = genId.next();
        button.innerText = `Click ${value}`
    }

    button.addEventListener('click', renderButton)

}

function* idGenerator() {
    let currentId = 0;
    while(true){
        yield ++currentId;
    }
}

function* myFirstGenerator() {

    yield 'Primer valor'
    yield 'Segundo valor'
    yield 'Tercer valor'
    yield 'Cuarto valor'

    return 'No hay mas valores'

}