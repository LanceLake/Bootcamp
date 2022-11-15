var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var shoppingItemEl = $('input[name="shopping-input"]');


// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function handleFormSubmit(event) {
	event.preventDefault();
	var shoppingItem = $('input[name="shopping-input"]').val();
	if(!shoppingItem)
		{
			console.log('No item in input');
			return;
		}


}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission

shoppingFormEl.on('submit', function(event) 
	{
		event.preventDefault();

		var shoppingItem = $('input[name="shopping-input"]').val();

		if(!shoppingItem)
		{
			console.log('No item typed.');
			return;
		}


		var listItem = $('<li>');
		listItem.text(shoppingItem);
		shoppingListEl.append (listItem);

		shoppingItemEl.val('');

	});