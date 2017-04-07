import React from 'react'

const Card = function (props) {
  return (
    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <img src={props.imageUrl} className="br-200 h4 w4 dib ba b--black-05 pa2" title="night sky over water" />
        <h1 className="pa2 f5 tl f6-ns mv0">{props.title}</h1>
      </div>
      <p className="lh-copy measure center f6 black-70">{(props.rating)/20}+'Stars'
      </p>
    </article>
  )
}

Card.propTypes = {
  title: React.PropTypes.string,
  imageUrl: React.PropTypes.string

}

export default Card
