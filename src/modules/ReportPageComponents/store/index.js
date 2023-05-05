export default {
    state: {
        monthArray: [
            { number: 0, name: "Январь" },
            { number: 1, name: "Февраль" },
            { number: 2, name: "Март" },
            { number: 3, name: "Апрель" },
            { number: 4, name: "Май" },
            { number: 5, name: "Июнь" },
            { number: 6, name: "Июль" },
            { number: 7, name: "Август" },
            { number: 8, name: "Сентябрь" },
            { number: 9, name: "Октябрь" },
            { number: 10, name: "Ноябрь" },
            { number: 11, name: "Декабрь" }
        ],
        yearsArray: [2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030],
        weekdays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        calendar: [],
        today: new Date(Date.now()),
        currentMonth: 0,
        currentYear: 0,
    },
    getters: {
        calendar: state => state.calendar,
        getCurrentMonth: state => state.currentMonth,
        getCurrentYear: state => state.currentYear,
    },
    mutations: {
      setCalendar(state, data) {
          state.calendar.push(data)
      },
    },
    actions: {
        initCalendar({state, commit}) {
            state.calendar = []
            state.currentYear = state.today.getFullYear();
            state.currentMonth = state.today.getMonth();
            const daysInMonth = new Date(state.currentYear, state.currentMonth + 1, 0).getDate();
            for (let day = 1; day <= daysInMonth; day++) {
                const currentDate = new Date(state.currentYear, state.currentMonth, day);
                const currentWeekday = state.weekdays[currentDate.getDay()];
                commit('setCalendar', {date: new Date(state.currentYear,state.currentMonth, day), week: currentWeekday});
            }
        },
        changeMonth({state, commit}) {
            const daysInMonth = new Date(state.currentYear, state.currentMonth + 1, 0).getDate();
            state.calendar = []
            for (let day = 1; day <= daysInMonth; day++) {
                const currentDate = new Date(state.currentYear, state.currentMonth, day);
                const currentWeekday = state.weekdays[currentDate.getDay()];
                commit('setCalendar', {date: new Date(state.currentYear,state.currentMonth, day), week: currentWeekday});
            }
        }
    }
}
