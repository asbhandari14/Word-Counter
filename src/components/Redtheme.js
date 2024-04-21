import React from 'react'

function Redtheme(props) {
  return (
    <div>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.redTheme}</label>
</div>
    </div>
  )
}

export default Redtheme
