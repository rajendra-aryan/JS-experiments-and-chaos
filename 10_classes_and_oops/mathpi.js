const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const asle = {
    name: 'ginger asle',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("hello there");
    }
}

console.log(Object.getOwnPropertyDescriptor(asle, "name"));

Object.defineProperty(asle, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(asle, "name"));

for (let [key, value] of Object.entries(asle)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}