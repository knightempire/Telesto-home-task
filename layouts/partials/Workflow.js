import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

const Workflow = () => {
  const workflow = {
    title: "Experience the best workflow with us",
    image: "/images/banner.svg",
    description: "we specialize in Artificial Intelligence and Big Data Analytics tailored for the oil and gas industry. Our services are designed to optimize your operations, providing data-driven insights that lead to significant breakthroughs in efficiency and productivity. Our portfolio advisory services offer global farm-in opportunities, ensuring value assurance and strategic growth for your assets. With a team of experienced professionals, we provide subsurface consulting and technical advisory services, including exploration, appraisal, field development, and reservoir management.Experience a seamless workflow with Telesto Energy, where innovation meets expertise to drive your next big energy breakthrough."
  };

  return (
    <section className="section pb-10">
      <div className="container">
        <div className="row flex items-center justify-between">
          {/* Content on the right */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {markdownify(
              workflow.title,
              "h2",
              "mx-auto max-w-[400px] font-bold leading-[44px]"
            )}
            {markdownify(workflow.description, "p", "mt-3")}
          </div>
          {/* Image on the left */}
          <div className="lg:w-1/2">
            <Image
              src={workflow.image}
              alt="workflow image"
              width={750}
              height={350}
              className="mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
