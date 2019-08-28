import React from "react";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import Avatar from "../assets/images/man.png";
import { connect } from "unistore/react";
import { actions } from "../store/store";

class ProfileStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataShop: []
        };
    }

    async componentDidMount() {
        const self = this;
        const req = {
            method: "get",
            url: self.props.host + "/shop/me",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        await axios(req)
            .then(function(response) {
                console.log("BEANR", response.data);
                self.setState({ dataShop: response.data });
            })
            .catch(function(error) {
                console.log("ERROR", error);
            });
    }

    clickActivate = event => {
        event.preventDefault();
        const self = this;
        const req = {
            method: "put",
            url: self.props.host + "/shop/me/activate",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        axios(req)
            .then(function(response) {
                console.log("BEANR", response.data);
                self.props.history.push("/mystore");
            })
            .catch(function(error) {
                console.log("ERROR", error);
            });
    };

    clickDeactivate = event => {
        event.preventDefault();
        const self = this;
        const req = {
            method: "delete",
            url: self.props.host + "/shop/me/activate",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        axios(req)
            .then(function(response) {
                console.log("BEANR", response.data);
                self.props.history.push("/mystore");
            })
            .catch(function(error) {
                console.log("ERROR", error);
            });
    };

    render() {
        return (
            <div class="container-fluid allpage">
                <Header user={localStorage.getItem("status")} />
                <div class="container page_content">
                    <div className="row justify-content-center ">
                        <div className="col-md-6 text-center">
                            <h2 className="fontoswald">STORE PROFILE</h2>
                            <img
                                src={
                                    this.state.dataShop.photo !== ""
                                        ? this.state.dataShop.photo
                                        : Avatar
                                }
                                width="256px"
                                height="256px"
                                className="rounded-circle mt-4"
                            />
                            <br />
                            <a className="my-3" href="/mystore/edit">
                                Edit Store Profile
                            </a>
                            <br />
                            {this.state.dataShop.status === true ? (
                                <button
                                    type="button"
                                    class="btn btn-dark"
                                    onClick={this.clickDeactivate}
                                >
                                    Deactivate
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    class="btn btn-dark"
                                    onClick={this.clickActivate}
                                >
                                    Activate
                                </button>
                            )}
                            <h4 className="my-3">{this.state.dataShop.name}</h4>
                            <h6>Address : {this.state.dataShop.address}</h6>
                            <h6>City : {this.state.dataShop.city}</h6>
                            <h6>Province : {this.state.dataShop.province}</h6>
                            <h6>Telephone : {this.state.dataShop.telephone}</h6>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default connect(
    "listCategory,host",
    actions
)(ProfileStore);
