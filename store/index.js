export const state = () => ({
  register_info: {
    cell_phone: '',
    password: ''
  },
  activation: {
    resend: false,
    time: '',
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
  }
}