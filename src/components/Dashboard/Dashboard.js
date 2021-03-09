import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Dashboard(props) {
  const data = props.data;
  return (
    <div>
      <p>Dashboard response</p>

      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="sentiment" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="joy"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Time Series" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

export default Dashboard;

// class Dashboard extends PureComponent {
//   static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

//   render() {
//     return (
//       <p>
//         Dashboard response <br /> {data[0].name}
//       </p>
//       // <ResponsiveContainer width="100%" height="100%">
//       //   <LineChart
//       //     width={500}
//       //     height={300}
//       //     data={data}
//       //     margin={{
//       //       top: 5,
//       //       right: 30,
//       //       left: 20,
//       //       bottom: 5,
//       //     }}
//       //   >
//       //     <CartesianGrid strokeDasharray="3 3" />
//       //     <XAxis dataKey="name" />
//       //     <YAxis />
//       //     <Tooltip />
//       //     <Legend />
//       //     <Line
//       //       type="monotone"
//       //       dataKey="pv"
//       //       stroke="#8884d8"
//       //       activeDot={{ r: 8 }}
//       //     />
//       //     <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//       //   </LineChart>
//       // </ResponsiveContainer>
//     );
//   }
// }

// export default Dashboard;
