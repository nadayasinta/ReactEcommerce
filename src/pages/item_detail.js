import React from "react";
import axios from "axios";
import Header from "../components/header";
import ListItem from "../components/list_item";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import DefaultImage from "../assets/images/picture.png";

class Category extends React.Component {
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
            url: "http://localhost:5000/item/" + self.props.match.params.item_id
        };
        axios(req)
            .then(function(response) {
                console.log("BEANR", response.data);
                self.setState({ dataItem: response.data });
                console.log(self.state.dataItem);
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
                "http://localhost:5000/item/rent/" +
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
        console.log("ini2");

        axios(req)
            .then(function(response) {
                console.log("BEANR", response.data);
                self.props.history.push("/");
            })
            .catch(function(error) {
                console.log("ERROR", error);
            });
    };

    handleDateChange = event => {
        this.setState({ date: event.target.value }, () =>
            console.log("ya1", this.state.date)
        );
    };

    handleDurationChange = event => {
        this.setState({ duration: event.target.value }, () =>
            console.log("ya2", this.state.duration)
        );
    };

    handleQtyChange = event => {
        this.setState({ qty: event.target.value }, () =>
            console.log("ya3", this.state.qty)
        );
    };

    render() {
        return (
            <div class="container-fluid allpage">
                <Header user={localStorage.getItem("status")} />
                <div class="container page_content">
                    <div className="row justify-content-center  border mx-1 my-4 p-4">
                        <div className="col-6">
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

                        <div className="col-6 pl-4 text-left">
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

                        <div className="col-6"></div>

                        <div className="col-6 pl-4">
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
            </div>
        );
    }
}

export default Category;
