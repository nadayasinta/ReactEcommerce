import React from "react";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import { connect } from "unistore/react";
import { actions } from "../store/store";

class SignUpToko extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            city: "",
            province: "",
            telephone: "",
            photo: ""
        };
    }

    doSignUp = event => {
        event.preventDefault();
        const self = this;
        const req = {
            method: "post",
            url: self.props.host + "/shop/addnew",
            data: {
                name: self.state.name,
                address: self.state.address,
                city: self.state.city,
                province: self.state.province,
                telephone: self.state.telephone,
                photo: self.state.photo
            },
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        axios(req)
            .then(function(response) {
                self.props.history.push("/");
            })
            .catch(function(error) {
                console.log("ERROR", error);
            });
    };

    handleNameChange = event => {
        this.setState({ name: event.target.value });
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

    handlePhotoChange = event => {
        this.setState({ photo: event.target.value });
    };

    render() {
        if (JSON.parse(localStorage.getItem("status"))) {
            return (
                <div>
                    <Header user={localStorage.getItem("status")} />
                    <div className="mt-4">sudah punya toko </div>
                </div>
            );
        }
        if (!JSON.parse(localStorage.getItem("status"))) {
            return (
                <div class="container-fluid allpage">
                    <Header user={localStorage.getItem("status")} />
                    <div className="container page_content">
                        <form onSubmit={this.doSignUp}>
                            <div className=" row justify-content-center text-center">
                                <h2 className="fontoswald">START YOUR STORE</h2>
                            </div>

                            <div className=" row justify-content-center text-center">
                                <label for="name">Name</label>
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
                                {/* <input type="reset" value="Reset" /> */}
                            </div>
                        </form>
                    </div>
                    <Footer />
                </div>
            );
        }
    }
}

export default connect(
    "listCategory,host",
    actions
)(SignUpToko);
