import ItemListContainer from "../components/Card/ItemListContainer";
import CardList from "../components/Card/CardList";
import Banner from "../components/Banner";
const ProductsContainer = () => {
    return (
        <div>
            <Banner/>
            <ItemListContainer className="container-products"/>
            <CardList/>
        </div>
    )
}

export default ProductsContainer;