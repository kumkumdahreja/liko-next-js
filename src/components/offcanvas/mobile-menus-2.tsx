// mobile-menus-2.tsx
import React from "react";
import Link from "next/link";
// Import the main menu_data, as mobile_menu_data was removed/simplified
import menu_data from "@/data/menu-data";

export default function MobileMenusTwo() {
  // Removed navTitle state and openMobileMenu function as there are no submenus to toggle.

  return (
    <nav className="tp-main-menu-content">
           {" "}
      <ul>
               {" "}
        {menu_data.map((menu) => (
          <li key={menu.id}>
                        {/* The link is now a simple top-level link */}         
             {" "}
            <Link href={menu.link}>              {menu.title}            </Link>
                     {" "}
          </li>
        ))}
             {" "}
      </ul>
         {" "}
    </nav>
  );
}
