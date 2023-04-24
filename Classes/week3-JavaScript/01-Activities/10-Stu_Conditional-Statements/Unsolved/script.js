// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x < 25);
var expression2 = (x > 50);

var message1 = "True ✅ True ✅";
var message2 = "True ✅ False ❌";
var message3 = "False ❌ True ✅";
var message4 = "False ❌ False ❌";

if (expression1 && expression2) { console.log(message1);}
if (expression1) { console.log(message2);}
if (expression2) { console.log(message3);}
if (!expression1 && !expression2) { console.log(message4);}
