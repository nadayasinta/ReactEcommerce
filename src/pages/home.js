import React from "react";
import Header from "../components/header";
import ListCategory from "../components/list_category";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import imagehome from "../assets/images/home.jpg";

class Home extends React.Component {
    render() {
        return (
            <div class="home">
                <Header user={localStorage.getItem("status")} />
                <div class="container-fluid page_content">
                    <div className="row">
                        <img
                            className="w-100 image-fluid"
                            src={imagehome}
                            alt=""
                        />
                        <div class="centered fontoswald px-5 py-3">WELCOME</div>
                    </div>
                </div>

                <div class="container mt-4">
                    <div class="row">
                        {this.props.listCategory.map((item, index) => {
                            return (
                                <div className="col-md-3 col-sm-6 col-12">
                                    <Link
                                        to={"/category/" + item.name}
                                        style={{
                                            textDecoration: "none",
                                            color: "black"
                                        }}
                                        className="link"
                                    >
                                        <ListCategory category={item} />
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

export default connect(
    "listCategory",
    actions
)(Home);
