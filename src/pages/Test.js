import React, { useState, useEffect } from "react";

const Test = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("http://192.168.0.200/sportsadmin/public/api/data")
      .then(res => res.json())
      .then(mydata => {
        setdata(mydata);
      })
  }, []);
  return (
    <div>
      {data.map((singledata) => (
        <h1 className="text-slate-50">{singledata.matchCode}</h1>
      ))}
    </div>
  );
};
export default Test;