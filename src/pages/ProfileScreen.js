// import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faPlus,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { setUpCommingAllMatches } from "../redux/actions/MatcheActions";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProfileScreen = () => {
  return (
    <>
      <div className="relative h-1/3  overflow-hidden font-roboto ">
      <div className="absolute h-full w-full bg-gradient-to-r from-slate-800 via-transparent via-transparent  to-slate-800"></div>
        
        <div className="absolute text-center pl-5 pt-14">
          <div className="bg-slate-50 rounded-full h-9 w-9 flex justify-center items-center m-auto border-2 border-slate-300 border-solid">
            <img
              src={window.location.origin + "/icons/team-1.png"}
              className="p-1"
            />
          </div>
          <div className="text-xs text-slate-50">Barselona</div>
        </div>
        <div className="absolute right-5 top-14 flex justify-center items-center">
          <div className="absolute text-slate-50 font-medium">10</div>
          <img src={window.location.origin + "/icons/jersey.png"} />
        </div>
        <div className="absolute text-center bottom-5 right-5 text-base text-xs text-amber-500">
          <div className="absolute bg-slate-500 blur opacity-50 h-7 w-24 z-0"></div>
          <div className="relative z-10">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
            <FontAwesomeIcon icon={farStar} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-900 to-slate-0"></div>
        <img
          src={window.location.origin + "/image/profile.jpg"}
          // src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80"
          className="object-cover object-top h-full w-full"
        />
      </div>
      <div className="absolute top-0 z-10">
        <div className="absolute bottom-10 right-0 z-10 bg-slate-50 py-1 pr-4 pl-2 rounded-l-full shadow shadow-slate-700">
          <FontAwesomeIcon icon={faGears} />
        </div>
        <div className="overflow-y-scroll scroll-smooth snap-none profile-bodycontent">
          <div className="profile-bodyMarginTop relative flex flex-col">
            <div className="absolute -top-10 flex items-center px-2 py-1 text-xs font-bold ml-3 rounded bg-slate-50 ">
              <FontAwesomeIcon icon={faPlus} className="pr-2" />
              <div>Rate Me</div>
            </div>
            <div className="flex absolute w-full">
              <div className="w-1/3">
                <div className="bg-slate-50 mx-3 h-full rounded p-2 text-center shadow-md shadow-slate-400">
                  <div className="text-3xl font-bold pt-6 pb-3">10</div>
                  <div className="text-xs">Man of The Match</div>
                </div>
              </div>
              <div className="w-1/3">
                <div className="bg-slate-50 mx-3 h-full rounded p-2 text-center shadow-md shadow-slate-400">
                  <div className="text-3xl font-bold pt-6 pb-3">10</div>
                  <div className="text-xs">Best Player</div>
                </div>
              </div>
              <div className="w-1/3">
                <div className="bg-slate-50 mx-3 h-full rounded p-2 text-center shadow-md shadow-slate-400">
                  <div className="text-3xl font-bold pt-6 pb-3">10</div>
                  <div className="text-xs">Goal</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50  rounded mt-20 mx-2 mb-4 text-center font-bold text-2xl pt-12 pb-2.5 uppercase">
              jishan hoshen jibon
            </div>
            <div className="bg-slate-50 mx-5 p-4 mb-4 rounded">
              <div className="text-lg font-semibold pb-2">Personal</div>
              <div className="flex text-sm">
                <div className="w-1/3 font-medium">
                  <div className="pb-2">Age</div>
                  <div className="pb-2">Height</div>
                  <div className="pb-2">Position</div>
                  <div className="pb-2">Fav Team</div>
                </div>
                <div className="w-2/3">
                  <div className="pb-2">20</div>
                  <div className="pb-2">5.0"</div>
                  <div className="pb-2">Striker</div>
                  <div className="pb-2">Barselona</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 mx-5 p-4 mb-4 rounded">
              <div className="text-lg font-semibold pb-2">Contact</div>
              <div className="flex text-sm">
                <div className="w-1/3 font-medium">
                  <div className="pb-2">Phone</div>
                  <div className="pb-2">Email</div>
                </div>
                <div className="w-2/3">
                  <div className="pb-2">+880 1967-569642</div>
                  <div className="pb-2">jishanhoshenjibon@gmail.com</div>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-50 p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eu nibh sed turpis ullamcorper lacinia. Nam eu libero dignissim,
              bibendum velit ut, bibendum orci. Pellentesque et ipsum in mi
              luctus tristique. Vivamus non dui venenatis, consequat arcu
              faucibus, molestie urna. Sed accumsan maximus nisl, ut cursus
              arcu aliquam a. Phasellus tortor mi, facilisis nec eros ut,
              facilisis hendrerit ligula. Donec in congue sapien. Ut dictum
              tempus varius. Nullam turpis lorem, facilisis imperdiet orci
              vitae, fermentum vestibulum nisi. Nam nec quam id ante imperdiet
              cursus. Pellentesque nec ante nisl. Integer nisi purus,
              scelerisque sit amet dui a, ornare pulvinar justo. Aenean mollis
              tellus ut commodo pulvinar. Aenean ut lorem neque. Etiam orci
              ex, consequat a felis vitae, imperdiet blandit ipsum. Donec non
              viverra ex. Nunc quis mi nulla. Vestibulum molestie augue id
              velit gravida, id tristique leo vehicula. Cras sodales felis
              quam, eu porta magna dictum et. Quisque tincidunt, erat eu
              interdum auctor, orci nisi luctus dolor, a porta mauris felis
              vitae ipsum. Nullam consequat ex malesuada, pulvinar ex vel,
              convallis leo. Nulla facilisis ante sed nisl tristique, ac
              scelerisque ex rutrum. Pellentesque in porta nunc. Nullam ac
              finibus nulla. Praesent tincidunt felis a fermentum efficitur.
              Donec suscipit hendrerit nunc, nec viverra urna dignissim
              efficitur. Aenean porttitor fermentum pellentesque. Praesent
              laoreet quam vitae massa vulputate posuere. Nulla id sem non
              lectus finibus euismod. Donec laoreet luctus eros ut rhoncus. In
              pharetra sem nec vestibulum mollis. Nam nibh nisi, finibus eget
              malesuada viverra, maximus nec metus. Nullam sed erat ultrices,
              iaculis sem ut, pulvinar diam. In sit amet maximus metus,
              molestie rhoncus urna. Phasellus ac neque tincidunt, imperdiet
              mauris ac, malesuada nisi. Morbi lobortis sagittis dictum.
              Nullam ornare nisl libero, at semper nunc consectetur vel. Ut
              accumsan orci non magna sollicitudin, et tincidunt velit
              condimentum. Aenean maximus posuere libero id dignissim.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Praesent vitae felis ac erat ultrices egestas. Sed vestibulum
              tortor erat, a vestibulum velit sagittis facilisis. Fusce nec
              iaculis ante, non efficitur diam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Quisque eu nibh sed turpis
              ullamcorper lacinia. Nam eu libero dignissim, bibendum velit ut,
              bibendum orci. Pellentesque et ipsum in mi luctus tristique.
              Vivamus non dui venenatis, consequat arcu faucibus, molestie
              urna. Sed accumsan maximus nisl, ut cursus arcu aliquam a.
              Phasellus tortor mi, facilisis nec eros ut, facilisis hendrerit
              ligula. Donec in congue sapien. Ut dictum tempus varius. Nullam
              turpis lorem, facilisis imperdiet orci vitae, fermentum
              vestibulum nisi. Nam nec quam id ante imperdiet cursus.
              Pellentesque nec ante nisl. Integer nisi purus, scelerisque sit
              amet dui a, ornare pulvinar justo. Aenean mollis tellus ut
              commodo pulvinar. Aenean ut lorem neque. Etiam orci ex,
              consequat a felis vitae, imperdiet blandit ipsum. Donec non
              viverra ex. Nunc quis mi nulla. Vestibulum molestie augue id
              velit gravida, id tristique leo vehicula. Cras sodales felis
              quam, eu porta magna dictum et. Quisque tincidunt, erat eu
              interdum auctor, orci nisi luctus dolor, a porta mauris felis
              vitae ipsum. Nullam consequat ex malesuada, pulvinar ex vel,
              convallis leo. Nulla facilisis ante sed nisl tristique, ac
              scelerisque ex rutrum. Pellentesque in porta nunc. Nullam ac
              finibus nulla. Praesent tincidunt felis a fermentum efficitur.
              Donec suscipit hendrerit nunc, nec viverra urna dignissim
              efficitur. Aenean porttitor fermentum pellentesque. Praesent
              laoreet quam vitae massa vulputate posuere. Nulla id sem non
              lectus finibus euismod. Donec laoreet luctus eros ut rhoncus. In
              pharetra sem nec vestibulum mollis. Nam nibh nisi, finibus eget
              malesuada viverra, maximus nec metus. Nullam sed erat ultrices,
              iaculis sem ut, pulvinar diam. In sit amet maximus metus,
              molestie rhoncus urna. Phasellus ac neque tincidunt, imperdiet
              mauris ac, malesuada nisi. Morbi lobortis sagittis dictum.
              Nullam ornare nisl libero, at semper nunc consectetur vel. Ut
              accumsan orci non magna sollicitudin, et tincidunt velit
              condimentum. Aenean maximus posuere libero id dignissim.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Praesent vitae felis ac erat ultrices egestas. Sed vestibulum
              tortor erat, a vestibulum velit sagittis facilisis. Fusce nec
              iaculis ante, non efficitur diam.
            </p>
            <div className="bottomPadding pb-10"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProfileScreen;
