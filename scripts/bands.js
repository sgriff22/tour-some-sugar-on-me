import { getBands, getBookings } from "./database.js";

//Get the band data
const allBands = getBands();

//sort bands alphabetically
allBands.sort((a, b) => a.name.localeCompare(b.name));

//Function to list all bands in HTML
export const bandList = () => {
    //Make a variable to store starting point of HTML string (ul)
    let bandHTML = "<ul>"
    
    //Add list item for each band
    for (const band of allBands) {
        bandHTML += `<li data-type="band"
                         data-name="${band.name}">
                       ${band.name}
                     </li>`
    }

    //add closing tag to string
    bandHTML += "</ul>"
    
    //return completed HTML ul string
    return bandHTML
}

//When a band name is clicked display all venues the band is playing
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        
        // Was a band list item clicked?
        if (itemClicked.dataset.type === "band") {
            //Get the name of the band clicked
            const bandName = itemClicked.dataset.name

            //store the found venues
            let bookedVenues = []

            //Get all the bookings to see which venues the band is playing at
            const bookings = getBookings()

            for (const booking of bookings) {
                // Does the band name clicked match the bookings bandName
                if (bandName === booking.bandName) {
                    //add venue name to bookedVenues list
                    if (bookedVenues.includes(booking.venueName) === false) bookedVenues.push(booking.venueName);
                }
            }
            
            window.alert(`${bandName} is booked at: \n${bookedVenues.join("\n")}`)
        }
    }
)