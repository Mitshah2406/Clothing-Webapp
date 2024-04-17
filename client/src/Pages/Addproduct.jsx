import React from 'react'
import './CSS/Addproduct.css'

const Addproduct=()=>{
    return(
        <div className='addproduct'>
            <div className='addproduct-container'>
                <h1>Add a new product</h1>
                <div className='product-details'>
                    <input type="text" placeholder="Product-Name"  name='productTitle'/>
                    <input type="text" placeholder="Product-Description" name="productDescription"/>
                </div>
                <div className='product-price-availability'>
                    <div><input type="number" placeholder='Stock-Available' name='stockAvailable' /></div>
                    <div><input type='number' placeholder='Price-per-item' name="productPrice"/></div>
                </div>
                <div className='product-category'>
                    <div><input type='text'  placeholder='Product-Category' name="category"/></div>
                    <div><input type='text'  placeholder='Product-Subcategory' name="subcategory"/></div>
                </div>
                <div className='product-size'>
                <p>Product-Sizes Available</p>
                    <div className='size-choices'>
                        <div>
                            <input type='checkbox' name='productSize' />
                            <label htmlFor='Small'>Small</label>
                        </div>
                        <div>
                            <input type='checkbox' name='productSize' />
                            <label htmlFor='Medium'>Medium</label>
                        </div>
                        <div>
                            <input type='checkbox' name='productSize' />
                            <label htmlFor='Large'>Large</label>
                        </div>
                        <div>
                            <input type='checkbox' name='productSize' />
                            <label htmlFor='XL'>XL</label>
                        </div>
                        <div>
                            <input type='checkbox' name='productSize' />
                            <label htmlFor='XXL'>XXL</label>
                        </div>
                    </div>
                </div>
                    
                <div className='product-gender-color'>
                    <input type='text' name="productColor" placeholder='Product-color'/>
                    <input type='text' name='gender' placeholder='Gender'/>
                </div>
                <div className='product-image'>
                    <p>Product-Image</p>
                    <input type='file' placeholder='Product-image' name="productImages" accept='image/*'/>
                </div>
                <div><button>ADD</button></div>
            </div>
        </div>
    )
}

export default Addproduct