const PouchDB = require('pouchdb-http')
PouchDB.plugin(require('pouchdb-mapreduce'))
const couch_base_uri = "http://127.0.0.1:5984/" //3000 for most of us...otherwise 5984
const couch_dbname = "recipes" //remember pharmacy for me pharma-student
const db = new PouchDB(couch_base_uri + couch_dbname)
const {
    map,
    uniq,
    prop,
    omit,
    compose,
    drop
} = require('ramda')


/////////////////////
//   recipes
/////////////////////

function getRecipe(recipeId, cb) {
    db.get(recipeId, function(err, doc) {
        if (err) return cb(err)
        cb(null, doc)
    })
}
//
// function addRecipe(recipe, cb) {
//     recipe.type = "recipe"
//     let newId = "recipe_" + recipe.title.toLowerCase()
//     recipe._id = prepID(newId)
//
//   checkRequiredRecipeInputs(recipe)
//     ?  db.put(recipe, function(err, res) {
//         if (err) return cb(err)
//         cb(null, res)
//     }) : cb({
//             error: "bad_request",
//             reason: "bad_request",
//             name: "bad_request",
//             status: "400",
//             message: "need all required inputs..."
//     })
// }
//
function updateRecipe(recipe, cb) {
    db.put(recipe, function(err, doc) {
        if (err) return cb(err)
        cb(null, doc)
    })
}

// function deleteRecipe(id, cb) {
//     db.get(id, function(err, doc) {
//         if (err) return cb(err)
//
//         db.remove(doc, function(err, deletedRecipe) {
//             if (err) return cb(err)
//             cb(null, deletedRecipe)
//         })
//     })
// }


function getRecipes(cb) {
  db.allDocs({include_docs: true,
    start_key: "recipe_",
    end_key: "recipe_\uffff"
  }, function(err, result) {
      if (err) return cb(err)
      cb(null, map(returnDoc, result.rows))
  })
}

// DONE: Move from allDocs() to to a couchdb query/view
// DONE: Add a sort token / start key
// DONE: Use Ramda's compose() to addSortToken before returning an array of docs
// DONE: Add a startKey (sortToken) and limit params to the dal function.
// DONE: Build a flexible options object that includes the startkey, limit, and include_docs
// DONE:  Add to the limit and alter the compose to ramda drop(1)


// ///////////////////////
// // helper functions
// ///////////////////////
//
// function prepID(id) {
//   return id.replace(/ /g, "_")
// }
//
// var addSortToken = function(queryRow) {
//     queryRow.doc.startKey = queryRow.key;
//     return queryRow;
// }
//
// function checkRequiredRecipeInputs(doc) {
//   return prop('title', doc) && prop('type', doc) && prop('categories', doc) && prop('comments', doc) && prop('cuisine', doc) && prop('directions', doc) && prop('imageUrl', doc) && prop('ingredients', doc) && prop('mainIngredient', doc) && prop('rating', doc)}
//

const returnDoc = row => row.doc


const dal = {
    getRecipes: getRecipes,
    updateRecipe: updateRecipe,
    getRecipe: getRecipe
}

module.exports = dal
