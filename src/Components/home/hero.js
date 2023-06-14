import React from 'react'
import { Carousel } from 'antd';
import { Button } from 'antd';
 
const items = [
  {
    key: '1',
    title: 'Web and mobile payment built for developers',
    content: "Following the Ant Design specification, we developed a React UI library antd that contains a set of high quality components and demos for building rich, interactive user interfaces.The official guide also assumes that you have intermediate knowledge about HTML, CSS, and JavaScript, and React. If you are just starting to learn front-end or React, it may not be the best idea to use the UI framework as your first step."
  },
  {
    key: '2',
    title: 'Work better together. Sechdule meetings',
    content: "Following the Ant Design specification, we developed a React UI library antd that contains a set of high quality components and demos for building rich, interactive user interfaces.The official guide also assumes that you have intermediate knowledge about HTML, CSS, and JavaScript, and React. If you are just starting to learn front-end or React, it may not be the best idea to use the UI framework as your first step."
  },
  {
    key: '3',
    title: 'The best app to increasa your productivity',
    content: "Following the Ant Design specification, we developed a React UI library antd that contains a set of high quality components and demos for building rich, interactive user interfaces.The official guide also assumes that you have intermediate knowledge about HTML, CSS, and JavaScript, and React. If you are just starting to learn front-end or React, it may not be the best idea to use the UI framework as your first step."
  }
]

function AppHero() {
  return (
    <div id='hero' className='heroBlock'>
       <Carousel >
        {
          items.map(item =>{
            return(
            <div className='container-fluid' key={item.key}>
              <div className='content'>
                <h3>{item.title}</h3>
                 <p>{item.content}</p>
                 <div className='btnHolder'>
                     <Button type="primary" size='large'> Learn More</Button>
                     <Button size='large'><i className="fas fa-desktop"></i> Watch a Demo</Button>
                 </div>
              </div>
            </div>
            );
          })
        }
       
    </Carousel>
      </div>
  )
}

export default AppHero