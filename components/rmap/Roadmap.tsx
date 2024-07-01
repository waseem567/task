import Phase from "./PhaseItem";

export interface List {
  id: number;
  title: string;
}

export interface IPhaseItem {
  id: number;
  image: string;
  style1: string;
  style2: string;
  style3: string;
  style4: string;
  style5: string;
  dataAos: string;
  list: List[];
  phase: string;
}

const data: IPhaseItem[] = [
  {
    id: 1,
    image: "/images/D2-1.png",
    style1: "",
    style2: "flex-row justify-between ",
    style3: "xl:bottom-[109px] bottom-[89px] -right-[54px]",
    style4: "top-[-1.25rem]",
    style5: "md:ml-[71px] ml-[34px]",
    dataAos: "fade-right",
    list: [
      {
        id: 1,
        title: "Goal Defining",
      },
      {
        id: 2,
        title: "Market Research",
      },
      {
        id: 3,
        title: "Whitepaper v1",
      },
      {
        id: 4,
        title: "Initial Funding Secured",
      },
    ],
    phase: "Phase-I",
  },

  {
    id: 2,
    image: "/images/d52.png",
    style1: "md:left-[24rem] sm:left-[3rem]",
    style2: "flex-row-reverse justify-end",
    style3: "xl:bottom-[99px] bottom-[79px] -left-[23px]",
    style4: "-top-[3.55rem]",
    style5: "md:-ml-[53px] ml-[34px]",
    dataAos: "fade-left",
    list: [
      {
        id: 1,
        title: "AI Generative System Development",
      },
      {
        id: 2,
        title: "Early AI Generative System Testing",
      },
      {
        id: 3,
        title: "Preparing for NFT Mask Collection Launch",
      },
      {
        id: 4,
        title: "Website launch V1",
      },
      {
        id: 5,
        title: "Whitelisting",
      },
    ],
    phase: "Phase-II",
  },

  {
    id: 3,
    image: "/images/d53.png",
    style1: "",
    style2: "flex-row justify-between ",
    style3: "xl:bottom-[98px] bottom-[78px] -right-4 xl:-right-[132px]",
    style4: "-top-[3.75rem]",
    style5: "md:ml-[71px] ml-[34px]",
    dataAos: "fade-right",
    list: [
      {
        id: 1,
        title: "NFT Minting",
      },
      {
        id: 2,
        title: "3dotlink NFT Collection Launch",
      },
      {
        id: 3,
        title: "Active Marketing Campaigns",
      },
      {
        id: 4,
        title: "Community Engagement Initiatives",
      },
      {
        id: 5,
        title: "3dotlink Marketplace Launch",
      },
    ],
    phase: "Phase-III",
  },

  {
    id: 4,
    image: "/images/d54.png",
    style1: "md:left-[24rem] sm:left-[3rem]",
    style2: "flex-row-reverse justify-end",
    style3: "xl:bottom-[99px] bottom-[79px] -left-[23px]",
    style4: "-top-[2.25rem]",
    style5: "xl:-ml-[53px] sm:-ml-[24px] ml-[34px] relative md:right-[102px]",
    dataAos: "fade-left",
    list: [
      {
        id: 1,
        title: "Collaborations & Partnerships",
      },
      {
        id: 2,
        title: "Enhanced AI Generative System",
      },
      {
        id: 3,
        title: "Global Outreach Marketing",
      },
      {
        id: 4,
        title: "Staking",
      },
    ],
    phase: "Phase-IV",
  },
];

const Roadmap = () => {
  return (
    <>
      <div className="text-center flex flex-col gap-[36.12px] p-2 max-w-screen overflow-x-hidden">
        <div className="text-white font-normal text-[50px]">
          Road
          <span className="text-[#FD1640]">map</span>
        </div>
        <p className="font-inter text-[24.58px]">
          Guiding the fusion of culture, AI, and Web3 innovation
        </p>
      </div>
      <div className="mt-[147px] ">
        {data.map((item) => {
          return <Phase key={item?.id} phaseItem={item} />;
        })}
      </div>
    </>
  );
};

export default Roadmap;
