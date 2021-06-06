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
        const thisDay = moment(date).format("D");
        if (+thisDay === currentDay) {
            return "orange";
        } else if (currentDay - +thisDay >= 1) {
            return "red"
        } else if (currentDay - +thisDay < 1) {
            return ""
        } else if (currentDay - +thisDay === 1) {
            return "yellow"
        }


    }
    return { today, days, months, years, currentDay, currentMonth, currentYear, setBgColor };
}
export default useMoment;