import React, { Component } from "react";
import Travel from "./Travel.jsx";

const travels = [{
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Cannes%2C_Le_Suquet%2C_France.jpg/320px-Cannes%2C_Le_Suquet%2C_France.jpg",
    destination: "Cannes",
    country: "France",
    distance: "776 km",
}, {
    photo: "https://www.goodfreephotos.com/cache/italy/rome/side-of-the-roman-colosseum_200_cw200_ch200_thumb.jpg",
    destination: "Rome",
    country: "Italy",
    distance: "1104 km",
}, {
    photo: "https://www.goodfreephotos.com/cache/england/london/final18_200_cw200_ch200_thumb.jpg",
    destination: "London",
    country: "GB",
    distance: "742 km",
}, {
    photo: "https://www.urlaubermagazin.com/mittelmeer/Plaza_Mayor.jpg",
    destination: "Madrid",
    country: "Spain",
    distance: "553 km",
}, {
    photo: "https://www.goodfreephotos.com/cache/germany/berlin/berlin-cathedral_200_cw200_ch200_thumb.jpg",
    destination: "Berlin",
    country: "Germany",
    distance: "1330 km",
}

]
class Travels extends Component {
    render() {
        return (
            <div className="Travels.css">
                {travels.map(x => <Travel {...x} />)}
            </div>
        );
    }
}


export default Travels;