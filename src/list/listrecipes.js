import React from 'react';

export default function list(props){
    // console.log(props);
 return(
     <>
        <h3>{props.recipe.label}</h3>
        <img src={props.recipe.image} alt=""/>
     </>
 )
}