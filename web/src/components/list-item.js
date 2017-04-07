
import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = function (props) {
  return (
    <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
     <img className="w3 h3 w3-ns h3-ns dib" src={props.imageUrl} />
     <div className="pl3 flex-auto">
       <span className="f5 db black-70">{props.title}</span>
       <span className="f5 db black-70">{props.rating}</span>
     </div>
     <div>
      <Link to={props.linkUrl} className="f6 link blue hover-dark-gray">
        {props.linkDescription}
      </Link>
     </div>
    </li>
  )
}

ListItem.propTypes = {
  title: React.PropTypes.string,
  imageUrl: React.PropTypes.string,
  rating: React.PropTypes.num,
  linkUrl: React.PropTypes.string,
  linkDescription: React.PropTypes.string
}

export default ListItem
