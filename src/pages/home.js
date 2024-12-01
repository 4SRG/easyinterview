import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import ProductTile from '../components/productTile';


const Home = () => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false)
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className='home'>{ 
        loading === true ?
        <div className='min-h-[92.3vh] flex items-center justify-center w-full'>
            <Circles 
                height={'120'}
                width={'120'}
                color ={"rgb(233, 233, 90)"}
                visible={true}
            />
        </div> 
        :
        <div className='grid  gap-5 p-2 px-3 mt-8 text-black grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {products?.map(a => {
                return <ProductTile
                    {...a}
                />
            })}
        </div>

        }</div>
    )
}

export default Home