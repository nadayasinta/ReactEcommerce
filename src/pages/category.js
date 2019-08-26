import React from "react";
import axios from "axios";
import Header from "../components/header";
import ListItem from "../components/list_item";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: []
        };
    }

    componentDidMount() {
        const self = this;

        if (self.props.match.params.category === "search") {
            const req = {
                method: "get",
                url: "http://localhost:5000/item/list"
            };
            axios(req)
                .then(function(response) {
                    console.log("BEANR", response.data);
                    self.setState({ listItem: response.data });
                })
                .catch(function(error) {
                    console.log("ERROR", error);
                });
        } else {
            const req = {
                method: "get",
                url: "http://localhost:5000/item/list",
                params: {
                    filter_by_category: self.props.match.params.category
                }
            };
            axios(req)
                .then(function(response) {
                    console.log("BEANR", response.data);
                    self.setState({ listItem: response.data });
                })
                .catch(function(error) {
                    console.log("ERROR", error);
                });
        }
    }

    render() {
        return (
            <div class="container-fluid allpage">
                <Header user={localStorage.getItem("status")} />
                <div class="container page_content">
                    <div class="row ">
                        {this.state.listItem.map((item, index) => {
                            return (
                                <div className="col-3">
                                    <Link
                                        to={"/item/detail/" + item.item.id}
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
        );
    }
}

export default Category;
