import CardsWrapper from "@/components/cards/CardsWrapper";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Popular from "@/components/popularnfts/Popular";
import Questions from "@/components/question/Questions";
import Wrapper from "@/components/ribbon/Wrapper";
import Roadmap from "@/components/rmap/Roadmap";

import Video from "@/components/video/Video";
import Vision from "@/components/vision/Vision";

export default function Home() {
  return (
    <div className="mx-auto">
      <Navbar />
      <Hero />
      <Vision />
      {/* custom ribbon component */}
      {/* <Wrapper /> */}
      <Video />
      <Popular />
      {/* <CardsWrapper /> */}
      <Roadmap />

      <Questions />
    </div>
  );
}
