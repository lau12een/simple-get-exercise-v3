'use strict';

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
/*******create function to get the user's breed info******/

function getUserBreed() {
    let breed = $("#dog-breed").val();
                  return breed;
}

/******** Event listener ******/
function watchForm() {
  $('#form').submit(event => {
    event.preventDefault();
      getDogImage();
  });
}

/******* create function to fetch images from DOG API site *****/

function getDogImage() {
  fetch('https://dog.ceo/api/breed/' + getUserBreed() + "/images/random")
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Uh oh, breed missing. Try again and please check your spelling.'));
}
/******** function to display the images *****/

function displayResults(responseJson) {
    console.log(responseJson);
    if (responseJson.status !== "success") {
        alert(" Breed not found. Please check spelling or try one word for double word breeds (i.e siberian husky, use 'husky'). Try again.");
    } else if (responseJson.status === "success") {
        let imageUrls = `<img src="${responseJson.message}" alt="Generated dog image" class="displayedImages">`;
         $('.images').replaceWith(`<div class="images">${imageUrls}</div>`);

    }
}


