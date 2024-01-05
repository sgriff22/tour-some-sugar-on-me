import { bandList } from "./bands.js";
import { venueList } from "./venues.js";
import { bookingsList } from "./bookings.js";

//Find id where to put HTML strings
const mainContainer = document.querySelector("#container")

//Compile all HTML Strings from bookings, venues, and bands to interpolate all the strings together
//Invoke the appropriate function for bookings, venues, and bands
const applicationHTML = `
<h1>Tours Overview</hi>
<article class="bookingList">
    <h2>Bookings</h2>
    ${bookingsList()}
</article>
<article class="details">
    <section class="venueList">
        <h2>Venues</h2>
        ${venueList()}
    </section>
    <section class="bandList">
        <h2>Bands</h2>
        ${bandList()}
    </section>
</article>
`

//Add content to HTML
mainContainer.innerHTML = applicationHTML