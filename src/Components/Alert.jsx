import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

export default function SimpleAlert() {
  const [showAlert, setShowAlert] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);
    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  return (
    <>
      {showAlert && (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          ENJOY THE BEAUTY OF SHOPPING
        </Alert>
      )}
    </>
  );
}
