
const Detail = ({pokemon}) => {
    if (pokemon===undefined) {
        return <p>cargando...</p>
    }
    console.log(pokemon);

    return (
        <> {/*fragment*/}
            <div>{pokemon.name}</div>
            <img src ={pokemon.images?.small} />

        </>
    )
}
export default Detail;