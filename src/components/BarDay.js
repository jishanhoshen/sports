import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BarDay = (props) => {
  const title = props.title;
  const [isdata, setIsData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [returndata, setReturndata] = useState(true);

  const reduxState = useSelector((state) => state.MatchReducer);
  const data = reduxState.MatchHistory;
  const loaded = reduxState.DataLoaded;

  useEffect(() => {
    if (loaded == false && data.length == 0) {
      setIsData(false);
      setLoading(true);
    } else if (loaded && data.length == 0) {
      setReturndata(false);
    } else {
      setIsData(true);
      setLoading(false);
    }
  }, [data]);

  return (
    returndata && (
      <>
        <div className="mx-5">
          <div className="title flex justify-between items-center py-4">
            <h2 className="font-roboto font-bold text-2xl text-slate-50">
              {title}
            </h2>
            <span className="text-sm text-slate-500 font-medium">View All</span>
          </div>
          <div>
            {(loading && (
              <div>
                <div className="flex justify-center items-center bg-slate-50 rounded-lg px-4 py-2 mb-4 font-bold">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-slate-200 mb-3"></div>
                    <p className=" bg-slate-200 w-16 h-2"></p>
                  </div>
                  <div className="flex flex-col text-center mx-8 text-slate-300">
                    <div className="text-3xl pb-1 ">0 - 0</div>
                    <div className="text-xs">00/00/0000</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-slate-200 mb-3"></div>
                    <p className=" bg-slate-200 w-16 h-2"></p>
                  </div>
                </div>
                <div className="flex justify-center items-center bg-slate-50 rounded-lg px-4 py-2 mb-4 font-bold">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-slate-200 mb-3"></div>
                    <p className=" bg-slate-200 w-16 h-2"></p>
                  </div>
                  <div className="flex flex-col text-center mx-8 text-slate-300">
                    <div className="text-3xl pb-1 ">0 - 0</div>
                    <div className="text-xs">00/00/0000</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-slate-200 mb-3"></div>
                    <p className=" bg-slate-200 w-16 h-2"></p>
                  </div>
                </div>
              </div>
            )) ||
              (isdata &&
                data.map((item) => (
                  <Link
                    key={item.id}
                    to={"/recent"}
                    className="flex justify-center items-center bg-slate-50 rounded-lg px-4 py-2 mb-4 font-bold"
                  >
                    <div className="flex flex-col items-center">
                      <img
                        src={
                          window.location.origin +
                          "/image/team/" +
                          item.team_1_logo
                        }
                        className="h-10 object-contain mb-2"
                      />
                      <p className="text-xs">{item.team_1_cap_name}</p>
                    </div>
                    <div className="flex flex-col text-center mx-8">
                      <div className="text-3xl pb-1">{item.team_1_goal} - {item.team_2_goal}</div>
                      <div className="text-xs">{item.match_date}</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src={
                          window.location.origin +
                          "/image/team/" +
                          item.team_2_logo
                        }
                        className="h-10 object-contain mb-2"
                      />
                      <p className="text-xs">{item.team_2_cap_name}</p>
                    </div>
                  </Link>
                )))}
          </div>
        </div>
      </>
    )
  );
};
export default BarDay;
