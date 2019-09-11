import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Want to learn more about me?
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <span className="widget">
                <a href='mailto:idil.ahmedd@gmail.com'>
                <h4>Click <span style={{color:'rgb(196, 89, 7)'}}>here </span>to reach out!
                  {/* {resumeData.email} */}
                </h4>
                  </a>
              </span>
            </aside>
          </div>
        </section>
        );
  }
}