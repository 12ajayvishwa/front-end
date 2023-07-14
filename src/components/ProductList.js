import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const ProductList = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/get-product');
        result = await result.json();
        setProduct(result);
        
    }
    console.warn("product", product);

    const deleteProduct = async (id) => {
        console.warn(id);
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete"
        });
        result = await result.json()
        console.warn(result);
        if (result) {
            alert("record is deleted")
            getProducts();
        }
    }
    return (
        <>
            {/* <div className="product-list">
            <h3>Product List</h3>

            <ul>
                <li>S.no</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Operation</li>
            </ul>
            {
                product.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>${item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.category}</li>
                        <li><button onClick={() => deleteProduct(item._id)}>Delete</button></li>
                    </ul>
                )
            }
        </div> */}


            <table className="table mt-4 ms-3">
                <thead>
                    <tr>
                        <th scope="col">S.no</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Category</th>
                        <th scope="col">Operation</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        product.map((item, index) =>
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>{item.category}</td>
                                <td><button className="btn btn-danger" onClick={() => 
                                    deleteProduct(item._id)}>Delete</button>
                                    <Link className="btn btn-secondary button-operation" 
                                    to={"/update/10"+item._id}>update</Link>
                                    </td>
                                
                            </tr>

                        )
                    }

                </tbody>
            </table>


        </>
    )
}

export default ProductList;