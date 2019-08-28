import React from "react";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import ListCart from "../components/list_cart";
import { connect } from "unistore/react";
import { actions } from "../store/store";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listCart: [],
            date: "",
            duration: "",
            qty: ""
        };
    }

    componentDidMount() {
        const self = this;
        const req = {
            method: "get",
            url: self.props.host + "/cart/list",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        axios(req)
            .then(function(response) {
                self.setState({ listCart: response.data });
            })
            .catch(function(error) {
                console.log("ERROR", error);
            });
    }

    doCheckout = event => {
        event.preventDefault();
        const self = this;
        console.log(event.target.value);
        const req = {
            method: "post",
            url: self.props.host + "/cart/checkout",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        axios(req)
            .then(function(response) {
                self.props.history.push("/transaksi");
            })
            .catch(function(error) {
                console.log("ERROR", error);
            });
    };

    clickDeleteCart = (event, value) => {
        event.preventDefault();
        const self = this;
        const req = {
            method: "delete",
            url: self.props.host + "/cart/" + event.target.value,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        axios(req)
            .then(function(response) {
                self.props.history.push("/cart");
            })
            .catch(function(error) {
                console.log("ERROR", error);
            });
    };

    clickUpdateCart = (event, value) => {
        event.preventDefault();
        const self = this;
        const req = {
            method: "put",
            url: self.props.host + "/cart/" + event.target.value,
            data: {
                date: self.state.date,
                duration: self.state.duration,
                qty: self.state.qty
            },
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };

        axios(req)
            .then(function(response) {
                self.props.history.push("/cart");
            })
            .catch(function(error) {
                console.log("ERROR", error);
            });
    };

    handleDateChange = event => {
        this.setState({ date: event.target.value });
    };

    handleDurationChange = event => {
        this.setState({ duration: event.target.value });
    };

    handleQtyChange = event => {
        this.setState({ qty: event.target.value });
    };

    render() {
        return (
            <div class="container-fluid allpage">
                <Header user={localStorage.getItem("status")} />
                <div className="container page_content">
                    <div class="row ">
                        {this.state.listCart.map((item, index) => {
                            return (
                                <div className="col-12">
                                    <ListCart
                                        cart={item}
                                        DeleteCart={this.clickDeleteCart}
                                        value={this.props.value}
                                        UpdateCart={this.clickUpdateCart}
                                        DateChange={this.handleDateChange}
                                        DurationChange={
                                            this.handleDurationChange
                                        }
                                        QtyChange={this.handleQtyChange}
                                    />
                                </div>
                            );
                        })}
                        <div className="col-12 text-center">
                            <button
                                type="button"
                                class="btn btn-dark btn-block"
                                onClick={this.doCheckout}
                            >
                                Checkout
                            </button>
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
)(Cart);
