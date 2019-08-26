import createStore from "unistore";
import axios from "axios";
import logo_category1 from "../assets/images/cat1.png";
import logo_category2 from "../assets/images/cat2.png";
import logo_category3 from "../assets/images/cat3.png";
import logo_category4 from "../assets/images/cat4.png";
import logo_category5 from "../assets/images/cat5.png";
import logo_category6 from "../assets/images/cat6.png";
import logo_category7 from "../assets/images/cat7.png";
import logo_category8 from "../assets/images/cat8.png";

const intialState = {
    listCategory: [
        {
            name: "Nursery",
            img: logo_category1
        },
        {
            name: "Stroller",
            img: logo_category2
        },
        {
            name: "Gear",
            img: logo_category3
        },
        {
            name: "Car Seat",
            img: logo_category4
        },
        {
            name: "Toys",
            img: logo_category5
        },
        {
            name: "Safety",
            img: logo_category6
        },
        {
            name: "Apparel",
            img: logo_category7
        },
        {
            name: "Books",
            img: logo_category8
        }
    ]
};

export const store = createStore(intialState);

export const actions = store => ({});
