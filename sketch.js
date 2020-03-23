function setup(){
	createCanvas (600, 600, WEBGL);
}

function draw(){

	background(0);

	pointLight (222, 200, 0, 0, 0, 100)

	push();
	translate(0, 0, -50);
	// for(let day = 0; day < 30; day++){
	// }
	moon(50, 255);

	pop();
	translate(100, 0, 100);
	noStroke();
	fill(0);
	sphere(50);

}

function moon (size, color, phase){
	fill(255, 255, color);
	noStroke();
	//ambientMaterial(70, 70, 70)
	translate(mouseX, 0, -50);
	sphere(size);



}