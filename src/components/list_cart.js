import React from "react";

function ListCart(props) {
    return (
        <div className="listcategory">
            <div className="row justify-content-center shadow border mx-1 my-4 py-4">
                <div className="col-12 text-center">
                    <h4 className="font-weight-bold">
                        {props.cart.item.name.toUpperCase()}
                    </h4>
                </div>
                <div className="col-12 text-center">
                    <h6 className="">
                        Start Date : {props.cart.cart.date.slice(0, 10)}
                    </h6>
                </div>
                <div className="col-12 text-center">
                    <h6 className="">
                        Duration : {props.cart.cart.duration} month
                    </h6>
                </div>
                <div className="col-12 text-center">
                    <h6 className="">Quantity : {props.cart.cart.qty}</h6>
                </div>
                <div className="col-12 text-center">
                    <h6 className="">Price : {props.cart.cart.price}</h6>
                </div>
                <div className="col-12 text-center">
                    <form className="row justify-content-center">
                        <div className=" col-12 text-center">
                            <label for="date">Date</label>
                        </div>
                        <div className=" col-12 text-center">
                            <input
                                class="form-control"
                                type="date"
                                name="date"
                                placeholder="date"
                                onChange={props.DateChange}
                            />
                        </div>

                        <div className=" col-12 text-center">
                            <label for="duration">Duration (month)</label>
                        </div>
                        <div className=" col-12 text-center">
                            <input
                                class="form-control"
                                type="number"
                                name="duration"
                                placeholder="duration"
                                onChange={props.DurationChange}
                            />
                        </div>

                        <div className=" col-12 text-center">
                            <label for="qty">Quantity</label>
                        </div>
                        <div className=" col-12 text-center">
                            <input
                                class="form-control"
                                type="number"
                                name="qty"
                                placeholder="qty"
                                onChange={props.QtyChange}
                            />
                        </div>

                        <div className=" col-12 text-center">
                            <button
                                className=" btn btn-secondary btn-block my-3"
                                type="submit"
                                value={props.cart.cart.id}
                                onClick={props.UpdateCart}
                            >
                                UPDATE CART
                            </button>
                        </div>
                    </form>
                </div>

                <div className="col-12 text-center">
                    <button
                        className=" btn btn-danger btn-block my-3"
                        type="button"
                        value={props.cart.cart.id}
                        onClick={props.DeleteCart}
                    >
                        {" "}
                        DELETE
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ListCart;
