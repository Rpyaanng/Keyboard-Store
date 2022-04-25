import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Wrapper from "../assets/wrappers/Chart";

const Chart = ({ title, data, dataKey, grid }) => {
  const rdata = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 500, pv: 2400, amt: 3400 },
    { name: "Page C", uv: 100, pv: 2400, amt: 3400 },
    { name: "Page D", uv: 300, pv: 2400, amt: 3400 },
  ];
  return (
    <Wrapper>
      <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={rdata}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <Line type="monotone" dataKey="uv" stroke="#5550bd" />
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Wrapper>
  );
};
export default Chart;
