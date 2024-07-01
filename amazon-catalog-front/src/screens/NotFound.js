import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    React.useEffect(() => {
        navigate('/');
    }, [])

    return (
        <main style={{ dispadding: "1rem" }}>
            <p>There's nothing here!</p>
        </main>
    )
}