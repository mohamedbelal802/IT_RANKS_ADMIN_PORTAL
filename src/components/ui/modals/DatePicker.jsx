import { Button, Dialog } from "@mui/material";
import React from "react";
import { DateRange } from "react-date-range";
export default function DatePicker({
  open,
  handleClose,
  onSubmit,
  isLoading,
  startDate,
  endDate,
  setFieldValue,
}) {
  const handleChange = (ranges) => {
    setFieldValue("startDate", ranges.selection.startDate.toISOString());
    setFieldValue("endDate", ranges.selection.endDate.toISOString());
  };

  return (
    <Dialog dir="ltr" onClose={handleClose} open={open}>
      <DateRange
        minDate={new Date()}
        ranges={[
          {
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            key: "selection",
          },
        ]}
        onChange={handleChange}
      />

      <Button
        disabled={isLoading}
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
