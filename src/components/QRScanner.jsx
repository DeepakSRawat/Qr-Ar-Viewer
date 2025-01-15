import QrReader from "react-qr-scanner";
import PropTypes from "prop-types";
import { showToast } from "./ToastNotification";
import { MODEL_URLS, ERROR_MESSAGES } from "../utils/constants";
import { useState } from "react";

const QrScanner = ({ onSuccess, camClose }) => {
  const [lastScannedQR, setLastScannedQR] = useState("");

  const handleScan = (data) => {
    if (data && data.text && data.text !== lastScannedQR) {
      setLastScannedQR(data.text);
      if (MODEL_URLS.includes(data.text)) {
        showToast("Correct URL scanned!", "success");
        onSuccess(data.text);
      } else {
        showToast(ERROR_MESSAGES.qrFailed, "error");
        camClose();
      }
    }
  };

  const handleError = (err) => {
    showToast(err.message, "error");
  };

  return (
    <div>
      <div className="relative w-full">
        <QrReader
          delay={300}
          style={{ width: "100%" }}
          onError={handleError}
          onScan={handleScan}
          constraints={{
            video: { facingMode: "environment" },
          }}
        />

        <div className="absolute top-0 left-0 right-0 text-center bg-black opacity-50 text-white p-2 text-sm animate-pulse">
          <span>Scanner Active</span>
        </div>
      </div>
    </div>
  );
};

QrScanner.propTypes = {
  camClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
};

export default QrScanner;
