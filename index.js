'use strict';

/******* create function to fetch images from DOG API site *****/

function getDogImage() {
  fetch('https://dog.ceo/api/breed/hound/images/random')
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Uh oh, something went wrong. Try again.'));
}

/*function checkValidInput(val) {
  if(val >= 1 && val <= 50) {
    return true;
  }
  else {
    return false;
  }
}*/

/******** function to display the images *****/

function displayResults(responseJson) {
  let imageUrls = `<img src="${responseJson.message}" alt="Generated dog image" class="displayedImages">`;

 /* for (let x = 0;x < imageList.length;x++) {
    imageUrls += `<img src="${imageList[x]}" alt="Generated dog image # ${x+1}" class="displayedImages">`;
  }

  console.log(imageUrls);*/

  $('.images').replaceWith(`<div class="images">${imageUrls}</div>`);
}

/******** Event listener ******/
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
      getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});