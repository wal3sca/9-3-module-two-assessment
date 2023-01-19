// To ensure Cypress tests work as expected, add any code/functions that you would like to run on page load inside this function

function run() {
 // Add code you want to run on page load here
 console.log("hello")
 fetch("https://ghibliapi.herokuapp.com/films")
  .then((response) => response.json())
  // parse the json to  make it a javascript object so that we can use it.
  .then((resJson) => {
    console.log(resJson);


    let dropDown = document.querySelector("#dropdown");


    document.querySelector("#dropdown").addEventListener("change", (event) => {
      event.preventDefault();
      for (let film of films) {
        if (event.target.value === film.title) {
          console.log(film.title);
          document.querySelector("selected-film").textContent = film.title;
        }
      }

    });
  })
  .catch((error)=>{
    console.log(error)
  })
}

// This function will "pause" the functionality expected on load long enough to allow Cypress to fully load
// So that testing can work as expected for now
// A non-hacky solution is being researched

setTimeout(run, 1000);
