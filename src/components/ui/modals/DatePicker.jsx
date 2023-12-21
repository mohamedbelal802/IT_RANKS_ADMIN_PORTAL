import { Button, Dialog } from "@mui/material";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
export default function DatePicker({
  open,
  handleClose,
  setCurrentDate,
  onSubmit,
  isValid,
}) {
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleChange = (ranges) => {
    setDate(ranges.selection);
    setCurrentDate("date", {
      startDate: ranges.selection.startDate.toString(),
      endDate: ranges.selection.endDate.toString(),
    });
  };

  return (
    <Dialog dir="ltr" onClose={handleClose} open={open}>
      <DateRange minDate={new Date()} ranges={[date]} onChange={handleChange} />

      <Button
        disabled={!isValid}
        onClick={onSubmit}
        variant="contained"
        color="primary"
        fullWidth
      >
        تاكيد
      </Button>
    </Dialog>
  );
}
