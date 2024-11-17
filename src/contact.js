import { content } from "./index.js";
export function createContact(){
    content.innerHTML = "";
    const wrapper = document.createElement("div");
    wrapper.setAttribute('id', 'wrapper-v');
    const h1 = document.createElement("h1");
    h1.classList.add('h1');
    h1.textContent = heading;
    wrapper.appendChild(h1);
    let newCard = document.createElement('div');
    newCard.classList.add('card');
    for (let i = 0; i < para.length; i++) {
        let newP = document.createElement("p");
        newP.textContent = para[i];
        newCard.appendChild(newP);
    }
    wrapper.appendChild(newCard);
    
    return wrapper;
}

const heading = "Contact";

const para = [
    "Welcome to Mdj Food Bar, where we serve more than just delicious food. We strive to provide an exceptional dining experience that will leave you craving for more. We value your feedback and are always eager to hear from our cherished guests. Whether you wish to make a reservation, plan a special event, or simply share your thoughts about your recent visit, our dedicated team is here to assist you.",
    "To get in touch with us, you can:",
    "- **Call Us**: Dial [Phone Number] to speak with one of our friendly staff members. We are available to take your calls from [Opening Hours]. If you have any questions about our menu, specials, or would like to book a table, don't hesitate to give us a ring.",
    "- **Email Us**: For non-urgent inquiries, feel free to email us at info@mdjfoodbar.nar . We aim to respond to all emails within 24 hours.",
    "- **Send a Message**: Use the contact form provided below to send us your feedback, comments, or suggestions. This is also the perfect place to leave us a note if you're planning a large group event or celebration.",
    "- **Find Us**: We are located at Narnia. If you need directions, use our convenient Google Maps feature by clicking on the 'Find Us' button at the bottom of this page.",
    "- **Follow Us**: Stay updated on our latest news, promotions, and events by following us on [Facebook], [Instagram], and [Twitter]. You can also sign up for our newsletter for exclusive offers and announcements.",
    "- **Reserve Online**: For a seamless reservation experience, visit our [Reservations Page] and select your preferred date and time. We look forward to hosting you at Mdj Food Bar.",
    "Thank you for choosing Mdj Food Bar. We are committed to exceeding your expectations and ensuring that every visit to our establishment is a memorable one. If there is anything we can do to make your experience even better, please don't hesitate to contact us. We can't wait to serve you again!",
    "Warm Regards,",
    "Mdj Food Bar Team"
]