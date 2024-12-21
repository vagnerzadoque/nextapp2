import React from 'react'
interface ButtonProps {
    hierarchy: 'contained' | 'outlined'
}

     const ButtonMor = ({hierarchy}:ButtonProps)=>{

        const hye = {
            outlined: "ButtonContainerOutlined",
            contained: "ButtonContainerContained"
        }[hierarchy]

     return(
         <button className={hye}> ButtonMor </button>
     )
}


export default ButtonMor