import React from 'react'
import './team.css'
import img1 from './img1.JPG'

const teamMembers = [
    {
        imgUrl: img1,
        name: 'Thein Dan Ma',
        position: 'Production Designer'
    },

    {
        imgUrl: "",
        name: 'Ngwe Pu',
        position: 'Product Designer'
    },

    {
        imgUrl: "",
        name: 'OK Tal Mg Lay',
        position: 'Customer Service'
    },

    
]

const Team = () => {
    return (
        
        <section className='our__team  '>
            <div className=''>
                <div className='team__content'>
                    <h6 className='subtitle'>Our Team</h6>
                    <h2>
                        Join With <span className='highlight'>Our Team</span>
                    </h2>
                </div>
                <div className='team__wrapper ms-5 ps-5 me-5'>
                    {
                        teamMembers.map((item, index) => (
                            <div className='team__item ' key={index}>
                                <div className='team__img mt-2'>
                                    <img src={item.imgUrl} alt='' className='shadow' />
                                </div>
                                <div className='team__details'>
                                    <h3>{item.name}</h3>
                                    <p className='description'>{item.position}</p>

                                    <div className='team__member-social'>
                                        <span><i class="ri-facebook-circle-fill m1"></i></span>
                                        <span><i class="ri-instagram-line m2"></i></span>
                                        <span><i class="ri-linkedin-box-line m3"></i></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Team