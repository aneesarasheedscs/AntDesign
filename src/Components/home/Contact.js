import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';

function Contact() {
  return (
    <div id='contact' className='block contactBlock'>
        <div className='container-fluid'>
            <div className='titleHolder'>
                <h2>Get in Touch</h2>
                <p>High performance Form component with data scope management.</p>
            </div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                
                >
                <Form.Item
                    name="full name"
                    rules={[{ required: true, message: 'Please input your Full Name!' }]}
                >
                    <Input placeholder="Full Name" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input placeholder="Email Address" />
                </Form.Item>
                <Form.Item
                    name="telephone"
                    rules={[{ required: true, message: 'Please input your Telephone!' }]}
                >
                    <Input placeholder="Telephone" />
                </Form.Item>
                <Form.Item
                    name="subject"
                >
                    <Input placeholder="Subject" />
                </Form.Item>
                <Form.Item
                    name="message"
                >
                    <TextArea placeholder="Message"
                />
                </Form.Item>
                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                    {
                        validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                    ]}
                    
                >
                    <Checkbox>
                    I have read the agreement conditions.
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Submit
                    </Button>
                </Form.Item>
          </Form>
        </div>
    </div>
  )
}

export default Contact