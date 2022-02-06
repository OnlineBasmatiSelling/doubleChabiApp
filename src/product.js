import './App.css';
import style from './products.css';
import {useLocation} from "react-router-dom";
const Product = () => {
  const products=[
    {
      id:1,
      name:'Basmati Rice 1',
      imageUrl:'https://picsum.photos/200',
      price:400
    },
    {
      id:2,
      name:'Basmati Rice 2',
      imageUrl:'https://picsum.photos/201',
      price:400
    },
    {
      id:3,
      name:'Basmati Rice 3',
      imageUrl:'https://picsum.photos/202',
      price:400
    },
    {
      id:4,
      name:'Basmati Rice 4',
      imageUrl:'https://picsum.photos/203',
      price:400
    }
  ]
  const search = useLocation().search;
  const index = new URLSearchParams(search).get('id')-1;
    const elm = <div className="msgCenter" key={index}>
              {products[index].imageUrl ? <img alt='img' src={products[index].imageUrl} style={{width:200,height:200}} /> : null}
              <div className={style.msgText}>
                  {products[index].name}
              </div>
              <div className={style.msgText}>
                  {products[index].price} per kg
              </div>
      </div>
    return elm;
  };

export default Product;
