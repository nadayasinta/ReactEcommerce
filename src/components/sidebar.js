import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";

function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="row justify-content-center p-1 m-1">
                <div className="col-12 text-center px-0 mb-2">
                    <div class="active-cyan-4">
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={props.doSearch}
                        />
                    </div>
                </div>

                {props.listCategory.map((item, index) => {
                    return (
                        <div className="col-12 text-left border py-3">
                            <img
                                width="40"
                                height="40"
                                className="inline-block"
                                src={item.img}
                                alt=""
                            />
                            <Link to={"/category/" + item.name}>
                                {item.name.toUpperCase()}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default connect(
    "listCategory,host",
    actions
)(Sidebar);
