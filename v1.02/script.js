
function createGrid(){
	container = document.getElementById("gridContainer");
	for(var i = 0; i < 36; i += 1){
		p = document.createElement("p");
		p.innerHTML = Math.round(Math.random())
		p.className = "gridBoxText"
		el = document.createElement("div");
		el.className = "gridBox"
		el.appendChild(p)
		container.appendChild(el)
	}
}

createGrid()