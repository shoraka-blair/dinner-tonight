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
