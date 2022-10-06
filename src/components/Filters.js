

const Filters = ({filter, setFilter}) => {
    function clickHandler (param) {
        setFilter(param);
    }
    return (
        <>

        <button onClick= {()=> clickHandler(undefined)}>none</button>
        <button onClick= {()=> clickHandler("common")}>common</button>
        <button onClick= {()=> clickHandler("rare")}>rare</button>
        </>
    )
}
export default Filters;