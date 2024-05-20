import Chart from "../components/Chart";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-1/2">
        <div className="bg-red-200 w-full">
          <h1 className="text-center text-4xl">Highcharts in React</h1>
        </div>
        <div>
          <Chart />
        </div>
      </div>
    </div>
  );
}
