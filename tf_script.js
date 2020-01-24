/* Script file for Taco Farm application
   George McRedmond - January 2020 */
   
// Event listener for button click
document.getElementById("button").addEventListener("click", addTaco);

// Variable starts the taco count at zero
var countTaco = 0;

// Function runs on the click event 
function addTaco(){
	// Increment the taco count so the if statement can check the total tacos first!
	countTaco++;
	
	//Decide if more tacos can be added to the page
	if(countTaco <= 10){
		var newImg = document.createElement("img");
		newImg.setAttribute("src", "tacos.png");
		document.getElementById("tacoFarm").appendChild(newImg);
		document.getElementById("tacoCount").innerHTML = countTaco;
	}
	else {
		document.getElementsByTagName("h2")[0].innerHTML = "WOAH!, TOO MANY TACOS!";
		document.getElementById("button").removeEventListener("click", addTaco);
	}
}