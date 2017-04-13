const PouchDB = require('pouchdb-http')
PouchDB.plugin(require('pouchdb-mapreduce'))
const couch_base_uri = "http://127.0.0.1:5984/"  //5984...most of us need to change this to 3000
const couch_dbname = "recipes" //...many of us will need to change this to pharmacy
const db = new PouchDB(couch_base_uri + couch_dbname)
const last = [
  {
  "_id": "recipe_pulled_pork_5",
  "title": "Pulled Pork",
  "recipeNumber": "5",
  "imageUrl": "https://www.edamam.com/web-img/0cf/0cfba91f9de02d26123a236c60f03897.jpg",
  "mainIngredient": "Pork",
  "categories": [
    "comfort",
    "fast"
  ],
  "cuisine": "american",
  "ingredients": [
  "1 (5 to 7-pound) boston pork butt, bone in",
  "3/4 cup seasoning rub (recommended: butch's smack your lips magic dust"
  ],
  "directions": [
    "make pork"
  ],
  "rating": 79,
  "comments": [
  {
    "date": "",
    "text": "Awesome!",
    "author": {
      "name": 'Jenn',
      "avatarUrl": 'http://placekitten.com/g/64/64'
    }
  },
  {
    "date": "",
    "text": "great!",
    "author": {
      "name": 'Lisa',
      "avatarUrl": 'http://placekitten.com/g/64/64'
    }
  }
  ],
  "type": "recipe"
  },
  {
    "_id": "recipe_pork_burgers_with_herby_chips_6",
  "title": "Pork Burgers With Herby Chips",
  "recipeNumber": "6",
  "imageUrl": "https://www.edamam.com/web-img/d60/d608459a0e23125c50d0c5b234e04d12.jpg",
  "mainIngredient": "Pork",
  "categories": [
    "comfort"
  ],
  "cuisine": "american",
  "ingredients": [
  "3 large baking potatoes , cut into wedges",
  "Burger buns , lettuce and onion, to serve",
  "1 red pepper , deseeded, cut into quarters",
  "1 large egg",
  "1.0 tbsp vegetable oil , plus 1 tsp extra",
  "500.0g pack pork mince",
  "2.0 tsp smoked paprika (see tip)",
  "4.0 tbsp mayonnaise",
  "3 garlic cloves , crushed",
  "2.0 tsp dried mixed herbs"
  ],
  "directions": [
    "make pork"
  ],
  "rating": 95,
  "comments": [
  {
    "date": "",
    "text": 'I hope you enjoy!',
    "author": {
      "name": 'john',
      "avatarUrl": 'http://placekitten.com/g/64/64'
    }
  }
  ],
  "type": "recipe"
  },
  {
  "_id": "recipe_pork_cutlets_with_couscous_7",
  "title": "Pork Cutlets with Couscous and Sauteed Peppers and Asparagus",
  "recipeNumber": "7",
  "imageUrl": "https://www.edamam.com/web-img/619/619e9b68d4155d6873b38da1dcea630b.jpg",
  "mainIngredient": "Pork",
  "categories": [
    "budget"
  ],
  "cuisine": "italian",
  "ingredients": [
  "1 cup couscous",
  "2 tablespoons extra-virgin olive oil",
  "2 red bell peppers, seeded and cut into 1-inch strips",
  "1 bunch asparagus (about 1 pound), trimmed",
  "Coarse salt and ground pepper",
  "8 small pork cutlets (about 1 1/2 pounds total)",
  "1/2 cup loosely packed fresh parsley leaves, coarsely chopped"
  ],
  "directions": [
    "make pork"
  ],
  "rating": 90,
  "comments": [
  {
    "date": "",
    "text": 'so good!',
    "author": {
      "name": 'ginger',
      "avatarUrl": 'http://placekitten.com/g/64/64'
    }
  }
  ],
  "type": "recipe"
  }

]

const docs = [
    {
        _id: "recipe_easy roast chicken with asparagus and leeks",
        categories: [],
        comments: [
            {}
        ],
        cuisine: "",
        directions: [],
        imageUrl: "https://www.edamam.com/web-img/2d2/2d2df477b921590db3649c54144d35a7.jpg",
        ingredients: [
            "1 whole butterflied chicken (about 4 pounds, see note), neck and backbone reserved",
            "Kosher salt and freshly ground black pepper",
            "4 large leeks, whites and greens reserved separately, whites trimmed, washed, and split in half lengthwise",
            "2 bay leaves",
            "1 1/2 pounds asparagus stalks, trimmed and peeled if necessary",
            "2 tablespoons olive oil"
        ],
        mainIngredient: "",
        rating: "",
        title: "Easy Roast Chicken with Asparagus and Leeks",
        type: "recipe"
    },
    {
        _id: "recipe_spatchcocked chicken with chickpeas",
        categories: [],
        comments: [
            {}
        ],
        cuisine: "",
        directions: [],
        imageUrl: "https://www.edamam.com/web-img/4fd/4fdb447fb86295b4d22bbaf6d735d25a.jpg",
        ingredients: [
            "1 spatchcocked chicken",
            "Coarse salt and ground pepper",
            "1 can (15.5 ounces) chickpeas, rinsed and drained",
            "Fresh lime juice (for serving)",
            "Fresh cilantro leaves (for serving)"
        ],
        mainIngredient: "",
        rating: "",
        title: "Spatchcocked Chicken with Chickpeas",
        type: "recipe"
    },
    {
        _id: "recipe_roast chicken",
        categories: [],
        comments: [
            {}
        ],
        cuisine: "",
        directions: [],
        imageUrl: "https://www.edamam.com/web-img/c24/c24a86f98a8cc1f13f795bdba2dae614.jpg",
        ingredients: [
            "1 tablespoon kosher salt",
            "1 whole 4-pound chicken, giblets reserved for another use",
            "1/4 cup (1/2 stick) unsalted butter, melted"
        ],
        mainIngredient: "",
        rating: "",
        title: "Roast Chicken",
        type: "recipe"
    },
    {
        _id: "recipe_maple-thyme roast chicken",
        categories: [],
        comments: [
            {}
        ],
        cuisine: "",
        directions: [],
        imageUrl: "https://www.edamam.com/web-img/393/393de4bf9c222d3e888d85d6ad696596.jpg",
        ingredients: [
            "1/8 tsp. cayenne",
            "Kosher salt and freshly ground black pepper",
            "Fresh whole chicken crazy split whole chicken leg 4-lb. whole chicken, rinsed and patted dry",
            "1/3 cup pure maple syrup",
            "1 tbs. chopped fresh thyme",
            "2 tbs. vegetable oil",
            "2 tbs. balsamic vinegar"
        ],
        mainIngredient: "",
        rating: "",
        title: "Maple-Thyme Roast Chicken",
        type: "recipe"
    },
    {
        _id: "recipe_roast chicken with caramelized shallots",
        categories: [],
        comments: [
            {}
        ],
        cuisine: "",
        directions: [],
        imageUrl: "https://www.edamam.com/web-img/3d4/3d44eb1f6d04b5fbf25223da997647d3.jpg",
        ingredients: [
            "3 tablespoons olive oil",
            "3 tablespoons red wine vinegar",
            "1 tablespoon soy sauce",
            "4 large shallots, peeled and minced",
            "Sea salt and freshly ground black pepper",
            "One whole chicken, cut into 8 pieces",
            "One generous handful of coarsely chopped flat-leaf parsley"
        ],
        mainIngredient: "",
        rating: "",
        title: "Roast Chicken with Caramelized Shallots",
        type: "recipe"
    },
    {
        _id: "recipe_poached salmon with leeks",
        categories: [],
        comments: [
            {}
        ],
        cuisine: "",
        directions: [],
        imageUrl: "https://www.edamam.com/web-img/d84/d8497475cac1ec1bf10312d19a478471.jpg",
        ingredients: [
            "1 tablespoon butter or olive oil",
            "4 cups chopped leeks, well-rinsed!",
            "1 cup chicken broth",
            "14-16 ounces salmon (about 6-8 oz. per person)"
        ],
        mainIngredient: "",
        rating: "",
        title: "Poached Salmon with Leeks",
        type: "recipe"
    },
    {
        _id: "recipe_grilled salmon with miso glaze",
        categories: [],
        comments: [
            {}
        ],
        cuisine: "",
        directions: [],
        imageUrl: "https://www.edamam.com/web-img/1ef/1efa97c17a910e430d048d2671d14433.JPG",
        ingredients: [
            "4 1/2-pound salmon fillets, center cut",
            "3 tablespoons mirin",
            "3 tablespoons unseasoned rice vinegar",
            "1/2 cup white or yellow miso",
            "1 1/2 teaspoons sesame oil",
            "3 tablespoons minced fresh ginger",
            "1 bunch scallions, chopped",
            "2 limes"
        ],
        mainIngredient: "",
        rating: "",
        title: "Grilled Salmon With Miso Glaze",
        type: "recipe"
    },
    {
        _id: "recipe_salmon with puff pastry and pesto",
        categories: [],
        comments: [
            {}
        ],
        cuisine: "",
        directions: [],
        imageUrl: "https://www.edamam.com/web-img/4d8/4d85de63fd008638ac5b93f4067859a1.jpg",
        ingredients: [
            "4 pieces of purchased puff pastry, each cut to be just larger than a piece of salmon",
            "4 (4 to 6-ounce) pieces salmon",
            "1/4 cup sliced almonds",
            "1/4 cup purchased pesto",
            "2 tomatoes, sliced"
        ],
        mainIngredient: "",
        rating: "",
        title: "Salmon with Puff Pastry and Pesto",
        type: "recipe"
    },
    {
        _id: "recipe_salmon and sea bass ceviche",
        categories: [],
        comments: [
            {}
        ],
        cuisine: "",
        directions: [],
        imageUrl: "https://www.edamam.com/web-img/0c5/0c5caf4775fec34d361c65cc272b357a.jpg",
        ingredients: [
            "500g/1lb 2oz skinless salmon fillets, flesh sliced as thinly as possible using a sharp knife",
            "2 medium skinless sea bass fillets, flesh sliced as thinly as possible using a sharp knife",
            "1 red onion, peeled, thinly sliced",
            "2 large red chillies, stalks and seeds removed, thinly sliced",
            "1 red pepper, stalk and seeds removed, flesh finely diced",
            "5 limes, juice and zest, plus extra lime wedges to serve",
            "Pinch cayenne pepper",
            "4 tbsp extra virgin olive oil, plus extra to serve",
            "Handful fresh coriander leaves",
            "2 ripe avocados, peeled, stone removed, cut into thin slices",
            "Handful mixed baby salad leaves"
        ],
        mainIngredient: "",
        rating: "",
        title: "Salmon and sea bass ceviche",
        type: "recipe"
    },
    {
        _id: "recipe_salmon and zucchini baked in parchment",
        categories: [],
        comments: [
            {}
        ],
        cuisine: "",
        directions: [],
        imageUrl: "https://www.edamam.com/web-img/f88/f88029c136577bb604dc6b1823733033.jpg",
        ingredients: [
            "1 small zucchini, halved lengthwise and thinly sliced",
            "1 shallot, thinly sliced",
            "1 tablespoon butter, cut into pieces",
            "1/4 teaspoon dried dill weed",
            "1 lemon slice, halved, plus 2 teaspoons fresh lemon juice",
            "Coarse salt and ground pepper",
            "1 skinless salmon fillet (6 to 8 ounces)"
        ],
        mainIngredient: "",
        rating: "",
        title: "Salmon and Zucchini Baked in Parchment",
        type: "recipe"
    }
]



 db.bulkDocs(docs, function(err, res) {
     if (err) return console.log(err);
     console.log(res)
 })
