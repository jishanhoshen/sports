import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BoxDay = (props) => {
  const title = props.title;
  const [isdata, setIsData] = useState(false);
  const [loading, setLoading] = useState(true);

  const data = useSelector((state) => state.MatchReducer.AllBestMatches);

  useEffect(() => {
    if (props.try) {
      setIsData(false);
      setLoading(true);
    } else if (data.length == 0) {
      setIsData(false);
      setLoading(true);
    } else {
      setIsData(true);
      setLoading(false);
    }
  });

  return (
    <>
      <div>
        <div className="title flex justify-between items-center mx-5 mt-5">
          <h2 className="font-roboto font-bold text-2xl text-slate-50">
            {title}
          </h2>
          <span className="text-sm text-slate-500 font-medium">View All</span>
        </div>
        {(loading && (
          <div className="overflow-y-auto mt-4">
            <div className="inline-flex overflow-y-scrall">
              <div className="ml-4 last:mr-4">
                <div className="bg-slate-50 w-36 h-44 rounded-lg px-3 mb-2">
                  <div className="flex justify-around py-6">
                    <div className="h-11 w-11 bg-slate-200"></div>
                    <div className="h-11 w-11 bg-slate-200"></div>
                  </div>
                  <div className="flex justify-between font-bold text-sm">
                    <div>
                      <div className="mb-3 truncate w-20 bg-slate-200 h-4"></div>
                      <div className="truncate w-20 bg-slate-200 h-4"></div>
                    </div>
                    <div>
                      <div className="mb-3 h-4 bg-slate-200 w-4"></div>
                      <div className=" h-4 bg-slate-200 w-4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-4 last:mr-4">
                <div className="bg-slate-50 w-36 h-44 rounded-lg px-3 mb-2">
                  <div className="flex justify-around py-6">
                    <div className="h-11 w-11 bg-slate-200"></div>
                    <div className="h-11 w-11 bg-slate-200"></div>
                  </div>
                  <div className="flex justify-between font-bold text-sm">
                    <div>
                      <div className="mb-3 truncate w-20 bg-slate-200 h-4"></div>
                      <div className="truncate w-20 bg-slate-200 h-4"></div>
                    </div>
                    <div>
                      <div className="mb-3 h-4 bg-slate-200 w-4"></div>
                      <div className=" h-4 bg-slate-200 w-4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-4 last:mr-4">
                <div className="bg-slate-50 w-36 h-44 rounded-lg px-3 mb-2">
                  <div className="flex justify-around py-6">
                    <div className="h-11 w-11 bg-slate-200"></div>
                    <div className="h-11 w-11 bg-slate-200"></div>
                  </div>
                  <div className="flex justify-between font-bold text-sm">
                    <div>
                      <div className="mb-3 truncate w-20 bg-slate-200 h-4"></div>
                      <div className="truncate w-20 bg-slate-200 h-4"></div>
                    </div>
                    <div>
                      <div className="mb-3 h-4 bg-slate-200 w-4"></div>
                      <div className=" h-4 bg-slate-200 w-4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-4 last:mr-4">
                <div className="bg-slate-50 w-36 h-44 rounded-lg px-3 mb-2">
                  <div className="flex justify-around py-6">
                    <div className="h-11 w-11 bg-slate-200"></div>
                    <div className="h-11 w-11 bg-slate-200"></div>
                  </div>
                  <div className="flex justify-between font-bold text-sm">
                    <div>
                      <div className="mb-3 truncate w-20 bg-slate-200 h-4"></div>
                      <div className="truncate w-20 bg-slate-200 h-4"></div>
                    </div>
                    <div>
                      <div className="mb-3 h-4 bg-slate-200 w-4"></div>
                      <div className=" h-4 bg-slate-200 w-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )) ||
          (isdata && (
            <div className="overflow-y-auto mt-4">
              <div className="inline-flex overflow-y-scrall">
                {data.map((item) => (
                  <Link
                    key={item.id}
                    to={"/match/" + item.id}
                    className="inline-block ml-4 last:mr-4"
                  >
                    <div className="bg-slate-50 w-36 h-44 rounded-lg px-3 mb-2">
                      <div className="flex justify-around py-6">
                        <img
                          src={
                            window.location.origin +
                            "/image/team/" +
                            item.team_1_logo
                          }
                          className="h-11 m-w-14 object-contain"
                        />
                        <img
                          src={
                            window.location.origin +
                            "/image/team/" +
                            item.team_2_logo
                          }
                          className="h-11 m-w-14 object-contain"
                        />
                      </div>
                      <div className="flex justify-between font-bold text-sm">
                        <div>
                          <div className="pb-3 truncate w-20">
                            {item.team_1_cap_name}
                          </div>
                          <div className="truncate w-20">
                            {item.team_2_cap_name}
                          </div>
                        </div>
                        <div>
                          <div className="pb-3">0</div>
                          <div>0</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default BoxDay;
