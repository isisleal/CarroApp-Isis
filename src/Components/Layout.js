import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import './Layout.css'

class Layout extends React.Component{
    render(){
        const {
            props: { children },
          } = this

        return(
           
                <div className="App-layout">
                
                <div className="main-header">
                <Navbar expand="lg" className="nav-bar-content">

                <Navbar.Text className="text-white txt-nav">Quanto vale o seu carro?</Navbar.Text>
            
                <Nav className="float-right">
                <Nav.Link className="text-white" href="/">Home</Nav.Link>
                </Nav>
               
                </Navbar>
                </div>
            

                <div className="content">{children}</div>

                <div className="footer">
                    <p>Desenvolvido por Isis Leal</p>
                </div>

                </div>
        )
    }
    

}


export default Layout;