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
      <div className="container mx-auto text-center flex flex-col gap-5">
        <div className="text-white font-normal text-[50px] mt-10">
          Road
          <span className="text-[#FD1640]">map</span>
        </div>
        <p className="font-inter text-center my-6 xl:text-[24.58px] text-white">
          Guiding the fusion of culture, AI, and Web3 innovation
        </p>
      </div>
      <div className="">
        {data.map((item) => {
          return <Phase key={item?.id} phaseItem={item} />;
        })}
      </div>
      <div className="my-24 h-14 flex items-center justify-center gap-10">
        <svg
          className="cursor-pointer"
          width="35"
          height="46"
          viewBox="0 0 35 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34 43.6986L34 43.7002C34.0004 43.9341 33.9357 44.1647 33.8115 44.367C33.6872 44.5695 33.5075 44.7368 33.2903 44.8487C33.073 44.9608 32.8275 45.0126 32.5807 44.9974C32.334 44.9823 32.0975 44.9009 31.8968 44.7637L31.8955 44.7628L1.5088 24.0628C1.50852 24.0626 1.50824 24.0624 1.50796 24.0622C1.19726 23.8496 0.999999 23.456 0.999999 22.996C0.999999 22.5356 1.19757 22.1429 1.50777 21.9316L1.50793 21.9315L31.8921 1.2332C31.8927 1.23279 31.8933 1.23238 31.8939 1.23197C32.0951 1.0966 32.3314 1.0167 32.5775 1.00234C32.8243 0.98794 33.0698 1.04017 33.2872 1.15235C33.5044 1.26446 33.6842 1.4316 33.809 1.63396C33.9335 1.83587 33.9991 2.06592 34 2.29956C34 2.29992 34 2.30027 34 2.30062L34 43.6986Z"
            stroke="white"
            stroke-width="2"
          />
        </svg>
        <svg
          className="cursor-pointer"
          width="35"
          height="46"
          viewBox="0 0 35 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.91529e-06 43.6986L5.725e-06 2.29744C0.00134089 1.87827 0.11883 1.4674 0.339827 1.10905C0.560824 0.7507 0.876955 0.458441 1.2542 0.263731C1.63144 0.0690217 2.05551 -0.0207648 2.48076 0.00403453C2.906 0.0288377 3.31632 0.167288 3.66755 0.404482L34.0551 21.1051C35.315 21.963 35.315 24.0285 34.0551 24.8887L3.66754 45.5893C3.31705 45.8289 2.90652 45.9694 2.48057 45.9955C2.05462 46.0217 1.62953 45.9325 1.25148 45.7376C0.873444 45.5427 0.556904 45.2496 0.336266 44.8901C0.115631 44.5307 -0.00066749 44.1186 3.91529e-06 43.6986Z"
            fill="white"
          />
        </svg>
      </div>
    </>
  );
};

export default Roadmap;
