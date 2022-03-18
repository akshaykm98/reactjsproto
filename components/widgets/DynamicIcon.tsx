import React, { CSSProperties } from "react";
import * as ai from "react-icons/ai";
import * as bi from "react-icons/bi";
import * as fa from "react-icons/fa";
import * as md from "react-icons/md";
import * as bs from "react-icons/bs";
import * as cg from "react-icons/cg";
import * as di from "react-icons/di";
import * as fc from "react-icons/fc";
import * as gi from "react-icons/gi";
import * as hi from "react-icons/hi";
import * as gr from "react-icons/gr";
import * as go from "react-icons/go";
import * as im from "react-icons/im";
import * as io from "react-icons/io";
import * as io5 from "react-icons/io5";
import * as ri from "react-icons/ri";
import * as si from "react-icons/si";
import * as ti from "react-icons/ti";
import * as vsc from "react-icons/vsc";
import * as wi from "react-icons/wi";

type Props = {
  name: any;
  style?: CSSProperties;
  size?: number;
};

export const DynamicIcon: React.FC<Props> = (props) => {
  let IconComponent;
  switch (props.name.toString().substring(0, 2).toLowerCase()) {
    case "ai":
      const ainame: keyof typeof ai = props.name as unknown as keyof typeof ai;
      IconComponent = ai[ainame];
      if (!IconComponent) return <bi.BiMoney />;
      return <IconComponent style={props.style} size={props.size} />;
    case "bi":
      const biname: keyof typeof bi = props.name as unknown as keyof typeof bi;
      IconComponent = bi[biname];
      if (!IconComponent) return <bi.BiMoney />;
      return <IconComponent style={props.style} size={props.size} />;
    case "fa":
      const faname: keyof typeof fa = props.name as unknown as keyof typeof fa;
      IconComponent = fa[faname];
      if (!IconComponent) return <bi.BiMoney />;
      return <IconComponent style={props.style} size={props.size} />;
    case "md":
      const mdname: keyof typeof md = props.name as unknown as keyof typeof md;
      IconComponent = md[mdname];
      if (!IconComponent) return <bi.BiMoney />;
      return <IconComponent style={props.style} size={props.size} />;
    case "bs":
      const bsname: keyof typeof bs = props.name as unknown as keyof typeof bs;
      IconComponent = bs[bsname];
      if (!IconComponent) return <bi.BiMoney />;
      return <IconComponent style={props.style} size={props.size} />;
    case "cg":
      const cgname: keyof typeof cg = props.name as unknown as keyof typeof cg;
      IconComponent = cg[cgname];
      if (!IconComponent) return <bi.BiMoney />;
      return <IconComponent style={props.style} size={props.size} />;
    case "io":
      const ioname: keyof typeof io = props.name as unknown as keyof typeof io;
      IconComponent = io[ioname];
      if (!IconComponent) return <bi.BiMoney />;
      return <IconComponent style={props.style} size={props.size} />;
    case "io5":
      const io5name: keyof typeof io5 =
        props.name as unknown as keyof typeof io5;
      IconComponent = io5[io5name];
      if (!IconComponent) return <bi.BiMoney />;
      return <IconComponent style={props.style} size={props.size} />;
    case "fc":
      const fcname: keyof typeof fc = props.name as unknown as keyof typeof fc;
      IconComponent = fc[fcname];
      if (!IconComponent) return <bi.BiMoney />;
      return <IconComponent style={props.style} size={props.size} />;
    case "di":
      const diname: keyof typeof di = props.name as unknown as keyof typeof di;
      IconComponent = di[diname];
      if (!IconComponent) return <bi.BiMoney />;
      return <IconComponent style={props.style} size={props.size} />;
    case "gi":
      const giname: keyof typeof gi = props.name as unknown as keyof typeof gi;
      IconComponent = gi[giname];
      if (!IconComponent) return <bi.BiMoney />;
      return <IconComponent style={props.style} size={props.size} />;
    case "hi":
      const hiname: keyof typeof hi = props.name as unknown as keyof typeof hi;
      IconComponent = hi[hiname];
      if (!IconComponent) return <bi.BiMoney />;
      return <IconComponent style={props.style} size={props.size} />;
    case "gr":
      const grname: keyof typeof gr = props.name as unknown as keyof typeof gr;
      IconComponent = gr[grname];
      if (!IconComponent) return <bi.BiMoney />;
      return <IconComponent style={props.style} size={props.size} />;
    case "go":
      const goname: keyof typeof go = props.name as unknown as keyof typeof go;
      IconComponent = go[goname];
      if (!IconComponent) return <bi.BiMoney />;
      return <IconComponent style={props.style} size={props.size} />;
    case "ri":
      const riname: keyof typeof ri = props.name as unknown as keyof typeof ri;
      IconComponent = ri[riname];
      if (!IconComponent) return <bi.BiMoney />;
      return <IconComponent style={props.style} size={props.size} />;
    case "im":
      const imname: keyof typeof im = props.name as unknown as keyof typeof im;
      IconComponent = im[imname];
      if (!IconComponent) return <bi.BiMoney />;
      return <IconComponent style={props.style} size={props.size} />;
    case "wi":
      const winame: keyof typeof wi = props.name as unknown as keyof typeof wi;
      IconComponent = wi[winame];
      if (!IconComponent) return <bi.BiMoney />;
      return <IconComponent style={props.style} size={props.size} />;
    case "vsc":
      const vscname: keyof typeof vsc =
        props.name as unknown as keyof typeof vsc;
      IconComponent = vsc[vscname];
      if (!IconComponent) return <bi.BiMoney />;
      return <IconComponent style={props.style} size={props.size} />;
    case "ti":
      const tiname: keyof typeof ti = props.name as unknown as keyof typeof ti;
      IconComponent = ti[tiname];
      if (!IconComponent) return <bi.BiMoney />;
      return <IconComponent style={props.style} size={props.size} />;
    case "si":
      const siname: keyof typeof si = props.name as unknown as keyof typeof si;
      IconComponent = si[siname];
      if (!IconComponent) return <bi.BiMoney />;
      return <IconComponent style={props.style} size={props.size} />;
    default:
      return <bi.BiMoney />;
  }
};
