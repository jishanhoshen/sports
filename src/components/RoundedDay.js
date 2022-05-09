import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RoundedDay = (props) => {
  const title = props.title;
  const [isdata, setIsData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [returndata, setReturndata] = useState(true);

  const reduxState = useSelector((state) => state.MatchReducer);
  const data = reduxState.CommingMatchs;
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
        <div className="daybox bg-slate-50 rounded-tl-lg rounded-bl-lg py-4 mt-5 ml-5">
          <div className="title flex justify-between items-center px-4">
            <h2 className="font-roboto font-bold text-2xl">{title}</h2>
            <span className="text-sm text-slate-500 font-medium">View All</span>
          </div>
          {(loading && (
            <div className="overflow-y-auto">
              <div className=" inline-flex overflow-y-scrall">
                <div className="slide h-16 w-36 bg-slate-50 shadow-md rounded-full ml-4 my-2 flex items-center justify-around">
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                </div>
                <div className="slide h-16 w-36 bg-slate-50 shadow-md rounded-full ml-4 my-2 flex items-center justify-around">
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                </div>
                <div className="slide h-16 w-36 bg-slate-50 shadow-md rounded-full ml-4 my-2 flex items-center justify-around">
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                </div>
                <div className="slide h-16 w-36 bg-slate-50 shadow-md rounded-full ml-4 my-2 flex items-center justify-around">
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                </div>
                <div className="slide h-16 w-36 bg-slate-50 shadow-md rounded-full ml-4 my-2 flex items-center justify-around">
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                </div>
                <div className="slide h-16 w-36 bg-slate-50 shadow-md rounded-full ml-4 my-2 flex items-center justify-around">
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                </div>
                <div className="slide h-16 w-36 bg-slate-50 shadow-md rounded-full ml-4 my-2 flex items-center justify-around">
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                </div>
              </div>
            </div>
          )) ||
            (isdata && (
              <div className="overflow-y-auto">
                <div className=" inline-flex overflow-y-scrall cursor-grab">
                  {data.map((item) => (
                    <Link
                      to={"/day/" + item.id}
                      key={item.id}
                      className="slide h-16 w-36 bg-slate-50 shadow-md shadow-slate-300 rounded-full mx-3 my-2 flex items-center justify-around"
                    >
                      <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden">
                        <img
                          src={
                            window.location.origin +
                            "/image/team/" +
                            item.team_1_logo
                          }
                          className="object-cover h-full w-full"
                        />
                      </div>
                      <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden">
                        <img
                          src={
                            window.location.origin +
                            "/image/team/" +
                            item.team_2_logo
                          }
                          className="object-cover h-full w-full"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </>
    )
  );

  // return (
  //   <>
  //     <div className="daybox bg-slate-50 rounded-tl-lg rounded-bl-lg py-4 mt-5 ml-5">
  //       <div className="title flex justify-between items-center px-4">
  //         <h2 className="font-roboto font-bold text-2xl">{title}</h2>
  //         <span className="text-sm text-slate-500 font-medium">View All</span>
  //       </div>
  //       {(nodata && (
  //         <div className="h-16 flex items-center justify-center font-semibold text-xl">
  //           No Match Found
  //         </div>
  //       )) ||
  //         (error && (
  //           <div className="px-4 py-2 text-red-400">{`There is a problem fetching the match data - ${error}`}</div>
  //         )) ||
  //         (loading && (
  //           <>
  //             <div className="overflow-y-auto">
  //               <div className=" inline-flex overflow-y-scrall">
  //                 <div className="slide h-16 w-36 bg-slate-50 shadow-md rounded-full ml-4 my-2 flex items-center justify-around">
  //                   <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
  //                   <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
  //                 </div>
  //                 <div className="slide h-16 w-36 bg-slate-50 shadow-md rounded-full ml-4 my-2 flex items-center justify-around">
  //                   <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
  //                   <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
  //                 </div>
  //                 <div className="slide h-16 w-36 bg-slate-50 shadow-md rounded-full ml-4 my-2 flex items-center justify-around">
  //                   <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
  //                   <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
  //                 </div>
  //                 <div className="slide h-16 w-36 bg-slate-50 shadow-md rounded-full ml-4 my-2 flex items-center justify-around">
  //                   <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
  //                   <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
  //                 </div>
  //                 <div className="slide h-16 w-36 bg-slate-50 shadow-md rounded-full ml-4 my-2 flex items-center justify-around">
  //                   <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
  //                   <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
  //                 </div>
  //                 <div className="slide h-16 w-36 bg-slate-50 shadow-md rounded-full ml-4 my-2 flex items-center justify-around">
  //                   <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
  //                   <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
  //                 </div>
  //                 <div className="slide h-16 w-36 bg-slate-50 shadow-md rounded-full ml-4 my-2 flex items-center justify-around">
  //                   <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
  //                   <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
  //                 </div>
  //               </div>
  //             </div>
  //           </>
  //         )) ||
  //         (UpCommingAllMatches && (
  //           <div className="overflow-y-auto">
  //             <div className=" inline-flex overflow-y-scrall cursor-grab">
  //               {UpCommingAllMatches.map((item) => (
  //                 <Link
  //                   to={"/day/" + item.id}
  //                   key={item.id}
  //                   className="slide h-16 w-36 bg-slate-50 shadow-md shadow-slate-300 rounded-full mx-3 my-2 flex items-center justify-around"
  //                 >
  //                   <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden">
  //                     <img
  //                       src={
  //                         window.location.origin +
  //                         "/image/team/" +
  //                         item.team_1_logo
  //                       }
  //                       className="object-cover h-full w-full"
  //                     />
  //                   </div>
  //                   <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden">
  //                     <img
  //                       src={
  //                         window.location.origin +
  //                         "/image/team/" +
  //                         item.team_2_logo
  //                       }
  //                       className="object-cover h-full w-full"
  //                     />
  //                   </div>
  //                 </Link>
  //               ))}
  //             </div>
  //           </div>
  //         ))}
  //     </div>
  //   </>
  // );
};
export default RoundedDay;
