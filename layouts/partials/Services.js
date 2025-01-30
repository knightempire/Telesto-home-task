"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const Services = () => {
  // Hardcoding the services data inside the component file
  const services = [
    {
      title: "Taking The Right",
      content:
        "Value maximisation of company’s assets requires right portfolio management. Telesto Energy provides oil and gas companies with a bridge between corporate strategy and operational planning. It allows companies to be more proactive and responsive to changing market and operational realities at each stage in the asset life cycle and at every level in the organization, from corporate planners to asset teams. In our portfolio advisory services, we provide",
      images: [
        "/images/service-slide-1.png",
        "/images/service-slide-2.png",
        "/images/service-slide-3.png",
      ],
      button: {
        enable: true,
        label: "Check it out",
        link: "/contact",
      },
    },
    {
      title: "Our Mission",
      content:
        "To become the company of choice by creating sustainable value for all stakeholders through continuous innovation and advanced technology. We are committed to transforming the energy landscape by delivering data-driven solutions, fostering strategic partnerships, and promoting operational excellence while maintaining a strong focus on environmental responsibility and community development",
      images: ["/images/mission.svg"],
      button: {
        enable: true,
        label: "Check it out",
        link: "/contact",
      },
    },
    {
      title: "Get The Maximum",
      content:
        "Telesto Energy experts can help to ensure the client gets maximum value out of oil and gas investments. In our value assurance service line we provide",
      list: [
        "Technical audits",
        "Deep dive audits",
        "Reserve assurance",
        "Reserve booking",
        "Value optimisation",
      ],
      images: [
        "/images/service-slide-1.png",
        "/images/service-slide-2.png",
        "/images/service-slide-3.png",
      ],
      button: {
        enable: true,
        label: "Check it out",
        link: "/contact",
      },
    },
    {
      title: "A company standing different from others",
      content:"Telesto Energy combines advanced technology and deep industry expertise to redefine operational efficiency in oil and gas. With a focus on AI-driven insights and sustainable strategies, Telesto empowers businesses to optimize their assets, enhance decision-making, and unlock untapped value across their energy portfolio." ,
       images: [
      "https://i.imgur.com/8PaHY7T.png"
      ],
      button: {
        enable: true,
        label: "Check it out",
        link: "/contact",
      },
    },
  ];

  return services.map((service, index) => {
    const isOdd = index % 2 > 0;
    return (
      <section
        key={`service-${index}`}
        className={`section ${isOdd && "bg-theme-light"}`}
      >
        <div className="container">
          <div className="items-center gap-8 md:grid md:grid-cols-2">
            {/* Carousel */}
            <div className={`service-carousel ${!isOdd && "md:order-2"}`}>
              <Swiper
                modules={[Autoplay, Pagination]}
                pagination={
                  service.images.length > 1 ? { clickable: true } : false
                }
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                init={service?.images.length > 1 ? true : false}
              >
                {/* Slides */}
                {service?.images.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={slide}
                      alt="Service Image"
                      width={slide === "https://i.imgur.com/8PaHY7T.png" ? 300 : 500}  // Reduced size for the specific image
                      height={slide === "https://i.imgur.com/8PaHY7T.png" ? 250 : 500} // Adjust height accordingly                
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Content */}
            <div
              className={`service-content mt-5 md:mt-0 ${!isOdd && "md:order-1"}`}
            >
              <h2 className="font-bold leading-[40px]">{service?.title}</h2>
              <p className="mb-2 mt-4">{service?.content}</p>

              {/* Conditionally render the list if available */}
              {service?.list && (
                <ul className="mt-4 space-y-2">
                  {Array.isArray(service.list) ? (
                    service.list.map((item, index) => (
                      <li key={index} className="list-disc pl-6">
                        {item}
                      </li>
                    ))
                  ) : (
                    service.list.split("\n").map((item, index) => (
                      <li key={index} className="list-disc pl-6">
                        {item}
                      </li>
                    ))
                  )}
                </ul>
              )}

              {service.button.enable && (
                <Link
                  href={service?.button.link}
                  className="cta-link inline-flex items-center text-primary py-4"
                >
                  {service?.button.label}
                  <Image
                    className="ml-1"
                    src="/images/arrow-right.svg"
                    width={18}
                    height={14}
                    alt="arrow"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  });
};

export default Services;
