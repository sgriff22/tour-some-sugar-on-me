import { getBookings, getBands, getVenues } from "./database.js";

//Copy all data for bands, venues, and bookings
const bookings = getBookings();
const bands = getBands();
const venues = getVenues();

 //sort bookings by date
 bookings.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.date) - new Date(b.date);
  });

// Function whose responsibility is to find the venue of the booking
const findVenue = (booking, allVenues) => {
    //Define a variable to store the found venue
    let bookedVenue = {}

    //Look through all the venue data
    for (const venue of allVenues) {
        //If the booking's venueName matches the venue's name
        if (venue.name === booking.venueName) {
            //then reassign the bookedVenue to that venue
            bookedVenue = venue
        }
    }
    //return the bookedVenue for the venue
    return bookedVenue
}

// Function whose responsibility is to find the band of the booking
const findBand = (booking, allBands) => {
    //Define a variable to store the found band
    let bookedBand = {}

    //Look through all the venue data
    for (const band of allBands) {
        //If the booking's bandName matches the bands's name
        if (band.name === booking.bandName) {
            //then reassign the bookedBand to that band
            bookedBand = band
        }
    }
    //return the bookedBand for the booking
    return bookedBand
}


//Function to make html to display the booking information
export const bookingsList = () => {
    //Variable to start html string
    let bookingsHTML = "<ul>"

    //go through all the booking data
    for (const booking of bookings) {
        //first get the assigned band and venue for the booking
        const venue = findVenue(booking, venues)
        const band = findBand(booking, bands)

        //Make list items
        bookingsHTML += `<li data-type="booking"
                             data-bandName="${booking.bandName}">
                            ${band.name} is playing at ${venue.name} on ${booking.date}
                         </li>`
    }

    //Closing html tag for string
    bookingsHTML += "</ul>"

    //return completed string
    return bookingsHTML
}

//When a booking is clicked show all of the band information
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        
        // Was a booking list item clicked?
        if (itemClicked.dataset.type === "booking") {
            //Get the bandName from booking
            const bandName = itemClicked.dataset.bandname

            //store the found band info
            let bandInfo = {}

            for (const band of bands) {
                // Does the bandName of the booking clicked match with the band
                if (bandName === band.name) {
                    //Reassign bandInfo to current band
                    bandInfo = band
                }
            }
            
            window.alert(`${bandName} \n${bandInfo.genre} \nFormed in ${bandInfo.yearFormed} \n${bandInfo.memberCount} band members`)
        }
    }
)