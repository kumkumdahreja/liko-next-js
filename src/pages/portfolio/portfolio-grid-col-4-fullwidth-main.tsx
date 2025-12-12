"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import {
  ScrollSmoother,
  ScrollTrigger,
  SplitText,
  cursorAnimation,
} from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import PortfolioGridFourColArea from "@/components/portfolio/portfolio-grid-4-col-area";
import BigText from "@/components/big-text";
import FooterTwo from "@/layouts/footers/footer-two";
import ProjectFour from "@/components/project/project-four";
import PortfolioSliderHomeNine from "@/components/portfolio/slider/portfolio-slider-home-nine";
// animation
import { hoverBtn } from "@/utils/hover-btn";
import {
  charAnimation,
  fadeAnimation,
  titleAnimation,
} from "@/utils/title-animation";
import { imageRevealAnimation } from "@/utils/image-reveal-anim";
import { projectThreeAnimation } from "@/utils/project-anim";

const PortfolioGridColFourFullwidthMain = () => {
  const [whiteCls, setWhiteCls] = React.useState(true);
  useScrollSmooth();

  useEffect(() => {
    document.body.classList.add("tp-magic-cursor");
    return () => {
      document.body.classList.remove("tp-magic-cursor");
    };
  }, []);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      document.querySelector(".tp-magic-cursor")
    ) {
      cursorAnimation();
    }
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      hoverBtn();
      imageRevealAnimation();
      fadeAnimation();
      projectThreeAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* magic cursor start */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
      {/* magic cursor end */}

      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio hero */}
            <div className="tm-hero-area tm-hero-ptb">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-hero-content">
                      <span className="tm-hero-subtitle">
                        The Branding Studio
                      </span>
                      <h4 className="tm-hero-title fs-220 tp-char-animation">
                        Classic Grid
                      </h4>
                    </div>
                    <div className="tm-hero-text tp_title_anim">
                      <p>
                        We're a diverse team that works as fancies attention to
                        details, enjoys beers on Friday nights and aspires to
                        design the dent in the universe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* portfolio hero */}

            {/* portfolio area */}
            <PortfolioGridFourColArea style_2={true} />
            {/* portfolio area */}

            {/* Wrapper Section */}
            <div className="tm-hero-area tm-hero-ptb">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-hero-content">
                      <span className="tm-hero-subtitle">
                        The Branding Studio
                      </span>
                      <h4 className="tm-hero-title tp-char-animation">
                        Our latest & great projects
                      </h4>
                    </div>
                    <div className="tm-hero-text">
                      <p className="tp_title_anim">
                        We're a diverse team that works as fancies attention to
                        details, enjoys beers on Friday nights and aspires to
                        design the dent in the universe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ProjectFour style_2={true} />
            {/* End Wrapper Section */}

            {/* Home 9 Section - Full width slider */}
            <section className="tp-portfolio-slider-section">
              <div
                className={`tp-porfolio-10-main ${
                  whiteCls ? "header-white" : ""
                }`}
              >
                <div id="smooth-wrapper">
                  <div id="smooth-content">
                    <PortfolioSliderHomeNine setWhiteCls={setWhiteCls} />
                  </div>
                </div>
              </div>
            </section>
            {/* End Home 9 Section */}

            {/* big text */}
            <BigText />
            {/* big text */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioGridColFourFullwidthMain;
