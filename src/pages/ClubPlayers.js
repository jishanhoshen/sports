import React from "react";
import Header from "../components/Header";
import ClubNav from "../components/ClubNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import Shield from "../components/Shield";

const ClubPlayers = () => {
  const top = [22, 15, 14, 8, 4, 2, 6, 9, 5, 1, 3, 19];
  const all = [
    30, 16, 10, 7, 11, 17, 20, 24, 18, 23, 27, 13, 21, 29, 25, 26, 12, 28, 31,
  ];
  const top13 = top.map((top) => (
    <div key={top} className="relative w-1/3 inline-block text-center">
      <div className="relative w-20 h-20  m-auto">
        <Shield
          value={top}
          style="absolute top-6 right-2 text-xs"
          size={20}
          fill="#C4C4C4"
        />
        <img
          // src={window.location.origin + "/image/profile.jpg"}
          src={"https://100k-faces.glitch.me/random-image?id=" + top}
          className="w-20 h-20 object-cover object-top rounded-full mt-4 mb-3  border-2 border-slate-500 border-solid"
        />
      </div>
    </div>
  ));
  const allPlayersWithOutTop13 = all.map((all) => (
    <div key={all} className="relative w-1/3 inline-block text-center">
      <div className="relative w-20 h-20  m-auto">
        <Shield
          value={all}
          style="absolute top-6 right-2 text-xs"
          size={20}
          fill="#C4C4C4"
        />
        <img
          src={"https://100k-faces.glitch.me/random-image?id=" + all}
          className="w-20 h-20 object-cover object-top rounded-full mt-4 mb-3 border-2 border-slate-800 border-solid"
        />
      </div>
    </div>
  ));
  return (
    <>
      <Header Clubname="B THIRTEEN" />
      <ClubNav />
      <div className="bodyContent content-scrall snap-none p-7">
        <div>
          <div className="bg-slate-50 rounded-xl py-4 px-2 flex h-36">
            <div className="w-1/4 flex items-center flex-col">
              <div className="relative">
                <Shield
                  value="1"
                  style="absolute top-6 right-2 text-xs"
                  size={20}
                  fill="#C4C4C4"
                />
                <img
                  src={"https://100k-faces.glitch.me/random-image"}
                  className="w-16 h-16 object-cover object-top rounded-full mt-4 mb-3"
                />
              </div>
              <div className="text-center text-xs">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
                <FontAwesomeIcon icon={farStar} />
              </div>
            </div>
            <div className="w-3/4 pl-4">
              <div className="text-base font-medium py-1 pl-3">
                Jishan Hoshen Jibon
              </div>
              <div className="flex">
                <div className="w-1/3 text-center">
                  <div className="pb-2">
                    <Shield value="1" style="relative" fill="#C4C4C4" />
                  </div>
                  <div className="text-xs scale-75 mt-2">Man of The Match</div>
                </div>
                <div className="w-1/3 text-center">
                  <div className="pb-2">
                    <Shield value="1" style="relative" fill="#C4C4C4" />
                  </div>
                  <div className="text-xs scale-75 mt-2">Best Player</div>
                </div>
                <div className="w-1/3 text-center">
                  <div className="pb-2">
                    <Shield value="1" style="relative" fill="#C4C4C4" />
                  </div>
                  <div className="text-xs scale-75 mt-2">Goals</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            {top13}
            <div className="py-4"></div>
            {allPlayersWithOutTop13}
          </div>
        </div>
        <p className="text-xs text-slate-50 py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
          nibh sed turpis ullamcorper lacinia. Nam eu libero dignissim, bibendum
          velit ut, bibendum orci. Pellentesque et ipsum in mi luctus tristique.
          Vivamus non dui venenatis, consequat arcu faucibus, molestie urna. Sed
          accumsan maximus nisl, ut cursus arcu aliquam a. Phasellus tortor mi,
          facilisis nec eros ut, facilisis hendrerit ligula. Donec in congue
          sapien. Ut dictum tempus varius. Nullam turpis lorem, facilisis
          imperdiet orci vitae, fermentum vestibulum nisi. Nam nec quam id ante
          imperdiet cursus. Pellentesque nec ante nisl. Integer nisi purus,
          scelerisque sit amet dui a, ornare pulvinar justo. Aenean mollis
          tellus ut commodo pulvinar. Aenean ut lorem neque. Etiam orci ex,
          consequat a felis vitae, imperdiet blandit ipsum. Donec non viverra
          ex. Nunc quis mi nulla. Vestibulum molestie augue id velit gravida, id
          tristique leo vehicula. Cras sodales felis quam, eu porta magna dictum
          et. Quisque tincidunt, erat eu interdum auctor, orci nisi luctus
          dolor, a porta mauris felis vitae ipsum. Nullam consequat ex
          malesuada, pulvinar ex vel, convallis leo. Nulla facilisis ante sed
          nisl tristique, ac scelerisque ex rutrum. Pellentesque in porta nunc.
          Nullam ac finibus nulla. Praesent tincidunt felis a fermentum
          efficitur. Donec suscipit hendrerit nunc, nec viverra urna dignissim
          efficitur. Aenean porttitor fermentum pellentesque. Praesent laoreet
          quam vitae massa vulputate posuere. Nulla id sem non lectus finibus
          euismod. Donec laoreet luctus eros ut rhoncus. In pharetra sem nec
          vestibulum mollis. Nam nibh nisi, finibus eget malesuada viverra,
          maximus nec metus. Nullam sed erat ultrices, iaculis sem ut, pulvinar
          diam. In sit amet maximus metus, molestie rhoncus urna. Phasellus ac
          neque tincidunt, imperdiet mauris ac, malesuada nisi. Morbi lobortis
          sagittis dictum. Nullam ornare nisl libero, at semper nunc consectetur
          vel. Ut accumsan orci non magna sollicitudin, et tincidunt velit
          condimentum. Aenean maximus posuere libero id dignissim. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Praesent vitae felis
          ac erat ultrices egestas. Sed vestibulum tortor erat, a vestibulum
          velit sagittis facilisis. Fusce nec iaculis ante, non efficitur diam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
          nibh sed turpis ullamcorper lacinia. Nam eu libero dignissim, bibendum
          velit ut, bibendum orci. Pellentesque et ipsum in mi luctus tristique.
          Vivamus non dui venenatis, consequat arcu faucibus, molestie urna. Sed
          accumsan maximus nisl, ut cursus arcu aliquam a. Phasellus tortor mi,
          facilisis nec eros ut, facilisis hendrerit ligula. Donec in congue
          sapien. Ut dictum tempus varius. Nullam turpis lorem, facilisis
          imperdiet orci vitae, fermentum vestibulum nisi. Nam nec quam id ante
          imperdiet cursus. Pellentesque nec ante nisl. Integer nisi purus,
          scelerisque sit amet dui a, ornare pulvinar justo. Aenean mollis
          tellus ut commodo pulvinar. Aenean ut lorem neque. Etiam orci ex,
          consequat a felis vitae, imperdiet blandit ipsum. Donec non viverra
          ex. Nunc quis mi nulla. Vestibulum molestie augue id velit gravida, id
          tristique leo vehicula. Cras sodales felis quam, eu porta magna dictum
          et. Quisque tincidunt, erat eu interdum auctor, orci nisi luctus
          dolor, a porta mauris felis vitae ipsum. Nullam consequat ex
          malesuada, pulvinar ex vel, convallis leo. Nulla facilisis ante sed
          nisl tristique, ac scelerisque ex rutrum. Pellentesque in porta nunc.
          Nullam ac finibus nulla. Praesent tincidunt felis a fermentum
          efficitur. Donec suscipit hendrerit nunc, nec viverra urna dignissim
          efficitur. Aenean porttitor fermentum pellentesque. Praesent laoreet
          quam vitae massa vulputate posuere. Nulla id sem non lectus finibus
          euismod. Donec laoreet luctus eros ut rhoncus. In pharetra sem nec
          vestibulum mollis. Nam nibh nisi, finibus eget malesuada viverra,
          maximus nec metus. Nullam sed erat ultrices, iaculis sem ut, pulvinar
          diam. In sit amet maximus metus, molestie rhoncus urna. Phasellus ac
          neque tincidunt, imperdiet mauris ac, malesuada nisi. Morbi lobortis
          sagittis dictum. Nullam ornare nisl libero, at semper nunc consectetur
          vel. Ut accumsan orci non magna sollicitudin, et tincidunt velit
          condimentum. Aenean maximus posuere libero id dignissim. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Praesent vitae felis
          ac erat ultrices egestas. Sed vestibulum tortor erat, a vestibulum
          velit sagittis facilisis. Fusce nec iaculis ante, non efficitur diam.
        </p>

        <div className="bottomPadding pb-10"></div>
      </div>
    </>
  );
};
export default ClubPlayers;
