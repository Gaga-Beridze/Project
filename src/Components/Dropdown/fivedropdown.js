import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle,} from 'mdb-react-ui-kit';
import './App.css';

function Fivedropdown() {

    return (
        <div >

            <div className='w-70'>
                <MDBDropdown className='m-4 '>
                    <MDBDropdownToggle className='drop-1'>All makes</MDBDropdownToggle>
                    <MDBDropdownMenu>
                        <input type={'text'}></input>
                        <MDBDropdownItem link>Action</MDBDropdownItem>
                        <MDBDropdownItem link>Another action</MDBDropdownItem>
                        <MDBDropdownItem link>Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
            </div>
        </div>
    );
}

export default Fivedropdown;