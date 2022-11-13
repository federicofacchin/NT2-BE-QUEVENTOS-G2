const subscriptions = [
    {
        id : 1,
        name:  'Garden Groove Club',
        address: 'Olivos 123',
    },
    {
        id : 2,
        name:  "Luna Park",
        address: "Av. Eduardo Madero 470, C1106 CABA",
    },
    {
        id : 3,
        name:  "Lo de Pepe ",
        address: "Av. Maipú 4099, La Lucila, Provincia de Buenos Aires",
    },
    {
        id : 4,
        name:  "Presidente Bar ",
        address: "Manuel Quintana 188, C1129, Caba",
    },
]


const cancelSubscription = (id) => {
    console.log('Borrado')
} 


export {subscriptions,cancelSubscription};
