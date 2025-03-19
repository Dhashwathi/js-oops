function Rectangle(length,width){
    let privateLength=length;
    let privateWidth=width;

    return{
        getLength: ()=> privateLength,
        getWidth: ()=> privateWidth,
        setLength: (newLength)=> privateLength=newLength,
        setWidth: (newWidth)=> privateWidth=newWidth,
        calculateArea: ()=> privateLength*privateWidth,
        calculatePerimeter:()=> 2*(privateLength+privateWidth)
        
    }
}

const rectangle= Rectangle(4,8);
console.log(`Length of the rectangle: ${rectangle.getLength()}`);
console.log(`Width of the rectangle: ${rectangle.getWidth()}`);
console.log(`Area of the rectangle: ${rectangle.calculateArea()}`);
console.log(`Perimeter of the rectangle: ${rectangle.calculatePerimeter()}`);

rectangle.setLength(2);
rectangle.setWidth(8);
console.log(`Length of the rectangle: ${rectangle.getLength()}`);
console.log(`Width of the rectangle: ${rectangle.getWidth()}`);
console.log(`Area of the rectangle: ${rectangle.calculateArea()}`);
console.log(`Perimeter of the rectangle: ${rectangle.calculatePerimeter()}`);
