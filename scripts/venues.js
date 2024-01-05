import { getVenues, getBookings } from "./database.js";


//Get the venue data
const allVenues = getVenues();

//sort venues alphabetically
allVenues.sort((a, b) => a.name.localeCompare(b.name));

//Function to list all venues in HTML
export const venueList = () => {
    //Make a variable to store starting point of HTML string (ul)
    let venueHTML = "<ul>"
    
    //Add list item for each venue
    for (const venue of allVenues) {
        venueHTML += `<li data-type="venue"
                          data-name="${venue.name}">
                        ${venue.name}
                      </li>`
    }

    //add closing tag to string
    venueHTML += "</ul>"
    
    //return completed HTML ul string
    return venueHTML
}

//When venue name is clicked displays all the bands that have booked the venue
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        
        // Was a venue list item clicked?
        if (itemClicked.dataset.type === "venue") {
            //Get the name of the venue clicked
            const venueName = itemClicked.dataset.name

            //store the found bands
            let bookedBands = []

            //Get all the bookings to see which band is playing at venue
            const bookings = getBookings()

            for (const booking of bookings) {
                // Does the venue name clicked match the bookings venueName
                if (venueName === booking.venueName) {
                    //add band name to bookedBands list
                    if (bookedBands.includes(booking.bandName) === false) bookedBands.push(booking.bandName);
                }
            }
            
            window.alert(`Bands booked at ${venueName} are: \n${bookedBands.join("\n")}`)
        }
    }
)