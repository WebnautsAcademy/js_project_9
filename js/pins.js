const pinTemplate = document.querySelector('#pin').content.querySelector('button');
const mapPinsElement = document.querySelector('.map__pins');

console.log(mapPinsElement);

export function getPins(data) {
    data.forEach((it, i, arr) => {
        const pinElement = pinTemplate.cloneNode(true);
        const img = pinElement.querySelector("img");
        img.src = it.author.avatar;

        pinElement.style.left = it.location.y + "px";
        pinElement.style.top = it.location.x + "px";

        mapPinsElement.insertAdjacentElement("beforeend", pinElement);
    })
}