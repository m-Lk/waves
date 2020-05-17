import React from 'react';
import {FaCompass, FaPhone, FaClock, FaEnvelope} from 'react-icons/fa'

export default function Footer({data}) {
    return (
        data.siteData ?
        <footer className="bck_b_dark">
            <div className="container">
                <div className='logo'>
                    WAVES
                </div>
                <div className='wrapper'>
                    <div className='left'>
                        <h2> Contact Information </h2>
                        <div className='business_nfo'>
                            <div className='tag'>
                                <FaCompass className='icon' />
                                <div className="nfo">
                                    <div>Address</div>
                                    <div>{data.siteData[0].address}</div>
                                </div>
                            </div>
                            <div className='tag'>
                                <FaPhone className='icon' />
                                <div className="nfo">
                                    <div>Phone</div>
                                    <div>{data.siteData[0].phone}</div>
                                </div>
                            </div>
                            <div className='tag'>
                                <FaClock className='icon' />
                                <div className="nfo">
                                    <div>Working Hours</div>
                                    <div>{data.siteData[0].hours}</div>
                                </div>
                            </div>
                            <div className='tag'>
                                <FaEnvelope className='icon' />
                                <div className="nfo">
                                    <div>Email</div>
                                    <div>{data.siteData[0].email}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='left'>
                        <h2>Be the first to Know</h2>
                        <div>
                            <div>
                                Get all the latest information on events, sales and offers. You can miss out.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        : null
    )
}
