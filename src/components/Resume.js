import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    if (this.props.resumeData) {
      var skills = this.props.resumeData.skills.map(function (skills) {
        var skillsImage = 'images/' + skills.skillimg;
        return <div className="columns portfolio-item" key={skills.name}><em>{skills.name}<img width={100} height={100} alt={skills.name} src={skillsImage} /></em></div>
      })
    }
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                      <p className="info">
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row skills">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
          <div className="skill-row">
            <div className="twelve columns collapsed">
              <div className="skills">
                {skills}
              </div>
            </div>
          </div>
          </div>
    </section>
    );
  }
}