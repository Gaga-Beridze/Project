import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React, { useState } from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import './App.css';

function Firstdropdown() {
    const [showBasic, setShowBasic] = useState(false)

    return (
        <div>
            <div className="w-70">
                <MDBDropdown className="m-3">
                    <MDBDropdownToggle className="drop-1">Automobile</MDBDropdownToggle>
                    <MDBDropdownMenu>
                        <MDBDropdownItem link>Action</MDBDropdownItem>
                        <MDBDropdownItem link>Another action</MDBDropdownItem>
                        <MDBDropdownItem link>Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
            </div>
        </div>
    );
}

export default Firstdropdown;