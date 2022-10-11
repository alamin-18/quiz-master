import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

const Statistics = () => {
    const dataLoad = useLoaderData()
    const data = dataLoad.data
    console.log(data);
    return (
        <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="total" fill="#8884d8" />
      <Bar dataKey="id" fill="#82ca9d" />
    </BarChart>
    );
};

export default Statistics;