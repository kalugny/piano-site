var width, height, center;
var points = 10;
var smooth = true;
var path = new Path();
path.fillColor = 'black';
initializePath();

function initializePath() {
    center = view.center;
    width = view.size.width;
    height = view.size.height / 2;
    path.segments = [];
    path.add(view.bounds.bottomLeft);
    for (var i = 1; i < points; i++) {
        var point = new Point(width / points * i, center.y);
        path.add(point);
    }
    path.add(view.bounds.topLeft);
    //path.fullySelected = true;
	
	path.smooth();
}


// Reposition the path whenever the window is resized:
function onResize(event) {
    initializePath();
}