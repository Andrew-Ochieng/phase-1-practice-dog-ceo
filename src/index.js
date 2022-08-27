console.log('%c HI', 'color: firebrick')
let breeds = [];

function getImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
        .then((response) => response.json())
        .then((data) => {
            data.message.forEach(image => addImage(image))
        });     

}


function addImage(dogPicUrl) {
    let container = document.querySelector('#dog-image-container');
    let newImage = document.createElement('img');
    newImage.src = dogPicUrl;
    container.appendChild(newImage);
}


function getBreedOptions() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
      .then(res => res.json())
      .then(results => {
  
        breeds = Object.keys(results.message);
        updateBreedList(breeds);
        addBreedSelectListener();
      });
  }
  
function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
}
  
function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}
  
function selectBreedWithLetter(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}
  
function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
        selectBreedWithLetter(event.target.value);
    });
}
  
function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
}
  
function updateColor(event) {
    event.target.style.color = 'palevioletred';
} 



document.addEventListener('DOMContentLoaded', () => {
    getImages();
    getBreedOptions();

})





