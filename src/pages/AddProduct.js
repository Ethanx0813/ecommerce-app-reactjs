import React, { useState } from 'react';

   function AddProduct() {
     const [productName, setProductName] = useState('');
     const [productPrice, setProductPrice] = useState('');

     const handleAddProduct = () => {
       // Implement adding product to Firebase here
     };

     return (
       <div>
         <h2>Add Product</h2>
         <input
           type="text"
           placeholder="Product Name"
           value={productName}
           onChange={e => setProductName(e.target.value)}
         />
         <input
           type="number"
           placeholder="Product Price"
           value={productPrice}
           onChange={e => setProductPrice(e.target.value)}
         />
         <button onClick={handleAddProduct}>Add Product</button>
       </div>
     );
   }

   export default AddProduct;