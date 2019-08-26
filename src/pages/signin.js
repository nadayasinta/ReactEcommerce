import React from "react";
import axios from "axios";
import Header from "../components/header";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    doSignIn = async event => {
        event.preventDefault();
        const self = this;
        const req1 = {
            method: "post",
            url: "http://localhost:5000/public/login",
            data: {
                username: self.state.username,
                password: self.state.password
            }
        };
        await axios(req1)
            .then(async function(response) {
                console.log("BENAR", response.data.token);
                localStorage.setItem("token", response.data.token);
                const req2 = {
                    method: "get",
                    url: "http://localhost:5000/user/me",
                    headers: {
                        Authorization: "Bearer " + response.data.token
                    }
                };
                await axios(req2)
                    .then(function(response) {
                        console.log("BENAR", response.data);
                        localStorage.setItem("user_id", response.data.id);
                        localStorage.setItem(
                            "username",
                            response.data.username
                        );
                        localStorage.setItem("status", response.data.status);
                        self.props.history.push("/");
                    })
                    .catch(function(error) {
                        console.log("ERROR", error);
                    });
            })
            .catch(function(error) {
                console.log("ERROR", error);
            });
    };

    handleUsernameChange = event => {
        this.setState({ username: event.target.value }, () =>
            console.log("ya2", this.state.username)
        );
    };

    handlePasswordChange = event => {
        this.setState({ password: event.target.value }, () =>
            console.log("ya3", this.state.password)
        );
    };

    render() {
        return (
            <div class="container-fluid allpage">
                <Header user={localStorage.getItem("status")} />
                <div className="container page_content">
                    <form onSubmit={this.doSignIn}>
                        <div className=" row justify-content-center text-center">
                            <h2 className="fontoswald">SIGN IN</h2>
                        </div>

                        <div className=" row justify-content-center text-center">
                            <label for="username">Username</label>
                        </div>
                        <div className=" row justify-content-center text-center">
                            <input
                                class="form-control"
                                type="text"
                                name="username"
                                placeholder="username"
                                onChange={this.handleUsernameChange}
                            />
                        </div>

                        <div className=" row justify-content-center text-center">
                            <label for="password">Password</label>
                        </div>
                        <div className=" row justify-content-center text-center">
                            <input
                                class="form-control"
                                type="password"
                                name="password"
                                placeholder="password"
                                onChange={this.handlePasswordChange}
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
            </div>
        );
    }
}

export default SignIn;
