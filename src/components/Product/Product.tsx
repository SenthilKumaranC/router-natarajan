import { useNavigate } from "react-router-dom";
import { IProduct } from "../../App";
import { useCallback } from "react";

const Product = (props:IProduct) => {
    const navigate = useNavigate();

    const {id, name} = props;

    const navigateToDetail = useCallback(()=>{
        navigate(`${id}`)
    },[navigate, id])

    return <div className="Product" role="button" onClick={navigateToDetail}>
        {name}
        <img src={`https://picsum.photos/200/300?random=${id}`} alt="img" />
    </div>
}

export default Product;