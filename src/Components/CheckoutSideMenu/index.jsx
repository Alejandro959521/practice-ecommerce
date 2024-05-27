import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import OrderCard from '../../Components/OrderCard'
import { totalPrice } from '../../utils'

const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {

        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)

    }

    const handleCheckout = () => {

        const orderToAdd = {
            data:'01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)


        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setSearch(null)
    }
 
    return (
        <aside

            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black bg-white  rounded-lg`}>

            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div   >

                    <XMarkIcon onClick={() => context.closeCheckoutSideMenu()}
                        className='size-6 text-blue-500 cursor-pointer'></XMarkIcon>
                </div>
            </div>
            <div className='overflow-y-scroll flex-1'>
                {

                    context.cartProducts.map(product => (

                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            images={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />

                    ))

                }

            </div>

            <div className='px-6 mb-6' >

                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font--medium text-2xl'>${totalPrice(context.cartProducts)}</span>

                </p>
                <Link to='/my-orders/last'>
                <button className='w-full bg-black py-3 text-white rounded' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
                
            </div>
        </aside>

    )


}

export default CheckoutSideMenu