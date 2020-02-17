import React from 'react';

import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size}) => ( //destructured from props, same as props.title but we're pulling title value and setting it inside
    <div 
    className={`${size} menu-item` }
    style={{backgroundImage: `url(${imageUrl})`}
    }>
    <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
    </div>
</div>
)

export default MenuItem;