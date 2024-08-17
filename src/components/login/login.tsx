"use client";
import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");

    return (
        <div>
            <h1>Login</h1>
            <form>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export { Login };
