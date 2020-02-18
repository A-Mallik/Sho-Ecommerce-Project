import React from 'react';
import {withRouter} from 'react-router-dom'; //higher order component - function that takes a component as an argument and returns you a modified comoponent.
// like a function that gives you back a powered up component
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => ( //destructured from props, same as props.title but we're pulling title value and setting it inside
    <div 
    className={`${size} menu-item` } onClick={ () => history.push(`${match.url}${linkUrl}`)}>

{/* <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  > */}
    {/* `${console.log('Match URL:' + JSON.stringify(match))}` */}
    {/* history.push is a method, history.replace is another method that can also be used except it doesnt "push" an entry to history. Breaks back button */}
    <div 
    className="background-image"  
    style={{backgroundImage: `url(${imageUrl})`
    }}
    />

   
    <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">{("Shop Now").toUpperCase()}</span>
    </div>
</div>
)

export default withRouter(MenuItem);
// now has access to location,match and history