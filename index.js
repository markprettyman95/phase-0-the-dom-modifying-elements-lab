
const main = document.querySelector('#main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.textContent =  "Mark Prettyman" + "is the champion";
document.body.appendChild(newHeader);
