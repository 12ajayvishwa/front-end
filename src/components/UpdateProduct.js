import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
//import { useNavigate } from 'react-router-dom'


const UpdateProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const params = useParams();
    const id =params?.id
    //const [error, setError] = React.useState('');
    //const navigate = useNavigate();

  

    const getProductDatails = async () => {
        console.warn(params.id);
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: 'get'
        });
        result = await result.json();
        console.warn(result)

        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }
    useEffect(() => {
        getProductDatails();
        }, [id])
    return (
        <div className="product">
            <h1>Update Product</h1>
            <input type="text" placeholder="Enter Product name" className="inputBox"
                onChange={(e) => { setName(e.target.value) }} value={name}
            />

            <input type="text" placeholder="Enter Product price" className="inputBox"
                onChange={(e) => { setPrice(e.target.value) }} value={price}
            />

            <input type="text" placeholder="Enter Product category" className="inputBox"
                onChange={(e) => { setCategory(e.target.value) }} value={category}
            />
            <input type="text" placeholder="Enter Product company" className="inputBox"
                onChange={(e) => { setCompany(e.target.value) }} value={company}
            />

            <button onClick={UpdateProduct} className="appButton">Update Product</button>
        </div>
    )
}

export default UpdateProduct;

