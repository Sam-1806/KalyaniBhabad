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
            "At Maitra, we believe in providing a safe, nurturing space where children, adolescents, and families can find guidance and support.",
            "Under the compassionate leadership of Psychologist Kalyani Bhabad, we are committed to helping families navigate life challenges.",
            "We focus on fostering resilience and empowering each individual to reach their fullest potential.",
            "Our center offers a range of services tailored to the unique needs of each client.",
            "From addressing childhood and adolescent concerns to supporting families through life transitions, our approach is rooted in empathy.",
            "We utilize evidence-based practices and a genuine dedication to mental well-being."
        ],
        link: 'Learn more'
    },
    {
        heading: "Services",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: [
            "Child Counseling: Support for children dealing with behavioral issues, anxiety, bullying, and emotional challenges.",
            "Adolescent Counseling: Guidance for teenagers facing academic pressure, self-esteem issues, and life transitions.",
            "Family Therapy: Strengthening family bonds through improved communication, conflict resolution, and mutual understanding.",
            "Parenting Support: Helping parents with strategies to manage challenges and build positive connections with their children.",
            "Individual Therapy: Personalized sessions for adults coping with stress, anxiety, depression, and personal growth.",
            "Educational and Career Guidance: Supporting adolescents in exploring educational paths and career options that align with their strengths and interests.",
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
