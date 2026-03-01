import { useEffect, useState } from "react";
import { getData } from "../api/api";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function TablePage() {

  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [brand, setBrand] = useState("");

  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);

  const perPage = 10;


  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {

    const res = await getData();

    setData(res.data);
    setFiltered(res.data);

  };


  // FILTER + SEARCH

  useEffect(() => {

    let result = data;

    if (city)
      result = result.filter(
        (r) => r.city === city
      );

    if (region)
      result = result.filter(
        (r) => r.region === region
      );

    if (brand)
      result = result.filter(
        (r) => r.brand === brand
      );

    if (search)
      result = result.filter((r) =>
        Object.values(r)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase())
      );

    setFiltered(result);

    setPage(1);

  }, [city, region, brand, search, data]);


  // dropdown values

  const cities =
    [...new Set(data.map(d => d.city))];

  const regions =
    [...new Set(data.map(d => d.region))];

  const brands =
    [...new Set(data.map(d => d.brand))];


  // pagination

  const start = (page - 1) * perPage;
  const end = start + perPage;

  const pageData =
    filtered.slice(start, end);

  const totalPages =
    Math.ceil(filtered.length / perPage);


  // chart data

  const chartMap = {};

  filtered.forEach((d) => {

    if (!chartMap[d.city])
      chartMap[d.city] = 0;

    chartMap[d.city]++;

  });

  const chartData =
    Object.keys(chartMap).map((k) => ({
      city: k,
      count: chartMap[k],
    }));


  return (

    <div className="tablePage">

      <h2>Dashboard</h2>


      {/* cards */}

      <div className="cards">

        <div className="card">
          Total Rows
          <h3>{filtered.length}</h3>
        </div>

        <div className="card">
          Cities
          <h3>{cities.length}</h3>
        </div>

        <div className="card">
          Brands
          <h3>{brands.length}</h3>
        </div>

      </div>



      {/* filters */}

      <div className="filterBar">

        <input
          placeholder="Search"
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          onChange={(e) =>
            setCity(e.target.value)
          }
        >
          <option value="">City</option>

          {cities.map(c => (
            <option key={c}>{c}</option>
          ))}

        </select>


        <select
          onChange={(e) =>
            setRegion(e.target.value)
          }
        >
          <option value="">Region</option>

          {regions.map(r => (
            <option key={r}>{r}</option>
          ))}

        </select>


        <select
          onChange={(e) =>
            setBrand(e.target.value)
          }
        >
          <option value="">Brand</option>

          {brands.map(b => (
            <option key={b}>{b}</option>
          ))}

        </select>

      </div>



      {/* chart */}

      <BarChart
        width={500}
        height={300}
        data={chartData}
      >

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="city" />

        <YAxis />

        <Tooltip />

        <Bar dataKey="count" />

      </BarChart>



      {/* table */}

      <table>

        <thead>

          <tr>

            {pageData[0] &&
              Object.keys(pageData[0])
                .map((k) => (
                  <th key={k}>{k}</th>
                ))}

          </tr>

        </thead>

        <tbody>

          {pageData.map((row, i) => (

            <tr key={i}>

              {Object.values(row)
                .map((v, j) => (
                  <td key={j}>{v}</td>
                ))}

            </tr>

          ))}

        </tbody>

      </table>



      {/* pagination */}

      <div className="pagination">

        <button
          disabled={page === 1}
          onClick={() =>
            setPage(page - 1)
          }
        >
          Prev
        </button>

        {page} / {totalPages}

        <button
          disabled={
            page === totalPages
          }
          onClick={() =>
            setPage(page + 1)
          }
        >
          Next
        </button>

      </div>

    </div>
  );
}