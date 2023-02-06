import { Navbar, Nav} from "react-bootstrap"



const MyNav = () => {
  return  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Bookstore</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      <Nav.Link href="#link">Browse</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
}


export default MyNav