import React from 'react'

const BasicButton = (props) => {
  const bg = props.backgroundColor ? 'bg-' + props.backgroundColor : 'bg-white-80'
  const color = props.color ? props.color : 'black-80'

  return (
    <button
      onClick={props.onClick}
      className={`f5 no-underline ${color} bg-animate ${bg} hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4`}>
      <span className="pl1">{props.children}</span>
    </button>
  )
}

BasicButton.propTypes = {
  onClick: React.PropTypes.func,
  backgroundColor: React.PropTypes.string,
  color: React.PropTypes.string
}

export default BasicButton
