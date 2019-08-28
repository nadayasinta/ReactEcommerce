import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import logo from "../assets/images/logo.png";
import cart from "../assets/images/cart.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/instagram.png";

import store from "../assets/images/store.png";

function Footer(props, context) {
    return (
        <div class="container-fluid footer mt-3">
            <div class="row py-4 justify-content-center">
                <div class="col-md-8 col-0 text-right align-bottom"></div>
                <div class="col-md-4 col-12 text-center align-bottom">
                    <img
                        alt=""
                        src={logo}
                        width="50"
                        height="50"
                        className="inline-block"
                    />
                    <span class="">Let's Lend! Let's Rent!</span> <br />
                    <a href="https://www.facebook.com/">
                        <img
                            class="logo-sosmed m-1"
                            width="30"
                            height="30"
                            src={facebook}
                        />
                    </a>
                    <a href="https://twitter.com/">
                        <img
                            class="logo-sosmed m-1"
                            width="30"
                            height="30"
                            src={twitter}
                        />
                    </a>
                    <a href="https://www.instagram.com/">
                        <img
                            class="logo-sosmed m-1"
                            width="30"
                            height="30"
                            src={instagram}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
