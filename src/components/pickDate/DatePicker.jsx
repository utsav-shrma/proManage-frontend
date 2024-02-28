import React, { useState } from "react";
import styles from "./DatePicker.module.css";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function DatePicker({ setPickDate, calenderDate, setCalenderDate }) {
  const handleDateChange = (date) => {
    setCalenderDate(date);
  };
  return (
    <div className={styles.calenderContainer}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          slotProps={{
            actionBar: {
              actions: ["clear", "today"],
            },
          }}
          defaultValue={dayjs()}
          value={ calenderDate??dayjs()}
          disablePast={true}
          onChange={handleDateChange}
          closeOnSelect={true}
          onAccept={(date) => {
            setPickDate(false);
          }}
          sx={{ padding: "0", boxShadow: "0px 2px 12px 0px #82698c33" }}
        />
      </LocalizationProvider>
    </div>
  );
}

export default DatePicker;
