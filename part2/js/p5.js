 const quote1 = [
{
	quote: "I love you the more in that I believe you had liked me for my own sake and for nothing else",
},
{
	quote: "But man is not made for defeat. A man can be destroyed but not defeated",
},
{
	quote: "When you reach the end of your rope, tie a knot in it and hang on",
},
{
	quote: "There is nothing permanent except change.",
},
{
	quote: "You cannot shake hands with a clenched fist.",
},
];

const quote2 = [
{
	quote: "Cats are angels with fur.",
},
{
	quote: "Animals are such agreeable friends—they ask no questions; they pass no criticisms.",
},
{
	quote: "An animal’s eyes have the power to speak a great language.",
},
{
	quote: "The better I get to know men, the more I find myself loving dogs.",
},
{
	quote: "Dogs are our link to paradise. They don’t know evil or jealousy or discontent",
},
];






const btn = document.getElementById("generate-btn");

btn.addEventListener("click", function() {
	start();


});

function generate_quote (quotes_arrays,numb_quotes){
	let quotes = "";
	for (var i = 0; i < numb_quotes; i++) {
		let random = Math.floor(Math.random()*quotes_arrays.length);
		quotes+= quotes_arrays[random].quote + "<br/>"
	}
	return (quotes);
}

function show_quote (quotes){
	document.getElementById("quote").innerHTML = quotes;
}


function selectRadioButton(){
	
	let radioValue = document.getElementsByName('quote-type')
	for(let i = 0; i < radioValue.length ; i++){
		if(radioValue[i].checked === true){
			return radioValue[i].value;
		}
	}
}





function start (){
	let n_quotes = document.getElementById('select')
	let numb_quotes = n_quotes.options[n_quotes.selectedIndex].text
	

	if (selectRadioButton() === "Philosophy") {
		show_quote(generate_quote(quote1,Number(numb_quotes)))
	}
	else {
		show_quote(generate_quote(quote2,Number(numb_quotes)))
	}

}

start();