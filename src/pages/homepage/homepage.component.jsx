import React from 'react';
import Directory from '../../components/directory/directory.component'
import './homepage.style.scss';

const Homepage = () => (  //functional component because we dont really need any lifecylce methods or state at this point.
    <div className = 'homepage'>
           <Directory />

    </div>

);

export default Homepage;