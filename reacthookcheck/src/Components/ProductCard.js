import React, { useEffect, useState}  from "react"
import './ProductCard.css';


async function getProductDetails(ProductId) {
    let result = await fetch(`http://52.26.193.201:3000/products/${ProductId}`);
    let json = await result.json();
    return json;
}

async function getImageURL(ProductId) {
    let result3 = await fetch(`http://52.26.193.201:3000/products/${ProductId}/styles`);
    let json2 = await result3.json();
    let imageUrl = await json2.results[0].photos[0].url;
    return imageUrl;
}


function ProductCard(product) {
    const [detailProd, setDetails] = useState([])
    const [url,setUrl] = useState("")
    const [toggled, setToggled] = useState(false);

    async function getDetails(e,id) {
        e.preventDefault();
        let imageURL = await getImageURL(id);
        let detailsList = await getProductDetails(id);
        setDetails(detailsList);
        setUrl(imageURL);
        setToggled(!toggled);
        console.log(get)
    }


    return (
        <div className="col-4">
            <div className="p-3 border bg-dark">
                <div className="card">
                    <button className="btn btn-primary" onClick={(e) => getDetails(e,product.state.id)}>Click Me for Details</button>
                    {toggled && <img id={`see${product.state.id}`} src={url} className="card-img-top" alt="..." />}
                    <div className="card-body">
                        <h5 className="card-title">{product.state.name}</h5>
                        <p className="card-text">{product.state.description}</p>
                        {toggled && <p>Price: $ {detailProd.default_price}</p> }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;