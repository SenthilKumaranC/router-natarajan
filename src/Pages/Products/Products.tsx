import { useContext } from "react";
import { AppContext } from "../../App";
import Product from "../../components/Product/Product";

const Products = () => {
  const { state } = useContext(AppContext);
  const { products } = state;
  return <div className="Products">
    {products.map((product) => {
      return <Product {...product}/>
    })}
  </div>;
};

export default Products;
