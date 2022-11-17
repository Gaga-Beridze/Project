import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import './App.css';

function Seconddropdown() {

    return (
        <div >

            <div className='w-70'>
                <MDBDropdown className='m-4 '>
                    <MDBDropdownToggle className='drop-2 marginleft'>1900</MDBDropdownToggle>
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

export default Seconddropdown;