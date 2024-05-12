import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import axios from 'axios';
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import {
  dashboardPanelChart,
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart,
} from "variables/charts.js";
import DemoNavbar from "components/Navbars/DemoNavbar";

function Teamview(props) {
  const [teams, seTeams] = useState([
    {
      heading: 'Team #12543',
      about: 'Create an E-commerce application with React Frontend and a Postgresql db along with authentication and notification system',
      popularity: 4,
      members: [{
        name: 'Ayush',
        about: 'Experience with multiple startups, building',
        skills: ['React.js', 'Next.js'],
      }, {
        name: 'Alok',
        about: 'Experienced full stak developer',
        skills: ['React.js', 'Next.js', 'Node.js'],
      }, {
        name: 'Sahil',
        about: 'Experienced full stak developer',
        skills: ['React.js', 'Next.js', 'Node.js'],
      }],
      skills: ['ReactJS', 'NodeJS', 'Postgresql'],
    },
    {
      heading: 'Team #12993',
      about: 'wow content',
      popularity: 3,
      completion_expectation: 3,
      members: [{
        name: 'Manan',
        about: 'Experience with multiple startups, building',
        skills: ['React.js', 'Next.js'],
      }, {
        name: 'Alok',
        about: 'Experienced full stak developer',
        skills: ['React.js', 'Next.js', 'Node.js'],
      }],
      skills: ['Html', 'CSS', 'React.js', 'Next.js', 'Node.js', 'Postgresql'],
    }
  ]);
  // const getProjects = async function () {
  //   return axios.get('')
  //     .then((res) => {
  //       setProjects(res.data);
  //     }).catch((err) => {
  //       console.log(`Err: ${err}`);
  //     });
  // }

  useEffect(() => {
    // getProjects();
  }, []);

  return (
    <div className="listing-page">
      <div className="navbar navbar-dark navbar1">
        <DemoNavbar {...props} />
      </div>

      <div className="container listing-content">
        <h4>Teamview</h4>
        {teams.map((freelancer) => {
          console.log(freelancer);
          return (
            <div style={{ boxSizing: 'border-box' }}>
              <Card style={{ padding: '20px' }}>
                <Row>
                  <Col>
                    <h6>{freelancer.heading}</h6>
                    <p>Rating: {[...Array(freelancer.popularity)].map(() => <FaStar />)}</p>
                  </Col>
                </Row>
                <Row>
                  {freelancer.members.map((mem, ind) => (
                    <Col xs={12 / (freelancer.members.length)} md={12 / (freelancer.members.length)}
                      style={{ borderRight: ind < freelancer.members.length - 1 ? '1px solid' : '0px', margin: 0 }}>
                      <Row>
                        <Col xs={4} md={4}>
                          <div style={{ padding: "12px" }}>
                            <div style={{ borderRadius: '50%', border: '2px solid black', margin: '0 12px', minHeight: '80px', width: '80px' }}></div>
                          </div>
                        </Col>
                        <Col xs={8} md={8}>
                          <CardHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
                            {/* <h5 className="card-category">{freelancer.heading}</h5> */}
                            <CardTitle tag="h2">{mem.name}</CardTitle>
                          </CardHeader>
                          <CardBody >
                            <p><b>About: </b>{mem.about}</p>
                            <p>Skills: <b>{mem.skills.join(', ')}</b> </p>
                          </CardBody>
                        </Col>
                      </Row>
                    </Col>
                  ))}

                  {/* <Row>
                    <div>
                      Team Rating: 5
                    </div>
                  </Row> */}
                </Row>
                <Row>
                  <Col>
                    <Button children="Bid Now" disabled={freelancer.disabled} />
                  </Col>

                </Row>
              </Card>
            </div>
          );
        })
        }
      </div>
    </div>
  );
}

export default Teamview;
