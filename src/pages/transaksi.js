import React from "react";
import axios from "axios";
import Header from "../components/header";
import ListTransaction from "../components/list_transaksi";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

class Transaksi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listTransaksi: []
        };
    }

    componentDidMount() {
        const self = this;
        const req = {
            method: "get",
            url: "http://localhost:5000/transaction/me/list",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        axios(req)
            .then(function(response) {
                console.log("BEANR", response.data);
                self.setState({ listTransaksi: response.data });
            })
            .catch(function(error) {
                console.log("ERRORa", error);
            });
    }

    render() {
        return (
            <div class="container-fluid allpage">
                <Header user={localStorage.getItem("status")} />
                <div className="container page_content">
                    <div class="row ">
                        {this.state.listTransaksi.map((item, index) => {
                            return (
                                <div className="col-3">
                                    <ListTransaction transaction={item} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Transaksi;
