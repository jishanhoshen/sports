import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Clubs = (props) => {
  const title = props.title;
  const [isdata, setIsData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [returndata, setReturndata] = useState(true);

  const reduxState = useSelector((state) => state.MatchReducer);
  const data = reduxState.Clubs;
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
            <span className="text-sm text-slate-500 font-medium">:</span>
          </div>
          <div>
            {(loading && (
              <div>
                <div className="flex bg-slate-50 rounded-lg px-4 py-3 mb-4 font-bold">
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-slate-200"></div>
                  </div>
                  <div className="w-11/12 ml-3">
                    <div className="text-xl font-blod bg-slate-200 w-full h-6"></div>
                    <div className="bg-slate-200 w-5/12 h-5 mt-2 "></div>
                  </div>
                </div>
                <div className="flex bg-slate-50 rounded-lg px-4 py-3 mb-4 font-bold">
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-slate-200"></div>
                  </div>
                  <div className="w-11/12 ml-3">
                    <div className="text-xl font-blod bg-slate-200 w-full h-6"></div>
                    <div className="bg-slate-200 w-5/12 h-5 mt-2 "></div>
                  </div>
                </div>
                <div className="flex bg-slate-50 rounded-lg px-4 py-3 mb-4 font-bold">
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-slate-200"></div>
                  </div>
                  <div className="w-11/12 ml-3">
                    <div className="text-xl font-blod bg-slate-200 w-full h-6"></div>
                    <div className="bg-slate-200 w-5/12 h-5 mt-2 "></div>
                  </div>
                </div>
              </div>
            )) ||
              (isdata &&
                data.map((item) => (
                  <Link key={item.id} to={"/club"}>
                    <div className="flex bg-slate-50 rounded-lg px-4 py-3 mb-4 font-bold">
                      <div className="flex items-center">
                        <img
                          src={window.location.origin + "/icons/team-1.png"}
                          className="w-14 h-14 object-contain object-center"
                        />
                      </div>
                      <div className="w-11/12 ml-3">
                        <div className="text-xl font-blod  w-full h-7">
                          {item.club_name}
                        </div>
                        <div className="h-5 mt-1">Member: {item.members}</div>
                      </div>
                    </div>
                  </Link>
                )))}
          </div>
        </div>
      </>
    )
  );
};

export default Clubs;
