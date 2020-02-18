import React from 'react';
import './directory.styles.scss'

import MenuItem from '../menu-item/menu-item.component';

// class component because we do need to store the sstate value of those menu items that we wanna pass and create our menu items with.React
// like card list component

class Directory extends React.Component{
   constructor(){
       super(); // <-- pull in all that we need from react class

       this.state={
           sections: [
           
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://images.unsplash.com/photo-1512353087810-25dfcd100962?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
              
         
       }
   }

  render(){
      return(
        <div className = 'directory-menu'>
           {
            //    this.state.sections.map(section => (
            //        <MenuItem title={section.title}
            //         key={section.id}
            //        />
            //    ))

            //-------------------------
               //easier and faster way below with destructuring
            // this.state.sections.map(({title,imageUrl,id, size, linkUrl}) => (
            //     <MenuItem 
            //         title={title}
            //         imageUrl = {imageUrl}
            //         size={size}
            //         key={id}
            //         linkUrl = {linkUrl}
                    

            //     />
            // ))
          //----------Even shorter way below ----
          this.state.sections.map(({id,...sectionProps}) => (
            <MenuItem 
               
                key={id} {...sectionProps}
             
                

            />
        ))
          //----------Even shorter way above ----
           }
        </div>
      )
  }
}

export default Directory;