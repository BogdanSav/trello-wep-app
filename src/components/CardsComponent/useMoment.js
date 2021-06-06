import moment from "moment";

const useMoment = () => {
    const today = moment().format("D MMM yyyy");
    const currentDay = moment().date();
    const currentMonth = moment.monthsShort(moment().month());
    const currentYear = moment().year()
    const days = [];
    for (let i = 1; i <= moment().daysInMonth(); i++) {
        days.push(i);
    }
    const months = moment.monthsShort();
    const years = [];
    for (let i = 0; i < 10; i++) {
        years.push(moment().add(i, 'y').format("yyyy"));

    }
    const setBgColor = (date) => {
        const tomorrow = moment(today).add(1, "d").format("D MMM yyyy");
        if (moment(today).isSame(date)) {
            return "orange";
        } else if (date === tomorrow) {
            return "yellow"
        } else if (moment(today).isAfter(date)) {
            return "red"
        }



    }
    return { today, days, months, years, currentDay, currentMonth, currentYear, setBgColor };
}
export default useMoment;