import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useMemo, useRef } from "react";
import AreaChart from "./_components/areaChart";

export default function Home() {
  return (
    <div>
      <AreaChart />
    </div>
  );
}
