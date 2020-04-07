const Buy = (i) => ({ type: 'BUY', payload: i })
const Delete = (i) => ({ type: 'DELETE', payload: i })
const Reset = (i) => ({ type: 'RESET', payload: i })
const ResetAll = () => ({ type: "RESET_ALL" })
const CurentUser = (i) => ({ type: "SET_USER", payload: i })
const fetchData = (i) => ({ type: 'FETCH_DATA', payload: i })
export { Buy, Delete, Reset, ResetAll, CurentUser, fetchData }