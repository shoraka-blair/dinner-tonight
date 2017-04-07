import React from 'react'
import { equals } from 'ramda'




const CuisineControl = (props) => {



  return (
    <div>
      <div className="cf">
        <div className={`fl mr1 pa2 ba tc br1 w-20 pointer ${equals(props.value, 'american') && 'bg-black white b--black'}`} onClick={e => props.onChange('american')}>
           <img src="http://lorempixel.com/200/200" />
          <span className="dn db-ns">American</span></div>

    </div>
    </div>
  )
}

CuisineControl.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func
}

export default CuisineControl
