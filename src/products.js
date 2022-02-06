import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import style from './products.css';
const Products = () => {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://double-chabi-server.herokuapp.com/getProducts")
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        setProducts(json.list);
    })
  }, [])
  console.log(products);
  
    const elm = products.map((i, index) => {
      return  <Link to={`/Product?id=${i.id}`}>
      <div className="msgCenter" key={index}>
              {i.imageUrl ? <img className='img' alt='img' src={i.imageUrl} style={{height:200}} /> : null}
              <div className='msg-text'>
                  {i.name}
              </div>
              <div className='msg-text'>
                  {i.price} per kg
              </div>
      </div>
      </Link>
    });
    return <div className='flex-container'>{elm}</div>;
  };

export default Products;
