const express = require('express')
const app = express()

const { getRecipes, getRecipe, updateRecipe } = require('./dal.js')
const { split } = require('ramda')

const bodyParser = require('body-parser')

const HTTPError = require('node-http-error')
const port = process.env.PORT || 8082
const cors = require('cors')

app.use(cors({
    credentials: true
}))
app.use(bodyParser.json())

///////////////////////
//   recipes
//////////////////////

app.get('/recipes', function(req, res, next) {
    getRecipes(function(err, recipes) {
            if (err) return next(new HTTPError(err.status, err.message, err))
            res.status(200).send(recipes)
          })
})
//
// app.post('/recipes', function(req, res, next) {
//     addRecipe(req.body, function(err, dalResponse) {
//         if (err) return next(new HTTPError(err.status, err.message, err))
//         res.status(201).send(dalResponse)
//     })
// })
//
app.put('/recipes/:id', function(req, res, next) {
    updateRecipe(req.body, function(err, dalResponse) {
        if (err) return next(new HTTPError(err.status, err.messsge, err))
        res.status(200).send(dalResponse)
    })
})
//
app.get('/recipes/:id', function(req, res, next) {
    getRecipe(req.params.id, function(err, dalResponse) {
        if (err) return next(new HTTPError(err.status, err.message, err))
        res.status(200).send(dalResponse)
    })
})
//
// app.delete('/recipes/:id', function(req, res, next) {
//     deleteMed(req.params.id, function(err, dalResponse) {
//         if (err) return next(new HTTPError(err.status, err.message, err))
//         res.status(200).send(dalResponse)
//
//     })
// })

app.get('/recipes', function(req, res) {
    res.send('Welcome to the Dinner Tonight API!')
})



app.use(function(err, req, res, next) {
    console.log(req.method, " ", req.path, "error:  ", err)
    res.status(err.status || 500)
    res.send(err)
})

app.listen(port, function() {
    console.log("API is up and running on port ", port)
})
