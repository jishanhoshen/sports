import React, { Component } from "react";
import BarDay from "../components/BarDay";
import BoxDay from "../components/BoxDay";
import Header from "../components/Header";
import RoundedDay from "../components/RoundedDay";

export default class HomeScreen extends Component {

  render() {

    return (
      <>
        <Header />
        <div className="bodyContent content-scrall snap-none">
          <RoundedDay />
          <BoxDay />
          <BarDay />
          <p className="p-4 text-slate-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            lobortis, magna non aliquam imperdiet, neque risus dapibus erat, in
            ultricies augue enim sit amet lacus. Cras sed ultricies velit. Sed
            nec risus ac dolor dictum vehicula. Nunc sit amet ante id dolor
            lobortis bibendum eget iaculis ligula. Morbi magna lectus, posuere
            et sapien at, placerat fermentum justo. Phasellus lectus lectus,
            imperdiet sollicitudin consequat ac, tempus et augue. Morbi egestas
            nulla leo, vel viverra libero consequat eget. Nulla ultricies purus
            vitae ex posuere, vitae aliquet augue porta. Curabitur pretium eget
            nunc ac pharetra. Nunc porta lectus enim, sed interdum nisl finibus
            eget. Morbi quis dolor condimentum, suscipit elit ac, vehicula
            ligula. Sed vel vehicula mauris, eget aliquet lorem. Phasellus
            lectus ex, semper et vulputate gravida, sagittis quis mauris.
            Aliquam erat volutpat. Etiam vulputate facilisis vehicula. Donec
            posuere ipsum eget risus fermentum commodo. Mauris a pharetra
            tellus. Quisque accumsan est non odio lacinia, in placerat diam
            tincidunt. Cras id finibus elit. Aliquam pulvinar hendrerit elit id
            viverra. Aliquam elit quam, mattis eu ex sit amet, sodales efficitur
            nisi. Nulla volutpat neque at massa volutpat tincidunt. Ut feugiat
            purus eget eros placerat, lacinia convallis nisl molestie.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Ut laoreet purus sed dignissim sodales.
            Donec at elit lacinia, tempor quam id, congue sapien. Mauris finibus
            venenatis justo, eu tincidunt ligula iaculis euismod. Aliquam erat
            volutpat. Integer ultricies, orci quis sollicitudin commodo, enim
            massa facilisis metus, a lacinia enim tortor ac leo. Nam sit amet
            sodales libero. Morbi dictum mauris sed ex fringilla, et gravida dui
            ullamcorper. Suspendisse potenti. Integer consequat ornare accumsan.
            Cras elementum, sapien in ultrices interdum, sapien ligula feugiat
            risus, id varius nunc turpis nec urna. Donec id orci ut arcu lacinia
            commodo. Phasellus sapien arcu, ultricies semper volutpat at, mollis
            vitae ligula. Ut ac ultricies erat. In luctus tempor nulla ut
            vestibulum. In congue ultrices nulla sollicitudin porttitor.
            Maecenas eu aliquam orci, sit amet semper felis. Quisque suscipit
            mollis venenatis. Donec mi libero, aliquet nec tempus nec, consequat
            et magna. Mauris ac purus eget massa mattis pellentesque sit amet et
            diam. Donec id viverra sem, vitae varius libero. Sed rutrum sed
            lorem at consequat. Sed non odio quis risus venenatis placerat vitae
            vel dolor. Sed rutrum tortor ut nunc varius dignissim. Nunc vitae
            lectus non leo tincidunt finibus vehicula in ligula. Mauris nisi
            mauris, sollicitudin et pharetra vel, commodo nec ex. Integer
            condimentum vulputate leo vitae rutrum. Donec sollicitudin urna
            ante, volutpat feugiat dui dignissim sed. Praesent gravida, odio
            eget tristique mattis, ex lorem gravida erat, eget volutpat nibh
            neque dictum nulla. Quisque eget libero quis urna laoreet interdum.
            Vivamus aliquam mi tortor, non porta nisi dapibus eget. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Proin erat neque, aliquet a felis eget, luctus vehicula
            massa. Nunc urna metus, tempor nec sapien et, varius euismod ante.
            Donec pharetra nunc ut euismod finibus. Sed elementum tincidunt urna
            quis dapibus.
          </p>
          <div className="bottomPadding pb-10"></div>
        </div>
      </>
    );
  }
}
