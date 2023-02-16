import React from 'react'
/*
types of button needed
default
inverted
google-sign-in
*/
import "./button.scss"
const BUTTON_TYPE_CLASSES={
    google:'google-sign-in',
    inverted:'inverted'
}
export default function Button({children,buttonType,...otherProps}) {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
    {...otherProps}
    >
        {children}

    </button>
  )
}
