import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Shield from "../components/Shield";

export default function SingleMatch() {
  const location = useLocation();
  console.log(location);
  // const history = useNavigate();
  // history("/home");

  const team1Count = [22, 15, 14, 8, 4, 2, 6, 9, 5, 1 ];
  const team2Count = [30, 16, 10, 7, 11, 17, 20, 24, 18, 23];
  const team1 = team1Count.map((team1Count) => (
    <div className="bg-slate-50 rounded-r mr-2 py-4 mb-4">
      <div className="relative w-20 h-20 m-auto">
        <div className="absolute -left-7 h-full flex flex-col justify-evenly ">
          <img src={window.location.origin + "/icons/captain.svg"} />
          <img src={window.location.origin + "/icons/manofthematch.svg"} />
          <img src={window.location.origin + "/icons/goal.svg"} />
        </div>
        <Shield
          value={team1Count}
          style="absolute top-5 right-2 text-xs text-slate-50"
          size={22}
          fill="#000000"
          stroke="#ffffff"
        />
        <img
          src={window.location.origin + "/image/profile-short.jpg"}
          className="w-20 h-20 object-cover object-top rounded-full border-2 border-slate-500 border-solid"
        />
        <div className="absolute -right-7 top-12 text-xl font-semibold">01</div>
      </div>
    </div>
  ));
  const team2 = team2Count.map((team2Count) => (
    <div className="bg-slate-50 rounded-l ml-2 py-4 mb-4">
      <div className="relative w-20 h-20 m-auto">
        <div className="absolute -right-7 h-full flex flex-col justify-evenly ">
          <img src={window.location.origin + "/icons/captain.svg"} />
          <img src={window.location.origin + "/icons/manofthematch.svg"} />
          <img src={window.location.origin + "/icons/goal.svg"} />
        </div>
        <Shield
          value={team2Count}
          style="absolute top-5 left-2 text-xs text-slate-50"
          size={22}
          fill="#000000"
          stroke="#ffffff"
        />
        <img
          src={window.location.origin + "/image/profile-short.jpg"}
          className="w-20 h-20 object-cover object-top rounded-full border-2 border-slate-500 border-solid"
        />
        <div className="absolute -left-7 top-12 text-xl font-semibold">01</div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="inline-block w-full">
        <div className="bg-slate-50 rounded m-4 mb-2 flex justify-evenly items-center py-5">
          <div className="flex flex-col items-center">
            <img
              src={window.location.origin + "/icons/team-1.png"}
              className="h-10 w-10 object-contain"
            />
            <div className="text-xs font-bold pt-1.5">Barcelona</div>
          </div>
          <div className="text-center font-bold">
            <div className="text-xl">3 - 1</div>
            <div className="text-sm pt-2">21/12/21</div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={window.location.origin + "/icons/team-2.png"}
              className="h-10 w-10 object-contain"
            />
            <div className="text-xs font-bold pt-1.5">Real Madrid</div>
          </div>
        </div>
        <div className="bodyContent content-scrall snap-none">
          <div className="mx-4 my-2 ">
            <div className="w-1/2 inline-block">
              <div className="bg-slate-50 rounded mr-2 py-4">
                <div className="relative w-20 h-20 m-auto">
                  <div className="absolute -right-7 border-slate-900 border-2 border-solid rounded-full w-6 h-6 flex justify-center items-center font-roboto font-bold text-xl">
                    C
                  </div>
                  <div className="absolute -left-7 h-full flex flex-col justify-evenly ">
                    <img src={window.location.origin + "/icons/captain.svg"} />
                    <img
                      src={window.location.origin + "/icons/manofthematch.svg"}
                    />
                    <img src={window.location.origin + "/icons/goal.svg"} />
                  </div>
                  <Shield
                    value={10}
                    style="absolute top-5 left-2 text-xs text-slate-50"
                    size={22}
                    fill="#000000"
                    stroke="#ffffff"
                  />
                  <img
                    src={window.location.origin + "/image/profile-short.jpg"}
                    className="w-20 h-20 object-cover object-top rounded-full border-2 border-slate-500 border-solid"
                  />
                  <div className="absolute -right-7 top-12 text-xl font-semibold">
                    01
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 inline-block">
              <div className="bg-slate-50 rounded mr-2 py-4">
                <div className="relative w-20 h-20 m-auto">
                  <div className="absolute -left-7 border-slate-900 border-2 border-solid rounded-full w-6 h-6 flex justify-center items-center font-roboto font-bold text-xl">
                    C
                  </div>
                  <div className="absolute -right-7 h-full flex flex-col justify-evenly ">
                    <img src={window.location.origin + "/icons/captain.svg"} />
                    <img
                      src={window.location.origin + "/icons/manofthematch.svg"}
                    />
                    <img src={window.location.origin + "/icons/goal.svg"} />
                  </div>
                  <Shield
                    value={10}
                    style="absolute top-5 right-2 text-xs text-slate-50"
                    size={22}
                    fill="#000000"
                    stroke="#ffffff"
                  />
                  <img
                    src={window.location.origin + "/image/profile-short.jpg"}
                    className="w-20 h-20 object-cover object-top rounded-full border-2 border-slate-500 border-solid"
                  />
                  <div className="absolute -left-7 top-12 text-xl font-semibold">
                    01
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="w-1/2 inline-block">{team1}</div>
              <div className="w-1/2 inline-block">{team2}</div>
            </div>
          </div>
        <div className="bottomPadding pb-6"></div>
        </div>
      </div>
    </>
  );
}
