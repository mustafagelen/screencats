import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import React from "react";

const Page = () => {
  return (
    <main className="wrapper page">
      <Header title="All Videos" subHeader="Public Library" />
      İçerik
      <VideoCard
        id="1"
        title="Test"
        thumbnail="/assets/samples/thumbnail (1).png"
        createdAt="2025-10-25T11:27:45.123Z"
        username="Mustafa"
        views={10}
        visibility="public"
        duration={156}
      />
    </main>
  );
};

export default Page;
