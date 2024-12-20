import React from "react";
import Header from "./headers";
import { ReactComponent as Head3 } from "./assets/flange_head-3.svg";
import { ReactComponent as Head3L } from "./assets/flange_head-3L.svg";
import { ReactComponent as Head4 } from "./assets/flange_head-4.svg";
import { ReactComponent as Head4L } from "./assets/flange_head-4L.svg";
import { ReactComponent as Head5 } from "./assets/flange_head-5.svg";
import { ReactComponent as Head5L } from "./assets/flange_head-5L.svg";
import { ReactComponent as Head6 } from "./assets/flange_head-6.svg";
import { ReactComponent as Head6L } from "./assets/flange_head-6L.svg";
import { ReactComponent as Head8 } from "./assets/flange_head-8.svg";
import { ReactComponent as Head8L } from "./assets/flange_head-8L.svg";
import { ReactComponent as El33 } from "./assets/3in-3-element.svg";
import { ReactComponent as El36 } from "./assets/3in-6-element.svg";
import { ReactComponent as El46 } from "./assets/4in-6-element.svg";
import { ReactComponent as El49 } from "./assets/4in-9-element.svg";
import { ReactComponent as El56 } from "./assets/5in-6-element.svg";
import { ReactComponent as El59 } from "./assets/5in-9-element.svg";
import { ReactComponent as El612 } from "./assets/6in-12-element.svg";
import { ReactComponent as El615 } from "./assets/6in-15-element.svg";
import { ReactComponent as El821 } from "./assets/8in-21-24-27-element.svg";
import { ReactComponent as El33H } from "./assets/3in-3-elementH.svg";
import { ReactComponent as El36H } from "./assets/3in-6-elementH.svg";
import { ReactComponent as El46H } from "./assets/4in-6-elementH.svg";
import { ReactComponent as El49H } from "./assets/4in-9-elementH.svg";
import { ReactComponent as El56H } from "./assets/5in-6-elementH.svg";
import { ReactComponent as El59H } from "./assets/5in-9-elementH.svg";
import { ReactComponent as El612H } from "./assets/6in-12-elementH.svg";
import { ReactComponent as El615H } from "./assets/6in-15-elementh.svg";
import { ReactComponent as El821H } from "./assets/8in-21-24-27-elementH.svg";
import { ReactComponent as Titlebox } from "./assets/TITLE.svg";
import { ReactComponent as LOGO } from "./assets/LOGO.svg";

interface drawingProps {
  serialNum: string;
  title: string;
  flangeSize: number;
  lengthElement: number;
  foldLength: number;
  elementNum: number;
  processTemp: string;
  hlSensor: string;
  typeThermostat: string;
  thermoLength: number;
  material: string;
  voltage: string;
  wattage: string;
}

const Drawings: React.FC<drawingProps> = ({
  serialNum,
  title,
  flangeSize,
  lengthElement,
  // foldLength,
  elementNum,
  processTemp,
  hlSensor,
  typeThermostat,
  thermoLength,
  material,
  voltage,
  wattage,
}) => {
  let scaleFactor = 1;

  if (lengthElement > 22) {
    scaleFactor = 500 / (lengthElement * 16 + flangeSize * 16);
  }

  return (
    <div className="w-[1000px] h-[772.73px] flex items-center justify-center bg-white border-2 border-slate-400 rounded-lg">
      <Header
        serialNum={serialNum}
        title={title}
        material={material}
        voltage={voltage}
        wattage={wattage}
        thermostat={typeThermostat}
      />
      <div className="absolute w-[950px] flex items-center justify-center">
        <Titlebox className="absolute" />
        <LOGO className="absolute w-[16rem] ml-[650px] mt-[460px]" />
      </div>
      <div className="h-full flex-grow flex items-center justify-center">
        <div
          style={{
            transform: `scale(${scaleFactor}) translate(0%, 0%)`,
          }}
        >
          {flangeSize === 3 && (
            <div style={{ width: 120, marginRight: "-10px" }}>
              <Head3L />
            </div>
          )}
          {flangeSize === 4 && (
            <div style={{ width: 144, marginRight: "-10px" }}>
              <Head4L />
            </div>
          )}
          {flangeSize === 5 && (
            <div style={{ width: 160, marginRight: "-10px" }}>
              <Head5L />
            </div>
          )}
          {flangeSize === 6 && (
            <div style={{ width: 176, marginRight: "-10px" }}>
              <Head6L />
            </div>
          )}
          {flangeSize === 8 && (
            <div style={{ width: 216, marginRight: "-10px" }}>
              <Head8L />
            </div>
          )}
        </div>
      </div>
      <div className="h-full flex flex-grow-[5] items-center justify-center">
        <div
          className="absolute flex items-center pl-[0rem] "
          style={{
            transform: `scale(${scaleFactor}) translate(0%, 0%)`,
          }}
        >
          {flangeSize === 3 && (
            <div style={{ width: 120, marginRight: "0px" }}>
              <Head3 />
            </div>
          )}
          {flangeSize === 4 && (
            <div style={{ width: 115, marginRight: "0px" }}>
              <Head4 />
            </div>
          )}
          {flangeSize === 5 && (
            <div style={{ width: 125, marginRight: "0px" }}>
              <Head5 />
            </div>
          )}
          {flangeSize === 6 && (
            <div style={{ width: 115, marginRight: "0px" }}>
              <Head6 />
            </div>
          )}
          {flangeSize === 8 && (
            <div style={{ width: 122, marginRight: "0px" }}>
              <Head8 />
            </div>
          )}
          {/* ************************** */}
          {/* FLANGE LEADER */}
          {/* ************************ */}
          <div
            className="border-b-[1.2rem] border-r-[0.3rem] border-l-[0.3rem] border-r-transparent border-l-transparent border-b-black"
            style={{
              marginLeft: -9,
              transform: `translate(-13px,${
                flangeSize * 4 + 30
              }px) rotate(10deg)`,
            }}
          >
            <div
              className="absolute"
              style={{
                height: 100 / scaleFactor,
                borderLeft: `${1 / scaleFactor}px solid black`,
              }}
            />
            <div
              className="absolute text-black"
              style={{
                marginLeft: -40 / scaleFactor,
                width: 150 / scaleFactor,
                marginTop: 90 / scaleFactor,
                transform: "rotate(-10deg)",
                fontSize: `${1 / scaleFactor}rem`,
              }}
            >
              {flangeSize}&quot; FLANGE
            </div>
          </div>

          {/* ********************************** */}
          {/* ************Elements************** */}
          {/* ********************************** */}
          {elementNum === 3 && (
            <div className="flex items-center">
              <El33 width={`${lengthElement * 16}px`} height="48" />
              {processTemp !== "nT" && (
                <div
                  className="absolute h-[16px] bg-cyan-400 border-r-[1px] border-y-[1px] border-black mt-[0px]"
                  style={{
                    width: `${thermoLength ? thermoLength * 16 + 22 : 0}px`,
                  }}
                />
              )}
              {hlSensor !== "nHL" && (
                <div
                  className="absolute h-[3px] bg-yellow-300 border-r-[0.5px] border-y-[0.5px] border-black mt-[45px]"
                  style={{ width: `${lengthElement * 14.5}px` }}
                />
              )}
            </div>
          )}
          {elementNum === 6 && flangeSize === 3 && (
            <div className="flex items-center">
              <El36 width={`${lengthElement * 16}px`} height="48" />
              {processTemp !== "nT" && (
                <div
                  className="absolute h-[16px] bg-cyan-400 border-r-[1px] border-y-[1px] border-black mt-[0px]"
                  style={{
                    width: `${thermoLength ? thermoLength * 16 + 14 : 0}px`,
                  }}
                />
              )}
              {hlSensor !== "nHL" && (
                <div
                  className="absolute h-[3px] bg-yellow-300 border-r-[0.5px] border-y-[0.5px] border-black mt-[44px]"
                  style={{ width: `${lengthElement * 14.5}px` }}
                />
              )}
            </div>
          )}
          {elementNum === 6 && flangeSize === 4 && (
            <div className="flex items-center">
              <El46 width={`${lengthElement * 16}px`} height="64" />
              {processTemp !== "nT" && (
                <div
                  className="absolute h-[16px] bg-cyan-400 border-r-[1px] border-y-[1px] border-black mt-[0px]"
                  style={{
                    width: `${thermoLength ? thermoLength * 16 + 14 : 0}px`,
                  }}
                />
              )}
              {hlSensor !== "nHL" && (
                <div
                  className="absolute h-[3px] bg-yellow-300 border-r-[0.5px] border-y-[0.5px] border-black mt-[60px]"
                  style={{ width: `${lengthElement * 14.5}px` }}
                />
              )}
            </div>
          )}
          {elementNum === 9 && flangeSize === 4 && (
            <div className="flex items-center">
              <El49 width={`${lengthElement * 16}px`} height="64" />
              {processTemp !== "nT" && (
                <div
                  className="absolute h-[16px] bg-cyan-400 border-r-[1px] border-y-[1px] border-black mt-[0px]"
                  style={{
                    width: `${thermoLength ? thermoLength * 16 + 14 : 0}px`,
                  }}
                />
              )}
              {hlSensor !== "nHL" && (
                <div
                  className="absolute h-[3px] bg-yellow-300 border-r-[0.5px] border-y-[0.5px] border-black mt-[60px]"
                  style={{ width: `${lengthElement * 14.5}px` }}
                />
              )}
            </div>
          )}
          {elementNum === 6 && flangeSize === 5 && (
            <div className="flex items-center">
              <El56 width={`${lengthElement * 16}px`} height="80" />
              {processTemp !== "nT" && (
                <div
                  className="absolute h-[16px] bg-cyan-400 border-r-[1px] border-y-[1px] border-black mt-[0px]"
                  style={{
                    width: `${thermoLength ? thermoLength * 16 + 14 : 0}px`,
                  }}
                />
              )}
              {hlSensor !== "nHL" && (
                <div
                  className="absolute h-[3px] bg-yellow-300 border-r-[0.5px] border-y-[0.5px] border-black mt-[76px]"
                  style={{ width: `${lengthElement * 14.5}px` }}
                />
              )}
            </div>
          )}
          {elementNum === 9 && flangeSize === 5 && (
            <div className="flex items-center">
              <El59 width={`${lengthElement * 16}px`} height="80" />
              {processTemp !== "nT" && (
                <div
                  className="absolute h-[16px] bg-cyan-400 border-r-[1px] border-y-[1px] border-black mt-[0px]"
                  style={{
                    width: `${thermoLength ? thermoLength * 16 + 14 : 0}px`,
                  }}
                />
              )}
              {hlSensor !== "nHL" && (
                <div
                  className="absolute h-[3px] bg-yellow-300 border-r-[0.5px] border-y-[0.5px] border-black mt-[76px]"
                  style={{ width: `${lengthElement * 14.5}px` }}
                />
              )}
            </div>
          )}
          {elementNum === 12 && flangeSize === 6 && (
            <div className="flex items-center">
              <El612 width={`${lengthElement * 16}px`} height="96" />
              {processTemp !== "nT" && (
                <div
                  className="absolute h-[16px] bg-cyan-400 border-r-[1px] border-y-[1px] border-black mt-[0px]"
                  style={{
                    width: `${thermoLength ? thermoLength * 16 + 14 : 0}px`,
                  }}
                />
              )}
              {hlSensor !== "nHL" && (
                <div
                  className="absolute h-[3px] bg-yellow-300 border-r-[0.5px] border-y-[0.5px] border-black mt-[92px]"
                  style={{ width: `${lengthElement * 14.5}px` }}
                />
              )}
            </div>
          )}
          {elementNum === 15 && flangeSize === 6 && (
            <div className="flex items-center">
              <El615 width={`${lengthElement * 16}px`} height="96" />
              {processTemp !== "nT" && (
                <div
                  className="absolute h-[16px] bg-cyan-400 border-r-[1px] border-y-[1px] border-black mt-[0px]"
                  style={{
                    width: `${thermoLength ? thermoLength * 16 + 14 : 0}px`,
                  }}
                />
              )}
              {hlSensor !== "nHL" && (
                <div
                  className="absolute h-[3px] bg-yellow-300 border-r-[0.5px] border-y-[0.5px] border-black mt-[92px]"
                  style={{ width: `${lengthElement * 14.5}px` }}
                />
              )}
            </div>
          )}
          {elementNum === 21 && flangeSize === 8 && (
            <div className="flex items-center">
              <El821 width={`${lengthElement * 16}px`} height="128" />
              {processTemp !== "nT" && (
                <div
                  className="absolute h-[16px] bg-cyan-400 border-r-[1px] border-y-[1px] border-black mt-[0px]"
                  style={{
                    width: `${thermoLength ? thermoLength * 16 + 14 : 0}px`,
                  }}
                />
              )}
              {hlSensor !== "nHL" && (
                <div
                  className="absolute h-[3px] bg-yellow-300 border-r-[0.5px] border-y-[0.5px] border-black mt-[125px]"
                  style={{ width: `${lengthElement * 14.5}px` }}
                />
              )}
            </div>
          )}
          {/* ********************************** */}
          {/* ************Heads************** */}
          {/* ********************************** */}

          {elementNum === 3 && lengthElement > 0 && (
            <El33H width={`24`} style={{ marginLeft: `${-0.3}px` }} />
          )}

          {elementNum === 6 && flangeSize === 3 && lengthElement > 0 && (
            <El36H width={`12.5`} style={{ marginLeft: `${-0.3}px` }} />
          )}

          {elementNum === 6 && flangeSize === 4 && lengthElement > 0 && (
            <El46H
              width={`14.2`}
              style={{ marginTop: -0.8, marginLeft: `${-0.3}px` }}
            />
          )}

          {elementNum === 9 && flangeSize === 4 && lengthElement > 0 && (
            <El49H
              width={`13.5`}
              style={{ marginTop: -1, marginLeft: `${-0.3}px` }}
            />
          )}

          {elementNum === 6 && flangeSize === 5 && lengthElement > 0 && (
            <El56H
              width={`17`}
              style={{ marginTop: -1, marginLeft: `${-0.3}px` }}
            />
          )}

          {elementNum === 9 && flangeSize === 5 && lengthElement > 0 && (
            <El59H
              width={`12.7`}
              style={{ marginTop: 1, marginLeft: `${-0.3}px` }}
            />
          )}

          {elementNum === 12 && flangeSize === 6 && lengthElement > 0 && (
            <El612H
              width={`20.2`}
              style={{ marginTop: -1, marginLeft: `${-0.3}px` }}
            />
          )}

          {elementNum === 15 && flangeSize === 6 && lengthElement > 0 && (
            <El615H
              width={`17.5`}
              style={{ marginTop: 0, marginLeft: `${-0}px` }}
            />
          )}

          {elementNum === 21 && flangeSize === 8 && lengthElement > 0 && (
            <El821H
              width={`18.2`}
              style={{ marginTop: -0.6, marginLeft: `${-0.3}px` }}
            />
          )}

          {/* DIMENSION IMMERSION LENGTH */}
          {lengthElement > 0 && (
            <div
              className="border-x-2 border-black flex items-end justify-end"
              style={{
                width: `${
                  lengthElement * 16 +
                  (elementNum === 3 ? 11 : 0) +
                  (flangeSize === 3 ? 14 : 0) +
                  (flangeSize === 4 ? 15 : 0) +
                  (flangeSize === 5 ? 18 : 0) +
                  (flangeSize === 6 ? 22 : 0) +
                  (flangeSize === 8 ? 19 : 0)
                }px`,
                marginLeft: `${-(
                  lengthElement * 16 +
                  (elementNum === 3 ? 11 : 0) +
                  (flangeSize === 3 ? 14 : 0) +
                  (flangeSize === 4 ? 15 : 0) +
                  (flangeSize === 5 ? 18 : 0) +
                  (flangeSize === 6 ? 22 : 0) +
                  (flangeSize === 8 ? 19 : 0)
                )}px`,
                height: `${15 / scaleFactor}rem`,
                borderLeftWidth: `${1 / scaleFactor}px`,
                borderRightWidth: `${1 / scaleFactor}px`,
                marginBottom: `${(19 + flangeSize * 1.1) / scaleFactor}rem`,
              }}
            >
              {/* Arrows */}
              <div
                className="absolute w-0 h-0 border-t-[0.5rem] border-b-[0.5rem] border-r-[2rem] border-t-transparent border-b-transparent border-r-black "
                style={{
                  marginRight: `${
                    lengthElement * 16 -
                    32 +
                    (elementNum === 3 ? 11 : 0) +
                    (flangeSize === 3 ? 14 : 0) +
                    (flangeSize === 4 ? 15 : 0) +
                    (flangeSize === 5 ? 18 : 0) +
                    (flangeSize === 6 ? 22 : 0) +
                    (flangeSize === 8 ? 19 : 0)
                  }px`,
                  marginBottom: `${13 / scaleFactor}rem`,
                }}
              />
              <div
                className="absolute w-0 h-0 border-t-[0.5rem] border-b-[0.5rem] border-l-[2rem] border-t-transparent border-b-transparent border-l-black"
                style={{ marginBottom: `${13 / scaleFactor}rem` }}
              />
              <div
                className="absolute text-black"
                style={{
                  marginBottom: `${13 / scaleFactor + 0.5}rem`,
                  marginRight: `${
                    (lengthElement * 16 +
                      (elementNum === 3 ? 11 : 0) +
                      (flangeSize === 3 ? 14 : 0) +
                      (flangeSize === 4 ? 15 : 0) +
                      (flangeSize === 5 ? 18 : 0) +
                      (flangeSize === 6 ? 22 : 0) +
                      (flangeSize === 8 ? 19 : 0)) /
                    2
                  }px`,
                  transform: "translate(50%,0%)",
                  fontSize: `${1 / scaleFactor}rem`,
                }}
              >
                {lengthElement}&quot;
              </div>
              <div
                className="absolute text-black"
                style={{
                  marginBottom: `${12.5 / scaleFactor}rem`,
                  marginRight: `${
                    (lengthElement * 16 +
                      (elementNum === 3 ? 11 : 0) +
                      (flangeSize === 3 ? 14 : 0) +
                      (flangeSize === 4 ? 15 : 0) +
                      (flangeSize === 5 ? 18 : 0) +
                      (flangeSize === 6 ? 22 : 0) +
                      (flangeSize === 8 ? 19 : 0)) /
                    2
                  }px`,
                  transform: "translate(50%,0%)",
                  fontSize: `${0.6 / scaleFactor}rem`,
                }}
              >
                Immersion Length
              </div>
              <div
                className="absolute border-t-[1px] border-black"
                style={{
                  marginBottom: `${13 / scaleFactor + 0.5}rem`,
                  width: `${
                    lengthElement * 16 +
                    (elementNum === 3 ? 11 : 0) +
                    (flangeSize === 3 ? 14 : 0) +
                    (flangeSize === 4 ? 15 : 0) +
                    (flangeSize === 5 ? 18 : 0) +
                    (flangeSize === 6 ? 22 : 0) +
                    (flangeSize === 8 ? 19 : 0)
                  }px`,
                }}
              />
            </div>
          )}

          {/* ***********************************************************DIM HIGHLIMIT************************************************************************************* */}
          {hlSensor !== "nHL" && lengthElement > 0 && (
            <div
              className="border-b-[1.2rem] border-r-[0.3rem] border-l-[0.3rem] border-r-transparent border-l-transparent border-b-black"
              style={{
                marginLeft: -8,
                transform: `translate(${
                  -lengthElement * 1.5 -
                  (flangeSize === 3 && elementNum === 3 ? 35 : 0) -
                  (flangeSize === 3 && elementNum === 6 ? 22 : 0) -
                  (flangeSize === 4 && elementNum === 6 ? 22 : 0) -
                  (flangeSize === 4 && elementNum === 9 ? 22 : 0) -
                  (flangeSize === 5 && elementNum === 6 ? 22 : 0) -
                  (flangeSize === 5 && elementNum === 9 ? 22 : 0) -
                  (flangeSize === 6 && elementNum === 12 ? 22 : 0) -
                  (flangeSize === 6 && elementNum === 15 ? 22 : 0) -
                  (flangeSize === 8 ? 22 : 0)
                }px,${
                  (flangeSize === 3 ? 33 : 0) +
                  (flangeSize === 4 ? 40 : 0) +
                  (flangeSize === 5 ? 48 : 0) +
                  (flangeSize === 6 ? 57 : 0) +
                  (flangeSize === 8 ? 72 : 0)
                }px) rotate(10deg)`,
              }}
            >
              <div
                className="absolute"
                style={{
                  height: 80 / scaleFactor,
                  borderLeft: `${1 / scaleFactor}px solid black`,
                }}
              />
              <div
                className="absolute text-black"
                style={{
                  marginLeft: -90 / scaleFactor,
                  width: 200 / scaleFactor,
                  marginTop: 75 / scaleFactor,
                  transform: "rotate(-10deg)",
                  fontSize: `${1 / scaleFactor}rem`,
                }}
              >
                {hlSensor === "HLTC" && <>High-Limit Thermocouple</>}
                {hlSensor === "HLTS" && <>High-Limit Thermostat</>}
              </div>
            </div>
          )}
          {/*************************************************/}
          {/*************************************************/}
          {/*Thermowell DIM Length*/}
          {/*************************************************/}
          {/*************************************************/}

          {processTemp !== "nT" && thermoLength > 0 && (
            <div
              className="border-x-2 border-black flex items-end justify-end"
              style={{
                width: `${
                  thermoLength * 16 +
                  (elementNum === 3 ? 11 : 0) +
                  (flangeSize === 3 ? 14 : 0) +
                  (flangeSize === 4 ? 15 : 0) +
                  (flangeSize === 5 ? 18 : 0) +
                  (flangeSize === 6 ? 22 : 0) +
                  (flangeSize === 8 ? 19 : 0)
                }px`,
                marginLeft: `${-(
                  lengthElement * 16 +
                  (elementNum === 3 ? 11 : 0) +
                  (flangeSize === 3 ? 14 : 0) +
                  (flangeSize === 4 ? 15 : 0) +
                  (flangeSize === 5 ? 18 : 0) +
                  (flangeSize === 6 ? 22 : 0) +
                  (flangeSize === 8 ? 19 : 0)
                )}px`,
                marginRight: `${
                  (lengthElement - thermoLength) * 16 +
                  7 +
                  (elementNum === 3 ? 4 : 0)
                }px`,
                height: `${8 / scaleFactor}rem`,
                borderLeftWidth: `${1 / scaleFactor}px`,
                borderRightWidth: `${1 / scaleFactor}px`,
                marginBottom: `${(8 + flangeSize * 1.5) / scaleFactor}rem`,
              }}
            >
              {/* Arrows */}
              <div
                className="absolute w-0 h-0 border-t-[0.5rem] border-b-[0.5rem] border-r-[2rem] border-t-transparent border-b-transparent border-r-black "
                style={{
                  marginRight: `${
                    thermoLength * 16 + 18 + (elementNum === 3 ? 8 : 0) - 32
                  }px`,
                  marginBottom: `${7 / scaleFactor}rem`,
                }}
              />
              <div
                className="absolute w-0 h-0 border-t-[0.5rem] border-b-[0.5rem] border-l-[2rem] border-t-transparent border-b-transparent border-l-black"
                style={{ marginBottom: `${7 / scaleFactor}rem` }}
              />

              <div
                className="absolute text-black"
                style={{
                  marginBottom: `${7 / scaleFactor + 0.5}rem`,
                  marginRight: `${
                    thermoLength * 8 + 7 + (elementNum === 3 ? 4 : 0)
                  }px`,
                  transform: "translate(50%,0%)",
                  fontSize: `${1 / scaleFactor}rem`,
                }}
              >
                {thermoLength}&quot;
              </div>
              <div
                className="absolute text-black"
                style={{
                  marginBottom: `${6.5 / scaleFactor}rem`,
                  marginRight: `${
                    thermoLength * 8 + 7 + (elementNum === 3 ? 4 : 0)
                  }px`,
                  transform: "translate(50%,0%)",
                  fontSize: `${0.6 / scaleFactor}rem`,
                }}
              >
                Thermowell
              </div>
              <div
                className="absolute border-t-[1px] border-black"
                style={{
                  marginBottom: `${7 / scaleFactor + 0.5}rem`,
                  width: `${
                    thermoLength * 16 + 14 + (elementNum === 3 ? 8 : 0)
                  }px`,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Drawings;
