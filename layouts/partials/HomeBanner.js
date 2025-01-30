import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <section className="section pb-[50px]">
      <div className="container">
        <div className="row flex items-center text-center lg:text-left">
          {/* Image on the left */}
          <div className="lg:w-1/2">
            <Image
              className="mx-auto lg:mx-0"
              src="/images/banner-art.svg"
              width={350}
              height={350}
              alt="banner image"
              priority
            />
          </div>

          {/* Content on the right */}
          <div className="lg:w-1/2 mt-4 lg:mt-0 lg:pl-12">
            <h1 className="font-primary font-bold text-3xl lg:text-4xl">
            Telesto Energy 
            </h1>
            <p className="mt-4 text-lg">Telesto Energy combines advanced technology and deep industry expertise to redefine operational efficiency in oil and gas. With a focus on AI-driven insights and sustainable strategies, Telesto empowers businesses to optimize their assets, enhance decision-making, and unlock untapped value across their energy portfolio.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
