"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["About", "/#about"],
  ["Projects", "/#projects"],
  ["Engineering", "/#engineering"],
  ["Experience", "/#experience"],
  ["Contact", "/#contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">TT</span>
          <span>Taufik Triantono</span>
        </Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-nav">
          <span className="sr-only">Toggle navigation</span>
          <span /><span />
        </button>
        <nav id="site-nav" className={open ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
