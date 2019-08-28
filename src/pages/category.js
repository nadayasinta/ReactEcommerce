import React from "react";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import ListItem from "../components/list_item";
import Sidebar from "../components/sidebar";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: [],
            search: ""
        };
    }

    componentDidMount() {
        const self = this;
        if (self.props.match.params.category === "search") {
            const req = {
                method: "get",
                url: self.props.host + "/item/list"
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
                params: {
                    filter_by_category: self.props.match.params.category
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
    componentDidUpdate = prevProps => {
        const self = this;
        if (
            prevProps.match.params.category !== this.props.match.params.category
        ) {
            if (self.props.match.params.category === "search") {
                const req = {
                    method: "get",
                    url: self.props.host + "/item/list"
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
                    params: {
                        filter_by_category: self.props.match.params.category
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
    };

    handleDoSearch = event => {
        const self = this;
        if (event.target.value.length > 0) {
            self.setState({ search: event.target.value }, () => {
                const req = {
                    method: "get",
                    url: self.props.host + "/item/list",
                    params: {
                        search_by_name: self.state.search
                    }
                };
                axios(req)
                    .then(function(response) {
                        self.setState({ listItem: response.data });
                    })
                    .catch(function(error) {
                        console.log("ERROR", error);
                    });
            });
        }
    };

    render() {
        return (
            <div class="container-fluid allpage">
                <Header user={localStorage.getItem("status")} />
                <div class="container page_content">
                    <div class="row ">
                        <div className="col-md-3 col-12">
                            <Sidebar doSearch={this.handleDoSearch} />
                        </div>
                        <div className="col-md-9 col-12">
                            <div className="row">
                                {this.state.listItem.map((item, index) => {
                                    return (
                                        <div className="col-md-4 col-6 ">
                                            <Link
                                                to={
                                                    "/item/detail/" +
                                                    item.item.id
                                                }
                                                style={{
                                                    textDecoration: "none",
                                                    color: "black"
                                                }}
                                                className="link"
                                            >
                                                <ListItem item={item} />
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
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
)(Category);
