import React from "react";
import { store } from "./store/store";
import { Provider, connect } from "unistore/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/styles/main.css";
import "./assets/styles/bootstrap.min.css";
import Home from "./pages/home";
import Profile from "./pages/profile";
import EditProfile from "./pages/editprofile";
import ProfileStore from "./pages/profilestore";
import EditProfileStore from "./pages/editprofilestore";
import SignUpUser from "./pages/signup_user";
import SignIn from "./pages/signin";
import SignUpToko from "./pages/signup_toko";
import EditItem from "./pages/edit_item";
import Category from "./pages/category";
import ItemDetail from "./pages/item_detail";
import Cart from "./pages/cart";
import Transaksi from "./pages/transaksi";
import TransaksiToko from "./pages/transaksitoko";
import Store from "./pages/store";

function App() {
    return (
        <Provider store={store} className="allpage">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/profile/edit" component={EditProfile} />
                    <Route exact path="/mystore" component={ProfileStore} />
                    <Route
                        exact
                        path="/mystore/edit"
                        component={EditProfileStore}
                    />
                    <Route exact path="/signup" component={SignUpUser} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signuptoko" component={SignUpToko} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/transaksi" component={Transaksi} />
                    <Route
                        exact
                        path="/transaksitoko"
                        component={TransaksiToko}
                    />
                    <Route path="/item/edit/:item_id" component={EditItem} />
                    <Route path="/category/:category" component={Category} />
                    <Route
                        path="/item/detail/:item_id"
                        component={ItemDetail}
                    />
                    <Route path="/store/:store_id" component={Store} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
