import React, {useState} from "react";
import "./style.css";
import map from "../../assets/images/map.png";
import Card from "../Card/Card";
import IconClose from "../../assets/icons/IconClose";

const data = [
  {
    name: "Product Manager",
    company: "Internshala",
    rating: 5,
    location: "Gurugram, Haryana",
    salary: "₹ 25,0000/month",
    duration: "6 months",
    date_post: "Posted 2 days ago",
  },
  {
    name: "Graphic Designer",
    company: "Google",
    rating: 5,
    location: "Gurugram, Haryana",
    salary: "₹ 25,0000/month",
    duration: "6 months",
    date_post: "Posted 2 days ago",
  },
  {
    name: "UI Designer",
    company: "Lollypop Designs Private Ltd",
    rating: 4,
    location: "Hauz khas, New delhi",
    salary: "₹ 25,0000/month",
    duration: "6 months",
    date_post: "Posted 15 days ago",
  },
  {
    name: "Visual Designer",
    company: "Alcon",
    rating: 3,
    location: "Gurugram, Haryana",
    salary: "₹ 25,0000/month",
    duration: "6 months",
    date_post: "Posted 2 days ago",
  },
];
const skills_data = ['Adobe photoshop', 'Adobe illustrator', 'HTML', 'Adobe After Effects', 'Figma']

const Content = (props) => {
  const [details, setDetails] = useState(undefined);
  const renderDetailCard = () => {
    return (
      <div className="jd-wrapper animate__fadeInLeft">
            <button type="button" className="close-jd" onClick={() => setDetails(undefined)}>
              <IconClose color="#FFFFFF" />
            </button>
            <button type="button" className="close-jd" onClick={() => setDetails(undefined)}>
              <IconClose color="#FFFFFF" />
            </button>
            <div className="jd-body">
              <Card data={[data[details]]} />
              <div className="description">
                <h4>About the company</h4>
                <p>
                  Google, LLC is an American multinational technology company
                  that specializes in Internet-related services and products,
                  which include online advertising technologies, a search
                  engine, cloud computing, software, and hardware. It is
                  considered one of the Big Five technology companies in the
                  U.S. information technology industry, alongside Amazon,
                  Facebook, Apple, and Microsoft.
                </p>
                <h4>About the internship</h4>
                <ul>
                  <li>
                    • As a User Interface Designer, you will be required to work
                    closely with Product Managers, Developers, Consultants &
                    other key stakeh olders.
                  </li>
                  <li>
                    • Your primary task as hand would be to design mockups &
                    create prototypes basis the signed-off wireframes &
                    userflows.
                  </li>
                </ul>
                <h4>Skills required</h4>
                <ul className="skills-list">
                  {skills_data.map((skill, idx) => <li key={idx}>{skill}</li>)}
                </ul>
                <h4>Who can apply</h4>
                <p>Only those candidates can apply who:</p>
                <ul>
                  <li>
                    1. are available for the work from home job/internship
                  </li>
                  <li>
                    2. can start the work from home job/internship between 4th
                    Nov'20 and 9th Dec'20
                  </li>
                  <li>
                    3. are available for duration of 3 months 4. have relevant
                    skills and interests
                  </li>
                </ul>
              </div>
            </div>
            <div className="jd-footer">
              <button type="button" className="btn btn-primary">
                Apply now
              </button>
            </div>
          </div>
    )
  }
  return (
    <section className="wrapper-content">
      <div className="container">
        <aside className="sidebar">
          <Card data={data} viewDetailHandler = {setDetails} />
        </aside>
        <div className="panel">
          <div className="map">
            <img src={map} alt="" />
            <div className="stepper">
              <button type="button">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8V24"
                    stroke="#008BDC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 16H24"
                    stroke="#008BDC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button type="button">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 16H24"
                    stroke="#008BDC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="range-citrcle">
              <svg width="435" height="435" viewBox="0 0 435 435" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="217.817" cy="217.499" r="216.932" fill="#0052FF" fill-opacity="0.06"/>
                <circle cx="217.818" cy="217.5" r="59.9146" fill="#0052FF" fill-opacity="0.06"/>
                <circle cx="217.818" cy="217.5" r="58.9146" stroke="#0052FF" stroke-opacity="0.06" stroke-width="2"/>
                <circle cx="217.817" cy="217.5" r="13.3395" stroke="white" stroke-width="5"/>
                <circle cx="217.815" cy="217.5" r="10.3301" fill="#3785FE"/>
              </svg>
            </div>
          </div>
          {details >= 0 ? renderDetailCard() : ""}
          </div>
      </div>
    </section>
  );
};

export default Content;
