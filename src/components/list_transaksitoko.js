import React from "react";

function ListTransactionShop(props) {
    let showButton;
    let cancleButton;

    if (props.transaction.transaction.status === "waitpay") {
        showButton = (
            <div className="col-12 text-center">
                <button
                    type="button"
                    class="btn btn-success btn-block"
                    onClick={props.DonePay}
                    value={props.transaction.transaction.id}
                >
                    Done Pay
                </button>
            </div>
        );
        cancleButton = (
            <div className="col-12 text-center">
                <button
                    type="button"
                    class="btn btn-danger btn-block"
                    onClick={props.Delete}
                    value={props.transaction.transaction.id}
                >
                    Cancle
                </button>
            </div>
        );
    } else if (props.transaction.transaction.status === "rent") {
        showButton = (
            <div className="col-12 text-center">
                <button
                    type="button"
                    class="btn btn-warning btn-block"
                    onClick={props.DoneRent}
                    value={props.transaction.transaction.id}
                >
                    Done Rent
                </button>
            </div>
        );
        cancleButton = (
            <div className="col-12 text-center">
                <button
                    type="button"
                    class="btn btn-danger btn-block"
                    onClick={props.Delete}
                    value={props.transaction.transaction.id}
                >
                    Cancle
                </button>
            </div>
        );
    }

    return (
        <div className="listitem">
            <div className="row justify-content-center shadow border mx-1 my-4 py-4">
                <div className="col-12 text-center">
                    <h4 className="font-weight-bold">
                        {props.transaction.item.name.toUpperCase()}
                    </h4>
                </div>
                <div className="col-12 text-center">
                    <h6 className="text-secondary">
                        ID : {props.transaction.transaction.id}
                    </h6>
                </div>
                <div className="col-12 text-center">
                    <h6 className="">
                        RENTER : {props.transaction.user.name} [
                        {props.transaction.user.username}]
                    </h6>
                </div>
                <div className="col-12 text-center">
                    <h6 className="">
                        ADDRESS : {props.transaction.user_detail.address},{" "}
                        {props.transaction.user_detail.city},{" "}
                        {props.transaction.user_detail.province} (
                        {props.transaction.user_detail.telephone})
                    </h6>
                </div>
                <div className="col-12 text-center">
                    <h6 className="">
                        DATE : {props.transaction.transaction.date.slice(0, 10)}
                    </h6>
                </div>
                <div className="col-12 text-center">
                    <h6 className="">
                        DURATION : {props.transaction.transaction.duration}
                    </h6>
                </div>
                <div className="col-12 text-center">
                    <h6 className="">
                        QUANTITY : {props.transaction.transaction.qty}
                    </h6>
                </div>
                <div className="col-12 text-center">
                    <h6 className="">
                        {props.transaction.transaction.status.toUpperCase()}
                    </h6>
                </div>
                {showButton}
                {cancleButton}
            </div>
        </div>
    );
}

export default ListTransactionShop;
