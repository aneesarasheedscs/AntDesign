import React , { useState }  from 'react'
// import { Menu } from 'antd';
import { Anchor , Drawer, Button } from 'antd';
const { Link } = Anchor;
 
function AppHeader() {
  
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    }
  
  return (
    <div className='container-fluid'>
        <div className='header'>
            <div className="logo" >
              <i className="fas fa-bolt"></i>
              <a href='http://www.google.com'>Tech</a>
            </div>
            {/* <Menu  mode="horizontal" defaultSelectedKeys={['home']}>
              <Menu.Item key='home'>Home</Menu.Item>
              <Menu.Item key='about'>About</Menu.Item>
              <Menu.Item key='features'>Features</Menu.Item>
              <Menu.Item key='contact'>Contact</Menu.Item>
              <Menu.Item key='faq'>FAQ</Menu.Item>
              <Menu.Item key='pricing'>Pricing</Menu.Item>
              <Menu.Item key='how it works'> How it works</Menu.Item>
             </Menu> */}
             <div className='mobileHidden'>
                <Anchor targetOffset='65'>
                    <Link className='links' href="#hero" title="Home" />
                    <Link className='links' href="#about" title="About" />
                    <Link className='links' href="#feature" title="Features" />
                    <Link className='links' href="#works" title="Works" />
                    <Link className='links' href="#faq" title="FAQ" />
                    <Link className='links' href="#pricing" title="Pricing" />
                    <Link className='links' href="#contact" title="Contact" />
                </Anchor>
             </div>
             <div className='mobileVisible'>
                <Button type="primary" onClick={showDrawer}>
                  <i className='fas fa-bars'></i>
                </Button>
                <Drawer 
                  placement="right" 
                  onClose={onClose} 
                  open={open}>
                     <Anchor targetOffset='65'>
                        <Link className='links' href="#hero" title="Home" />
                        <Link className='links' href="#about" title="About" />
                        <Link className='links' href="#feature" title="Features" />
                        <Link className='links' href="#works" title="Works" />
                        <Link className='links' href="#faq" title="FAQ" />
                        <Link className='links' href="#pricing" title="Pricing" />
                        <Link className='links' href="#contact" title="Contact" />
                    </Anchor>
                </Drawer>
              </div>
        </div>
      </div>
  );
}

export default AppHeader