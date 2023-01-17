import {
    Nav,
    NavbarContainer,
    Menu,
    MenuItem,
    MenuLink,
} from "./Navbar.styles";
const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <Menu>
                    <MenuItem>
                        <MenuLink
                            exact
                            to="/"
                            activeStyle={{
                                transform: "traslateY(3rem)",
                                color: "#E38B06",
                            }}
                        >
                            {"<--Dev-Duel-->"}
                        </MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink
                            exact
                            to="/inspect"
                            activeStyle={{
                                transform: "traslateY(3rem)",
                                color: "#E38B06",
                            }}
                        >
                            Inspect
                        </MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink
                            exact
                            to="/duel"
                            activeStyle={{
                                transform: "traslateY(3rem)",
                                color: "#E38B06",
                            }}
                        >
                            Duel
                        </MenuLink>
                    </MenuItem>
                </Menu>
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;
