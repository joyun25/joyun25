import { aboutPageConfig } from "@/config";
import { Metadata } from "next";
import Image from "next/image";

export const metaData: Metadata = {
  title: "About",
};

const AboutPage = () => {
  return (<>
    <div className={`
      mx-auto
      max-w-3xl
      px-6
      pt-4
    `}>
      <div className={`
        scroll-m-20
        border-b
        pb-1
        text-3xl
        font-semibold
        tracking-tight
      `}>
        {aboutPageConfig.title}
      </div>
      <div className={`
        mt-4
        text-wrap
        text-lg
        leading-8
        text-stone-600
        dark:text-stone-400
      `}>
        {aboutPageConfig.description}
      </div>
      {/* Profile Image */}
      <div className={`
        relative
        mx-auto
        mt-4
        flex
        aspect-[16/9]
        rounded-2xl
        text-center
        shadow-md
        ring-1
        sm:aspect-[2/1]
        lg:max-w-3xl
      `}>
        <Image
          src={aboutPageConfig.profileImageUrl ?? ""}
          alt={aboutPageConfig.profileImageDescription ?? ""}
          fill={true}
          priority={true}
          className={`
            rounded-2xl
            bg-neutral-50
            object-cover
        `}/>
      </div>
      <figcaption className={`
        pt-4
        text-sm
        text-stone-500
      `}>
        {aboutPageConfig.profileImageCaption}
      </figcaption>

      {aboutPageConfig.content.map((section) => (
        <div
          key={section.idx}
          className="mt-5"
        >
          <div className={`
            scroll-m-20
            border-b
            pb-1
            text-3xl
            font-semibold
            tracking-tight
          `}>
            {section.title}
          </div>
          <div className={`
            mt-4
            text-lg
            leading-8
            text-stone-600
            dark:text-stone-400
          `}>
            {section.description}
          </div>
        </div>
      ))}
    </div>
  </>);
};

export default AboutPage;