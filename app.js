const laforma = document.querySelector('#the-form');

console.log(laforma);


laforma.addEventListener('submit', (e) => {
    e.preventDefault();
    const okidokey = confirm('all Ok?');

    if (okidokey === true) {
        console.log('all is Ok!');
    } else {
        console.log('Nothing is good!');
    }

    const name = prompt('What is your name?');
    console.log(name);
});
