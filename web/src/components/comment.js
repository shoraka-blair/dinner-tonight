import React from 'react'




// function formatDate(date) {
//   return date.toLocaleDateString();
// }



const Comment = function (props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="pa3 w2 h2 w3-ns h3-ns br-100"
        src={"http://www.imagesource.com/Doc/IS0/Media/TR5/1/0/3/9/IS09A6FU5.jpg"}
        alt={props.name}
        />
        <div className="UserInfo-name">
          {props.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  )
}




Comment.propTypes = {
  imageUrl: React.PropTypes.string,
  name: React.PropTypes.string,
  text: React.PropTypes.string,
  date: React.PropTypes.string
}

export default Comment
