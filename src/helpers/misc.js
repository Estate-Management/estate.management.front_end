import { config } from "./config";
import moment from "moment";
export const capitalizeFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const getDayValues = () => {
  return config.days.map((item) => item.value);
};

export const formatDateTime = (dateTimeString, formatType) => {
  const date = new Date(dateTimeString);

  if (formatType === 'date') {
    return new Intl.DateTimeFormat("tr-TR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }).format(date);
  } else if (formatType === 'time') {
    return new Intl.DateTimeFormat("tr-TR", {
      hour: "numeric",
      minute: "numeric",
    }).format(date);
  } else {
    // Default to datetime format
    return new Intl.DateTimeFormat("tr-TR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date);
  }
};


export const wait = (delay = 5) =>
  new Promise((resolve) => setTimeout(resolve, delay * 1000));
