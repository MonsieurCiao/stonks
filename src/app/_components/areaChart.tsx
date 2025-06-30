"use client";
import React, { useEffect, useMemo, useRef } from "react";

export default function AreaChart() {
  const areaChart = useRef<HTMLDivElement | null>(null);

  const draw = useMemo(
    () => () => {
      const data = google.visualization.arrayToDataTable([
        ["Year", "Sales", "Expenses"],
        ["2013", 1000, 400],
        ["2014", 1170, 460],
        ["2015", 660, 1120],
        ["2016", 1030, 540],
      ]);
      const options = {
        title: "Company Performance",
        hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
        vAxis: { minValue: 0 },
      };

      const chart = new google.visualization.AreaChart(
        areaChart.current as HTMLElement
      );
      chart.draw(data, options);
    },
    []
  );

  useEffect(() => {
    const loadChart = async () => {
      if (typeof google === "undefined") {
        await new Promise<void>((resolve) => {
          const script = document.createElement("script");
          script.src = "https://www.gstatic.com/charts/loader.js";
          script.onload = () => resolve();
          document.head.appendChild(script);
        });
      }
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(draw);
    };
    loadChart();
  }, []);
  return (
    <section>
      <div ref={areaChart}></div>
    </section>
  );
}
