import React from 'react'

import image1 from './assets/modern.jpg';
import image2 from './assets/clean4.jpg';
import image3 from './assets/great-support.jpg';
import image4 from './assets/customiz2.jpg';
import image5 from './assets/feature.jpg';
 import image6 from './assets/advanceOptions.jpg';

 
import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function AppFeature() {
  return (
    <div id='feature' className='block featureBlock bgGray'>
         <div className='container-fluid'>
          <div className='titleHolder'>
            <h2>Key Features and Benefits</h2>
            <p>A card can be used to display content related to a single subject. </p>
          </div>
         <Row gutter={[16, 16]}>
                <Col  xs={{span: 24 }} sm={{span: 12 }} md={{span: 8 }} >
                <Card hoverable
                    cover={<img alt="Modern Design" style={{height: '300px'}} src={image1} />}
                >
                    <Meta title="Modern Design"  />
                </Card>
                </Col>
                <Col  xs={{span: 24 }} sm={{span: 12 }} md={{span: 8 }} >
                <Card hoverable
                
                    cover={<img alt="Modern Design" style={{height: '300px'}} src={image2} />}
                >
                    <Meta title="Clean and Elegent"  />
                </Card>
                </Col>
                <Col  xs={{span: 24 }} sm={{span: 12 }} md={{span: 8 }} >
                <Card hoverable
                    cover={<img alt="Modern Design" style={{height: '300px'}} src={image3} />}
                >
                    <Meta title="Great Support"  />
                </Card>
                </Col>
                <Col  xs={{span: 24 }} sm={{span: 12 }} md={{span: 8 }} >
                <Card hoverable
                    cover={<img alt="Modern Design" style={{height: '300px'}} src={image4} />}
                >
                    <Meta title="Easy to Customize"  />
                </Card>
                </Col>
                <Col  xs={{span: 24 }} sm={{span: 12 }} md={{span: 8 }} >
                <Card hoverable
                    cover={<img alt="Modern Design" style={{height: '300px'}} src={image5} />}
                >
                    <Meta title="Unlimited Features"  />
                </Card>
                </Col>
                <Col  xs={{span: 24 }} sm={{span: 12 }} md={{span: 8 }} >
                <Card hoverable
                    cover={<img alt="Modern Design" style={{height: '300px'}} src={image6} />}
                >
                    <Meta title="Advance Options"  />
                </Card>
                </Col>
                 
        </Row>
         </div>
    </div>
  )
}

export default AppFeature