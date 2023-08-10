import React, { useState, useEffect } from 'react';

import Floorplans from '../components/Floorplans';
import ContactForm from '../components/ContactForm';


export default function Home() {

    const [show, setShow] = useState(false);

    function handleShow() {
        if (!show) {
            setShow(true)
        } else setShow(false)
    }

    return (
        <div className='homeContainer'>
            <div className='heroSection'>
                <div className='heroSectionContent'>
                    <div className='div1'>

                        <img src='https://images.unsplash.com/photo-1612626869796-2caca2ec3ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className='div2'>
                        <p>Welcome to Palisade Heights Apartments, where modern living meets tranquility.</p>
                        <p>Discover your perfect home in our vibrant and harmonious community.</p>

                    </div>
                </div>

            </div>
            <div className='welcomeSection'>
                <div className='welcomeSectionContent'>
                    <div className='welcomeSectionDesc'>
                        <div className='welcomeSectionText'>
                            <p>Palisade Heights Apartments offers modern and luxurious living spaces in a vibrant and friendly community. Our apartment complex is designed to provide residents with comfort, convenience, and a sense of harmony.</p>
                        </div>
                        <div className='welcomeSectionImg'>
                            <img src='https://images.unsplash.com/photo-1460317442991-0ec209397118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAzMzd8MHwxfGFsbHx8fHx8fHx8fDE2OTE1MjMyMDd8&ixlib=rb-4.0.3&q=80&w=1080' style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div className='welcomeSectionDesc'>
                        <div className='welcomeSectionImg'>
                            <img src='https://images.unsplash.com/photo-1529290130-4ca3753253ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAzMzd8MHwxfGFsbHx8fHx8fHx8fDE2OTE1MjMyNTZ8&ixlib=rb-4.0.3&q=80&w=1080' style={{ width: '100%' }} />
                        </div>
                        <div className='welcomeSectionText'>

                            <p>With a variety of floorplans and top-notch amenities, we strive to create a welcoming and enjoyable living experience for all our residents.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='floorPlanSection' id='Floorplans'>
                <div className='floorplanSectionContent'>
                    <div className='floorPlanTitle'>
                        <h1>Floorplans</h1>
                    </div>
                    <div className='floorPlanText'>

                        <p>Each apartment offers a unique blend of modern features and comfortable living spaces.</p>
                        <p>Choose from a range of thoughtfully designed floorplans to find the perfect fit for your lifestyle. </p>

                    </div>
                    {/* <div className='floorPlanText'>
                        


                    </div>*/}
                    <div className='floorPlansContainer'>

                        <Floorplans />
                    </div>

                </div>
            </div>



            <div className='featureSection'>
                <div className='featureDesc'>
                    <div className='featureText'>
                        <p>Enjoy an array of premium features, both inside your apartment and throughout our community. From relaxing by the pool to staying active in the fitness center, there's something for everyone.</p>
                    </div>
                </div>
                <div className='featureContainer'>
                    <div className='featureContent'>

                        <div className='featureTitle'>
                            <p>In-unit Features</p>
                        </div>
                        <div className='featureList'>
                            <ul>
                                <li>Modern kitchen with stainless steel appliances</li>
                                <li>In-unit washer and dryer</li>
                                <li>Spacious closets with built-in organizers</li>
                                <li>Private balcony or patio in select units</li>
                                <li>Central heating and air conditioning</li>
                            </ul>
                        </div>
                    </div>
                    <div className='featureContent'>
                        <div className='featureTitle'>
                            <p>Community Ameneties</p>
                        </div>
                        <div className='featureList'>
                            <ul>
                                <li>Resort-style swimming pool and sundeck</li>
                                <li>Fully equipped fitness center</li>
                                <li>Pet-friendly environment with a dog park</li>
                                <li>Community clubhouse for social gatherings</li>
                                <li>Covered parking and guest parking spaces</li>
                                <li>On-site management and maintenance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='aboutSection'>
                <div className='aboutSectionDesc'>
                    <div className='aboutSectionText'>
                        <p>At Palisade Heights, we believe in providing residents with a welcoming and comfortable living experience. Our mission is to create a sense of harmony and community within our apartment complex.</p>
                    </div>
                </div>
            </div>
            <div className='contactSection' id='Contact'>

            <div className='contactSectionContent'>
                <div className='contactSectionTitle'>
                    <h2>Ready to experience Palisade Heights living?</h2>
                </div>


                <div className='contactSectionDesc'>
                    <div className='contactSectionText'>


                        <p>Get in touch with our leasing team today to schedule a tour or inquire about availability.</p>
                    </div>
                    <div className='contactBtn'>
                        {show ?
                            <button id='contactButton'
                                onClick={handleShow}>
                                Close
                            </button>

                            : <button id='contactButton'
                                onClick={handleShow}>
                                Contact
                            </button>
                        }

                    </div>
                </div>
            </div>

            {/* contact form */}
            {show &&
                <ContactForm />
            }
        </div>
</div>

    );
}