Navbar
Bootstrap Navbar

Bootstrap’s powerful, responsive navigation header. Includes support for branding, navigation, and more.




reactstrap
Components
GitHub
Options
Simple Text
Hide code
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
Copy
Name	Description	Default	
Control
color	
-	
primary
light	
-	
dark	
-	
full	
-	
expand	
-	
true
container	
-	
fluid
fixed	
-
-	
Choose option...
Stories
Brand
NavbarBrand can be applied to most elements, be it text or images or both images and text.

logo
Reactstrap
logoReactstrap
Show code
Navbar Toggler
Navbar togglers help toggle navbar in case there is not enough space.

reactstrap

Show code
Props
Navbar
Name	Description	Default
children	
node
-
className	
Add custom class
string
-
color	
Theme the navbar by adding a background color
string
-
container	
Use any of the responsive containers to change how wide the content in your navbar is presented.
bool
string
'fluid'
cssModule	
Change underlying component's CSS base class name
object
-
dark	
This prop is passed if the background is dark, to make the text lighter
bool
-
expand	
Determine if to show toggler button
bool
string
false
fixed	
Make the navbar fixed at the top
string
-
full	
bool
-
light	
Add .navbar-light class
bool
-
role	
string
-
sticky	
Use position: sticky which isn't fully supported in every browser
string
-
tag	
Set a custom element for this component
tagPropType
'nav'
NavbarToggler
Name	Description	Default
className	
Add custom class
string
-
cssModule	
Change underlying component's CSS base class name
object
-
tag	
Set a custom element for this component
tagPropType
'button'
type	
string
'button'
children	
Pass children so this component can wrap the child elements
node
-
NavbarBrand
Name	Description	Default
className	
Add custom class
string
-
cssModule	
Change underlying component's CSS base class name
object
-
tag	
Set a custom element for this component
tagPropType
'a'
NavbarText
Name	Description	Default
className	
Add custom class
string
-
cssModule	
Change underlying component's CSS base class name
object
-
tag	
Set a custom element for this component
tagPropType
'span'
active	
bool
-
No code available