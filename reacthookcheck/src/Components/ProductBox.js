import ProductCard from "./ProductCard.js";
import {useContext} from 'react';
import Context from '../Context.js'

function ProductBox() {
    const products = useContext(Context)
    return (
        <div className="container .px-4">
            {products.map((state) => (
                <ProductCard state={state} key={state.id} />
            ))}
        </div>

    );
}

export default ProductBox;