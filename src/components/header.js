import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/images/logo.png";
import cart from "../assets/images/cart.png";
import user from "../assets/images/user.png";
import store from "../assets/images/store.png";

function Header(props, context) {
    const clickSignOut = () => {
        localStorage.setItem("token", "");
        localStorage.setItem("user_id", "");
        localStorage.setItem("username", "");
        localStorage.setItem("status", "");
    };

    let coba;
    let coba2;
    if (props.user === "" || props.user === null) {
        coba = (
            <NavDropdown
                title={
                    <div className="inline-block ">
                        <img
                            alt=""
                            src={user}
                            width="20"
                            height="20"
                            className="inline-block"
                        />
                        <span> LET'S RENT</span>
                    </div>
                }
                id="basic-nav-dropdown"
            >
                <NavDropdown.Item href="/signin">SIGN IN</NavDropdown.Item>
                <NavDropdown.Item href="/signup">SIGN UP</NavDropdown.Item>
            </NavDropdown>
        );
    } else {
        coba = (
            <NavDropdown
                title={
                    <div className="inline-block">
                        <img
                            alt=""
                            src={user}
                            width="20"
                            height="20"
                            className="inline-block"
                        />
                        <span>
                            {" "}
                            {localStorage.getItem("username").toUpperCase()}
                        </span>
                    </div>
                }
                id="basic-nav-dropdown"
            >
                <NavDropdown.Item href="/profile">PROFILE</NavDropdown.Item>
                <NavDropdown.Item href="/transaksi">
                    TRANSACTION
                </NavDropdown.Item>
                <NavDropdown.Item href="/signuptoko">
                    OPEN STORE
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={clickSignOut} href="/">
                    SIGN OUT
                </NavDropdown.Item>
            </NavDropdown>
        );
        if (props.user === "true") {
            coba = (
                <NavDropdown
                    title={
                        <div className="inline-block">
                            <img
                                alt=""
                                src={user}
                                width="20"
                                height="20"
                                className="inline-block"
                            />
                            <span>
                                {" "}
                                {localStorage.getItem("username").toUpperCase()}
                            </span>
                        </div>
                    }
                    id="basic-nav-dropdown"
                >
                    <NavDropdown.Item href="/profile">PROFILE</NavDropdown.Item>
                    <NavDropdown.Item href="/transaksi">
                        TRANSACTION
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={clickSignOut} href="/">
                        SIGN OUT
                    </NavDropdown.Item>
                </NavDropdown>
            );

            coba2 = (
                <NavDropdown
                    title={
                        <div className="inline-block">
                            <img alt="" src={store} width="20" height="20" />
                            {<span> MY STORE</span>}
                        </div>
                    }
                    id="basic-nav-dropdown"
                >
                    <NavDropdown.Item href="/mystore">
                        STORE PROFILE
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/store/me">
                        MY ITEM
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/transaksitoko">
                        TRANSACTION
                    </NavDropdown.Item>
                </NavDropdown>
            );
        }
    }

    return (
        <div className="header">
            <Navbar className="shadow py-1" expand="md" fixed="top">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="50"
                        height="50"
                        className="inline-block "
                    />
                    <span className="align-self-center">{" LEND&RENT"}</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-end pt-0"
                >
                    <Nav>
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="/category/search">SEARCH</Nav.Link>
                        {coba2}
                        {coba}
                        <Nav.Link href="/cart">
                            <img
                                alt=""
                                src={cart}
                                width="40"
                                height="40"
                                className="d-inline-block align-top cartlogo"
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
