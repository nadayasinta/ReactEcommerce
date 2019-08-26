import React from "react";
import axios from "axios";
import Header from "../components/header";
import ListTransactionShop from "../components/list_transaksitoko";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

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
            url: "http://localhost:5000/transaction/shop/list",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        axios(req)
            .then(function(response) {
                console.log("BEANR", response.data);
                self.setState({ listTransaksiToko: response.data });
            })
            .catch(function(error) {
                console.log("ERRORa", error);
            });
    }

    clickDonePay = event => {
        event.preventDefault();
        const self = this;
        console.log(event.target.value);
        const req = {
            method: "put",
            url: "http://localhost:5000/transaction/shop/" + event.target.value,
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
        console.log(event.target.value);
        const req = {
            method: "put",
            url:
                "http://localhost:5000/transaction/shop/done/" +
                event.target.value,
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

    clickDelete = event => {
        event.preventDefault();
        const self = this;
        console.log(event.target.value);
        const req = {
            method: "delete",
            url: "http://localhost:5000/transaction/shop/" + event.target.value,
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

    render() {
        return (
            <div class="container-fluid allpage">
                <Header user={localStorage.getItem("status")} />
                <div className="container page_content">
                    <div class="row ">
                        {this.state.listTransaksiToko.map((item, index) => {
                            return (
                                <div className="col-3">
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
            </div>
        );
    }
}

export default TransaksiToko;
