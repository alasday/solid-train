var pic = document.getElementById("vimage");
var clr = document.getElementById("clr");

var cx = 0;
var cy = 0

var circleclick = function(e){

    if (cx != 0 && cy != 0){
	var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
	line.setAttribute("x1", cx);
	line.setAttribute("y1", cx);
	line.setAttribute("x2", e.offsetX);
	line.setAttribute("y2", e.offsetY);
	line.setAttribute("style", "stroke:rgb(0,0,0);stroke-width:3");
	svg.appendChild(line);
    }


    cy = e.offsetY;
    cx = e.offsetX;

    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", 0);
    c.setAttribute("cy", 0);
    c.setAttribute("r", "100");
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
    
    }



var clear = function(e) {
    svg.innerHTML = "";
    cx = 0;
    cy = 0;
};


clr.addEventListener("click", clear);

pic.addEventListener("click", circleClick);



