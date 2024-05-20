import React, {useState} from "react"
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Collapse, Dropdown, Button } from "reactstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const UserHamburger = () => {

    const [isCollapseOpen, setIsCollapseOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleCollapse = () => setIsCollapseOpen(!isCollapseOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  
    return (
<UncontrolledDropdown group>
  <DropdownToggle
  >
    <FontAwesomeIcon icon={faBars} />
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem header>
      Header
    </DropdownItem>
    <DropdownItem>
      Some Action
    </DropdownItem>
    <DropdownItem text>
      Dropdown Item Text
    </DropdownItem>
    <DropdownItem disabled>
      Action (disabled)
    </DropdownItem>
    <DropdownItem divider />
    <DropdownItem>
      Foo Action
    </DropdownItem>
    <DropdownItem>
      Bar Action
    </DropdownItem>
    <DropdownItem>
      Quo Action
    </DropdownItem>
  </DropdownMenu>
</UncontrolledDropdown>
    )
}

export default UserHamburger;