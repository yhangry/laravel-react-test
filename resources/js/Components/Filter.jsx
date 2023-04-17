export default function Filter(props) {
    const handleCuisineSelect = (event) => {
        const cuisineName = event.target.value;
        if (event.target.checked) {
            props.setSelCuisines([...props.selCuisines, cuisineName]);
        } else {
            props.setSelCuisines(
                props.selCuisines.filter((cuisine) => cuisine !== cuisineName)
            );
        }
    };

    return (
        <>
            <ul key="All" className="inline-block mx-1">
                <input
                    type="checkbox"
                    className="mr-1"
                    value="All"
                    onChange={handleCuisineSelect}
                    defaultChecked
                />
                <label>All</label>
            </ul>
            {props.cuisines.map((cuisineName) => (
                <ul key={cuisineName} className="inline-block mx-1">
                    <input
                        type="checkbox"
                        className="mr-1"
                        value={cuisineName}
                        onChange={handleCuisineSelect}
                    />
                    <label>{cuisineName}</label>
                </ul>
            ))}
        </>
    );
}
