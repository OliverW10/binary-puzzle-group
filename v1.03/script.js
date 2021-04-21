
function toggleGridSquare(event){
	innerText = this.childNodes[0];
	if(innerText.innerHTML == "0"){
		innerText.innerHTML = "1";
	}
	else{
		innerText.innerHTML = "0";
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
	*/
}

createGrid()