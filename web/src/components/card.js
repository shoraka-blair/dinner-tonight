import React from 'react'

const Card = function (props) {
  return (
    <article className="bg-white">
       <div className="vh-75 cover bg-center" style={{backgroundImage: 'url({props.imageUrl})'}} />
       <div className="ph4 ph5-m ph6-l">
         <div className="pv5 f4 f2-ns measure center">
           <h1 className="fw6 f2 fl w-100 black-70 mt0 mb3 avenir">{props.title}</h1>
           <p>{(props.rating)/20}</p>
         </div>
       </div>
     </article>



  )
}

Card.propTypes = {
  title: React.PropTypes.string,
  imageUrl: React.PropTypes.string,
  rating: React.PropTypes.number

}

export default Card
