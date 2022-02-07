import './App.css';
import './product.css';
import {useLocation} from "react-router-dom";
import { useSelector } from 'react-redux';
const Product = () => {
  const products=useSelector(state=>state.products.list);
  const search = useLocation().search;
  const index = new URLSearchParams(search).get('id');
    const elm = <div className="msgCenter" key={index}>
              {products[index].imageUrl ? <img className='img' alt='img' src={products[index].imageUrl} style={{height:200}} /> : null}
              <div className='msg-text'>
                  {products[index].name}
              </div>
              <div className='msg-text'>
                  {products[index].price} per kg
              </div>
      </div>
    return elm;
  };

export default Product;
