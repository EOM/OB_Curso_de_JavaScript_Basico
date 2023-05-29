const papelera = document.getElementById('papelera');
const fragmentos = document.getElementsByClassName('fragmento');

papelera.addEventListener('dragover', function(event) {
    event.preventDefault();
});

papelera.addEventListener('drop', function(event) {
    event.preventDefault();
    const fragmentoId = event.dataTransfer.getData('text/plain');
    const fragmento = document.getElementById(fragmentoId);
    fragmento.remove();
});

for (const fragmento of fragmentos) {
    fragmento.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
    });
}
