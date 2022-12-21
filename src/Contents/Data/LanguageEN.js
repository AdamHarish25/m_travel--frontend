import Traveller from '../../Attachments/Image/Traveller.png';
import Underline from '../../Attachments/Image/Underline.png';
import Rectangle from '../../Attachments/Image/Rectangle.png';
import Offer1 from '../../Attachments/Image/OfferCard/Offer1.png';
import Offer2 from '../../Attachments/Image/OfferCard/Offer2.png';
import Offer3 from '../../Attachments/Image/OfferCard/Offer3.png';
import Offer4 from '../../Attachments/Image/OfferCard/Offer4.png';

const DataEN = {

    Navbar: {
        menus: [
            {
                title: "Destinations",
                url: "#Destinations",
            },
            {
                title: "Hotels",
                url: "#Hotels",
            },
            {
                title: "Flights",
                url: "#Flights",
            },
            {
                title: "Bookings",
                url: "#Bookings",
            },
        ],
        button: {
            b1: "Login",
            b2: "Sign Up",
            b3: "EN",
        }
    },

    header: {
        motto: "BEST DESTINATIONS AROUND THE WORLD",
        title: {
            "1st": "Travel",
            "2nd": "enjoy",
            underline: Underline,
            "3rd": `and live a new`,
            "4th": "and full life",
        },
        img: Traveller,
        paragraph: `Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.`,
        button: "Find out more",
        playButton: "Play Demo",
    },

    Offers: {
        sectionTitle: "CATEGORY",
        title: "We Offer Best Services",
        cards: [
            {
                title: "Calculated Weather",
                subtitle: "Built Wicket longer admire do barton vanity itself do in it.",
                img: Offer1,
                rectangle: Rectangle,
            },
            {
                title: "Best Flights",
                subtitle: "Engrossed listening. Park gate sell they west hard for the.",
                img: Offer2,
                rectangle: Rectangle,
            },
            {
                title: "Local Events",
                subtitle: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
                img: Offer3,
                rectangle: Rectangle,
            },
            {
                title: "Customization",
                subtitle: "We deliver outsourced aviation services for military customers",
                img: Offer4,
                rectangle: Rectangle,
            },
        ]
    }
};

export default DataEN