import React from "react";

function ListTransaction(props) {
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
                    <h6 className="">LENDER : {props.transaction.shop.name}</h6>
                </div>
                <div className="col-12 text-center">
                    <h6 className="">
                        ADDRESS : {props.transaction.shop.address},{" "}
                        {props.transaction.shop.city},{" "}
                        {props.transaction.shop.province} (
                        {props.transaction.shop.telephone})
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
            </div>
        </div>
    );
}

export default ListTransaction;
