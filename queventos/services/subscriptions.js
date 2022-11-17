const subscriptions = [
    {
        id : 1,
        name:  'Garden Groove Club',
        address: 'Olivos 123, CABA',
        notifications: [{
            title: 'Charly & The Walkie Talkies en el Garden',
            description: "Acompañanos este sábado en la presentación del nuevo trabajo de estudio de la banda platense.",
            date: '22/10/22',
            location: 'Garden Groove Club',
            coordinates: '',
        },
        {
            title: 'Ya empezó la preventa para el show de Lali',
            description: "Conseguí tus entradas en el Garden.",
            date: '26/09/22',
            location: 'Garden Groove Club',
            coordinates: '',
        }]
    },
    {
        id : 2,
        name:  "Luna Park",
        address: "Av. Eduardo Madero 470, C1106 CABA",
        notifications: []
    },
    {
        id : 3,
        name:  "Lo de Pepe ",
        address: "Av. Maipú 4099, La Lucila, Provincia de Buenos Aires",
        notifications: []
    },
    {
        id : 4,
        name:  "Presidente Bar ",
        address: "Manuel Quintana 188, C1129, Caba",
        notifications: []
    },
]


const cancelSubscription = (id) => {
    console.log('Borrado')
} 


export {subscriptions,cancelSubscription};
