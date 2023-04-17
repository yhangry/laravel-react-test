export default function Filter(props) {
    return (
        <>
            <ul key="All" className="inline-block mx-1">
                <input type="checkbox" className="mr-1" />
                <label>All</label>
            </ul>
            {Object.keys(props.menus).map((cuisineName) => (
                <ul key={cuisineName} className="inline-block mx-1">
                    <input type="checkbox" className="mr-1" />
                    <label>{cuisineName}</label>
                </ul>
            ))}
        </>
    );
}
