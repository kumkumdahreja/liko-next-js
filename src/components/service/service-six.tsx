import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "The Branding Studio",
    title: "Web & UI/UX Development",
    text: "We build high-performance, secure websites and design seamless user experiences (UI/UX) engineered for conversion and reliable performance on any device.",
    lists: [
      "Full-Stack Web Development",
      "UI/UX Design & Prototyping",
      "Shopify / WordPress Website",
      "Website Speed Optimization",
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "The Branding Studio",
    title: "CRM & ERP System Development",
    text: "Streamline your entire operation with custom-built Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) solutions tailored to your unique workflows.",
    lists: [
      "Custom CRM Development",
      "ERP System Integration",
      "Data Migration & Analytics",
      "Business Process Automation",
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "The Branding Studio",
    title: "Content Creation & Digital Strategy",
    text: "We develop compelling, SEO-optimized written content and execute precise digital strategies to build brand authority, drive high-intent traffic, and maximize your audience engagement.",
    lists: [
      "SEO-Driven Content Writing",
      "Website Copy & Blog Articles",
      "Social Media Content Strategy",
      "Full-Funnel Digital Marketing",
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "The Branding Studio",
    title: "Precision Meta Ads Management",
    text: "We design, execute, and optimize targeted advertising campaigns across Facebook and Instagram (Meta) platforms to efficiently lower your acquisition costs and maximize your return on ad spend (ROAS).",
    lists: [
      "Full-Funnel Campaign Strategy",
      "Audience Research & Targeting",
      "Creative & Copy A/B Testing",
      "Continuous Budget Optimization",
    ],
  },
];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="sv-service-btn">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href="/service-details"
                        >
                          <span className="zikzak-content">
                            See <br /> Details
                            <RightArrow clr="currentColor" />
                          </span>
                          <ShapeTwo />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
