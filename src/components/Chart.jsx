"use client";
import React, { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import html2canvas from "html2canvas";
import pptxgen from "pptxgenjs";

const ChartComponent = () => {
  const chartRef = useRef(null);

  const captureChart = async () => {
    const chartElement = chartRef.current.container.current;
    const canvas = await html2canvas(chartElement);
    const image = canvas.toDataURL("image/png");
    createPpt(image);
  };

  const createPpt = (image) => {
    const pptx = new pptxgen();
    const slide = pptx.addSlide();
    slide.addImage({ data: image, x: 1, y: 1, w: 8, h: 5 });
    pptx.writeFile({ fileName: "chart.pptx" });
  };

  const options = {
    title: {
      text: "My Chart",
    },
    series: [
      {
        name: "My Data",
        data: [1, 2, 3, 4, 5],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact
        ref={chartRef}
        highcharts={Highcharts}
        options={options}
      />
      <button onClick={captureChart}>Download Chart as PPTX</button>
    </div>
  );
};

export default ChartComponent;
