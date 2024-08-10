import Image from "next/image";

const Sidebar = () => {
    return (
      <section className="min-w-[300px] bg-[#ffffff] relative">
        <div className="flex-col justify-between items-center gap-[80px]">
          <h2 className="font-lato font-bold text-[28px] text-[#051F61]">My Cloud</h2>
          <div className="max-w-full flex-col justify-center items-center gap-[33px] ">
            <span className="flex justify-start items-center gap-[10px] font-lato font-semibold text-[20px] text-[#757897] hover:text-[#051F61] cursor-pointer">
              <Image width={30} height={30} src="/images/sidebar__home.svg" alt="Home"/>
              Site overview
            </span>
            <span className="flex justify-start items-center gap-[10px] font-lato font-semibold text-[20px] text-[#757897] hover:text-[#051F61] cursor-pointer">
              <Image width={30} height={30} src="/images/sidebar__web-site.svg" alt="Web"/>
              Site configuration
            </span>
            <span className="flex justify-start items-center gap-[10px] font-lato font-semibold text-[20px] text-[#757897] hover:text-[#051F61] cursor-pointer">
              <Image width={30} height={30} src="/images/sidebar__cloud.svg" alt="Cloud"/>
              Deploys
            </span>
            <span className="flex justify-start items-center gap-[10px] font-lato font-semibold text-[20px] text-[#757897] hover:text-[#051F61] cursor-pointer">
              <Image width={30} height={30} src="/images/sidebar__share.svg" alt="Share"/>
              Logs
            </span>
            <span className="flex justify-start items-center gap-[10px] font-lato font-semibold text-[20px] text-[#757897] hover:text-[#051F61] cursor-pointer">
              <Image width={30} height={30} src="/images/sidebar__network.svg" alt="Network"/>
              Integrations
            </span>
          </div>
        </div>
      </section>
    );
};

export default Sidebar;
