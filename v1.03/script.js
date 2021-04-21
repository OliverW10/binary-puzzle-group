
function createGrid(){
	/*
	Creates the html elements for the grid
	*/
	container = document.getElementById("gridContainer");
	for(var i = 0; i < 36; i += 1){
		p = document.createElement("p");
		p.innerHTML = 0
		p.className = "gridBoxText"
		el = document.createElement("div");
		el.className = "gridBox"
		el.appendChild(p)
		container.appendChild(el)
	}
}

function getGrid(){
	/*
	Gets the numbers from the grid as a 2d array
	*/
}

createGrid()