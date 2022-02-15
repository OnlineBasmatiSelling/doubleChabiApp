import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthUserContext';
import logo from './basmatiLogo.svg';
const Navigation =(props)=>{
    const { signOut, authUser, loading } = useAuth();
    const navigate=useNavigate();
    const gotologin=()=>{
        navigate('/login')
    }
    const logout=()=>{
        signOut();
        navigate('/login')
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} style={{width:100, marginTop: -7}} /></Navbar.Brand>
                <Navbar.Brand href="#home">Basmati Rice</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#basmati">About</Nav.Link>
                    <Nav.Link href="/Products">Products</Nav.Link>
                    {props.authUser && 
                    <Nav.Link href="/Cart">Cart</Nav.Link>
                    }
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    {props.authUser!==null?
                    <Button onClick={logout} variant="outline-success">Logout</Button>:
                    <Button onClick={gotologin} variant="outline-success">Login</Button>    
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}
export default Navigation;