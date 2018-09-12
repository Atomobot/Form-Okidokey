var laforma = document.getElementById('the-form');
console.log(laforma);

laforma.addEventListener('submit', function (event) {
    event.preventDefault();
    var okidokey = confirm('All Ok?');
    console.log(okidokey);
    if(okidokey === true) {
        console.log('All is Ok!');
    } else {
        console.log('Nothing is good!');
    }
    var name = prompt('What is your name?');
    console.log(name);
});