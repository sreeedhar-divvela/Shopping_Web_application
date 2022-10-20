import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export function DetailsComponent()
{
    const [product, setProduct] = useState({});
    const params = useParams();
    useEffect(()=> {
       fetch(`https://fakestoreapi.com/products/${params.id}`)
       .then(response => response.json())
       .then(data=> {
          setProduct(data);
       })
    },[])
    return(
        <div>
            <h2>Details</h2>
            <dl>
                <dt>Title</dt>
                <dd>{product.title}</dd>
                <dt>Price</dt>
                <dd>${product.price}</dd>
                <dt>Preview</dt>
                <dd>
                    <img src={product.image}  width="300" height="300"/>
                </dd>
                <dd>Description</dd>
                <dt>{product. description}</dt>
            </dl>
            <Link to={'/products/' + product.category}>Back to Products</Link>
        </div>
    )
}