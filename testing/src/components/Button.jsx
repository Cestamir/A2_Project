import React from 'react'

const Button = ({description,onClickBtn}) => {
    return (
        <button onClick={onClickBtn}>
            {description}
        </button>
    )
}
export default Button
