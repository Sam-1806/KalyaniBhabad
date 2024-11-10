const Beliefs = () => {
    return (
        <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5'>

                {/* COLUMN-1 */}

                <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">OUR MISSION</h2>
                    <h3 className="text-4xl sm:text-65xl font-bold text-white leading-snug mb-5 text-center sm:text-start">To provide <span className="text-grey">a safe and supportive environment</span></h3>
                    <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">where individuals and families can explore their challenges and achieve personal growth. We are committed to promoting mental health and emotional well-being through accessible and compassionate counseling services tailored to meet the unique needs of each client.</h5>
                    <div className="text-center sm:text-start">
                        <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Get Started</button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className="bg-build pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-blue tracking-widest mb-5 text-center sm:text-start">OUR APPROACH</h2>
                    <h3 className="text-4xl sm:text-65xl font-bold text-black leading-snug mb-5 text-center sm:text-start"><span className="text-blue">Rooted in</span> empathy and collaboration.</h3>
                    <h5 className="bluish pt-2 mb-5 text-center sm:text-start">We believe in the power of understanding and connection, working closely with clients to create personalized treatment plans. By integrating various therapeutic modalities, we empower individuals and families to navigate life&apos;s challenges, enhance their coping skills, and foster resilience. Our dedicated team is here to support you every step of the way.</h5>
                    <div className="text-center sm:text-start">
                        <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Learn more</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Beliefs;
