import React from "react";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import ListItem from "../components/list_item";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";

class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: []
        };
    }

    async componentDidMount() {
        const self = this;

        if (self.props.match.params.store_id === "me") {
            const req = {
                method: "get",
                url: self.props.host + "/item/listall",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            };
            axios(req)
                .then(function(response) {
                    self.setState({ listItem: response.data });
                })
                .catch(function(error) {
                    console.log("ERROR", error);
                });
        } else {
            const req = {
                method: "get",
                url: self.props.host + "/item/list",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                },
                params: {
                    filter_by_shop_id: self.props.match.params.store_id
                }
            };
            axios(req)
                .then(function(response) {
                    self.setState({ listItem: response.data });
                })
                .catch(function(error) {
                    console.log("ERROR", error);
                });
        }
    }

    clickActivate = (event, value) => {
        event.preventDefault();
        const self = this;
        const req = {
            method: "put",
            url: self.props.host + "/item/me/activate/" + event.target.value,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        axios(req)
            .then(function(response) {
                self.props.history.push("/store/me");
            })
            .catch(function(error) {
                console.log("ERROR", error);
            });
    };

    clickDeactivate = (event, value) => {
        event.preventDefault();
        const self = this;
        const req = {
            method: "delete",
            url: self.props.host + "/item/me/activate/" + event.target.value,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        axios(req)
            .then(function(response) {
                self.props.history.push("/store/me");
            })
            .catch(function(error) {
                console.log("ERROR", error);
            });
    };

    clickEdit = (event, value) => {
        event.preventDefault();
        console.log("masuk", event.target.value);
        this.props.history.push("/item/edit/" + event.target.value);
        const self = this;
        const req = {
            method: "put",
            url: self.props.host + "/item/me/" + event.target.value,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        axios(req)
            .then(function(response) {
                self.props.history.push("/store/me");
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
                    <div class="row">
                        {this.state.listItem.map((item, index) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <Link
                                        to={"/item/" + item.item.id}
                                        style={{
                                            textDecoration: "none",
                                            color: "black"
                                        }}
                                        className="link"
                                    >
                                        <ListItem
                                            item={item}
                                            store={
                                                this.props.match.params.store_id
                                            }
                                            value={this.props.value}
                                            Deactivate={this.clickDeactivate}
                                            Activate={this.clickActivate}
                                            Edit={this.clickEdit}
                                        />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                    {this.props.match.params.store_id === "me" ? (
                        <div class="row justify-content-center">
                            <div className="col-6 text-center p-1 m-1">
                                <Link
                                    to={"/item/edit/new"}
                                    style={{
                                        textDecoration: "none",
                                        color: "black"
                                    }}
                                    className="link"
                                >
                                    <button className=" btn btn-dark btn-block my-3">
                                        ADD NEW ITEM
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <br />
                    )}
                </div>
                <Footer />
            </div>
        );
    }
}

export default connect(
    "listCategory,host",
    actions
)(Store);
