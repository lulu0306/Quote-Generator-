const quote1 = ["a quick brown fox","a slow black tortoise","a fast blue horse","a rabid green dog","a small yellow mouse"];
const quote2 = ["jumped","ran","swam","walked","sat"];
const quote3 = ["over a lazy dog ", "over a fence", "under the bridge", "above the sky", "under the bed "];






	const btn = document.getElementById("generate-btn");

	btn.addEventListener("click", function() {



		let random = Math.floor(Math.random()*quote1.length);
		let random1 = Math.floor(Math.random()*quote2.length);
		let random2 = Math.floor(Math.random()*quote3.length);


			document.getElementById("quote").textContent = quote1[random] + " " + quote2[random1] + " " + quote3[random2];
		
			


	});
