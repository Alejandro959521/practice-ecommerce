import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import Layout from "../../Components/Layout"
import OrderCard from '../../Components/OrderCard'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

function MyOrder() {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') +1)
   
    if (index === 'last') index = context.order?.length - 1

    return (
        <Layout>
            <div className="flex w-80 items-center justify-center relative mb-5">

                <Link to='/my-orders' className="absolute left-0">
                    <ChevronLeftIcon className='size-5 text-black cursor-pointer' />
                </Link>

                <h1>MyOrder</h1>


            </div>
            <div className='flex flex-col w-80'>
                {

                    context.order?.[index]?.products.map(product => (

                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            images={product.images}
                            price={product.price}

                        />

                    ))

                }

            </div>
        </Layout>
    )
}

export default MyOrder