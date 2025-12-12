import React from "react";
import Image from "next/image";
import logo from "@/assets/img/logo/logo-white.png";
import { RightArrow, SvgBgSm } from "@/components/svg";
import Link from "next/link";

export default function FooterFour() {
  return (
    <footer>
      <div className="tp-footer-3-area dark-bg pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-1">
                <div className="tp-footer-3-widget mb-40">
                  <h4 className="tp-footer-3-title">Website map</h4>
                  <div className="tp-footer-3-menu">
                    <ul>
                      <li>
                        <Link href="/home-11">Home</Link>
                      </li>
                      <li>
                        <Link href="/src/pages/about/about-us.tsx">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/src/pages/service/service.tsx">
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/src/pages/portfolio/portfolio-grid-col-4-fullwidth-main.tsx">
                          Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link href="/src/pages/team/team.tsx">Our Team</Link>
                      </li>
                      <li>
                        <Link href="/src/pages/contact/contact.tsx">
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link href="/src/pages/blog/blog-list.tsx">Blog</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Newsletter</h4>
                  <div className="tp-footer-3-input-box d-flex align-items-center">
                    <input type="text" placeholder="Enter Address..." />
                    <button className="tp-footer-3-btn p-relative">
                      <span className="icon-1">
                        <RightArrow clr="#19191A" />
                      </span>
                      <span className="icon-2">
                        <SvgBgSm />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget text-md-center footer-col-3-2">
                <div className="tp-footer-3-logo-box">
                  <p className="mb-100">
                    Ready to grow? Drop us a line to schedule your personalized
                    strategy session today.
                  </p>
                  <Link className="tp-footer-3-logo p-relative" href="/">
                    <Image src={logo} alt="logo" />
                  </Link>
                  <p className="tp-footer-3-copyright">
                    All rights reserved — 2024 © The Branding Studio
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-3">
                <div className="tp-footer-3-widget mb-30">
                  <h4 className="tp-footer-3-title">Contact</h4>
                  <div className="tp-footer-2-contact-item">
                    <span>
                      <Link
                        href="https://www.google.com/maps/@23.8223596,90.3656686,15z?entry=ttu"
                        target="_blank"
                      >
                        Office No. LG007, H-36, Green Leafers Business Park,
                        Sector-63, Noida
                      </Link>
                    </span>
                  </div>
                  <div className="tp-footer-2-contact-item">
                    <span>
                      P: <Link href="tel:+91-9311032704">+91-9311032704</Link>
                    </span>
                    <span>
                      E:{" "}
                      <Link href="mailto:contact@thebrandingstudio.in">
                        contact@thebrandingstudio.in
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Follow</h4>
                  <div className="tp-footer-3-social">
                    <Link href="https://www.facebook.com/share/1QZkMM9KJo/?mibextid=wwXIfr">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link href="https://www.instagram.com/thebrandingstudio.in?igsh=MTFnbXVicWNwbmYwaA==">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link href="https://www.linkedin.com/company/the-branding-studio-t-b-s/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
