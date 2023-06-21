


 const state = [{
    id: "sgdgfd",
    name: "sdgdf",
    descriptions: "dsgdfg",
    price: 100,
    category: "dsgdfg",
    count: 2,
 },
 {
    id: "sgdgfd",
    name: "sdgdf",
    descriptions: "dsgdfg",
    price: 200,
    category: "dsgdfg",
    count: 1,
 },
];


const state2 =  state.cart.reduce((sum, obj)=> sum + obj, 0)

console.log(state2)