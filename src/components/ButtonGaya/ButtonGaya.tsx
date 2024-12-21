
'use client'
import React from "react";
import themes from '@naturacosmeticos/natds-themes'

const ButtonGaya = () => {
  console.log(themes)
  return (
    <button
      className="bg-primary text-onPrimary hover:bg-secondary hover:text-onSecondary largeX" 
      type="button"
    >
      Button do Gaya
    </button>
  );
};

export default ButtonGaya;
