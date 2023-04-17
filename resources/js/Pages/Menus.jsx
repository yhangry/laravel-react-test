import { useEffect, useState } from "react";
import Filter from "../Components/Filter";

export default function Menus(props) {
    const [menus, setMenus] = useState([]);
    const [cuisines, setCuisines] = useState([]);
    const [selCuisines, setSelCuisines] = useState(["All"]);
    const [filteredMenus, setFilteredMenus] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8888/topMenus")
            .then((response) => response.json())
            .then((response) => {
                setMenus(response);
                const uniqueCuisines = response.reduce((acc, menu) => {
                    if (!acc.includes(menu.cuisine_name)) {
                        acc.push(menu.cuisine_name);
                    }
                    return acc;
                }, []);
                setCuisines(uniqueCuisines);
            })
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        // Filter menus based on selected cuisines
        const locFilteredMenus = selCuisines.includes("All")
            ? menus
            : menus.filter((menu) => {
                  return selCuisines.includes(menu.cuisine_name);
              });

        // Sort the filtered menus by number_of_orders
        locFilteredMenus.sort(
            (a, b) => b.number_of_orders - a.number_of_orders
        );

        setFilteredMenus(locFilteredMenus);
    }, [selCuisines, menus]);

    return (
        <>
            <div className="sticky top-0 z-10 bg-white border border-stone-200">
                <h1 className="text-center py-6 text-3xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg">
                    Menus
                </h1>
                <Filter
                    cuisines={cuisines}
                    selCuisines={selCuisines}
                    setSelCuisines={setSelCuisines}
                />
            </div>
            <ul className="mt-2 grid grid-cols-3 gap-4">
                {filteredMenus.map((menu) => {
                    return (
                        <li
                            key={menu.name}
                            className="border p-4 flex flex-col items-center"
                        >
                            <img
                                src={menu.thumbnail}
                                alt={menu.name}
                                className="h-32 w-32 object-cover mb-4"
                            />
                            <span>{menu.name}</span>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
