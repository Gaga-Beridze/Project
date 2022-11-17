import Firstdropdown from "./Components/Dropdown/firstdropdown";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
    MDBBtn,
    MDBCollapse,
    MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle,
    MDBIcon,
    MDBNavbar,
    MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink,
    MDBNavbarNav,
    MDBNavbarToggler
} from "mdb-react-ui-kit";
import React from "react";
import {useState} from "react";
import Seconddropdown from "./Components/Dropdown/Seconddropdown";
import Thirddropdown from "./Components/Dropdown/thirddropdown";
import Fourdropdown from "./Components/Dropdown/fourdropdown";
import Fivedropdown from "./Components/Dropdown/fivedropdown";

function App() {
    const [showBasic, setShowBasic] = useState(false)
    return (
        <div>
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas/>
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='#'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>Link</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
            <div className='drop-class'>
                <div>
                    <Firstdropdown></Firstdropdown>
                </div>
                <div>
                    <Seconddropdown></Seconddropdown>
                </div>
                <div className="line">
                    <span></span>
                </div>
                <div className="ss">
                   <Thirddropdown></Thirddropdown>
                </div>
                <div className="ss">
                    <Fourdropdown></Fourdropdown>
                </div>
                <div>
                    <Fivedropdown></Fivedropdown>
                </div>
                <div>
                    <MDBBtn>rhr</MDBBtn>
                </div>
            </div>
        </div>
    );
}

export default App;