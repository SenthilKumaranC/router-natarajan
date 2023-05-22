import { useContext, useMemo } from "react";
import { AppContext, IProduct } from "../../App";
import { useParams } from "react-router-dom";

const DetailedProduct = () => {

    const {state} = useContext(AppContext);
    const {products} = state;
    const params = useParams();

    const product = useMemo(() => {
        if(params.productId !== undefined){
            return products.find((product)=> product.id === parseInt(String(params.productId)))
        } else{
            return null;
        }
        
    },[products, params.productId])

    console.log(product);

    return <> 
        {product ? <div>
    <h1>{product.name} </h1>
    </div> : "product not"} </> 
    
}

export default DetailedProduct;