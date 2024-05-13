import React from 'react'


interface heey{
    name:string,
}
const Greeting = ({ name }:heey) => { 
return <div>Hello, {name}!</div>;
 };

export default Greeting
