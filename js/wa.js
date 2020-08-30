let owas;

function loadWasm(filename) {
    return fetch(filename)
        .then(response => response.arrayBuffer())
        .then(bits => WebAssembly.compile(bits))
        .then(module => { return new WebAssembly.Instance(module) });
};

loadWasm('../test.wasm')
    .then(instance => {
        owas = instance.exports._Z4owasii;
        // computed the integer values
        document.getElementById('compute').innerHTML = owas(6, 6);
    })