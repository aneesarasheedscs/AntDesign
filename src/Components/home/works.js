import React, { Component } from 'react'
import { Button, Modal } from 'antd';

 class AppWorks extends Component {
    state = { visible : false};

     showModal = () => {
      this.setState({
        visible: true,
      })
    };
  
     
  
     handleCancel = (e) => {
        console.log(e)
        this.setState({
            visible: false,
        })
    };
  render() {
    return (
      <div id='works' className='block worksBlock'>
        <div className='container-fluid'>
            <div className='titleHolder'>
                <h2>How it works</h2>
                <p>When requiring users to interact with the application, but without jumping to a new page</p>
            </div>
           <div className='contentHolder'>
           <Button  onClick={this.showModal}>
                <i className='fas fa-play'></i>
            </Button>
           </div>
            <Modal title="Ant Design" visible={this.state.visible} 
             onCancel={this.handleCancel} footer={null}>
                 <iframe title='Ant Design' width='100%' height='350' src='https://www.youtube.com/embed/1uXlLsSmdVA'></iframe>
            </Modal>
        </div>
        
      </div>
    )
  }
}

export default AppWorks
