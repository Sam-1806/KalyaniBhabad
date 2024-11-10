"use client"
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import Image from 'next/image';

// Updated names array based on the new data
const names = [
    {
        heading: 'Aptitude Testing',
        button: 'Book Now',
        description: 'Helps identify strengths and areas for career and educational development',
        features: [
            'Personalized test and report',
            'In-depth career counseling session',
            'Recommendations for further development'
        ],
        category: 'monthly',
    },
    {
        heading: 'Individual Counseling',
        button: 'Book Now',
        description: 'One-on-one sessions to address personal mental health concerns',
        features: [
            'Confidential sessions with licensed counselor',
            'Personalized coping strategies',
            'Progress tracking and follow-ups'
        ],
        category: 'monthly',
    },
    {
        heading: 'Marital/Family Counseling',
        button: 'Book Now',
        description: 'Supportive sessions for couples and families to improve relationships',
        features: [
            'Sessions focused on communication and conflict resolution',
            'Tools to strengthen family dynamics',
            'Custom follow-up plan for family progress'
        ],
        category: 'monthly',
    },
    {
        heading: 'Remedial Teaching',
        button: 'Book Now',
        description: 'Specialized teaching sessions to support academic needs',
        features: [
            'Customized teaching methods for individual learning needs',
            'Progress monitoring',
            'Resources for continued learning at home'
        ],
        category: 'monthly',
    },
    {
        heading: 'Aptitude Testing',
        button: 'Book Now',
        description: 'Comprehensive assessment with yearly progress reviews',
        features: [
            'Annual review of aptitude growth',
            'Career and educational guidance',
            'Yearly report and action plan'
        ],
        category: 'yearly',
    },
    {
        heading: 'Individual Counseling',
        button: 'Book Now',
        description: 'Extended support and regular check-ins over the year',
        features: [
            'Monthly personal progress assessments',
            'Access to specialized resources',
            'Year-round support'
        ],
        category: 'yearly',
    }
];

const Manage = () => {
    const [enabled, setEnabled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('monthly');

    const toggleEnabled = () => {
        setEnabled(!enabled);
        setSelectedCategory(enabled ? 'monthly' : 'yearly');
    }

    const filteredData = names.filter(items => items.category === selectedCategory);

    return (
        <div id="services-section">
            <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-center text-4xl sm:text-65xl font-black'>
                    Supportive Counseling <br /> for a healthier mind and a brighter future
                </h3>

                <div className='md:flex md:justify-around mt-20'>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Appointments beforehand</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Flower Medicines</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Remedial Teaching</h4>
                    </div>
                </div>

                <div className='mt-6 relative'>
                    <div className='dance-text mb-5'></div>
                    <Image src="/images/manage/toggle.svg" alt="toggle-image" width={24} height={24} className="toggleImage" />
                    <div className='flex justify-center'>
                        <h3 className='text-sm font-medium mr-5'>In-person services</h3>
                        <Switch
                            checked={enabled}
                            onChange={toggleEnabled}
                            className={`${enabled ? 'bg-darkpurple' : 'bg-darkpurple'} relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span className="sr-only text-black">Enable notifications</span>
                            <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
                        </Switch>
                        <h3 className='text-sm font-medium ml-5'>Online Services</h3>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage'>
                    {filteredData.map((items, i) => (
                        <div className='manageTabs text-center p-10' key={i}>
                            <h4 className='text-2xl font-bold mb-3'>{items.heading}</h4>
                            <p className='text-sm font-medium text-darkgrey mb-6'>{items.description}</p>
                            <button className='text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6'>
                                {items.button}
                            </button>
                            <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
                            {items.features.map((feature, index) => (
                                <h3 key={index} className='text-sm font-medium text-darkgrey mb-3'>{feature}</h3>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Manage;
