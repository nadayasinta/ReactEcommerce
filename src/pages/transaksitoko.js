import React from "react";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import ListTransactionShop from "../components/list_transaksitoko";
import { connect } from "unistore/react";
import { actions } from "../store/store";

class TransaksiToko extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listTransaksiToko: []
        };
    }

    componentDidMount() {
        const self = this;
        const req = {
            method: "get",
            url: self.props.host + "/transaction/shop/list",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        axios(req)
            .then(function(response) {
                self.setState({ listTransaksiToko: response.data });
            })
            .catch(function(error) {
                console.log("ERROR", error);
            });
    }

    clickDonePay = event => {
        event.preventDefault();
        const self = this;
        const req = {
            method: "put",
            url: self.props.host + "/transaction/shop/" + event.target.value,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        axios(req)
            .then(function(response) {
                console.log("BEANR", response.data);
                self.props.history.push("/transaksitoko");
            })
            .catch(function(error) {
                console.log("ERROR", error);
            });
    };

    clickDoneRent = event => {
        event.preventDefault();
        const self = this;
        const req = {
            method: "put",
            url:
                self.props.host +
                "/transaction/shop/done/" +
                event.target.value,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        axios(req)
            .then(function(response) {
                self.props.history.push("/transaksitoko");
            })
            .catch(function(error) {
                console.log("ERROR", error);
            });
    };

    clickDelete = event => {
        event.preventDefault();
        const self = this;
        const req = {
            method: "delete",
            url: self.props.host + "/transaction/shop/" + event.target.value,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        axios(req)
            .then(function(response) {
                self.props.history.push("/transaksitoko");
            })
            .catch(function(error) {
                console.log("ERROR", error);
            });
    };

    render() {
        return (
            <div class="container-fluid allpage">
                <Header user={localStorage.getItem("status")} />
                <div className="container page_content">
                    <div class="row ">
                        {this.state.listTransaksiToko.map((item, index) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <ListTransactionShop
                                        transaction={item}
                                        DonePay={this.clickDonePay}
                                        DoneRent={this.clickDoneRent}
                                        Delete={this.clickDelete}
                                    />
                                </div>
                            );
                        })}
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
)(TransaksiToko);
