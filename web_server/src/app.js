const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app = express();
const geocoding = require('./utils')

const publicdir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')

const partials = path.join(__dirname,'../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partials)

app.use(express.static(publicdir))
app.get('/', (req, res) => {
    
    res.render('index', {
        title: 'weather app',
        name: 'mehboob'
    })
})
app.get('/about', (req, res) => {
    
    res.render('about', {
        title: 'About me',
        name: 'mehboob'
    })
})
app.get('/help', (req, res) => {
    
    res.render('help', {
        title: 'Help',
        help: 'IMPROVE, BETTER, HELP, AMELIORATE mean to make more acceptable or to bring nearer a standard. IMPROVE and BETTER are general'
    })
})

app.get('/products', (req,res)=>{
    if(!req.query.search){
        return res.send({msg: "you must provide a search"})
    }
    console.log(req.query.search)
    res.send({ products: [] })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
       return res.send({
            msg:"why don't you provide an address"
        })
    }
    geocoding(req.query.address,(error,{lat,long}={})=>{
        if(error){
            return res.send({ error })
        }
        res.send({
            latitude:lat,
            longititude:long
        })
    })

    // res.send({
    //     forcast : 'it is snowing',
    //     location : 'mumbai',
    //     address: req.query.address
    // })
})

app.get('*',(req,res)=>{
    res.send('404')
})

app.listen(8000, () => console.log('listenng at port at 8000'))