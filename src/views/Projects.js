
import React, { useEffect, useState } from "react";
import {FaBookmark, FaStar} from "react-icons/fa6";
import axios from 'axios';
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import { FaRegBookmark } from "react-icons/fa";

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

function Projects(props) {
  const [projects, setProjects] = useState([
    { 
      heading: 'Hey!',
      description: 'Create an E-commerce application with React Frontend and a Postgresql db along with authentication and notification system',
      status: 'active',
      author: 'Sahil bvp',
      popularity: 4,
      skills: ['JS', 'NodeJS', 'Postgresql'],
    },
    { 
      heading: 'wow!',
      description: 'wow content',
      status: 'open on 3rd June',
      author: 'Manan Anand',
      disabled: true,
      popularity: 3,
      bookmarked: true,
      skills: ['Unstated'],
    }
  ]);
  const getProjects = async function () {
    return axios.get('')
      .then((res) => {
        setProjects(res.data);
      }).catch((err) => {
        console.log(`Err: ${err}`);
      });
  }

  useEffect(() => {
    // getProjects();
  }, []);

  return (
    <div className="listing-page">
      <div className="navbar navbar-dark navbar1">
        <DemoNavbar {...props} />
      </div>
      
      <div className="container listing-content">
      <h4>Projects</h4>
        {projects.map((project) => {
          console.log(project);
          return (
            <div className="content">
              <Row>
                <Col xs={12} md={12}>
                  <Card className="card-chart">
                    <CardHeader style={{ display:'flex', justifyContent: 'space-between'}}>
                      {/* <h5 className="card-category">{project.heading}</h5> */}
                      <CardTitle tag="h2">{project.heading}</CardTitle>
                      <h6><span className="card-category">status: </span>
                        {project.status}</h6>
                    </CardHeader>
                    <CardBody style={{display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between'}}>
                      <p>Requested by: <b>{project.author}</b> </p>
                      <p><b>Description: </b>{project.description}</p>
                      
                      <p><b>Popularity:</b> {[...Array(project.popularity)].map(()=> <FaStar/>)}</p>
                      <Button children="Bid Now" disabled={project.disabled}/>
                    </CardBody>
                    <CardFooter>
                      <p style={{fontSize: "12px"}}>Skills: {project.skills.map((s) => <span>{s} </span>)}</p>
                      <div className="stats" style={{position: 'relative'}}>
                        <i className="now-ui-icons arrows-1_refresh-69" /> Just
                        Updated
                        <span style={{float: 'right'}}>{project.bookmarked?(<FaBookmark />):(<FaRegBookmark />)}</span>
                      </div>
                    </CardFooter>
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

export default Projects;
