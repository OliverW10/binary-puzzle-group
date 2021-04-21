
var slider = document.getElementById("myRange");
var output = document.getElementById("delayOutput");
output.innerHTML = `Delay: ${slider.value}ms`; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = `Delay: ${this.value}ms`;
}

function toggleGridSquare(event){
	var thisGridSquare = this.childNodes[0];
	if(thisGridSquare.innerHTML == "0"){
		thisGridSquare.innerHTML = "1";
	}
	else{
		thisGridSquare.innerHTML = "0";
	}
}

function createGrid(){
	/*
	Creates the html elements for the grid
	*/
	container = document.getElementById("gridContainer");
	for(var i = 0; i < 36; i += 1){
		p = document.createElement("a");
		p.innerHTML = "_"
		p.className = "gridBoxText noselect"
		el = document.createElement("div");
		el.className = "gridBox"
		el.onclick = toggleGridSquare
		el.appendChild(p)
		container.appendChild(el)
	}
}


function getGrid(){
	/*
	Gets the numbers from the grid as a 2d array
	Reads black (Shown as underscores) as -1
	*/
	var grid = []
	var container = document.getElementById("gridContainer");
	var boxes = container.childNodes;
	for(var i = 0; i < boxes.length; i += 1){
		if(i%6 == 0){
			grid.push([])
		}
		grid[grid.length-1].push(boxes[i].innerText)
	}
	return grid
}

function solve(){
	/*
	Solves the binary puzzle
	*/
	console.log(getGrid());
}

createGrid()