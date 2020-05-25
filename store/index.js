export const state = () => ({
  register_info: {
    cell_phone: '',
    password: ''
  },
  activation: {
    resend: false,
    time: '',
  },
  user: {
    dashboard: {
      page: "dashboard"
    }
  },
  question: {
    add: {
      selectedDate: new Date()
    }
  }
})

export const mutations = {
  setRegisterInfo (state, reg_info) {
    state.register_info.cell_phone = reg_info.cell_phone;
    state.register_info.password = reg_info.password;
  },
  toggleResend (state) {
    state.activation.resend = !state.activation.resend;
  },
  setTime (state, time) {
    state.activation.time = time;
  },
  setUserDashPage (state, page) {
    state.user.dashboard.page = page;
  },
  setFormDate (state, date) {
    state.question.add.selectedDate = date;
  }
}