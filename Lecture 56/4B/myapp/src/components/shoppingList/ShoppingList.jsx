import React,{useState} from 'react'
import Product from '../products/Product'
import Form from '../form/Form'

const ShoppingList = () => {

    const Dummy_Product = [
        {
        name: 'Iphone 15',
        price: 86000,
        imgUrl: 'https://images.indianexpress.com/2023/10/Apple-iPhone-15-Pro-FB.jpg?w=414'
        },
        {
            name: 'Iphone 14',
            price: 64000,
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-eU8W648SgvunHSq0ZebU3bDitEyDewB0Q&s'
            },
            {
                name: 'Ipad',
                price: 76000,
                imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkzAQhMyOnj5ConE3ibSGqlA3FmytiqjcjSQ&s'
                },
                {
                    name: 'Macbook',
                    price: 86000,
                    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudyz6pteNTwO-aBZ43yoDuQKNbo8jk3kPCIrTFth4UA&s'
                    },
        
    ]

    const [products,setProducts]= useState(Dummy_Product)

    const addProduct = (product) =>{
        setProducts([...products,product])
    }

  return (
    <section>
        <Form addProduct={addProduct}/>

        {products.map((products,idk)=>{
            return <Product key={idk}
            name={products.name}
            price={products.price}
            imgUrl={products.imgUrl}
            />
        })}
    </section>
  )
}

export default ShoppingList