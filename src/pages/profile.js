import React from "react";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import Avatar from "../assets/images/man.png";
import { connect } from "unistore/react";
import { actions } from "../store/store";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataMe: [],
            dataMeDetail: []
        };
    }

    async componentDidMount() {
        const self = this;
        const req = {
            method: "get",
            url: self.props.host + "/user/me",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        await axios(req)
            .then(async function(response) {
                self.setState({ dataMe: response.data });
                const req2 = {
                    method: "get",
                    url: self.props.host + "/user/me/detail",
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                };
                await axios(req2)
                    .then(function(response) {
                        console.log(
                            "BENAR",
                            response.data,
                            self.setState({ dataMeDetail: response.data })
                        );
                    })
                    .catch(function(error) {
                        console.log("ERROR", error);
                    });
            })
            .catch(function(error) {
                console.log("ERROR", error);
            });
    }

    render() {
        return (
            <div class="container-fluid allpage">
                <Header user={localStorage.getItem("status")} />
                <div class="container page_content">
                    <div className="row justify-content-center ">
                        <div className="col-md-6 text-center">
                            <h2 className="fontoswald">PROFILE</h2>
                            <img
                                src={
                                    this.state.dataMeDetail.photo !== ""
                                        ? this.state.dataMeDetail.photo
                                        : Avatar
                                }
                                width="256px"
                                height="256px"
                                className="rounded-circle mt-4"
                            />
                            <h4 className="my-3">
                                {this.state.dataMe.username}
                            </h4>
                            <h6>Full Name : {this.state.dataMe.name}</h6>
                            <h6>Address : {this.state.dataMeDetail.address}</h6>
                            <h6>City : {this.state.dataMeDetail.city}</h6>
                            <h6>
                                Province : {this.state.dataMeDetail.province}
                            </h6>
                            <h6>
                                Telephone : {this.state.dataMeDetail.telephone}
                            </h6>
                            <h6>Email : {this.state.dataMeDetail.email}</h6>

                            <a className="my-3" href="/profile/edit">
                                Edit Profile
                            </a>
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
)(Profile);
