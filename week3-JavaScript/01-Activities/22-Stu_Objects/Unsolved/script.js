//WRITE YOUR CODE BELOW

var customerOrder = {
	name: 'Coffee', 
	sugars: '2', 
	ready: false
};

console.log(customerOrder.name + ' with ' + customerOrder['sugars'] + ' sugars');

if (customerOrder.ready) 
	{console.log('Ready for Pick-Up')} 
	else 
	{console.log('Still on order queue')};