import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"


const Navbar = () => {

    const textDecoration = 'underline underline-offset-4'
    const context = useContext(ShoppingCartContext)

    return (

        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm  ">

            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? textDecoration : undefined}
                    >
                        Shopi

                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                    onClick={()=> context.setSearchCategory()}
                        className={({ isActive }) => isActive ? textDecoration : undefined}>
                        All

                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                    onClick={()=> context.setSearchCategory('clothes')}

                        className={({ isActive }) => isActive ? textDecoration : undefined}>
                        Clothes

                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                    onClick={()=> context.setSearchCategory('electronics')}
                        className={({ isActive }) => isActive ? textDecoration : undefined}>
                        Electronics

                    </NavLink>
                </li>

                <li>
                    <NavLink to='/furnitures'
                    onClick={()=> context.setSearchCategory('furnitures')}
                        className={({ isActive }) => isActive ? textDecoration : undefined}>
                        Furnitures

                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                    onClick={()=> context.setSearchCategory('toys')}
                        className={({ isActive }) => isActive ? textDecoration : undefined}>
                        Toys

                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                    onClick={()=> context.setSearchCategory('others')}
                        className={({ isActive }) => isActive ? textDecoration : undefined}>
                        Others

                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li>
                    <NavLink to='/' >
                        miguelacho@platzi.com

                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-orders'
                        className={({ isActive }) => isActive ? textDecoration : undefined}>
                        My orders

                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                        className={({ isActive }) => isActive ? textDecoration : undefined} >
                        My Account

                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                        className={({ isActive }) => isActive ? textDecoration : undefined}>
                        Sign In

                    </NavLink>
                </li>

                <li className='flex items-center'>

                <ShoppingCartIcon  className='size-6 text-blue-500'></ShoppingCartIcon >
                <div>{context.cartProducts.length}</div>

                </li>

            </ul>
        </nav>

    )

}

export default Navbar