import React, {useState, useRef} from "react";
import emailjs from 'emailjs-com';


const Contacts = () =>{
    const [messageSent, setMessageSend] = useState(false);

    ///EmailJS
    const SERVICE_ID = "service_gw6ne74";
    const TEMPLATE_ID = "template_m3xzn5b";
    const PUBLIC_KEY = "C15qdSoa4uKPXaYGT";

    function sendMessage(){
        // emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY)
        //     .then((result) => {
        //         console.log(result.text);
        //         alert('Message Sent Successfully')
        //     }, (error) => {
        //         console.log(error.text);
        //         alert('Something went wrong!')
        //     });
        setMessageSend(true);
    }
    const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //
    //     emailjs
    //         .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY) // Pass public key as the 4th argument
    //         .then(
    //             () => {
    //                 console.log('SUCCESS!');
    //             },
    //             (error) => {
    //                 console.log('FAILED...', error.text);
    //             },
    //         );
    // };

    // const ContactForm = () => {
    //     const handleOnSubmit = (e) => {
    //         e.preventDefault();
    //         emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
    //             .then((result) => {
    //                 console.log(result.text);
    //                 alert('Message Sent Successfully')
    //             }, (error) => {
    //                 console.log(error.text);
    //                 alert('Something went wrong!')
    //             });
    //         e.target.reset()
    //     };
    // }
    return(
        <div className="p-5 flex flex-col gap-4">
            {messageSent &&
                <div className="bg-secondary rounded-lg text2 p-3 text-accent text-center">Žinutė išsiųsta sėkmingai.
                    Susisieksime su Jumis artimiausiu metu!
                </div>
            }
            {/*<div>*/}
            {/*    <form ref={form} onSubmit={sendEmail}>*/}
            {/*        <label>Name</label>*/}
            {/*        <input type="text" name="user_name"/>*/}
            {/*        <label>Email</label>*/}
            {/*        <input type="email" name="user_email"/>*/}
            {/*        <label>Message</label>*/}
            {/*        <textarea name="message"/>*/}
            {/*        <input type="submit" value="Send"/>*/}
            {/*    </form>*/}
            {/*</div>*/}
            <div className="w-full h-auto  bg-secondary rounded-lg flex flex-col text2 text-accent shadow-2xl p-5 ">
                <div className="text-2xl text-center">SUSISIEKITE DABAR!</div>
                <div className=" flex flex-col items-center mt-10 gap-5 ">
                    <input className="w-full h-[40px] rounded-lg p-3" placeholder="El.paštas" type="text" required/>
                    <input className="w-full h-[40px] rounded-lg p-3" placeholder="Vardas ir pavardė" type="text"/>
                    <input className="w-full h-auto rounded-lg p-3" placeholder="Jūsų žinutė" type="text"/>
                    <button onClick={()=>sendMessage()}
                            className="p-3 w-[200px] bg-accent text2 text-secondary rounded">Siųsti</button>
                </div>


            </div>

            {/* WORKERS*/}
            <div className="w-full h-[200px] bg-secondary rounded-lg flex gap-2 text2 text-accent shadow-2xl p-5 ">
                <div className=" flex items-center ">
                    <img className=" rounded h-[150px] w-[150px] "
                         src="https://media.istockphoto.com/id/1332100919/sv/vektor/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=nZXNRgFBEnAqMdV7fYbVeWHfz20FCZzpEypOGka8vSg="
                         alt=""/>
                </div>
                <div className="flex flex-col gap-6 mt-2 ml-4">
                    <div className="  text3 ">Įmonės savininkas</div>
                    <div>Vidmantas Nikša</div>
                    <div>Tel. numeris: <span className="text tracking-wide">+37068648728</span></div>
                </div>
            </div>
            <div className="w-full h-[200px] bg-secondary rounded-lg flex gap-2 text2 text-accent shadow-2xl p-5 ">
                <div className=" flex items-center ">
                    <img className=" rounded h-[150px] w-[150px] "
                         src="https://media.istockphoto.com/id/1332100919/sv/vektor/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=nZXNRgFBEnAqMdV7fYbVeWHfz20FCZzpEypOGka8vSg="
                         alt=""/>
                </div>
                <div className="flex flex-col gap-6 mt-2 ml-4">
                    <div className="  text3 ">Pozicija</div>
                    <div>Vardas pavardė</div>
                    <div>Tel. numeris: <span className="text tracking-wide">+37011111111</span></div>
                </div>
            </div>
            <div className="w-full h-[200px] bg-secondary rounded-lg flex gap-2 text2 text-accent shadow-2xl p-5 ">
                <div className=" flex items-center ">
                    <img className=" rounded h-[150px] w-[150px] "
                         src="https://media.istockphoto.com/id/1332100919/sv/vektor/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=nZXNRgFBEnAqMdV7fYbVeWHfz20FCZzpEypOGka8vSg="
                         alt=""/>
                </div>
                <div className="flex flex-col gap-6 mt-2 ml-4">
                    <div className="  text3 ">Pozicija</div>
                    <div>Vardas pavardė</div>
                    <div>Tel. numeris: <span className="text tracking-wide">+37011111111</span></div>
                </div>
            </div>
        </div>
    )
}

export default Contacts