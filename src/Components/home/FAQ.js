import React from 'react'
import { Button, Collapse } from 'antd';
const { Panel } = Collapse;

function FAQ() {
  return (
    <div id='faq' className='block faqBlock'>
        <div className='container-fluid'>
            <div className='titleHolder'>
                <h2>Frequently Asked Questions</h2>
                <p>By default, any number of panels can be expanded at a time. </p>
            </div>
        <Collapse defaultActiveKey={['1']} >
            <Panel header="How to set up the theme?" key="1">
                <p>Collapse is used to group or hide complex regions to keep the page clean. Accordion is a special kind of Collapse, which allows only one panel to be expanded at a time</p>
            </Panel>
            <Panel header="Can I change plan or cancel at any time ?" key="2">
                <p>Collapse is used to group or hide complex regions to keep the page clean. Accordion is a special kind of Collapse, which allows only one panel to be expanded at a time</p>
            </Panel>
            <Panel header="What is Collapse and difference between Accordian ?" key="3">
                <p>Collapse is used to group or hide complex regions to keep the page clean. Accordion is a special kind of Collapse, which allows only one panel to be expanded at a time</p>
            </Panel>
            <Panel header="For What Purpose Collapse is used ?" key="4">
            <p>It can be used to group or hide complex regions to keep the page clean. Accordion is a special kind of Collapse, which allows only one panel to be expanded at a time</p>
            </Panel>
            <Panel header="Define Collapse in detail?" key="5">
            <p> A content area which can be collapsed and expanded...
                Can be used to group or hide complex regions to keep the page clean. Accordion is a special kind of Collapse, which allows only one panel to be expanded at a time</p>
            </Panel>
        </Collapse>
        <div className='quickSupport'>
            <h3>Want quick support?</h3>
            <p>We provide a best support to answer questions in an effective way send your questions and find answer here in a feedback in two hours, You will get your chance and find it very effecient!</p>
            <Button type='primary' size='large'>< i className='fas fa-envelope'></i> Email your Questions</Button>
        </div>
        </div>
    </div>
  )
}

export default FAQ