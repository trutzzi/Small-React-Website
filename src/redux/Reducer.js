const initState = {
    items: [
        {
            id: 1,
            image: 'res_294a9b2a8b872b81ff929d0578c47fce_450x450_4991.jpg',
            title: 'Televizor LED Smart Samsung, 80 cm, 32N4302, HD',
            price: 899,
            description: `
            Diagonala display	80 cm
            Tip TV	Smart TV
            Tehnologie display	LED
            Tehnologie speciala	HDR
            Claritate imagine	HD
            An aparitie	2019
            Culoare	Negru
            Format display	Plat`,
            selected: false,
            count: 0
        },
        {
            id: 2,
            image: 'res_3232.jpeg',
            title: 'Statie de calcat Philips PerfectCare Aqua Pro GC9325/30, Optimal Temp, talpa T-ionicGlide, 120 g/min, 440 g abur, 6.5 bari, 2.5 L, Easy De-Calc, Alb/Mov',
            price: 749,
            description: `
            Tip produs	Statie de calcat
            Tip	Orizontal
            Utilizare	Rezidential
            Tehnologii	ECO
            Ultimate Anti-Calc
            Functii	Anti-calcar
            Oprire automata
            Indicator nivel apa
            Mod Eco
            Continut pachet	1 x Statie de calcat
            Culoare	Mov/Alb`,
            selected: false,
            count: 0
        },
        {
            id: 3,
            image: 'res_a4ac4e0cb305c033959ca966ec44199c_450x450_me6o.jpg',
            title: 'Combina frigorifica Midea HD-572RWEN, 416 l, Clasa A+, Total No frost, Display, H 188 cm, Inox',
            price: 1.599,
            description: `Tip incastrare	Standard
            Suprafata	Inox
            Tip display	LCD
            Deschidere usa	Dreapta
            Sistem de racire No Frost	Frigider
            Congelator
            Eficienta energetica	Clasa energetica A+ dintr-o gama de la A+++ la D
            Nivel zgomot	41 dB
            Volum net total	416 l
            Volum total brut	468 l
            Compartimente speciale	Compartiment legume & fructe
            Culoare	Inox`,
            selected: false,
            count: 0
        },
        {
            id: 4,
            image: 'res_156de93d11bee1959aae4f5a6d88f2fa_450x450_ta4p.jpg',
            title: 'Telefon mobil Huawei P20 Pro, Dual SIM, 128GB, 6GB RAM, 4G, Black',
            price: 1649,
            description: `Tip telefon	Smartphone
            Sloturi SIM	Dual SIM
            Tip SIM	Nano SIM
            Sistem de operare	Android
            Versiune sistem operare	Android 8.1
            Numar nuclee	8
            Model procesor	HiSilicon Kirin 970
            Frecventa procesor	2.4 GHz
            1.8 GHz
            Tehnologii	2G
            3G
            4G
            GPRS
            Conectivitate	Wi-Fi
            Bluetooth
            NFC
            GPS
            Senzori	Accelerometru
            Giroscop
            Amprenta
            Busola
            Senzor de proximitate
            Continut pachet	Telefon
            Incarcator telefon
            Casti`,
            selected: false,
            count: 0
        },
        {
            id: 5,
            image: 'res_3a74c99178b3c42dc437d5cad58d0ed6_450x450_69qa.jpg',
            title: 'Telefon mobil Huawei P20 Pro, Dual SIM, 128GB, 6GB RAM, 4G, Black',
            price: 249,
            description: `Tip produs	Aspirator cu sac
            Utilizare	Rezidential
            Tip aspirare	Uscata
            Tip alimentare	La retea
            Tip suprafata	Multi-suprafete
            Material tub	Metal
            Eficienta energetica	Clasa A
            Performanta curatarii covoarelor	Clasa C
            Performanta curatarii suprafetelor dure	Clasa B
            Emisii de praf	Clasa A
            Clasa C
            Functii	Derulator automat cablu
            Variator de putere
            Indicator recipient colector plin
            Adancime	45.8 cm
            Latime	29.5 cm
            Inaltime	22.6 cm
            Greutate	5.9 Kg
            Culoare	Albastru
            SPECIFICATII TEHNICE
            
            Putere	700 W
            Tensiune alimentare	220 V
            240 V
            Nivel zgomot	80 dB
            Capacitate colectare	3.5 l
            Raza de operare	10 m
            FILTRARE & ACCESORII
            
            Accesorii incluse	Accesoriu pentru spatii inguste
            Duza tapiterie`,
            selected: false,
            count: 0
        },
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
        default:
            break
    }
    let updateTotal = calcTotal(state)
    console.log(state)
    return updateTotal
}
export default Reducer