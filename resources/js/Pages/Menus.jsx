import React, { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Filter from "../Components/Filter";

export default function Menus(props) {
    const [menus, setMenus] = useState({});

    useEffect(() => {
        fetch("http://localhost:8888/topMenus")
            .then((response) => response.json())
            .then((response) => setMenus(response))
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <Head title="Menus" />
            <h1 className="text-center bg-red-400">Menus</h1>
            <Filter menus={menus} />
        </>
    );
}
