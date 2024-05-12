/*!

=========================================================
* Now UI Dashboard React - v1.5.2
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2023 Flanc (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Flanc

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function User() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
  <Form>
    <Row>
      <Col className="pr-1" md="6">
        <FormGroup>
          <label>First Name</label>
          <Input
            defaultValue="Mike"
            placeholder="First Name"
            type="text"
          />
        </FormGroup>
      </Col>
      <Col className="pl-1" md="6">
        <FormGroup>
          <label>Last Name</label>
          <Input
            defaultValue="Andrew"
            placeholder="Last Name"
            type="text"
          />
        </FormGroup>
      </Col>
    </Row>
    {/* <Row>
      <Col md="12">
        <FormGroup>
          <label>Email Address</label>
          <Input
            defaultValue="mike.andrew@example.com"
            placeholder="Email"
            type="email"
          />
        </FormGroup>
      </Col>
    </Row> */}
    {/* <Row>
      <Col md="12">
        <FormGroup>
          <label>Address</label>
          <Input
            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
            placeholder="Address"
            type="text"
          />
        </FormGroup>
      </Col>
    </Row> */}
    {/* <Row>
      <Col className="pr-1" md="6">
        <FormGroup>
          <label>City</label>
          <Input
            defaultValue="Bangalore"
            placeholder="City"
            type="text"
          />
        </FormGroup>
      </Col>
      <Col className="pl-1" md="6">
        <FormGroup>
          <label>Country</label>
          <Input
            defaultValue="India"
            placeholder="Country"
            type="text"
          />
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col className="pr-1" md="12">
        <FormGroup>
          <label>Postal Code</label>
          <Input
            defaultValue="560001"
            placeholder="ZIP Code"
            type="number"
          />
        </FormGroup>
      </Col>
    </Row> */}
    <Row>
      <Col md="12">
        <FormGroup>
          <label>About Me</label>
          <Input
            defaultValue="Experienced freelance developer with a focus on web development technologies. Passionate about creating efficient and scalable solutions."
            placeholder="Tell us about yourself..."
            type="textarea"
            rows="4"
          />
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col md="12">
        <FormGroup>
          <label>Skills</label>
          <Input
            defaultValue="JavaScript, React, Node.js, MongoDB, HTML/CSS, Responsive Design"
            placeholder="Enter your skills (comma-separated)"
            type="text"
          />
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col md="12">
        <FormGroup>
          <label>Portfolio</label>
          <Input
            defaultValue="https://github.com/mike-andrew"
            placeholder="Link to your portfolio"
            type="text"
          />
        </FormGroup>
      </Col>
    </Row>
    {/* <Row>
      <Col md="12">
        <FormGroup>
          <label>Additional Information</label>
          <Input
            defaultValue="Available for part-time projects. Open to collaborative opportunities."
            placeholder="Any additional information you'd like to share..."
            type="textarea"
            rows="4"
          />
        </FormGroup>
      </Col>
    </Row> */}
  </Form>
</CardBody>

            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="image">
                <img alt="..." src={require("assets/img/bg5.jpg").default} />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/mike.jpg").default}
                    />
                    <h5 className="title">Mike Andrew</h5>
                  </a>
                  <p className="description">michael24</p>
                </div>
                <p className="description text-center">
                  "Lamborghini Mercy <br />
                  Your chick she so thirsty <br />
                  I'm in that two seat Lambo"
                </p>
              </CardBody>
              <hr />
              <div className="button-container">
                <Button
                  className="btn-neutral btn-icon btn-round"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-facebook-f" />
                </Button>
                <Button
                  className="btn-neutral btn-icon btn-round"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-neutral btn-icon btn-round"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-google-plus-g" />
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default User;
