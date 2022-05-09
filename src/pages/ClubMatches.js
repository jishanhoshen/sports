import React, { Component } from "react";
import Header from "../components/Header";
import ClubNav from "../components/ClubNav";
import BoxDay from "../components/BoxDay";
import BarDay from "../components/BarDay";
import Clubs from "../components/Clubs";

export default class ClubMatches extends Component {
  render() {
    return (
      <>
        <Header Clubname="B THIRTEEN" />
        <ClubNav />
        <div className="bodyContent content-scrall snap-none">
          <div className="pt-4">
            <Clubs title="Browse Clubs"/>
          </div>
          <div className="pt-4">
            <BoxDay title="Best Matches" />
          </div>
          <div className="pt-4">
            <BarDay title="Resent Matches" />
          </div>
          <p className="text-xs text-slate-50 p-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            nibh sed turpis ullamcorper lacinia. Nam eu libero dignissim,
            bibendum velit ut, bibendum orci. Pellentesque et ipsum in mi luctus
            tristique. Vivamus non dui venenatis, consequat arcu faucibus,
            molestie urna. Sed accumsan maximus nisl, ut cursus arcu aliquam a.
            Phasellus tortor mi, facilisis nec eros ut, facilisis hendrerit
            ligula. Donec in congue sapien. Ut dictum tempus varius. Nullam
            turpis lorem, facilisis imperdiet orci vitae, fermentum vestibulum
            nisi. Nam nec quam id ante imperdiet cursus. Pellentesque nec ante
            nisl. Integer nisi purus, scelerisque sit amet dui a, ornare
            pulvinar justo. Aenean mollis tellus ut commodo pulvinar. Aenean ut
            lorem neque. Etiam orci ex, consequat a felis vitae, imperdiet
            blandit ipsum. Donec non viverra ex. Nunc quis mi nulla. Vestibulum
            molestie augue id velit gravida, id tristique leo vehicula. Cras
            sodales felis quam, eu porta magna dictum et. Quisque tincidunt,
            erat eu interdum auctor, orci nisi luctus dolor, a porta mauris
            felis vitae ipsum. Nullam consequat ex malesuada, pulvinar ex vel,
            convallis leo. Nulla facilisis ante sed nisl tristique, ac
            scelerisque ex rutrum. Pellentesque in porta nunc. Nullam ac finibus
            nulla. Praesent tincidunt felis a fermentum efficitur. Donec
            suscipit hendrerit nunc, nec viverra urna dignissim efficitur.
            Aenean porttitor fermentum pellentesque. Praesent laoreet quam vitae
            massa vulputate posuere. Nulla id sem non lectus finibus euismod.
            Donec laoreet luctus eros ut rhoncus. In pharetra sem nec vestibulum
            mollis. Nam nibh nisi, finibus eget malesuada viverra, maximus nec
            metus. Nullam sed erat ultrices, iaculis sem ut, pulvinar diam. In
            sit amet maximus metus, molestie rhoncus urna. Phasellus ac neque
            tincidunt, imperdiet mauris ac, malesuada nisi. Morbi lobortis
            sagittis dictum. Nullam ornare nisl libero, at semper nunc
            consectetur vel. Ut accumsan orci non magna sollicitudin, et
            tincidunt velit condimentum. Aenean maximus posuere libero id
            dignissim. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Praesent vitae felis ac erat ultrices egestas. Sed
            vestibulum tortor erat, a vestibulum velit sagittis facilisis. Fusce
            nec iaculis ante, non efficitur diam. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Quisque eu nibh sed turpis ullamcorper
            lacinia. Nam eu libero dignissim, bibendum velit ut, bibendum orci.
            Pellentesque et ipsum in mi luctus tristique. Vivamus non dui
            venenatis, consequat arcu faucibus, molestie urna. Sed accumsan
            maximus nisl, ut cursus arcu aliquam a. Phasellus tortor mi,
            facilisis nec eros ut, facilisis hendrerit ligula. Donec in congue
            sapien. Ut dictum tempus varius. Nullam turpis lorem, facilisis
            imperdiet orci vitae, fermentum vestibulum nisi. Nam nec quam id
            ante imperdiet cursus. Pellentesque nec ante nisl. Integer nisi
            purus, scelerisque sit amet dui a, ornare pulvinar justo. Aenean
            mollis tellus ut commodo pulvinar. Aenean ut lorem neque. Etiam orci
            ex, consequat a felis vitae, imperdiet blandit ipsum. Donec non
            viverra ex. Nunc quis mi nulla. Vestibulum molestie augue id velit
            gravida, id tristique leo vehicula. Cras sodales felis quam, eu
            porta magna dictum et. Quisque tincidunt, erat eu interdum auctor,
            orci nisi luctus dolor, a porta mauris felis vitae ipsum. Nullam
            consequat ex malesuada, pulvinar ex vel, convallis leo. Nulla
            facilisis ante sed nisl tristique, ac scelerisque ex rutrum.
            Pellentesque in porta nunc. Nullam ac finibus nulla. Praesent
            tincidunt felis a fermentum efficitur. Donec suscipit hendrerit
            nunc, nec viverra urna dignissim efficitur. Aenean porttitor
            fermentum pellentesque. Praesent laoreet quam vitae massa vulputate
            posuere. Nulla id sem non lectus finibus euismod. Donec laoreet
            luctus eros ut rhoncus. In pharetra sem nec vestibulum mollis. Nam
            nibh nisi, finibus eget malesuada viverra, maximus nec metus. Nullam
            sed erat ultrices, iaculis sem ut, pulvinar diam. In sit amet
            maximus metus, molestie rhoncus urna. Phasellus ac neque tincidunt,
            imperdiet mauris ac, malesuada nisi. Morbi lobortis sagittis dictum.
            Nullam ornare nisl libero, at semper nunc consectetur vel. Ut
            accumsan orci non magna sollicitudin, et tincidunt velit
            condimentum. Aenean maximus posuere libero id dignissim. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Praesent vitae
            felis ac erat ultrices egestas. Sed vestibulum tortor erat, a
            vestibulum velit sagittis facilisis. Fusce nec iaculis ante, non
            efficitur diam.
          </p>
          <div className="bottomPadding pb-10"></div>
        </div>
      </>
    );
  }
}
