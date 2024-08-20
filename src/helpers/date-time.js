import moment from "moment";


export const formatDateLL = (date) => {
    return moment(date).format("LL")
}

export const formatDateYM = (date) => {
    return moment(date).format("YYYY MMM")
}

export const formatTimeLT = (time) => {
    return moment(time, "HH:mm:ss").format("HH:mm")
}


export const isAfter = (startTime, endTime) => { // "HH:mm"
    const st = moment(startTime, "HH:mm");
    const et = moment(endTime, "HH:mm");

    return et.isAfter(st);
}