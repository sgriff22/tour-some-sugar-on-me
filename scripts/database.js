const database = {
    venues: [
        { name: "The Siren's Hangout", address: "Nashville, TN", sqFootage: 5000, maxOccupancy: 850},
        { name: "Gravity", address: "Hendersonville, TN", sqFootage: 3000, maxOccupancy: 403},
        { name: "Ruby Hall", address: "Dickson, TN", sqFootage: 4200, maxOccupancy: 653},
        { name: "The Loft", address: "Clarksville, TN", sqFootage: 5000, maxOccupancy: 726},
        { name: "The Bridge", address: "Knoxville, TN", sqFootage: 2000, maxOccupancy: 310}
        
    ],
    bands: [
        { name: "Basic Beat", memberCount: 3, genre: "EDM", yearFormed: 2022 },
        { name: "EternalEcho", memberCount: 5, genre: "Alternative", yearFormed: 2019 },
        { name: "Dusty Rascals", memberCount: 4, genre: "Country", yearFormed: 2023 },
        { name: "Rewind", memberCount: 3, genre: "Alternative", yearFormed: 2021 },
        { name: "Grassland Ramblers", memberCount: 3, genre: "Country", yearFormed: 2023 },
        { name: "The Deploys", memberCount: 2, genre: "EDM", yearFormed: 2021 },
        { name: "Vintage Verse", memberCount: 3, genre: "Folk", yearFormed: 2023 },
        { name: "Velvet Concord", memberCount: 4, genre: "Rock", yearFormed: 2022 }
    ],    
    bookings: [
        {id: 1, bandName: "Basic Beat", venueName: "The Siren's Hangout", date: "12/21/2023" },
        {id: 2, bandName: "EternalEcho", venueName: "Gravity", date: "12/15/2023" },
        {id: 3, bandName: "Rewind", venueName: "The Loft", date: "1/13/2024" },
        {id: 4, bandName: "The Deploys", venueName: "The Bridge", date: "1/23/2024" },
        {id: 5, bandName: "Dusty Rascals", venueName: "Gravity", date: "1/29/2024" },
        {id: 6, bandName: "Vintage Verse", venueName: "Ruby Hall", date: "2/11/2024"},
        {id: 7, bandName: "Vintage Verse", venueName: "The Bridge", date: "2/16/2024"},
        {id: 8, bandName: "Basic Beat", venueName: "The Siren's Hangout", date: "12/21/2023" },
        {id: 9, bandName: "EternalEcho", venueName: "Gravity", date: "12/15/2023" },
        {id: 10, bandName: "Grassland Ramblers", venueName: "The Siren's Hangout", date: "12/22/2023" },
        {id: 11, bandName: "Velvet Concord", venueName: "The Siren's Hangout", date: "12/22/2023" }
    ]
}

//Export and create a function that copies only the venue data from the database
export const getVenues = () => {
    // You write the code for copying the array and returning it
    return database.venues.map(venue => ({...venue}))
}

//Export and create a function that copies only the bands data from the database
export const getBands = () => {
    // You write the code for copying the array and returning it
    return database.bands.map(band => ({...band}))
}

//Export and create a function that copies only the bookings data from the database
export const getBookings = () => {
    // You write the code for copying the array and returning it
    return database.bookings.map(booking => ({...booking}))
}