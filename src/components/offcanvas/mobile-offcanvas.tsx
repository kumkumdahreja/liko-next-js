import React from "react";
import Image from "next/image";
import { Facebook, CloseTwo, Linkdin, InstagramTwo, Youtube } from "../svg";

// images
import logo from "@/assets/img/logo/logo.png";
import gallery_1 from "@/assets/img/menu/offcanvas/offcanvas-1.jpg";
import gallery_2 from "@/assets/img/menu/offcanvas/offcanvas-2.jpg";
import gallery_3 from "@/assets/img/menu/offcanvas/offcanvas-3.jpg";
import gallery_4 from "@/assets/img/menu/offcanvas/offcanvas-4.jpg";
import MobileMenus from "./mobile-menus";
import Link from "next/link";

const gallery_images = [gallery_1, gallery_2, gallery_3, gallery_4];

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvas({
  openOffcanvas,
  setOpenOffcanvas,
}: IProps) {
  return (
    <>
      <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <Link href="#">
                <Image src={logo} alt="logo" />
              </Link>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
              >
                <CloseTwo />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            <div className="tp-offcanvas-content">
              <h3 className="tp-offcanvas-title">Hello There!</h3>
            </div>
            <div className="tp-main-menu-mobile d-xl-none">
              <MobileMenus />
            </div>
            <div className="tp-offcanvas-gallery">
              <div className="row gx-2">
                {gallery_images.map((item, i) => (
                  <div className="col-md-3 col-3" key={i}>
                    <div className="tp-offcanvas-gallery-img fix">
                      <Link href="#">
                        <Image
                          style={{ width: "100%", height: "auto" }}
                          src={item}
                          alt="gallery-img"
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Information</h3>

              <ul>
                <li>
                  <Link href="tel:+91-9311032704">+91-9311032704</Link>
                </li>
                <li>
                  <Link href="mailto:contact@thebrandingstudio.in">
                    contact@thebrandingstudio.in
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Office No. LG007, H-36, Green Leafers Business Park,
                    Sector-63, Noida
                  </Link>
                </li>
              </ul>
            </div>
            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Follow Us</h3>
              <ul>
                <li>
                  <Link href="https://www.instagram.com/thebrandingstudio.in?igsh=MTFnbXVicWNwbmYwaA==">
                    <InstagramTwo />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/the-branding-studio-t-b-s/">
                    <Linkdin />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/share/1QZkMM9KJo/?mibextid=wwXIfr">
                    {" "}
                    <Facebook />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
      ></div>
    </>
  );
}
