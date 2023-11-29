"use client";
import React, { useRef } from "react";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import NamazTimes from "@/components/NamazTimes";
import ShareButton from "@/components/ShareButton";
import { ExportToImage } from "@/utils/shareAsImage";

interface responseData {
  timings: {
    Imsak: string;
    Fajr: string;
    Sunrise: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Sunset: string;
    Isha: string;
    Midnight: string;
  };
  dateReadable: {
    georgian: string;
    hijri: {
      en: string;
      ar: string;
    };
  };
  place: string;
}

export default function Widget({ data }: { data: responseData }) {
  const imageBoxRef = useRef<HTMLDivElement>(null);
  const imageShareHandler = () => {
    if (!imageBoxRef.current) return;
    ExportToImage(imageBoxRef.current, "image.png");
  };

  return (
    <div className="">
      <Container ref={imageBoxRef} footer={<Footer />}>
        <NamazTimes
          place={data.place}
          timings={data.timings}
          date={data.dateReadable}
        />
      </Container>
      <div className="p-2 flex justify-center items-center">
        <ShareButton imageShareHandler={imageShareHandler} />
      </div>
    </div>
  );
}
