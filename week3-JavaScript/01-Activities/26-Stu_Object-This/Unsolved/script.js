// TODO: What does 'this' refer to?
// A: The Window object.
console.log(this);

// TODO: What does 'this' refer to?
// A: The helloThis Function
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log? 
// A: 20
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log? 
// A: 5750
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
