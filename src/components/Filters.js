

const Filters = ({filter, setFilter}) => {
    function clickHandler (param) {
        setFilter(param);
    }
    return (
        <>
        <div class="filter-cards">
            <h4 class="title">¡Encuentra tus cartas favoritas!</h4>
            <h4 class="title title-bold title-bold-mod">Buscar por categoria</h4>
            <div class="select-group"></div>
        <button onClick= {()=> clickHandler(undefined)}>none</button>
        <button onClick= {()=> clickHandler("common")}>common</button>
        <button onClick= {()=> clickHandler("rare")}>rare</button>
        </div>
        </>
    )
}
export default Filters;