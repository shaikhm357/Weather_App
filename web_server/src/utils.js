
const request = require('postman-request')

const geocode = (add,cb)=>{
    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${add}.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoic2hhaWtobTM1NyIsImEiOiJja3J2ampreWowN2dpMndvZWZzaXRzZ3RhIn0.8xIFv-n2jJUVkTMB7fhEcQ`

    request({url: geocodeUrl, json:true}, (error,res)=>{
        if(error){
            cb('unable to connect...',undefined)
        }else if(res.body.message){
            cb('unable to find location, try again',undefined)
        }else{
            cb(undefined,{
                 lat : res.body.features[0].center[1],
                 long: res.body.features[0].center[0]
                })
        }
    })
    
}

module.exports = geocode