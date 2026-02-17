import Image from "next/image";


const index = () => {
    return (
        <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 mt-5'>
            <h2 className="text-4xl sm:text-65xl font-bold text-center">We belive you deserve <br /> only the best.</h2>
            <h3 className="text-2xl font-medium text-center pt-10 opacity-50">We are dedicated to providing compassionate, evidence-based care to support your mental health <br /> and well-being at every step.</h3>
            <div className='grid grid-cols-1 my-16 justify-items-center'>
                <Image src="/images/team/image1.png" alt="office-image" height={384} width={696} />
            </div>
        </div>
    )
}

export default index;
