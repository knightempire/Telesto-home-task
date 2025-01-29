import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const HomeBanner =  () => {
  return (
    <section className="section pb-[50px]">
      <div className="container">
        <div className="row text-center">
          <div className="mx-auto lg:col-10">
            <h1 className="font-primary font-bold"> Let Us Bring AI-Driven Insights to Power Your Next Big Energy Breakthrough </h1>
            <p className="mt-4"> Artificial Intelligence & Big Data Analytics for Oil & Gas.</p>
        
            <Image
              className="mx-auto mt-12"
              src="/images/banner-art.svg"
              width={750}
              height={390}
              alt="banner image"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
