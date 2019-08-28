import React from "react";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import { connect } from "unistore/react";
import { actions } from "../store/store";

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            password: "",
            address: "",
            city: "",
            province: "",
            telephone: "",
            email: "",
            photo: ""
        };
    }

    doEditProfile = async event => {
        event.preventDefault();
        const self = this;
        const req1 = {
            method: "put",
            url: self.props.host + "/user/me",
            data: {
                name: self.state.name,
                username: self.state.username,
                password: self.state.password
            },
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        await axios(req1)
            .then(async function(response) {
                const req2 = {
                    method: "patch",
                    url: self.props.host + "/user/me/detail",
                    data: {
                        address: self.state.address,
                        city: self.state.city,
                        province: self.state.province,
                        telephone: self.state.telephone,
                        email: self.state.email,
                        photo: self.state.photo
                    },
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                };
                await axios(req2)
                    .then(function(response) {
                        self.props.history.push("/profile");
                    })
                    .catch(function(error) {
                        console.log("ERROR", error);
                    });
            })
            .catch(function(error) {
                console.log("ERROR", error);
            });
    };

    handleNameChange = event => {
        this.setState({ name: event.target.value });
    };

    handleUsernameChange = event => {
        this.setState({ username: event.target.value });
    };

    handlePasswordChange = event => {
        this.setState({ password: event.target.value });
    };

    handleAddressChange = event => {
        this.setState({ address: event.target.value });
    };

    handleCityChange = event => {
        this.setState({ city: event.target.value });
    };

    handleProvinceChange = event => {
        this.setState({ province: event.target.value });
    };

    handleTelephoneChange = event => {
        this.setState({ telephone: event.target.value });
    };

    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    };

    handlePhotoChange = event => {
        this.setState({ photo: event.target.value });
    };

    render() {
        return (
            <div class="container-fluid allpage">
                <Header user={localStorage.getItem("status")} />
                <div className="container page_content">
                    <form onSubmit={this.doEditProfile}>
                        <div className=" row justify-content-center text-center">
                            <h4 className="fontoswald">EDIT PROFILE DATA</h4>
                        </div>

                        <div className=" row justify-content-center text-center">
                            <label for="name">Full Name</label>
                        </div>
                        <div className=" row justify-content-center text-center">
                            <input
                                class="form-control"
                                type="text"
                                name="name"
                                placeholder="name"
                                onChange={this.handleNameChange}
                            />
                        </div>

                        <div className=" row justify-content-center text-center">
                            <label for="username">Username</label>
                        </div>
                        <div className=" row justify-content-center text-center">
                            <input
                                class="form-control"
                                type="text"
                                name="username"
                                placeholder="username"
                                onChange={this.handleUsernameChange}
                            />
                        </div>

                        <div className=" row justify-content-center text-center">
                            <label for="password">Password</label>
                        </div>
                        <div className=" row justify-content-center text-center">
                            <input
                                class="form-control"
                                type="password"
                                name="password"
                                placeholder="password"
                                onChange={this.handlePasswordChange}
                            />
                        </div>

                        <div className=" row justify-content-center text-center">
                            <label for="address">Address</label>
                        </div>
                        <div className=" row justify-content-center text-center">
                            <input
                                class="form-control"
                                type="text"
                                name="address"
                                placeholder="address"
                                onChange={this.handleAddressChange}
                            />
                        </div>

                        <div className=" row justify-content-center text-center">
                            <label for="city">City</label>
                        </div>
                        <div className=" row justify-content-center text-center">
                            <input
                                class="form-control"
                                type="text"
                                name="city"
                                placeholder="city"
                                onChange={this.handleCityChange}
                            />
                        </div>

                        <div className=" row justify-content-center text-center">
                            <label for="province">Province</label>
                        </div>
                        <div className=" row justify-content-center text-center">
                            <input
                                class="form-control"
                                type="text"
                                name="province"
                                placeholder="province"
                                onChange={this.handleProvinceChange}
                            />
                        </div>

                        <div className=" row justify-content-center text-center">
                            <label for="telephone">Telephone</label>
                        </div>
                        <div className=" row justify-content-center text-center">
                            <input
                                class="form-control"
                                type="tel"
                                name="telephone"
                                placeholder="telephone"
                                onChange={this.handleTelephoneChange}
                            />
                        </div>

                        <div className=" row justify-content-center text-center">
                            <label for="email">Email</label>
                        </div>
                        <div className=" row justify-content-center text-center">
                            <input
                                class="form-control"
                                type="email"
                                name="email"
                                placeholder="email"
                                onChange={this.handleEmailChange}
                            />
                        </div>

                        <div className=" row justify-content-center text-center">
                            <label for="photo">Photo</label>
                        </div>
                        <div className=" row justify-content-center text-center">
                            <input
                                class="form-control"
                                type="url"
                                name="photo"
                                placeholder="photo"
                                onChange={this.handlePhotoChange}
                            />
                        </div>

                        <div className=" row justify-content-center text-center">
                            <input
                                className=" btn btn-dark btn-block my-3"
                                type="submit"
                                value="Submit"
                            />
                            {/* <input
                                className=" btn btn-dark btn-block"
                                type="reset"
                                value="Reset"
                            /> */}
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}

export default connect(
    "listCategory,host",
    actions
)(EditProfile);
