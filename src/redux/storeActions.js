const Buy = (i) => ({ type: 'BUY', payload: i })
const Delete = (i) => ({ type: 'DELETE', payload: i })
const Reset = (i) => ({ type: 'RESET', payload: i })
const ResetAll = () => ({ type: "RESET_ALL" })
const CurentUser = (i) => ({ type: "SET_USER", payload: i })
export { Buy, Delete, Reset, ResetAll, CurentUser }