document.getElementById('addTodo').addEventListener('click', function() {
    var newTodoText = document.getElementById('newTodo').value;
    
    if (newTodoText.trim() !== '') {
      // Create a new list item
      var newListItem = document.createElement('li');
  
      // Create a new label
      var newLabel = document.createElement('label');
  
      // Create a new checkbox
      var newCheckbox = document.createElement('input');
      newCheckbox.type = 'checkbox';
      newCheckbox.name = 'To-Do';
  
      // Append the checkbox and text to the label
      newLabel.appendChild(newCheckbox);
      newLabel.appendChild(document.createTextNode(' ' + newTodoText));
  
      // Append the label to the list item
      newListItem.appendChild(newLabel);
  
      // Append the list item to the to-do list
      document.getElementById('todoList').appendChild(newListItem);
  
      // Clear the input field
      document.getElementById('newTodo').value = '';
    }
  });