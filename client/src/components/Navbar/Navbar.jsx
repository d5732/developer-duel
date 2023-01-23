import { Nav, Menu, MenuItem, MenuLink } from "./Navbar.styles";
const Navbar = () => {
    return (
        <Nav>
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
        </Nav>
    );
};

export default Navbar;
