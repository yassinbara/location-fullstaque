import React from 'react'

const CarStatus = ({ isDisponible = true }) => {
    return (
        <>
            {isDisponible ? (
                <span className=' bg-success rounded-pill car-status'>disponible</span>
            ) : (<span className=' bg-warning rounded-pill car-status'>en location</span>
            )}
        </>
    )
}

export default CarStatus