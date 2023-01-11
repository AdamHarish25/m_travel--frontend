import Traveller from "../../Attachments/Image/Traveller.png";
import Underline from "../../Attachments/Image/Underline.png";

import Rectangle from "../../Attachments/Image/Rectangle.png";

import Offer1 from "../../Attachments/Image/OfferCard/Offer1.png";
import Offer2 from "../../Attachments/Image/OfferCard/Offer2.png";
import Offer3 from "../../Attachments/Image/OfferCard/Offer3.png";
import Offer4 from "../../Attachments/Image/OfferCard/Offer4.png";

import Destination1 from "../../Attachments/Image/DestinationCard/Destination1.png";
import Destination2 from "../../Attachments/Image/DestinationCard/Destination2.png";
import Destination3 from "../../Attachments/Image/DestinationCard/Destination3.png";

import List1 from "../../Attachments/Image/BookingTripList/List1.png";
import List2 from "../../Attachments/Image/BookingTripList/List2.png";
import List3 from "../../Attachments/Image/BookingTripList/List3.png";

import user1 from '../../Attachments/Image/Carousel/user1.png';
import user2 from '../../Attachments/Image/Carousel/user2.png';

import brand1 from '../../Attachments/Image/Brands/brand1.png';
import brand2 from '../../Attachments/Image/Brands/brand2.png';
import brand3 from '../../Attachments/Image/Brands/brand3.png';
import brand4 from '../../Attachments/Image/Brands/brand4.png';
import brand5 from '../../Attachments/Image/Brands/brand5.png';

import {FaApple, FaGooglePlay} from 'react-icons/fa'

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
    },
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
        subtitle:
          "Built Wicket longer admire do barton vanity itself do in it.",
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
        subtitle:
          "Barton vanity itself do in it. Preferd to men it engrossed listening.",
        img: Offer3,
        rectangle: Rectangle,
      },
      {
        title: "Customization",
        subtitle:
          "We deliver outsourced aviation services for military customers",
        img: Offer4,
        rectangle: Rectangle,
      },
    ],
  },

  Destination: {
    sectionTitle: "Top Selling",
    title: "Top Destinations",
    cards: [
      {
        img: Destination1,
        place: "Rome, Italy",
        price: "5,42k",
        tripDuration: "10 days trip",
      },
      {
        img: Destination2,
        place: "London, UK",
        price: "4.2k",
        tripDuration: "12 days trip",
      },
      {
        img: Destination3,
        place: "Full Europe",
        price: "15k",
        tripDuration: "28 days trip",
      },
    ],
  },

  TripBooking: {
    sectionTitle: "Easy and Fast",
    title: <>Book Your Next Trip {<br />} In 3 Easy Steps</>,
    list: [
      {
        icon: List1,
        title: "Choose Destination",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      },
      {
        icon: List2,
        title: "Make Payment",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      },
      {
        icon: List3,
        title: "Reach Airport on Selected Date",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      },
    ],
  },

  Testimonials: {
    sectionTitle: "TESTIMONIALS",
    title: "What People Say About Us",
    carousel: [
      {
        comment: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
        user: "Mike Taylor",
        location: "Lahore, Pakistan",
        userPic: user1,
      },
      {
        comment: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit etiam id felis ac arcu.”",
        user: "Chris Thomas",
        location: "CEO of Red Button",
        userPic: user2,
      },
    ]
  },

  Brands: [
    {
      src: brand1,
      alt: "Axon\u2122 Flight Service",
    },
    {
      src: brand2,
      alt: "Jetstar\u2122 Flight Service",
    },
    {
      src: brand3,
      alt: "Expedia\u2122 Flight Service",
    },
    {
      src: brand4,
      alt: "Qantas\u2122 Flight Service",
    },
    {
      src: brand5,
      alt: "Alitalia\u2122 Flight Service",
    },
  ],

  Subcription: {
    title: <>
      Subscribe to get information, latest news and other <br/>
      interesting offers about Cobham
    </>,
    placeholder: "Your Email",
    background: "",
  },

  Footer: {
    logo: "M Travel.",
    subtitle: `Book your trip in minute, get full Control for much longer.`,

    menus: [
      {
        title: "Company",
        list: [
          {
            menu: "About",
            link: "",
          },
          {
            menu: "Careers",
            link: ""
          },
          {
            menu: "Mobile",
            link: ""
          }
        ],
      },
      {
        title: "Contact",
        list: [
          {
            menu: "Help/FAQ",
            link: "",
          },
          {
            menu: "Press",
            link: ""
          },
          {
            menu: "Affilates",
            link: ""
          }
        ],
      },
      {
        title: "More",
        list: [
          {
            menu: "Airlinefees",
            link: "",
          },
          {
            menu: "Airline",
            link: ""
          },
          {
            menu: "Low fare tips",
            link: ""
          }
        ],
      },
    ],
      
    promotion: "Discover Our App",
    downloadButton: [
      {
        icon: <FaGooglePlay/>,
        p1: "GET IT ON",
        p2: "GOOGLE PLAY",
      },
      {
        icon: <FaApple />,
        p1: "Available on the",
        p2: <strong>Apple Store</strong>,
      }
    ],

    copyright: "All rights reserved@mtravel.co",
  }
};

export default DataEN;
