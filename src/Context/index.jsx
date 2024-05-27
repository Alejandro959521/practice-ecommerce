import { createContext, useState, useEffect } from 'react'


export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    // shopping card - increment quantity
    const [count, setCount] = useState(0)


    //product detail - Open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //CheckoutSideMenu - Open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //product detail - show product

    const [productToShow, setProductToShow] = useState({})

    //Shopping cart - Add products to cart

    const [cartProducts, setCartProducts] = useState([])

    // Shopping cart - Order

    const [order, setOrder] = useState([])

    // Get products
    const [items, setItems] = useState(null)


    const [filterItems, setFilterItems] = useState(null)


    // get Search

    const [search, setSearch] = useState(null)
    const [searchCategory, setSearchCategory] = useState(null)
   

    useEffect(() => {

        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))

    }, [])

    const filteredItemsByTitle = (items, search) => {

        return items?.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))


    
    }
    const filteredItemsByCategory = (items, searchCategory) => {
      

        return items?.filter(item => item.category.name.toLowerCase().includes(searchCategory.toLowerCase()))

    }

    const filterBy = (searchType,items,search,searchCategory) => {
        if (searchType === 'BY_TITLE'){
           return  filteredItemsByTitle(items, search)

        }

        if(searchType === 'BY_CATEGORY'){

            return filteredItemsByCategory(items,searchCategory)
        }

        if(searchType === 'BY_TITLE_AND_BY_CATEGORY'){

            return filteredItemsByCategory(items,searchCategory).filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        }
        if(!searchType){

            return items
        }

    }

    useEffect(() => {
        if (search && searchCategory ) setFilterItems(filterBy('BY_TITLE_AND_BY_CATEGORY',items, search,searchCategory))
        if (search && !searchCategory ) setFilterItems(filterBy('BY_TITLE',items, search,searchCategory))
        if (!search && searchCategory ) setFilterItems(filterBy('BY_CATEGORY',items, search,searchCategory))
        if (!search && !searchCategory ) setFilterItems(filterBy(null,items, search,searchCategory))



    }, [items, search, searchCategory])


console.log('itemsdcddd',filterItems)
    return (

        <ShoppingCartContext.Provider value={{

            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            search,
            setSearch,
            filterItems,
            searchCategory,
            setSearchCategory

        }}>
            {children}

        </ShoppingCartContext.Provider>

    )

}