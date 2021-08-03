//6421ecfef1359cfe3001f0a7ccc12cfd

//http://api.weatherstack.com/

//http://api.weatherstack.com/current?access_key=6421ecfef1359cfe3001f0a7ccc12cfd&query=19.0760%C2%B0%20N,%2072.8777%C2%B0

const geocode = require('./utils')

//----->

// const request = require('postman-request')
// const url = `http://api.weatherstack.com/current?access_key=6421ecfef1359cfe3001f0a7ccc12cfd&query=19.0760%C2%B0%20N,%2072.8777%C2%B0`

// request({ url : url, json:true }, (error,res)=>{
//     if(error){
//         console.log('unable to connect :(')
//     }else if(res.body.error){
//         console.log('unable to find location')
//     }else{

//         console.log(`it is currently ${res.body.current.temperature} degree out in ${res.body.location.name}`)
//     }
// })

//--------------------------->

//pk.eyJ1Ijoic2hhaWtobTM1NyIsImEiOiJja3J2ampreWowN2dpMndvZWZzaXRzZ3RhIn0.8xIFv-n2jJUVkTMB7fhEcQ

//https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoic2hhaWtobTM1NyIsImEiOiJja3J2ampreWowN2dpMndvZWZzaXRzZ3RhIn0.8xIFv-n2jJUVkTMB7fhEcQ

// const request = require('postman-request')
// const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoic2hhaWtobTM1NyIsImEiOiJja3J2ampreWowN2dpMndvZWZzaXRzZ3RhIn0.8xIFv-n2jJUVkTMB7fhEcQ`

// request({ url: url, json:true },(err,res)=>{
//     if(err){
//         console.log('unable to connect to location services')
//     }else if(res.body.message){
//         console.log(res.body.message)
//     }else{
//         console.log(`${res.body.features[0].place_name}'s long and lat is ${res.body.features[0].center}`)
//     }
// })



geocode('usa',(error, data)=>{
    console.log(error)
    console.log(data)
})

//{ lat: -73.968703, long: 40.677268 }