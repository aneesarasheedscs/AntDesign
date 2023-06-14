import React from 'react'
import { Card, List , Button} from 'antd';
const data = [
  {
    title: 'Basic',
    content: [
        {
            price: '$29.99',
            space: '1 GB of space',
            user: "1 User",
            support: "24/7 Support",
            backup: "Safe, Reliable backup",
            access: 'Access from anywhere'
        }
     ]
  },
  {
    title: 'Premium',
    content: [
        {
            price: '$59.99',
            space: '5 GB of space',
            user: "5 Users",
            support: "24/7 Support",
            backup: "Safe, Reliable backup",
            access: 'Access from anywhere'
        }
     ]
  },
  {
    title: 'Enterprise',
    content: [
        {
            price: '$99.99',
            space: 'Unlimited space',
            user: "15 Users",
            support: "24/7 Support",
            backup: "Safe, Reliable backup",
            access: 'Access from anywhere'
        }
     ]
  },
];

function Pricing() {
  return (
    <div id='pricing' className='block pricingBlock bgGray'>
        <div className='container-fluid'>
            <div className='titleHolder'>
                <h2>Chose a plan to fit your needs</h2>
                <p>A list can be used to display content related to a single subject. The content can consist of multiple elements</p>
            </div>
            <List
            grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
            }}
            dataSource={data}
            renderItem={(item) => (
            <List.Item>
                <Card title={item.title}>
                    <p className='large'>{item.content[0].price}</p>
                    <p>{item.content[0].user}</p>
                    <p>{item.content[0].support}</p>
                    <p>{item.content[0].backup}</p>
                    <p>{item.content[0].access}</p>
                    <Button type="primary" size='large'><i className='fab fa-telegram-plane'></i> Get Started</Button>
                </Card>
            </List.Item>
            )}
        />
        </div>
  </div>
  )
}

export default Pricing