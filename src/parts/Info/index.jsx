import React, { Component } from "react";

import InfoItem from "../../components/InfoItem";
import Title from "../../components/CTitle";

import infos from "../../static/infos";

import "./index.scss";

import photo from "../../assets/image/photo.jpg"

export default class Info extends Component {
  render() {
    return (
      <section className="section info">
        <Title text="基本信息" />
        <div className="info-main">
          <div className="items">
            {infos.map((info) => (
              <InfoItem {...info} key={info.name} />
            ))}
          </div>
          <div className="photo-holder">
            <img
              className="photo"
              src={photo}
              style={{width:'100px'}}
            ></img>
          </div>
        </div>
      </section>
    );
  }
}
