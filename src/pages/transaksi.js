import React from "react";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import ListTransaction from "../components/list_transaksi";
import { connect } from "unistore/react";
import { actions } from "../store/store";

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
            url: self.props.host + "/transaction/me/list",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        axios(req)
            .then(function(response) {
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
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <ListTransaction transaction={item} />
                                </div>
                            );
                        })}
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
)(Transaksi);
