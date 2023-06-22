import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'
import tour6 from './images/tour-6.jpeg'

export const pageLinks = [
    {id: 1, href: '#home', text: 'home'},
    {id: 2, href: '#about', text: 'about'},
    {id: 3, href: '#services', text: 'services'},
    {id: 4, href: '#tours', text: 'tours'},
]

export const socialLinks = [
    {id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook'},
    {id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter'},
    {id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace'},
]

export const services = [
    {id: 1, icon: 'fas fa-wallet fa-fw', title: 'saving money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id: 2, icon: 'fas fa-tree fa-fw', title: 'endless hiking', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id: 3, icon: 'fas fa-socks fa-fw', title: 'amazing comfort', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
]

export const tours = [
    {id: 1, img: tour1, date: 'august 26th, 2020', title: 'Tibet Adventure', duration:2, cost: 2100, location:'Tibet', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', country: 'china', days: '6 days', price: '$2100'},
    {id: 2, img: tour2, date: 'october 1th, 2020', title: 'best of java', duration:4, cost: 2200, location:'Java', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', country: 'indonesia', days: '11 days', price: '$1400'},
    {id: 3, img: tour3, date: 'november 12th, 2020', title: 'explore australia', duration:6, cost: 1200, location:'Austrailia', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', country: 'australia', days: '15 days', price: '$3200'},
    {id: 4, img: tour4, date: 'december 15th, 2020', title: 'best of new zealand',duration:8, cost: 1500, location:'New Zeland', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', country: 'new zealand', days: '10 days', price: '$2800'},
    {id: 5, img: tour5, date: 'january 5th, 2021', title: 'tour of japan', duration:10, cost: 2200, location:'Japan', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', country: 'bali', days: '5 days', price: '$1200'},
    {id: 6, img: tour6, date: 'february 20th, 2021', title: 'tour of bali', duration:6, cost: 2200, location:'Bali', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', country: 'japan', days: '12 days', price: '$3200'},
]