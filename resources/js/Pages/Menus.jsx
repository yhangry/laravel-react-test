import React, { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Filter from "../Components/Filter";

export default function Menus(props) {
    const [menus, setMenus] = useState([]);
    const [cuisines, setCuisines] = useState([]);
    const [selCuisines, setSelCuisines] = useState(["All"]);
    const [filteredMenus, setFilteredMenus] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8888/")
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
            <Head title="Menus" />
            <h1 className="text-center bg-red-400">Menus</h1>
            <Filter
                cuisines={cuisines}
                selCuisines={selCuisines}
                setSelCuisines={setSelCuisines}
            />
            <ul className="mt-2">
                {filteredMenus.map((menu) => {
                    return <li key={menu.name}>{menu.name}</li>;
                })}
            </ul>
        </>
    );
}
