import React, { useEffect, useState } from "react";
import {FaStar} from "react-icons/fa6";
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

function Freelancers(props) {
  const [freelancers, setFreelancers] = useState([
    { 
      heading: 'Alok Kumar',
      about: 'Create an E-commerce application with React Frontend and a Postgresql db along with authentication and notification system',
      popularity: 4,
      skills: ['JS', 'NodeJS', 'Postgresql'],
    },
    { 
      heading: 'Sahil bvp',
      about: 'wow content',
      popularity: 3,
      skills: ['html', 'css', 'react.js', 'next.js'],
    }
  ]);
  const getProjects = async function () {
    return axios.get('http://localhost:3000/profiles')
      .then((res) => {
        setFreelancers(res.data);
      }).catch((err) => {
        console.log(`Err: ${err}`);
      });
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="listing-page">
      <div className="navbar navbar-dark navbar1">
        <DemoNavbar {...props} />
      </div>
      
      <div className="container listing-content">
      <h4>Freelancers</h4>
        {freelancers.map((freelancer) => {
          console.log(freelancer);
          return (
            <div className="content">
              <Row>
                
                <Col xs={12} md={12}>
                  <Card className="card-chart">
                    <Row>
                      <Col xs={12} md={4}>
                        <div style={{ padding: "40px"}}>
                          <div style={{borderRadius: '50%', border: '2px solid black', margin: '0 20px', height: '240px', width: '240px', overflow: 'clip'}}>
                          <img src='https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                          </div>
                        </div>
                        
                      </Col>
                      <Col xs={12} md={8}>
                        <CardHeader style={{ display:'flex', justifyContent: 'space-between'}}>
                          {/* <h5 className="card-category">{freelancer.heading}</h5> */}
                          <CardTitle tag="h2">{freelancer.heading}</CardTitle>
                        </CardHeader>
                        <CardBody >
                            <p><b>About: </b>{freelancer.about}</p>
                            <p>Skills: <b>{freelancer.skills.join(', ')}</b> </p>
                            <p><b>Popularity:</b> {[...Array(freelancer.popularity)].map(()=> <FaStar/>)}</p>
                        </CardBody>
                      </Col>
                    </Row>
                    
                  </Card>
                </Col>
              </Row>
            </div>
          );
        })
        }
      </div>
    </div>
  );
}

export default Freelancers;
