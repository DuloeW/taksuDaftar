import React from 'react'

const Button = (props) => {
    return (
        <>
            <button
                type='button'
                onClick={() => props.goTo()}
                className={`px-6 py-2 mt-4 ${props.bg} rounded-full font-semibold ${props.textColor}`}
            >Go Down</button>
        </>
    )
}

export default Button