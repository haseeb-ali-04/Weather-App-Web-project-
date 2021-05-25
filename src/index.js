const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const port = 8000


const HtmlPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialPath = path.join(__dirname, "../templates/partials")


app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)
app.use(express.static(HtmlPath))






app.get("/", (req, res) =>{
    res.render("index", {
        owner : "Haseeb"
    })
})

app.get("/weather", (req, res)=>{
    res.render("weather")
})

app.listen(port,()=>{
    console.log("running at port "+port);
})