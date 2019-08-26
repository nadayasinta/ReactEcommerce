import React from "react";
import DefaultImage from "../assets/images/picture.png";

function ListItem(props) {
    return (
        <div className="listitem">
            <div className="row justify-content-center border p-1 m-1">
                <div className="col-12 text-center">
                    <img
                        className="w-100"
                        src={
                            props.item.item.photo === null
                                ? DefaultImage
                                : props.item.item.photo
                        }
                        alt=""
                    />
                </div>
                <div className="col-12 text-center">
                    <h6 className="text-muted mb-2">
                        {props.item.item.qty > 0 ? "AVAILABLE" : "OUT OF STOCK"}
                    </h6>
                </div>

                <div className="col-12 text-center">
                    <h5 className="font-weight-bold mb-0">
                        {props.item.item.name.toUpperCase()}
                    </h5>
                    <h6 className="text-secondary">{props.item.shop.name}</h6>

                    <h6>Rp. {props.item.item.price},00</h6>
                </div>
                {props.store === "me" ? (
                    <div>
                        <button
                            className="btn btn-dark btn-block"
                            value={props.item.item.id}
                            onClick={props.Edit}
                        >
                            Edit
                        </button>
                        {props.item.item.status === "1" ? (
                            <button
                                className="btn btn-dark btn-block"
                                value={props.item.item.id}
                                onClick={props.Deactivate}
                            >
                                Deactivate
                            </button>
                        ) : (
                            <button
                                className="btn btn-dark btn-block"
                                value={props.item.item.id}
                                onClick={props.Activate}
                            >
                                Activate
                            </button>
                        )}
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
}

export default ListItem;
