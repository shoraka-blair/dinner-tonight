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
//   medications
//////////////////////

app.get('/recipes', function(req, res, next) {
    getRecipes(function(err, recipes) {
            if (err) return next(new HTTPError(err.status, err.message, err))
            res.status(200).send(recipes)
          })
})
//
// app.post('/medications', function(req, res, next) {
//     addMed(req.body, function(err, dalResponse) {
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
// app.delete('/medications/:id', function(req, res, next) {
//     deleteMed(req.params.id, function(err, dalResponse) {
//         if (err) return next(new HTTPError(err.status, err.message, err))
//         res.status(200).send(dalResponse)
//
//     })
// })
//
//
// app.get('/medications/ingredients', function(req, res, next) {
//     getUniqueIngredients(function(err, ingredients) {
//         if (err) return next(new HTTPError(err.status, err.message, err))
//         res.status(200).send(ingredients)
//     })
// })
//
// app.get('/medications/forms', function(req, res, next) {
//     getUniqueForms(function(err, forms) {
//         if (err) return next(new HTTPError(err.status, err.message, err))
//         res.status(200).send(forms)
//     })
// })
//
// ///////////////////////
// //   patients
// //////////////////////
//
// app.post('/patients', function(req, res, next) {
//     addPatient(req.body, function(err, dalResponse) {
//         if (err) return next(new HTTPError(err.status, err.message, err))
//         res.status(201).send(dalResponse)
//     })
// })
//
//
// app.get('/patients', function(req, res, next) {
//     if (req.query.filter && split(':', req.query.filter)[0].toLowerCase() === 'lastname') {
//         const result = split(':', req.query.filter)
//         listPatientsByLastName(result[1], function(err, patient) {
//             if (err) return next(new HTTPError(err.status, err.message, err))
//             res.status(200).send(patient)
//         })
//     } else if (req.query.filter && split(':', req.query.filter)[0].toLowerCase() === 'condition') {
//         const result = split(':', req.query.filter)
//         listPatientsByCondition(result[1], function(err, patient) {
//             if (err) return next(new HTTPError(err.status, err.message, err))
//             res.status(200).send(patient)
//         })
//     } else if (!req.query.filter) {
//
//         getPatients(function(err, patients) {
//             if (err) return next(new HTTPError(err.status, err.message, err))
//             res.status(200).send(patients)
//         })
//     } else {
//
//         return res.status(200).send([])
//     }
// })
//
// app.get('/patients/conditions', function(req, res, next) {
//     getUniqueConditions(function(err, conditions) {
//         if (err) return next(new HTTPError(err.status, err.message, err))
//         res.status(200).send(conditions)
//     })
// })
//
// app.put('/patients/:id', function(req, res, next) {
//     updatePatient(req.body, function(err, dalResponse) {
//         if (err) return next(new HTTPError(err.status, err.messsge, err))
//         res.status(200).send(dalResponse)
//     })
// })
//
// app.get('/patients/:id', function(req, res, next) {
//     getPatient(req.params.id, function(err, resp) {
//         if (err) return next(new HTTPError(err.status, err.message, err))
//         res.status(200).send(resp)
//     })
// })
//
// app.delete('/patients/:id', function(req, res, next) {
//     deletePatient(req.params.id, function(err, person) {
//         if (err) return next(new HTTPError(err.status, err.message, err))
//         res.status(200).send(person)
//
//     })
// })
//
//
//
//
//
//
//
// ///////////////////////
// //   pharmacies
// //////////////////////
//
// app.put('/pharmacies/:id', function(req, res, next) {
//     updatePharmacy(req.body, function(err, pharmacy) {
//         if (err) return next(new HTTPError(err.status, err.message, err))
//         res.status(200).send(pharmacy)
//     })
// })
//
// app.post('/pharmacies', function(req, res, next) {
//     addPharmacy(req.body, function(err, docs) {
//         if (err) return next(new HTTPError(err.status, err.message, err))
//         res.status(201).send(docs)
//     })
// })
//
// app.get('/pharmacies/:id', function(req, res, next) {
//     getPharmacy(req.params.id, function(err, returnedPharmacy) {
//         if (err) return next(new HTTPError(err.status, err.message, err))
//         res.status(200).send(returnedPharmacy)
//     })
// })
//
// // app.get('/pharmacies', function(req, res, next) {
// //   const startKey = req.query.startkey ? req.query.startkey : undefined
// //   const limit = req.query.limit ? req.query.limit : undefined
// //
// //   listPharmacies(startKey, limit, function(err, pharmacyList) {
// //     if (err) return next(new HTTPError(err.status, err.message, err))
// //     res.status(200).send(pharmacyList)
// //   })
// // })
//
// app.get('/pharmacies', function(req, res, next) {
//     if (req.query.filter && split(':', req.query.filter)[0].toLowerCase() === 'chainname') {
//         const result = split(':', req.query.filter)
//         listPharmaciesByChainName(result[1], function(err, chain) {
//             if (err) return next(new HTTPError(err.status, err.message, err))
//             res.status(200).send(chain)
//         })
//     } else if (req.query.filter && split(':', req.query.filter)[0].toLowerCase() === 'storename') {
//         const result = split(':', req.query.filter)
//         listPharmaciesByStoreName(result[1], function(err, store) {
//             if (err) return next(new HTTPError(err.status, err.message, err))
//             res.status(200).send(store)
//         })
//     } else if (!req.query.filter) {
//         const startKey = req.query.startkey ? req.query.startkey : undefined
//         const limit = req.query.limit ? req.query.limit : undefined
//
//         listPharmacies(startKey, limit, function(err, pharmacyList) {
//           if (err) return next(new HTTPError(err.status, err.message, err))
//           res.status(200).send(pharmacyList)
//         })
//     } else {
//         return res.status(200).send([])
//         }
// })
//
//
// app.delete('/pharmacies/:id', function(req, res, next) {
//     deletePharmacy(req.params.id, function(err, doc) {
//         if (err) return next(new HTTPError(err.status, err.message, err))
//         res.status(200).send(doc)
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
