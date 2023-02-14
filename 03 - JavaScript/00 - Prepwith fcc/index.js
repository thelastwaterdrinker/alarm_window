console.log('Hello world')

//factory function
function createCircle(radius) {
    return {
        radius, // we do not need to write radius=radius
        draw: function() {
            console.log('draw');
        }
    };
}
const circle = createCircle(1);

//constructor fucntion
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(1)