import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full ">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            Joining the dynamic team at Rogers Arena as a Quick Service
            Supervisor, my journey through the fast-paced world of hospitality
            management has been nothing short of exhilarating. With a solid
            educational foundation in Computer Technology from the British
            Columbia Institute of Technology, I bring a unique blend of
            technical savvy and customer service excellence to the table. My
            communication, problem-solving, and time management have been honed
            over six years in the industry, ensuring seamless guest experience.
            At the heart of my approach is a commitment to leveraging technology
            to enhance operational efficiency and guest satisfaction in our
            bustling arena environment.
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
