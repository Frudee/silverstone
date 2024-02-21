import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="h-[1500px]">
      <nav>
        <ul>
          <li>
            <Link href="/catalogue">Footer</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
