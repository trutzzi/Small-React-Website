import { firestore, convertCollectionsSnapshotToMap } from '../firebase/firebase.utils'
const initState = {
    items: [
        { id: 1, title: 'Test', price: 1890, description: 'Intel® Core™ i5-1035G1 pana la 3.60 GHz Ice Lake, 15.6", HD, 8GB, 256GB SSD, Intel UHD Graphics, Windows 10 Home, Silver', selected: false, count: 0 },
    ],
    currentUser: null,
    total: 0
}
const calcTotal = (state) => {
    let totalCount = 0
    state.items.filter(f => f.selected === true).map(i => totalCount = totalCount + (i.count * i.price))
    state = { ...state, total: totalCount }
    return state
}
const Reducer = (state = initState, action) => {
    switch (action.type) {
        case 'BUY':
            state = {
                ...state, items: state.items.map(i => {
                    if (i.id === action.payload) {
                        i.selected = true
                        i.count++;
                    }
                    return i
                })
            }
            break
        case 'DELETE':
            state = {
                ...state, items: state.items.map(i => {
                    if (i.id === action.payload) {
                        if (i.count > 0) {
                            i.count--;
                        }
                        if (i.count === 0) {
                            i.selected = false
                        }
                    }
                    return i
                })
            }
            break
        case 'RESET':
            state = {
                ...state, items: state.items.map(i => {
                    if (i.id === action.payload) {
                        i.selected = false
                        i.count = 0;
                    }
                    return i
                })
            }
            break
        case 'RESET_ALL':
            state = {
                ...state, items: state.items.map(i => {
                    if (i.selected === true) {
                        i.selected = false
                        i.count = 0;
                    }
                    return i
                })
            }
            break
        case 'SET_USER':
            state = {
                ...state, currentUser: action.payload
            }
            break
        case 'FETCH_DATA':
            // (!) Pare sa nu mearga
            const collectionRef = firestore.collection('collections')
            collectionRef.onSnapshot(async snapshot => {
                state = {
                    ...state, items: convertCollectionsSnapshotToMap(snapshot)
                    
                }
                console.log("Finnal state")
            })
            console.log(state)

            break
        default:
            break
    }
    let updateTotal = calcTotal(state)
    console.log(state)
    return updateTotal
}
export default Reducer