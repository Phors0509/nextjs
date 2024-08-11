import React from "react";

export default async function get() {
    const fetchPost = async () => {
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await res.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    console.log(await fetchPost());
    return <h1>Kob jm</h1>;
}
