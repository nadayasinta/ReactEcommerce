import React from "react";

function ListCategory(props) {
    return (
        <div className="listcategory">
            <div className="row justify-content-center mx-1 my-4 py-4">
                <div className="col-12 text-center p-3 rounded-circle border bg-white">
                    <img
                        className="w-100 p-4"
                        src={props.category.img}
                        alt=""
                    />
                </div>
                <div className="col-12 text-center pt-3">
                    <h4 className="font-weight-bold">
                        {props.category.name.toUpperCase()}
                    </h4>
                </div>
                {/* <div className="col-12 text-center">
                    <span>{props.category}</span>
                </div> */}
            </div>
        </div>
    );
}

export default ListCategory;
