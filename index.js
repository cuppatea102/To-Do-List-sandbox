document.getElementById('addPokemon').addEventListener('click', function() {
    var rawSearchText = document.getElementById('newPokemon').value;
    //text box value
    var searchText = rawSearchText.toLowerCase();
fetch(`https://pokeapi.co/api/v2/pokemon/${searchText}`)
//get a response object

.then(httpResponse => {
  return httpResponse.json()
  //pull out the json from the response object
 })
 .then(pokemonData => {
 //now we have access to the pokemon's data
  console.log(pokemonData)
 

    if (searchText.trim() !== '') {
      // Create a new list item
      var newListItem = document.createElement('li');
      newListItem.id = 'team'
      // <li></li>

     var newDeleteButton = document.createElement('button');
      newDeleteButton.id = 'delete';
      newDeleteButton.onclick = removePokemon;
      newDeleteButton.appendChild(document.createTextNode('X'));
      //<button id="delete" onclick = "removePokemon(event)">'X'</button>

      // Create a new label
      var newLabel = document.createElement('label');
      newLabel.id = 'pokemon'
      //id formerly 'store'
      // <label></label>
  
      var newSprite = document.createElement('img');
      newSprite.src = pokemonData.sprites.front_default

      //Puts pokemon name in the list
      capitalizedName = searchText.charAt(0).toUpperCase() + searchText.slice(1);
      newLabel.appendChild(document.createTextNode(' ' + capitalizedName));
      //newLabel = <label><input type="checkbox" name="To-Do">'example'</label>

      newListItem.appendChild(newDeleteButton);
      //<li><button id="delete" onclick = "removePokemon(event)">'X'</button></li>
    
      // Append the label to the list item
      newListItem.appendChild(newLabel);
      // <li><label><input type="checkbox" name="To-Do">'example'</label><li><button id="delete" onclick = "removePokemon(event)">'X'</button></li></li>
  

      newListItem.appendChild(newSprite);

      // Append the list item to the to-do list
      document.getElementById('fullTeam').appendChild(newListItem);
    //  <ul id="fullTeam">

      // Clear the input field
      document.getElementById('newTodo').value = '';

    }
  });

})


 function removePokemon(event) {
 const element = event.target.closest('li');
 element.remove(); // Removes the 'li' element next to the button
 };