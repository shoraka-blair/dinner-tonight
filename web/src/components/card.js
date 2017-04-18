import React from 'react'
import { mean } from 'ramda'
const Card = function (props) {

  const divStyle = {
  backgroundImage: 'url(' + props.imageUrl + ')'
}



  return (


    <article className="bg-white">
       <div className="vh-75 cover bg-center"
            style={divStyle}
        />
        <div className="ph4 ph5-m ph6-l">
         <div className="pv5 f4 f2-ns measure center">
           <h1 className="fw6 f2 fl w-100 black-70 mt0 mb3 avenir">{props.title}</h1>
           <p className="fw5 f4">Average Rating: {mean(props.rating).toFixed(1)}</p>
           <p className="fw4 f5">{props.rating.length} Ratings</p>
         </div>
       </div>
     </article>


  )
}

Card.propTypes = {
  title: React.PropTypes.string,
  imageUrl: React.PropTypes.jpg,
  rating: React.PropTypes.array

}

export default Card
