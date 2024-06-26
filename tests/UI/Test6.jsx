//***** Written by: Angelo Dato ******/
//***** Difficulty: Entry Level *****/
//***** Est. Time: 45 minutes ******/

// ----------------------------------------------------------------------------------//
//******************* Problem Title: Problem Title: TailwindCSS & MaterialUI ********************/

//======================= Pre-Requisites ==========================/
//1. Figma account

//======================= Problem Description ==========================/
//For this test, you will be translating a mockup from Figma to html, with MUIv5 and TailwindCSS.

//******************* Solution Requirements ********************/
//1.) Use TailwindCSS.
//2.) Use MUIv5.
//2.) Translate the Figma mockup as best you can.
//3.) Layout must be responsive, mobile first.
//4.) Limit your work to this file.

//******************** Tips ********************
//1.) You may export icons and other assets from the provided Figma mockup.
//2.) You may export icons and other assets from the provided Figma mockup.
//3.) You can use either function declaration or function expression.

// ----------------------------------------------------------------------------------//
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles

export default function Test6Screen() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        style={{
          maxHeight: "calc(100vh - 20px)",
          overflowY: "auto",
          width: "100%",
        }}
      >
        <Grid
          container
          spacing={3}
          className="w-full max-w-4xl bg-white p-4 shadow-lg rounded-lg"
        >
          <Grid
            item
            xs={6}
            style={{ padding: "5%", alignContent: "center" }}
            className=""
          >
            <Typography
              className="text-gray-700"
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontSize: "40px",
                fontWeight: 400,
                lineHeight: "48px",
                textAlign: "left",
                color: "#334155",
              }}
            >
              Drive the nation to a more <strong>seamless</strong>,{" "}
              <strong>convenient</strong>, <strong>mobile</strong>, and{" "}
              <strong>efficient</strong> <strong>logistics</strong>
            </Typography>
            <div className="flex space-x-2 mt-4">
              <Button
                variant="outlined"
                color="primary"
                className="border-blue-500 text-blue-500 hover:bg-blue-100"
                style={{
                  width: "267px",
                  height: "75px",
                  padding: "24px 32px",
                  borderRadius: "6px",
                  opacity: 1,
                  marginTop: "7%",
                  marginRight: "3%",
                  fontSize: "18px",
                  color: "#fff",
                  background: "#182C75",
                  fontFamily: "'Archivo', sans-serif",
                  textTransform: "none",
                  alignContent: "center",
                  padding: "2%",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-20%)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
                />
                <span
                  class="material-symbols-outlined"
                  style={{
                    fontSize: "36px",
                    paddingRight: "5%",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  download
                </span>
                Get The App Now
              </Button>

              <Button
                variant="outlined"
                color="primary"
                className="border-blue-500 text-blue-500 hover:bg-blue-100"
                style={{
                  width: "267px",
                  height: "75px",
                  padding: "24px 32px",
                  borderRadius: "6px",
                  opacity: 1,
                  marginTop: "7%",
                  marginRight: "5%",
                  fontSize: "18px",
                  color: "#182C75",
                  fontFamily: "'Archivo', sans-serif",
                  borderColor: "#182C75",
                  textTransform: "none",
                  transition: "background-color 0.3s ease-in-out",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#182C75";
                  e.target.style.color = "#fff";
                  e.target.querySelector(
                    ".material-symbols-outlined"
                  ).style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "";
                  e.target.style.color = "#182C75";
                  e.target.querySelector(
                    ".material-symbols-outlined"
                  ).style.color = "#182C75";
                }}
              >
                <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
                />
                <span
                  class="material-symbols-outlined"
                  style={{
                    fontSize: "36px",
                    paddingRight: "3%",
                    color: "#182C75",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  login
                </span>
                Admin Login
              </Button>
            </div>
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              padding: "5%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#EAEDFB",
                width: "100%",
                borderRadius: "24px",
              }}
            >
              <img
                src="../../public/images/yay.png"
                style={{
                  width: "110%",
                  paddingTop: "5%",
                  paddingBottom: "5%",
                  paddingLeft: "20%",
                  paddingRight: "20%",
                }}
                alt=""
              />
            </div>
          </Grid>
        </Grid>

        <div
          style={{ paddingTop: "10%", paddingRight: "10%", paddingLeft: "10%" }}
        >
          <Grid
            container
            spacing={3}
            className="w-full max-w-4xl bg-white p-4 shadow-lg rounded-lg"
          >
            <Grid
              item
              xs={4}
              style={{
                padding: "5%",
                paddingBottom: "0%",
                alignContent: "center",
              }}
              // className=""
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#CCD5F5",
                  // width: "100%",
                  borderRadius: "24px",
                  height: "83%",
                  width: "160%",
                }}
              >
                <img
                  src="../../public/images/pickup.png"
                  style={{
                    // paddingTop: "5%",
                    paddingBottom: "10%",
                    marginLeft: "20%",
                    // paddingRight: "20%",
                  }}
                  alt=""
                />
              </div>
            </Grid>
            <Grid
              item
              xs={8}
              style={{
                padding: "5%",
                paddingBottom: "0%",
                alignContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#F1F5F9",
                  width: "100%",
                  borderRadius: "24px",
                  height: "83%",
                  width: "100%",
                  marginLeft: "10%",
                }}
              >
                <Grid
                  container
                  spacing={3}
                  className="w-full max-w-4xl bg-white p-4 shadow-lg rounded-lg"
                  style={{ alignItems: "center" }}
                >
                  {/* First row (top row) */}
                  <Grid
                    item
                    xs={12}
                    style={{
                      padding: "5%",
                      paddingBottom: "0%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center", // Center horizontally
                      textAlign: "center", // Center text
                    }}
                    className=""
                  >
                    <Typography
                      className="text-gray-700"
                      style={{
                        fontFamily: "'Archivo', sans-serif",
                        fontSize: "64px",
                        fontWeight: 400,
                        lineHeight: "48px",
                        color: "#334155",
                      }}
                    >
                      <strong>Pick Up and Delivery</strong> <br />
                    </Typography>
                  </Grid>

                  {/* Second row (bottom row) */}
                  <Grid
                    item
                    xs={12}
                    style={{
                      paddingRight: "5%",
                      paddingLeft: "5%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center", // Center horizontally
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "6%",
                      marginBottom: "5%",
                    }}
                  >
                    <Typography
                      className="text-gray-700"
                      style={{
                        fontFamily: "'Archivo', sans-serif",
                        fontSize: "24px",
                        fontWeight: 400,
                        lineHeight: "32px",
                        textAlign: "left",
                        color: "#64748B",
                      }}
                    >
                      {" "}
                      Taking good control of the delivery process in order to
                      make sure that the parcel is delivered to you on time.
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            className="w-full max-w-4xl bg-white p-4 shadow-lg rounded-lg"
            style={{ padding: "0%" }}
          >
            <Grid
              item
              xs={6}
              style={{
                padding: "5%",
                paddingTop: "5%",
                alignContent: "center",
              }}
              // className=""
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#F1F5F9",
                  // width: "100%",
                  borderRadius: "24px",
                  height: "110%",
                  width: "115%",
                }}
              >
                <img
                  src="../../public/images/cashless.png"
                  style={{ width: "90%", marginLeft: "10%" }}
                  alt=""
                />
                <Grid style={{ padding: "5%" }}>
                  <Grid item xs={6}>
                    {" "}
                    <Typography
                      className="text-gray-700"
                      style={{
                        fontFamily: "'Archivo', sans-serif",
                        fontSize: "64px",
                        fontWeight: 400,
                        lineHeight: "67.2px",
                        color: "#334155",
                      }}
                    >
                      <strong>Cashless Payments</strong>
                    </Typography>
                  </Grid>
                  <Grid style={{ padding: "5%", paddingLeft: "0%" }}>
                    {" "}
                    <Typography
                      className="text-gray-700"
                      style={{
                        fontFamily: "'Archivo', sans-serif",
                        fontSize: "24px",
                        fontWeight: 400,
                        lineHeight: "28.8px",
                        color: "#64748B",
                      }}
                    >
                      Hassle-free experience by using a cashless payment through
                      Gcash
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid
              item
              xs={6}
              style={{
                padding: "5%",
                paddingTop: "5%",
                alignContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background:
                    "linear-gradient(178.49deg, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 0.5) 90%, #304D23 104.2%), rgba(218, 240, 209, 0.5)",
                  width: "100%",
                  borderRadius: "24px",
                  height: "110%",
                  width: "120%",
                  marginLeft: "-5%",
                }}
              >
                <Grid
                  container
                  spacing={3}
                  className="w-full max-w-4xl bg-white p-4 shadow-lg rounded-lg"
                  style={{ alignItems: "center" }}
                >
                  {/* First row (top row) */}
                  <Grid
                    item
                    xs={12}
                    style={{
                      // padding: "5%",
                      paddingBottom: "0%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center", // Center horizontally
                      textAlign: "center", // Center text
                    }}
                    className=""
                  >
                    <Typography
                      className="text-gray-700"
                      style={{
                        fontFamily: "'Archivo', sans-serif",
                        fontSize: "64px",
                        fontWeight: 400,
                        lineHeight: "48px",
                        color: "#334155",
                      }}
                    >
                      <strong>Transportation</strong> <br />
                    </Typography>
                  </Grid>

                  {/* Second row (bottom row) */}
                  <Grid
                    item
                    xs={12}
                    style={{
                      paddingRight: "5%",
                      paddingLeft: "5%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center", // Center horizontally
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "6%",
                      marginBottom: "5%",
                    }}
                  >
                    <Typography
                      className="text-gray-700"
                      style={{
                        fontFamily: "'Archivo', sans-serif",
                        fontSize: "24px",
                        fontWeight: 400,
                        lineHeight: "32px",
                        textAlign: "left",
                        color: "#64748B",
                      }}
                    >
                      Provide a convenient and secure local transportation
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      alignItems: "center",
                      justifyContent: "center", // Center horizontally
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="../../public/images/transpo.png"
                      style={{ width: "70%", position: "relative" }}
                      alt=""
                    />
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
