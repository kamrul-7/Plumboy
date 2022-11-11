import React from 'react';

const Products = () => {
    return (
        <div>
            <h2 className='text-6xl font-bold text-center my-8'>Products</h2>
            <div className='grid grid-cols-3 mb-8 gap-8'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10 ">
                    <img src='https://5.imimg.com/data5/SELLER/Default/2021/6/FX/XQ/ZA/87696584/30089-banner-500x500.png' alt="" />
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <h2 className='text-2xl text-yellow-400 font-semibold'></h2>
                        <p className='text-2xl text-orange-600 font-semibold'></p>
                    </div>
                </div>
                <div classsName="card card-compact w-96 bg-base-100 shadow-2xl mb-10">
                    <img src='https://www.eagertonplumbing.com/wp-content/uploads/2021/02/new-plumbing-fixtures.jpg' alt="" />
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <h2 className='text-2xl text-yellow-400 font-semibold'></h2>
                        <p className='text-2xl text-orange-600 font-semibold'></p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
                    <img src='https://img1.exportersindia.com/product_images/bc-full/dir_189/5666013/plumbing-products-1528706638-3966265.jpeg' alt="" />
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <h2 className='text-2xl text-yellow-400 font-semibold'></h2>
                        <p className='text-2xl text-orange-600 font-semibold'></p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXimFuuaSe_fu0sb3ENP4Kufzs3FZHUo-46EIWuQFU49sNYDNEZ5PODFnOAF-WG0WX0Dg&usqp=CAU' alt="" />
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <h2 className='text-2xl text-yellow-400 font-semibold'></h2>
                        <p className='text-2xl text-orange-600 font-semibold'></p>
                    </div>
                </div>
            </div>
            <div className=''>
                <h1 className='text-6xl font-bold text-center my-8'>Contract us</h1>
                <div className='grid grid-cols-2 my-8 text-2xl font-semibold '>
                    <p>Contact Email linda@contractus.co.za</p>
                    <p>Phone Number +270871600802</p>
                    <img className='mt-8' src="https://plumbingman.com.au/wp-content/uploads/2017/02/Plumbing-Man-Sydney-Emergency-Mobile-Plumber.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Products;