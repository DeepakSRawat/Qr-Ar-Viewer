import { useEffect, useState } from "react";
import ARViewer from "./components/ARViewer";
import QrScanner from "./components/QRScanner";
// import ConsoleDisplay from "./components/consoleDisplay";

const App = () => {
  const [modelUrl, setModelUrl] = useState("");
  const [isQrtrue, setIsQrtrue] = useState(true);
  const [isCamOpen, setIsCamOpen] = useState(false);
  // const [consoleMessages, setConsoleMessages] = useState([]);

  // useEffect(() => {
  //   // Override console.log
  //   const originalConsoleLog = console.log;
  //   console.log = (...args) => {
  //     setConsoleMessages((prev) => [...prev, args]);
  //     originalConsoleLog.apply(console, args);
  //   };

  //   return () => {
  //     console.log = originalConsoleLog;
  //   };
  // }, []);

  const handleQRSuccess = (url) => {
    console.log("url:", url);
    setModelUrl(url);
    setIsQrtrue(false);
  };

  const handleCamera = () => {
    setIsCamOpen(!isCamOpen);
    setModelUrl("");
    setIsQrtrue(true);
    console.log("scanner status:", isCamOpen);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="shadow-[#00000059_0px_5px_15px] w-52 h-72 m-6 p-2 *: rounded-lg">
        {isCamOpen ? (
          isQrtrue ? (
            <QrScanner onSuccess={handleQRSuccess} camClose={handleCamera} />
          ) : (
            // <div>{modelUrl}</div>
            <ARViewer modelUrl={modelUrl} />
          )
        ) : (
          <div className="flex justify-center items-center bg-slate-400 text-white h-full">
            camera is closed
          </div>
        )}
      </div>

      <button
        onClick={handleCamera}
        className="w-40 h-16 text-white cursor-pointor text-base font-bold
 text-center outline-none border-none relative rounded-[10px] bg-[#0c0c0c]"
      >
        {isCamOpen ? "Close scanner" : "Open scanner"}
      </button>
      {/* <ConsoleDisplay messages={consoleMessages} /> */}
    </div>
  );
};

export default App;
