import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer>
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
