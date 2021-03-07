import React, { Component } from "react";
import FlexContainer from "../lib/controls/containers/flexbox/FlexContainer";
import FlexRow from "../lib/controls/containers/flexbox/FlexRow";
import FlexCol from "../lib/controls/containers/flexbox/FlexCol";
import Button from "../lib/controls/forms/controls/Button";
import ParkEarnTitleBar from "./ParkEarnTitleBar";
import { Formik, Field, Form } from "formik";
import Select from "../lib/controls/forms/controls/options/Select";
import Card from "../lib/controls/containers/card/Card";
import CardBody from "../lib/controls/containers/card/CardBody";
import CardHeader from "../lib/controls/containers/card/CardHeader";
import CardFooter from "../lib/controls/containers/card/CardFooter";
import CardImage from "../lib/controls/containers/card/CardImage";
import CardSubtitle from "../lib/controls/containers/card/CardSubtitle";
import CardTitle from "../lib/controls/containers/card/CardTitle";
import garagePic1 from "./garage1.jpg";
import garagePic2 from "./garage3.jpg";
import garagePic3 from "./garage5.jpg";

import ParkEarnBooking from "./ParkEarnBooking";

import "./ParkEarnMap.css";
class ParkEarnMap extends Component {
  constructor({}) {
    super({});
  }
  state = {
    clicked: false,
    parkingList: [
      {
        address: "5 Murphy Street, Kew VIC 3101",
        title: "Driveway",
        rate: "$3.5/hr",
        picture: garagePic1,
      },
      {
        address: "2 Murphy Street, Kew VIC 3101",
        title: "Clean and spacious driveway",
        rate: "$4/hr",
        picture: garagePic2,
      },
      {
        address: "99 Stevenson Street, Kew VIC 3101",
        title: "Park in garage",
        rate: "$3.7/hr",
        picture: garagePic3,
      },
    ],
  };

  render() {
    return (
      <div>
        {this.state.clicked ? (
          <>
            <ParkEarnBooking />{" "}
            <Button
              onClick={() => {
                this.setState({ clicked: false });
              }}
            >
              Back
            </Button>
          </>
        ) : (
          <div className="container">
            <ParkEarnTitleBar items={["Rent", "Login", "Sign Up"]} />
            <FlexContainer>
              <FlexRow singleLine={true}>
                <FlexCol className="halves">
                  <Formik
                    initialValues={{
                      address: "enter address",
                      dateTime: "enter dateTime",
                    }}
                    onSubmit={async (values) => {
                      await new Promise((resolve) => setTimeout(resolve, 500));
                      alert(JSON.stringify(values, null, 2));
                    }}
                  >
                    <Form>
                      <Field name="address" type="text" />
                      <Field
                        name="dateTime"
                        type="text"
                        style={{ marginLeft: "10px" }}
                      />
                      <button type="search" style={{ marginLeft: "10px" }}>
                        Search
                      </button>
                    </Form>
                  </Formik>

                  <p style={{ marginTop: "15px" }}>
                    <Button
                      onClick={() => {
                        this.setState({ clicked: true });
                      }}
                      style={{
                        height: "180px",
                        width: "100%",
                        marginLeft: "-10px",
                      }}
                      borderStyle={Button.BORDER_STYLE.LINK}
                    >
                      <Card>
                        <FlexRow>
                          <FlexCol>
                            <CardImage>
                              <img
                                src={garagePic1}
                                style={{
                                  height: "150px",
                                  width: "100%",
                                }}
                                resizeMode={"contain"}
                              />
                            </CardImage>
                          </FlexCol>
                          <FlexCol>
                            <CardHeader>
                              <CardTitle>123 High Street</CardTitle>
                            </CardHeader>
                            <CardBody>12:00pm to 6:00pm</CardBody>
                          </FlexCol>
                        </FlexRow>
                      </Card>
                    </Button>
                    <Button
                      style={{
                        height: "180px",
                        width: "100%",
                        marginTop: "8px",
                        marginLeft: "-10px",
                      }}
                      borderStyle={Button.BORDER_STYLE.LINK}
                    >
                      <Card>
                        <FlexRow>
                          <FlexCol>
                            <CardImage>
                              <img
                                src={garagePic2}
                                style={{
                                  height: "150px",
                                  width: "100%",
                                }}
                                resizeMode={"contain"}
                              />
                            </CardImage>
                          </FlexCol>
                          <FlexCol>
                            <CardHeader>
                              <CardTitle>97 Springvale Road</CardTitle>
                            </CardHeader>
                            <CardBody>11:00pm to 6:00pm</CardBody>
                          </FlexCol>
                        </FlexRow>
                      </Card>
                    </Button>
                  </p>
                </FlexCol>
                <FlexCol className="halves" defaultSize={3}>
                  map on the right-hand side
                </FlexCol>
              </FlexRow>
            </FlexContainer>
          </div>
        )}
      </div>
    );
  }
}

export default ParkEarnMap;
