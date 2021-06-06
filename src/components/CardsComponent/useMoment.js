import moment from "moment";

const useMoment = () => {
    const today = moment().format("Do/MMM/yyyy");
    const days = [];
    for (let i = 1; i <= moment().daysInMonth(); i++) {
        days.push(i);
    }
    const months = moment.monthsShort();
    const years = [];
    for (let i = 0; i < 10; i++) {
        years.push(moment().add(i, 'y').format("yyyy"));

    }

    return { today, days, months, years };
}
export default useMoment