import React, { Component } from "react";
import PropTypes from "prop-types";

import BarItem from "../SkillBarItem";

import "./index.scss";

import xcx from "../../assets/image/小程序.svg"
import Node from "../../assets/image/Node.svg"
import React_ from "../../assets/image/React.svg"
import TypeScript from "../../assets/image/Typescript.svg"
import Vue from "../../assets/image/Vue.svg"
import Uniapp from "../../assets/image/uniapp.png"

const imgUrl = {
  小程序:xcx,
  Node,
  React:React_,
  Vue,
  TypeScript,
  uniapp:
  Uniapp
}


export default class SkillItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
  };

  render() {
    const { name, level } = this.props;
    console.log(name,imgUrl[name])
    return (
      <div className="skill-item">
        <div className="bar">
          {new Array(level).fill(0).map((_, ind) => (
            <BarItem key={ind} />
          ))}
        </div>
        <div className="skill-info">
          <img
            className="icon"
            src={imgUrl[name]}
            alt={name}
          />
          <span className="name">{name}</span>
        </div>
      </div>
    );
  }
}
