import React from 'react'
import { Row, Col } from 'antd';

const items = [
    {
        key: '1',
        icon: <i className="fas fa-chart-pie"></i>,
        title: "High Performance",
        content: "Our grid systems base on Flex layout to allow the elements within the parent to be aligned horizontally - left, center, right, wide arrangement, and decentralized arrangement.  "
    },
    {
        key: '2',
        icon: <i className="fas fa-desktop"></i>,
        title: "High Performance",
        content: "Our grid systems base on Flex layout to allow the elements within the parent to be aligned horizontally - left, center, right, wide arrangement, and decentralized arrangement.  "
    },
    {
        key: '3',
        icon: <i className="fas fa-database"></i>,
        title: "High Performance",
        content: "Our grid systems base on Flex layout to allow the elements within the parent to be aligned horizontally - left, center, right, wide arrangement, and decentralized arrangement.  "
    },
]
function AppAbout() {
  return (
    <div id='about' className='block aboutBlock'>
        <div className='container-fluid'>
            <div className='titleHolder'>
                <h2>About US</h2>
                <p>We provide a liberary for developing an atractive UI designes of your Applications</p>

            </div>
            <div className='contentHolder'>
                <p>
                    Add script and link tags in your browser and use the global variable antd.
                    We provide antd.js and antd.min.js reset.css under dist folder in antd's npm package. You can also download these files directly from CDNJS, or unpkg. 
                    We strongly discourage loading the entire files this will add bloat to your application and make it more difficult to receive bugfixes and updates. Antd is intended to be used in conjunction with a build tool, such as webpack, which will make it easy to import only the parts of antd that you are using. </p>
            </div>
            <Row gutter={[16, 16]}>
                { items.map( item => {
                    return(
                        <Col md={{span: 8 }} key={item.key}>
                            <div className='content'>
                                <div className='icon'>
                                     {item.icon}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        </Col>
                    );
                    })
                }
            </Row>

        </div>

    </div>
  )
}

export default AppAbout