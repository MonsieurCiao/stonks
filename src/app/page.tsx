import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useMemo, useRef } from "react";
import StockChart from "./_components/areaChart";

export default function Home() {
  return (
    <div>
      <section className="flex justify-center items-center pt-16">
        <StockChart />
      </section>
    </div>
  );
}
