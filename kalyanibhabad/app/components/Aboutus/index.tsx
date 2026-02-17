import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string | string[];
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "About us",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: [
      "Maitra provides a safe, supportive space for children, adolescents, and families.",
      "Led by Psychologist Kalyani Bhabad, we help families navigate challenges with empathy.",
      "Our approach empowers individuals to build resilience and reach their potential.",
      "We offer personalized, evidence-based support tailored to each client’s needs."
    ],
        link: 'Learn more'
    },
    {
        heading: "Services",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: [
      "Child & Adolescent Counseling: Guidance for emotional, behavioral, and academic challenges.",
      "Family Therapy: Strengthening communication and resolving conflicts.",
      "Parenting Support: Practical strategies to build positive parent-child relationships.",
      "Individual Therapy: Personalized support for stress, anxiety, and personal growth.",
      "Educational & Career Guidance: Helping adolescents explore suitable paths."
    ],
        link: 'Learn more'
    },
]

const Aboutus = () => {
    return (
        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>ABOUT US</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Know more about us.</h4>
                {/* Modified grid and gap to make blocks wider */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 my-16 gap-x-8 lg:gap-x-16'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-12 px-10 pb-12 shadow-xl group'>
                            <h4 className='text-4xl font-semibold text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={120} height={120} className="mb-5" />
                            {Array.isArray(item.paragraph) ? (
                                <div className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>
                                    {item.paragraph.map((line, index) => (
                                        <p key={index}>{line}</p>
                                    ))}
                                </div>
                            ) : (
                                <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                            )}
                            <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Aboutus;
