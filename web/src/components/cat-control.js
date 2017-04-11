import React from 'react'
import { contains, reject, append, equals } from 'ramda'

const CatControl = props => {
  const Item = ({ v, label, image }) => {
    return (
      <div
        className={`fl pa2 tc br1 w-third pointer`}
        onClick={e => {
          const value = contains(v, props.value)
              ? reject(equals(v), props.value)
              : append(v, props.value)
          props.onChange(value)
        }}
      >
        <div
          className={
            `ba br2 pa1 ${contains(v, props.value) &&
              'bg-orange white b--black'}`
          }
        >
          <img src={image} />
          <span className='dn db-ns'>{label}</span>
        </div>
      </div>
    )
  }
  return (
    <div>
      <h3 className='orange'>Select Categories: {props.control}</h3>
      <p className='f6 fs-italic'>(choose one or more categories)</p>
      <div className='cf'>
        <Item
          v='budget'
          label='Budget'
          image='https://s3-us-west-2.amazonaws.com/s.cdpn.io/63734/noun_852841_cc.png'
        />
        <Item
          v='fast'
          label='Fast'
          image='https://d30y9cdsu7xlg0.cloudfront.net/png/148595-200.png'
        />
        <Item
          v='comfort'
          label='Comfort'
          image='https://d30y9cdsu7xlg0.cloudfront.net/png/211984-200.png'
        />
      </div>
    </div>
  )
}

CatControl.propTypes = {
  value: React.PropTypes.array,
  onChange: React.PropTypes.func
}

export default CatControl
