import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import React from "react";

const Page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header
        subHeader="mustafa@gmail.com"
        title="Mustafa GELEN"
        userImg="/assets/images/dummy.jpg"
      />
      <section className="video-grid">
    
      </section>
    </div>
  );
};

export default Page;
