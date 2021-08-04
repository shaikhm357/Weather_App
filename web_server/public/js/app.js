console.log('client side js is here...')
fetch(`http://puzzle.mead.io/puzzle`)
.then((res)=>res.json())
.then((data)=>{
    
    console.log(data)})



    const input = document.querySelector('input')
    input.addEventListener('keyup',(e)=>{
      let store = e.target.value
       fetch(`http://localhost:8000/weather?address=${store}`)
    .then((res)=>res.json())
    .then((mydata)=>{
        const stringdata = JSON.stringify(mydata)
    const lat = document.querySelector('.lat')
    lat.textContent = `${stringdata}`
    console.log(mydata)})
    })
    
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        console.log(store)
        console.log('submitted')
    })