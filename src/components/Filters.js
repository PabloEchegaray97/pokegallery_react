

const Filters = ({filter, setFilter}) => {

    const selectedValue = (e) => {
        console.log(e.target.value);
        setFilter(e.target.value)
    }
    return (
        <>
        <div class="filter-cards">
            <h4 class="title">¡Encuentra tus cartas favoritas!</h4>
            <h4 class="title title-bold title-bold-mod">Buscar por categoria</h4>
            <div class="select-group"></div>
        
        <div class="select-group">
                <select name="" id="myselect" class="form-select" onChange={selectedValue}>
                    <option value="">Todos</option>
                    <option value="holo">Holo</option>
                    <option value="rare">Rare</option>
                    <option value="uncommon">Uncommon</option>
                    <option value="common">Common</option>
                </select>
            </div>
        </div>
        </>
    )
}
export default Filters;