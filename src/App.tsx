import { useState, useEffect } from "react";
import Drawing from "./Drawings";

function App() {
  const [serialNum, setSerialNum] = useState<string>("");
  const [titleVar, setTitle] = useState<string>("");
  const [voltsVar, setVoltage] = useState<string>("");
  const [wattsVar, setWattage] = useState<string>("");
  const [processSensor, setProcessSensor] = useState<string>("nT");
  const [HLSensor, setHLSensor] = useState<string>("nHL");
  const [processTStat, setProcessTStat] = useState<string>("");
  // const [terminalBoxVar, setTerminalBox] = useState<string>("N4");
  const [materialVar, setMaterial] = useState<string>("304SS");

  const [flangeSizeOp, setFlangeSize] = useState<number>(3);
  const [immersionLengthVar, setImmersionLength] = useState<number>(10);
  const [foldLengthVar, setFoldLength] = useState<number>(5);
  const [thermoLength, setThermoLength] = useState<number>(8);
  const [elementNumVar, setElementNum] = useState<number>(1);

  useEffect(() => {
    //Changes the number of elements when the plug Size changes
    var currentElements = (
      document.getElementById("elementNumOptions") as HTMLSelectElement
    ).value;
    setElementNum(Number(currentElements));
  }, [flangeSizeOp]);

  return (
    <div className="flex justify-center mt-5 w-screen">
      <div className="w-96 h-[50rem] bg-white p-2 border-2 border-slate-400 rounded-lg mr-6 text-gray-700">
        <div className="flex space-x-3">
          <div>
            <h1>Serial Number</h1>
            <input
              type="text"
              id="serialNumInput"
              onChange={(e) => setSerialNum(e.target.value)}
              className="input input-bordered border-cyan-500 border-2 input-xs max-w-xs text-gray-700 dark:text-gray-300"
            />
          </div>
          <div>
            <h1>Title</h1>
            <input
              type="text"
              id="titleInput"
              onChange={(e) => setTitle(e.target.value)}
              className="input input-bordered border-cyan-500 border-2 input-xs max-w-xs text-gray-700 dark:text-gray-300"
            />
          </div>
        </div>

        <div className="flex space-x-3">
          <div>
            <h1>Voltage</h1>
            <input
              onChange={(e) => setVoltage(e.target.value)}
              type="text"
              id="voltInput"
              className="input input-bordered border-cyan-500 border-2 input-xs max-w-xs text-gray-700 dark:text-gray-300"
            />
          </div>
          <div>
            <h1>Wattage</h1>
            <input
              onChange={(e) => setWattage(e.target.value)}
              type="text"
              id="wattsInput"
              className="input input-bordered border-cyan-500 border-2 input-xs max-w-xs text-gray-700 dark:text-gray-300"
            />
          </div>
        </div>

        <div>
          <h1>Flange Size</h1>
          <select
            className="select select-xs border-cyan-500 border-2 text-gray-700 dark:text-gray-300"
            onChange={(e) => {
              setFlangeSize(Number(e.target.value));
            }}
          >
            <option value={3}>3&quot;-150 LB ANSI Flanged Heaters</option>
            <option value={4}>4&quot;-150 LB ANSI Flanged Heaters</option>
            <option value={5}>5&quot;-150 LB ANSI Flanged Heaters</option>
            <option value={6}>6&quot;-150 LB ANSI Flanged Heaters</option>
            <option value={8}>8&quot;-150 LB ANSI Flanged Heaters</option>
          </select>
        </div>

        <div>
          <h1>Immersion Length</h1>
          <input
            type="text"
            id="immersLength"
            defaultValue={10}
            onChange={(e) => setImmersionLength(Number(e.target.value) || 0)}
            className="input input-bordered border-cyan-500 border-2 input-xs max-w-xs text-gray-700 dark:text-gray-300"
          />
        </div>

        <div>
          <h1>Number of Elements</h1>
          <select
            className="select select-xs border-cyan-500 border-2 text-gray-700 dark:text-gray-300"
            onChange={(e) => {
              setElementNum(Number(e.target.value));
            }}
            id="elementNumOptions"
          >
            {flangeSizeOp === 3 && (
              <>
                <option value={3}>3 Element</option>
                <option value={6}>6 Element</option>
              </>
            )}
            {(flangeSizeOp === 4 || flangeSizeOp === 5) && (
              <>
                <option value={6}>6 Elements</option>
                <option value={9}>9 Elements</option>
              </>
            )}

            {flangeSizeOp === 6 && (
              <>
                <option value={12}>12 Elements</option>
                <option value={15}>15 Elements</option>
              </>
            )}

            {flangeSizeOp === 8 && (
              <>
                <option value={21}>21 Elements</option>
                <option value={21}>24 Elements</option>
                <option value={21}>27 Elements</option>
              </>
            )}
          </select>
        </div>

        {elementNumVar === 1.5 && (
          <div>
            <h1>Foldback Length</h1>
            <input
              type="text"
              id="foldbackLengthInput"
              defaultValue={5}
              onChange={(e) => setFoldLength(Number(e.target.value) || 0)}
              className="input input-bordered border-cyan-500 border-2 input-xs max-w-xs text-gray-700 dark:text-gray-300"
            />
          </div>
        )}

        <div>
          <h1>Element Sheath Material</h1>
          <select
            className="select select-xs border-cyan-500 border-2 text-gray-700 dark:text-gray-300"
            onChange={(e) => {
              setMaterial(String(e.target.value));
            }}
          >
            <option>304SS</option>
            <option>310SS</option>
            <option>Incoloy 800/840</option>
            <option>Inconel 600</option>
            <option>Titanium</option>
            <option>PTFE Teflon</option>
          </select>
        </div>

        <div>
          <h1>Temp Sensor Option</h1>
          <div className="flex space-x-3">
            <select
              className="select select-xs border-cyan-500 border-2 text-gray-700 dark:text-gray-300"
              onChange={(e) => {
                setProcessSensor(e.target.value);
                if (e.target.value !== "TS") setProcessTStat("");
                else setProcessTStat("SPST");
              }}
              value={processSensor}
            >
              <option value="nT">None</option>
              <option value="TC">Process Thermocouple</option>
              <option value="TS">Process Thermostat</option>
            </select>

            <select
              className="select select-xs border-cyan-500 border-2 text-gray-700 dark:text-gray-300"
              onChange={(e) => setHLSensor(e.target.value)}
              value={HLSensor}
            >
              <option value="nHL">None</option>
              <option value="HLTC">High-Limit Thermocouple</option>
              <option value="HLTS">High-Limit Thermostat</option>
            </select>
          </div>
        </div>

        {processSensor === "TS" && (
          <div>
            <h1>Temp Sensor Option</h1>
            <select
              className="select select-xs border-cyan-500 border-2 text-gray-700 dark:text-gray-300"
              onChange={(e) => {
                setProcessTStat(e.target.value);
              }}
              value={processTStat}
            >
              <option value="SPST">SPST Thermostat</option>
              <option value="DPST">DPST Thermostat</option>
            </select>
          </div>
        )}

        {processSensor !== "nT" && (
          <div>
            <h1>Thermowell Length</h1>
            <input
              type="text"
              id="psLength"
              defaultValue={5}
              onChange={(e) => setThermoLength(Number(e.target.value) || 0)}
              className="input input-bordered border-cyan-500 border-2 input-xs max-w-xs text-gray-700 dark:text-gray-300"
            />
          </div>
        )}

        <div>
          <h1>Terminal Box</h1>
          <select
            className="select select-xs border-cyan-500 border-2 text-gray-700 dark:text-gray-300"
            // onChange={(e) => setTerminalBox(e.target.value)}
          >
            <option value="N4">NEMA 4</option>
          </select>
        </div>
      </div>

      <Drawing
        serialNum={serialNum}
        title={titleVar}
        flangeSize={flangeSizeOp}
        lengthElement={immersionLengthVar}
        foldLength={foldLengthVar}
        elementNum={elementNumVar}
        processTemp={processSensor}
        hlSensor={HLSensor}
        typeThermostat={processTStat}
        thermoLength={thermoLength}
        material={materialVar}
        voltage={voltsVar}
        wattage={wattsVar}
      />
    </div>
  );
}

export default App;
