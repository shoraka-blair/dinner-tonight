<h3>Comments:</h3>
<ul>
{map((recipe) =>
  <Comment
  date={recipe.comments.date}
  text={recipe.comments.text}
  name={recipe.comments.author.name} />

), recipe.comments}
</ul>


{
  compose(
  map((comment) =>
      <Comment
      date={comment.date}
      text={comment.text}
      name={comment.author.name} />),
  map(commentToObject)
)(recipe.comments)
}


<article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
  <div className="tc">
    <img src={props.imageUrl} className="br-200 h4 w4 dib ba b--black-05 pa2" title="night sky over water" />
    <h1 className="pa2 f5 tl f6-ns mv0">{props.title}</h1>
  </div>
  <p className="lh-copy measure center f6 black-70">{(props.rating)/20}
  </p>
</article>

http://mrmrs.io/photos/001.jpg

filter(recipe=> contains(props.control, recipe.categories))
filter(x=> contains(props.control, x.categories))
filter(r => intersection(r.categories, props.control).length > 0)



const recipes = [
{
"label": "Easy Roast Chicken with Asparagus and Leeks",
"image": "https://www.edamam.com/web-img/2d2/2d2df477b921590db3649c54144d35a7.jpg",
"source": "Serious Eats",
"url": "http://www.seriouseats.com/recipes/2011/06/easy-roast-chicken-with-asparagus-and-leeks-recipe.html",
"ingredientLines": [
"1 whole butterflied chicken (about 4 pounds, see note), neck and backbone reserved",
"Kosher salt and freshly ground black pepper",
"4 large leeks, whites and greens reserved separately, whites trimmed, washed, and split in half lengthwise",
"2 bay leaves",
"1 1/2 pounds asparagus stalks, trimmed and peeled if necessary",
"2 tablespoons olive oil"
]
},
{
"label": "Spatchcocked Chicken with Chickpeas",
"image": "https://www.edamam.com/web-img/4fd/4fdb447fb86295b4d22bbaf6d735d25a.jpg",
"source": "Martha Stewart",
"url": "http://www.marthastewart.com/340958/spatchcocked-chicken-with-chickpeas",
"ingredientLines": [
"1 spatchcocked chicken",
"Coarse salt and ground pepper",
"1 can (15.5 ounces) chickpeas, rinsed and drained",
"Fresh lime juice (for serving)",
"Fresh cilantro leaves (for serving)"
]
},
{
"label": "Roast Chicken",
"image": "https://www.edamam.com/web-img/c24/c24a86f98a8cc1f13f795bdba2dae614.jpg",
"source": "Epicurious",
"url": "http://www.epicurious.com/recipes/food/views/Roast-Chicken-394676",
"ingredientLines": [
"1 tablespoon kosher salt",
"1 whole 4-pound chicken, giblets reserved for another use",
"1/4 cup (1/2 stick) unsalted butter, melted"
]
},
{
"label": "Maple-Thyme Roast Chicken",
"image": "https://www.edamam.com/web-img/393/393de4bf9c222d3e888d85d6ad696596.jpg",
"source": "Fine Cooking",
"url": "http://www.finecooking.com/recipes/maple-thyme-roast-chicken.aspx",
"ingredientLines": [
"1/8 tsp. cayenne",
"Kosher salt and freshly ground black pepper",
"Fresh whole chicken crazy split whole chicken leg 4-lb. whole chicken, rinsed and patted dry",
"1/3 cup pure maple syrup",
"1 tbs. chopped fresh thyme",
"2 tbs. vegetable oil",
"2 tbs. balsamic vinegar"
]
},
{
"label": "Roast Chicken with Caramelized Shallots",
"image": "https://www.edamam.com/web-img/3d4/3d44eb1f6d04b5fbf25223da997647d3.jpg",
"source": "David Lebovitz",
"url": "http://www.davidlebovitz.com/roast-chicken-recipe-caramelized-s/",
"ingredientLines": [
"3 tablespoons olive oil",
"3 tablespoons red wine vinegar",
"1 tablespoon soy sauce",
"4 large shallots, peeled and minced",
"Sea salt and freshly ground black pepper",
"One whole chicken, cut into 8 pieces",
"One generous handful of coarsely chopped flat-leaf parsley"
]
},
{
"label": "Poached Salmon with Leeks",
"image": "https://www.edamam.com/web-img/d84/d8497475cac1ec1bf10312d19a478471.jpg",
"source": "Food52",
"url": "https://food52.com/recipes/2626-poached-salmon-with-leeks",
"ingredientLines": [
"1 tablespoon butter or olive oil",
"4 cups chopped leeks, well-rinsed!",
"1 cup chicken broth",
"14-16 ounces salmon (about 6-8 oz. per person)"
]
},
{
"label": "Grilled Salmon With Miso Glaze",
"image": "https://www.edamam.com/web-img/1ef/1efa97c17a910e430d048d2671d14433.JPG",
"source": "Serious Eats",
"url": "http://www.seriouseats.com/recipes/2011/11/grilled-salmon-with-miso-glaze-recipe.html",
"ingredientLines": [
"4 1/2-pound salmon fillets, center cut",
"3 tablespoons mirin",
"3 tablespoons unseasoned rice vinegar",
"1/2 cup white or yellow miso",
"1 1/2 teaspoons sesame oil",
"3 tablespoons minced fresh ginger",
"1 bunch scallions, chopped",
"2 limes"
]
},
{
"label": "Salmon with Puff Pastry and Pesto",
"image": "https://www.edamam.com/web-img/4d8/4d85de63fd008638ac5b93f4067859a1.jpg",
"source": "Cooking Channel",
"url": "http://www.cookingchanneltv.com/recipes/salmon-with-puff-pastry-and-pesto.html",
"ingredientLines": [
"4 pieces of purchased puff pastry, each cut to be just larger than a piece of salmon",
"4 (4 to 6-ounce) pieces salmon",
"1/4 cup sliced almonds",
"1/4 cup purchased pesto",
"2 tomatoes, sliced"
]
},
{
"label": "Salmon and sea bass ceviche",
"image": "https://www.edamam.com/web-img/0c5/0c5caf4775fec34d361c65cc272b357a.jpg",
"source": "BBC",
"url": "http://www.bbc.co.uk/food/recipes/salmon_and_sea_bass_14216",
"ingredientLines": [
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
]
},
{
"label": "Salmon and Zucchini Baked in Parchment",
"image": "https://www.edamam.com/web-img/f88/f88029c136577bb604dc6b1823733033.jpg",
"source": "Martha Stewart",
"url": "http://www.marthastewart.com/318914/salmon-and-zucchini-baked-in-parchment",
"ingredientLines": [
"1 small zucchini, halved lengthwise and thinly sliced",
"1 shallot, thinly sliced",
"1 tablespoon butter, cut into pieces",
"1/4 teaspoon dried dill weed",
"1 lemon slice, halved, plus 2 teaspoons fresh lemon juice",
"Coarse salt and ground pepper",
"1 skinless salmon fillet (6 to 8 ounces)"
]
}
]
