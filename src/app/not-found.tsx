import SurfaceTile from "@/components/SurfaceTile";
import TopDivider from "@/components/TopDivider";

export default function NotFound() {
  return (
    <div className="w-[calc(100%-1rem)] md:w-[calc(100%-4rem)] mx-2 md:mx-8 border-collapse border-l border-stone-400 min-h-screen bg-theme-primary">
      <TopDivider className="border-r border-b-0 border-stone-400"/>
      <div className="
        flex flex-wrap w-full h-full
        sm:grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 sm:auto-rows-[minmax(0,1fr)]
      ">
      <SurfaceTile 
      colSpan={1}
      label="404"
      type="primary"
      className="text-2xl font-bold"
      />
      <SurfaceTile 
      label="Sorry, this page doesn't exist"
      colSpan={3}
      type="primary"
      />
      <SurfaceTile 
      className="hidden sm:block"/>
      <SurfaceTile 
      label="Back to Home"
      colSpan={2}
      type="secondary"
        link="/"
      />
      <SurfaceTile 
      />
     
      <SurfaceTile
      label="Products"
      colSpan={1}
      type="tertiary"
        link="/product"
      />
      <SurfaceTile />
      <SurfaceTile
      className="hidden sm:block" 
      />
      <SurfaceTile
      label="Case Studies"
      colSpan={1}
      type="tertiary"
        link="/case-study"
      />
      <SurfaceTile />
      <SurfaceTile className="hidden sm:block"/>
      
      <SurfaceTile
      label="Ideas"
      colSpan={1}
      type="tertiary"
        link="/ideas"
      />
      <SurfaceTile />
      <SurfaceTile className="hidden sm:block"/>
      
      <SurfaceTile
      label="Experiments"
      colSpan={1}
      type="tertiary"
        link="/experiment"
      />
       <SurfaceTile />
      <SurfaceTile className="hidden sm:block"/>
      
      <SurfaceTile
      label="About me"
      colSpan={1}
      type="quaternary"
        link="/about-me"
      />
      <SurfaceTile />
      <SurfaceTile className="hidden sm:block"/>
      <SurfaceTile
      label="Contact"
      colSpan={1}
      type="quaternary"
        link="/contact"
      />
      <SurfaceTile />
      <SurfaceTile className="hidden sm:block"/>
      <SurfaceTile
      label="Tech Stack"
      colSpan={1}
      type="quaternary"
        link="/tech-stack"
      />
        <SurfaceTile />
        <SurfaceTile className="hidden sm:block"/>
        <SurfaceTile
      label="</docs>"
      colSpan={1}
      type="quaternary"
        link="/docs"
      />
       <SurfaceTile />
       <SurfaceTile className="hidden sm:block"/>
       <SurfaceTile 
       label="o10n.design"
       colSpan={8}
       type="primary"
       link="/"
       />
      </div>
     
   
    </div>
  );
}
