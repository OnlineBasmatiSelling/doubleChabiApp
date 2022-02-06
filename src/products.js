import { Link } from 'react-router-dom';
import './App.css';
import style from './products.css';
const Products = () => {
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
