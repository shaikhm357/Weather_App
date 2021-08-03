setTimeout(() => {
    console.log('two secons delay')
}, 3000);

// const names = ['mehboob', 'mehnood', 'ashfak']

// const shortName = names.filter((name)=>name.length<8)
// console.log(shortName)


//-------> callbacks
// const geocoding = (address, cb)=>{
//     setTimeout(() => {
//         const data = {
//             lon:0,
//             lat:0
//         }
//         cb(data)
//     }, 3000);
//     console.log(address)
// }

// geocoding('address', (fun)=>{
//     console.log(fun)
// })



//----------------> call back challenge
// const add = (a,b,cb)=>{
//     setTimeout(() => {     
//         let c = a+b
//         cb(c)
//     }, 2000);
// }

// add(1,4,(sum)=>{
//     console.log(sum)
// })

























