import React from 'react'

const TextField = (props) => {
  const width = props.width ? `w-${props.width}` : 'w-100'
  return (
    <div className="measure">
      <label htmlFor={props.label} className="f6 b db mb2">
        {props.label} {props.optional && <span className="normal black-60">(optional)</span>}
      </label>
      <input id={props.label}
        className={`input-reset ba b--black-20 pa2 mb2 db ${width}`}
        type={props.type} aria-describedby="name-desc"
        onChange={props.onChange}

      />
      <small className="f6 black-60 db mb2">{props.help}</small>
    </div>
  )
}

TextField.propTypes = {
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  help: React.PropTypes.string,
  optional: React.PropTypes.bool,
  width: React.PropTypes.string
}

export default TextField
