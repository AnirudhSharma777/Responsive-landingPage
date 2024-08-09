import React from "react";

const data = [
    {
        id: 1,
        title: "Card title",
        img: " ",
        para: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
        id: 2,
        title: "Card title",
        img: " ",
        para: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
        id: 3,
        title: "Card title",
        img: " ",
        para: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
];

const Products = () => {

    return (
        <div className="container">
            <h1 className="text-center py-md-4">Products</h1>
            <div className=" d-flex flex-column flex-md-row justify-content-center align-items-center gap-5 mt-5 mb-5">

                {data.map((item, id) => {
                    return (
                        <div className="card p-2 ms-3 w-auto mx-auto rounded" style={{ width: "18rem" }} key={id}>
                            <img className="card-img-top" src={item.img} alt="Card image cap" />
                            <div className="card-body">
                                <h5 class="card-title">{item.title}</h5>
                                <p className="card-text">{item.para}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

    );
};

export default Products;