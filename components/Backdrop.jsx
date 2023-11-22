import React from "react"

const Backdrop = ({ action }) => {
    return (
        <div className="fixed w-full h-screen top-0 left-0" onClick={() => action()}></div>
    )
}

export default Backdrop