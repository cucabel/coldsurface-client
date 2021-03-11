import React, { PureComponent } from "react";
import {
  LineChart,
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const colors = {
  sentiment: "black",
  joy: "orange",
  anger: "green",
  fear: "#808000",
  sadness: "blue",
  disgust: "purple",
};

function Barchart(props) {
  const data = props.data;
  const dataAvailable = data.length ? true : false;
  const dimension = props.dimension;
  const title = props.title;
  const domain = dimension == "sentiment" ? [-1.0, +1.0] : [0, 1];

  return (
    <div>
      <p>
        <strong>{title.charAt(0).toUpperCase() + title.slice(1)} </strong>
      </p>
      {dataAvailable ? (
        <BarChart width={550} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis type="number" domain={domain} />
          <Tooltip />
          <Legend />
          <Bar dataKey={dimension} fill={colors[dimension]} />
        </BarChart>
      ) : (
        <p>Data Non Available</p>
      )}
    </div>
  );
}

export default Barchart;
