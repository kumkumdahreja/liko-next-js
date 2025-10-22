// mobile-menus.tsx
import React from "react";
import Link from "next/link";
// We only import menu_data since mobile_menu_data was removed/simplified
import menu_data from "@/data/menu-data";
// We no longer need to import these images as mega menus are removed
// import shop_banner from '@/assets/img/menu/shop-menu/banner-1.jpg';
// import port_img from '@/assets/img/menu/portfolio-menu/portfolio.png';

export default function MobileMenus() {
  // The state and function for toggling sub-menus are no longer needed
  // since all menu items are now simple links.
  return (
    <>
           {" "}
      <nav className="tp-main-menu-content">
               {" "}
        <ul>
                   {" "}
          {menu_data.map((menu) => (
            <li
              key={menu.id} // Remove all conditional classes related to dropdowns/mega-menus
            >
                           {" "}
              <Link href={menu.link}>
                                {menu.title}               {" "}
                {/* Remove the dropdown toggle button */}             {" "}
              </Link>
                           {" "}
              {/* All conditional rendering for submenus is removed */}         
               {" "}
            </li>
          ))}
                 {" "}
        </ul>
             {" "}
      </nav>
         {" "}
    </>
  );
}
