import React, { Component } from "react";

import Title from "../../components/CTitle";

export default class Info extends Component {
  render() {
    return (
      <section className="section summary">
        <Title text="实习经历" />
        <div className="summary-main">
          <p><strong>2023.4 - 2023.8</strong></p>
          <p><strong>美团外卖用户研发组</strong></p>
        </div>
      </section>
    );
  }
}
