import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/scale">Scale</Link>
            <Link href="/performance">Performance</Link>
            <Link href="/reliability">Reliability</Link>
        </div>
    );
};

export default Header;
