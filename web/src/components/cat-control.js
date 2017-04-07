import React from 'react'
import { contains, reject, append , equals } from 'ramda'



const CatControl = (props) => {

const Item = ({v, label, image}) => {
  return (
    <div className={`fl mr1 pa2 ba tc br1 w-20 pointer ${contains(v,props.value) && 'bg-yellow white b--black'}`} onClick={e => {
  const value = contains(v, props.value)
   ? reject(equals(v), props.value)
   : append(v, props.value)
   props.onChange(value)
   }}>
      <img src={image} />
      <span className="dn db-ns">{label}</span>
   </div>
  )
}
return (
      <div>
        <div className="cf">
          <Item v=" -Budget " label="Budget" image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/63734/noun_852841_cc.png" />
          <Item v=" -Fast " label="Fast" image="https://d30y9cdsu7xlg0.cloudfront.net/png/148595-200.png" />
          <Item v=" -Comfort " label="Comfort" image="https://d30y9cdsu7xlg0.cloudfront.net/png/211984-200.png" />

        </div>
      </div>

    )

}

CatControl.propTypes = {
  value:  React.PropTypes.string,
  onChange:  React.PropTypes.func
}

export default CatControl
