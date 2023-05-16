import { IProduct } from "../../App";

const Product = (props:IProduct) => {
    return <div className="Product">
        {props.name}
        <img src={`https://picsum.photos/200/300?random=${props.id}`} alt="img" />
    </div>
}

export default Product;