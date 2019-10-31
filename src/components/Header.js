import React, { Component } from 'react';
import Particles from 'react-particles-js';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;

    var moving = < Particles className="particles"
      params={{
        "particles": {
          "number": {
            "value": 50
          },
          "size": {
            "value": 3,
            "resize": true
          }
        },
        "interactivity": {
          "detect_on": "window",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onresize": {
            "density_auto": true,
            "density_area": 400, 
            }
        }
      }
      }} />
      
      
    return (
      <React.Fragment>
        <div>
          {moving}

          <header id="home">
            <nav id="nav-wrap">
              <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
              {/* <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a> */}
              <ul id="nav" className="nav">
                <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#resume">Resume</a></li>
                <li><a className="smoothscroll" href="#portfolio">Work</a></li>
                <li><a className="smoothscroll" href="#contact">Contact</a></li>
              </ul>
            </nav>

            <div className="row banner">
              <div className="banner-text">
                <h1 className="responsive-headline">I am <span style={{ color: 'rgb(196, 89, 7)' }}>{resumeData.name}</span>.</h1>
                <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>I am a {resumeData.role}.{resumeData.roleDescription}
                </h3>
                <hr />
                <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item => {
                      return (
                        <li key={item.name}>
                          <a href={item.url} rel="noopener noreferrer" target="_blank"><i className={item.className}></i>
                          <br />
                          <span>{item.name}</span>
                          </a>
                        </li>
                      )
                    }
                    )
                  }
                </ul>
              </div>
            </div>

            <p className="scrolldown">
              <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

          </header>
        </div>
      </React.Fragment>
    );
  }
}