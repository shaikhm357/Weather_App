// const greater = (name='ilyas')=>{
//     console.log('hello ' +name)
// }

// greater('mehboob')
// greater()


const obj = {
    name : 'mehboob',
    age: 25
}

const print =({name, age})=>{
    return {
        name,
        age
    }

}

console.log(print(obj))