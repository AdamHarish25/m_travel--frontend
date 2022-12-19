import vector from '../../Attachments/Image/unsupportDevice.png'

const MobileWarning = () => {
    const className = {
        container: "w-screen h-screen grid place-items-center font-Poppins",
        innerContainer: "space-y-5 text-center",
        paragraph: "font-bold text-gray-500",
        highlighted: "font-black",
        img: "object-cover w-full h-auto",
    }

    return (
        <div className={ className.container }>
            <div className={ className.innerContainer }>
                <img className={className.img} src={ vector } alt="Your device does not meet the requirements to open this website" title='Your device does not meet the requirements to open this website' />
                <p className={ className.paragraph }>
                    To open this website requires: <br /> <span className={ className.highlighted }>Ipad/Tablet(Tilted Mode)</span> or a <span className={ className.highlighted }>Desktop</span>
                </p>
            </div>
        </div>
    )
};

export default MobileWarning