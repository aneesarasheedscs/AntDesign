 import './App.css';
//  import PostForm from './Components/PostForm';
// import { Button } from 'antd';
import 'antd/dist/reset.css';
// import 'antd/dist/antd.css';
import AppHeader from './Components/Common/Header';
import AppHeader2 from './Components/Common/Header2';
import AppHome from './Components/views/home';

import {  Layout , Menu  } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import AppFooter from './Components/home/Footer';
const { Header ,Content } = Layout;

function App() {
  return (
    
          
    
       <Layout className='mainLayout'>
          <Header >
            <AppHeader />  
          </Header>
            <Content>
              <AppHome />
            </Content>
            <Footer>
               <AppFooter />
            </Footer>
          </Layout>
          
        
      
        
  );
}

export default App;
