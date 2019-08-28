import React from "react";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import ListItem from "../components/list_item";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import DefaultImage from "../assets/images/picture.png";

class ItemDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            duration: "",
            qty: "",
            dataItem: { item: { name: "", category: "" }, shop: { name: "" } }
        };
    }
    componentDidMount() {
        const self = this;
        const req = {
            method: "get",
            url: self.props.host + "/item/" + self.props.match.params.item_id
        };
        axios(req)
            .then(function(response) {
                self.setState({ dataItem: response.data });
            })
            .catch(function(error) {
                console.log("ERROR", error);
            });
    }

    doAddToCart = event => {
        event.preventDefault();
        const self = this;
        console.log("ini");
        const req = {
            method: "patch",
            url:
                self.props.host +
                "/item/rent/" +
                self.props.match.params.item_id,
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
                self.props.history.push("/");
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
                <div class="container page_content">
                    <div className="row justify-content-center  border mx-1 my-4 p-4">
                        <div className="col-md-6 col-12">
                            <div className="row justify-content-center">
                                <img
                                    className="w-100"
                                    src={
                                        this.state.dataItem.item.photo === null
                                            ? DefaultImage
                                            : this.state.dataItem.item.photo
                                    }
                                    alt=""
                                />
                            </div>

                            <div className="row justify-content-center">
                                <h5 className="text-muted ">
                                    {this.state.dataItem.item.qty > 0
                                        ? "AVAILABLE"
                                        : "OUT OF STOCK"}
                                </h5>
                            </div>
                        </div>

                        <div className="col-md-6 col-12 pl-4 text-md-left text-center">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="font-weight-bold fontoswald mb-0">
                                        {this.state.dataItem.item.name.toUpperCase()}
                                    </h2>
                                </div>
                                <div className="col-12">
                                    <h6 className="text-dark mb-0">
                                        {this.state.dataItem.shop.name.toUpperCase()}
                                    </h6>
                                </div>
                                <div className="col-12">
                                    <span className="text-muted mr-3">
                                        [
                                        {this.state.dataItem.item.category.toUpperCase()}
                                        ]
                                    </span>

                                    <span className="text-muted">
                                        Stock: {this.state.dataItem.item.qty}
                                    </span>
                                </div>

                                <div className="col-12 my-3">
                                    <h4 className="text-dark">
                                        Rp. {this.state.dataItem.item.price},00
                                    </h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <h6 className="font-weight-bold">
                                        DESCRIPTION
                                    </h6>
                                    <p>
                                        {this.state.dataItem.item.description}
                                    </p>
                                </div>
                                <div className="col-12">
                                    <h6 className="font-weight-bold">DETAIL</h6>
                                    <p>{this.state.dataItem.item.detail}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-0"></div>

                        <div className="col-md-6 col-12 pl-4">
                            <form
                                className="row justify-content-center"
                                onSubmit={this.doAddToCart}
                            >
                                <div className=" col-12 text-center">
                                    <label for="date">Date</label>
                                </div>
                                <div className=" col-12 text-center">
                                    <input
                                        class="form-control"
                                        type="date"
                                        name="date"
                                        placeholder="date"
                                        onChange={this.handleDateChange}
                                    />
                                </div>

                                <div className=" col-12 text-center">
                                    <label for="duration">
                                        Duration (month)
                                    </label>
                                </div>
                                <div className=" col-12 text-center">
                                    <input
                                        class="form-control"
                                        type="number"
                                        name="duration"
                                        placeholder="duration"
                                        onChange={this.handleDurationChange}
                                    />
                                </div>

                                <div className=" col-12 text-center">
                                    <label for="qty">Quantity</label>
                                </div>
                                <div className=" col-12 text-center">
                                    <input
                                        class="form-control"
                                        type="number"
                                        name="qty"
                                        placeholder="qty"
                                        onChange={this.handleQtyChange}
                                    />
                                </div>

                                <div className=" col-12 text-center">
                                    <input
                                        className=" btn btn-dark btn-block  my-3"
                                        type="submit"
                                        value="Add to Cart"
                                    />
                                </div>
                            </form>
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
)(ItemDetail);
