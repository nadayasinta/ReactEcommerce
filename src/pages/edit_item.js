import React from "react";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import { connect } from "unistore/react";
import { actions } from "../store/store";

class EditItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            qty: "",
            price: "",
            category: ""
        };
    }

    doAddItem = event => {
        event.preventDefault();
        const self = this;
        const req = {
            method: "post",
            url: self.props.host + "/item/me",
            data: {
                name: self.state.name,
                qty: self.state.qty,
                price: self.state.price,
                category: self.state.category,
                description: self.state.description,
                detail: self.state.detail,
                photo: self.state.photo
            },
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        axios(req)
            .then(function(response) {
                console.log("BEANR", response.data);
                self.props.history.push("/store/me");
            })
            .catch(function(error) {
                console.log("ERROR", error);
            });
    };

    doEditItem = event => {
        event.preventDefault();
        const self = this;
        const req = {
            method: "put",
            url:
                self.props.host + "/item/me/" + this.props.match.params.item_id,
            data: {
                name: self.state.name,
                qty: self.state.qty,
                price: self.state.price,
                category: self.state.category,
                description: self.state.description,
                detail: self.state.detail,
                photo: self.state.photo
            },
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        axios(req)
            .then(function(response) {
                console.log("BEANR", response.data);
                self.props.history.push("/store/me");
            })
            .catch(function(error) {
                console.log("ERROR", error);
            });
    };

    handleNameChange = event => {
        this.setState({ name: event.target.value });
    };

    handleQtyChange = event => {
        this.setState({ qty: event.target.value });
    };

    handlePriceChange = event => {
        this.setState({ price: event.target.value });
    };

    handleCategoryChange = event => {
        this.setState({ category: event.target.value });
    };

    handleDescriptionChange = event => {
        this.setState({ description: event.target.value });
    };

    handleDetailChange = event => {
        this.setState({ detail: event.target.value });
    };

    handlePhotoChange = event => {
        this.setState({ photo: event.target.value });
    };

    render() {
        if (!JSON.parse(localStorage.getItem("status"))) {
            return (
                <div class="container-fluid allpage">
                    <Header />
                    <div className="container page_content">
                        buat toko dulu{" "}
                    </div>
                </div>
            );
        }
        if (JSON.parse(localStorage.getItem("status"))) {
            return (
                <div class="container-fluid allpage">
                    <Header user={localStorage.getItem("status")} />
                    <div className="container page_content">
                        <form
                            onSubmit={
                                this.props.match.params.item_id === "new"
                                    ? this.doAddItem
                                    : this.doEditItem
                            }
                        >
                            <div className=" row justify-content-center text-center">
                                <h2 className="fontoswald">
                                    {this.props.match.params.item_id === "new"
                                        ? "ADD NEW ITEM"
                                        : "EDIT ITEM"}
                                </h2>
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
                                <label for="qty">Quantity</label>
                            </div>
                            <div className=" row justify-content-center text-center">
                                <input
                                    class="form-control"
                                    type="number"
                                    name="qty"
                                    placeholder="qty"
                                    onChange={this.handleQtyChange}
                                />
                            </div>

                            <div className=" row justify-content-center text-center">
                                <label for="price">Price</label>
                            </div>
                            <div className=" row justify-content-center text-center">
                                <input
                                    class="form-control"
                                    type="number"
                                    name="price"
                                    placeholder="price"
                                    onChange={this.handlePriceChange}
                                />
                            </div>

                            <div className=" row justify-content-center text-center">
                                <label for="category">Category</label>
                            </div>
                            <div className=" row justify-content-center text-center">
                                <input
                                    class="form-control"
                                    type="text"
                                    name="category"
                                    placeholder="category"
                                    onChange={this.handleCategoryChange}
                                />
                            </div>

                            <div className=" row justify-content-center text-center">
                                <label for="description">Description</label>
                            </div>
                            <div className=" row justify-content-center text-center">
                                <input
                                    class="form-control"
                                    type="text"
                                    name="description"
                                    placeholder="description"
                                    onChange={this.handleDescriptionChange}
                                />
                            </div>

                            <div className=" row justify-content-center text-center">
                                <label for="detail">Detail</label>
                            </div>
                            <div className=" row justify-content-center text-center">
                                <input
                                    class="form-control"
                                    type="text"
                                    name="detail"
                                    placeholder="detail"
                                    onChange={this.handleDetailChange}
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
)(EditItem);
