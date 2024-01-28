
import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import '../styles/styles.css'; 

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsRef = firebase.firestore().collection('products');
      const snapshot = await productsRef.get();
      const productsData = snapshot.docs.map(doc => doc.data());
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.name}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
   
