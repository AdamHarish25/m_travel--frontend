import { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { IoIosSend } from 'react-icons/io';
import background from '../../Attachments/Image/TwistedPluses.png'
import DataEN from '../Data/LanguageEN';

const Subcription = () => {
    const [ email, setEmail ] = useState("");
    const Data = DataEN.Subcription

    const className = {
        container: "w-screen h-auto p-10 flex items-center justify-center relative z-10",
        background: "hidden xl:block absolute object-contain bottom-0 right-10 -z-[10]",
        card: {
            container: "w-auto h-auto py-32 px-40 font-Poppins bg-SwirlBG bg-cover bg-no-repeat bg-center bg-[#DFD7F9]/30 flex flex-col justify-center items-center gap-20 rounded-tl-[100px] relative",
            title: "font-medium text-3xl text-center text-[#5E6282]",
            form: "flex items-center gap-5",
            formInput: "flex items-center gap-3 text-black text-xl bg-white rounded-lg p-5",
            input: "outline-none placeholder-gray-500 bg-none text-sm w-[300px]",
            submitButton: "w-auto h-auto py-4 px-10 text-white bg-[#FF7D68] rounded-xl",
            decoration: "w-auto h-auto p-4 text-3xl rounded-full text-white bg-[#5E3BE1] absolute -top-5 -right-5",
        }
    };

    console.log(email)
    return (
        <div className={className.container}>
            <img src={ background } alt="pluses background" className={ className.background } />
            <div className={ className.card.container }>
                <div className={ className.card.decoration }>
                    <IoIosSend /> 
                </div>
                <h1 className={className.card.title}>
                    {Data.title}
                </h1>
                <form action={`mailto:ampmtamzil@gmail.com`} method={"GET"} className={className.card.form}>
                    <div className={className.card.formInput}>
                        <HiOutlineMail /> 
                        <input className={ className.card.input } type={"email"} placeholder={Data.placeholder} value={email} onChange={e => setEmail(e.target.email)} />
                    </div>
                    <button type={'submit'} className={className.card.submitButton} >Submit</button>
                </form>
            </div>
        </div>
    )
};

export default Subcription;