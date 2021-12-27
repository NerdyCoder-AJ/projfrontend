import React from 'react'

const ImageHelper = ({product}) =>  {
    const imageURL = product ? product.image : 'Image not loading'
    return (
        <div className='rounded p-1'>
            <img src={imageURL}
            className="mb-2 rounded"
            style={{maxWidth:"100%", maxHeight:"100%"}}
            />
        </div>
    )
}

export default ImageHelper;
