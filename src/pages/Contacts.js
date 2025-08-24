import React, {useState, useRef} from "react";
import emailjs from 'emailjs-com';


const Contacts = () =>{
    const [messageSent, setMessageSend] = useState(false);
    const [error, setError] = useState(null);

    ///EmailJS
    const SERVICE_ID = "service_gw6ne74";
    const TEMPLATE_ID = "template_m3xzn5b";
    const PUBLIC_KEY = "C15qdSoa4uKPXaYGT";

    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();

    function sendMessage(){
        setError(null)
        setMessageSend(false);
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if( emailRef.current.value.length === 0 || nameRef.current.value.length === 0 || messageRef.current.value.length === 0 ){
            return setError("Privaloma užpildyti visus laukus.")
        }

        if(!regex.test(emailRef.current.value)){
            return setError("Suveskite teisingą el.paštą.")
        }

        const formData = {
            user_email: emailRef.current.value,
            user_name: nameRef.current.value,
            message: messageRef.current.value,
        };

        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
            .then(
                (result) => {
                    if(result.text === "OK"){
                        setMessageSend(true);
                    }
                },
                (error) => {
                    console.log(error.text);
                }
            );


    }

    return(
        <div className="p-5 flex flex-col gap-4">
            {messageSent &&
                <div className="bg-secondary rounded-lg text2 p-3 text-accent text-center">Žinutė išsiųsta sėkmingai.
                    Susisieksime su Jumis artimiausiu metu!
                </div>
            }
            {error &&
                <div className="bg-secondary rounded-lg text2 p-3 text-red-400 text-center">
                    {error}
                </div>
            }
            <div className="w-full h-auto  bg-secondary rounded-lg flex flex-col text2 text-accent shadow-2xl p-5 ">
                <div className="text-2xl text-center">SUSISIEKITE DABAR!</div>
                <div className=" flex flex-col items-center mt-10 gap-5 ">
                    <input ref={emailRef} className="w-full h-[40px] rounded-lg p-3" placeholder="El.paštas" type="text"
                           required/>
                    <input ref={nameRef} className="w-full h-[40px] rounded-lg p-3" placeholder="Vardas ir pavardė"
                           type="text"/>
                    <input ref={messageRef} className="w-full h-auto rounded-lg p-3" placeholder="Jūsų žinutė"
                           type="text"/>
                    <button onClick={() => sendMessage()}
                            className="p-3 w-[200px] bg-accent text2 text-secondary rounded">Siųsti
                    </button>
                </div>


            </div>

            {/* WORKERS*/}
            <div className="w-full h-auto bg-secondary rounded-lg flex gap-2 text2 text-accent shadow-2xl p-5 ">
                <div className=" flex items-center ">
                    <img className=" rounded h-[150px] w-[150px] "
                         src="https://media.istockphoto.com/id/1332100919/sv/vektor/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=nZXNRgFBEnAqMdV7fYbVeWHfz20FCZzpEypOGka8vSg="
                         alt=""/>
                </div>
                <div className="flex flex-col gap-6 mt-2 ml-4">
                    <div className="  text3 ">Vadovas</div>
                    <div>Vidmantas Nikša</div>
                    <div>Tel. numeris: <span className="text tracking-wide">+37068648728</span></div>
                </div>
            </div>
            <div className="w-full h-auto bg-secondary rounded-lg flex gap-2 text2 text-accent shadow-2xl p-5 ">
                <div className=" flex items-center ">
                    <img className=" rounded h-[150px] w-[150px] "
                         src="https://media.istockphoto.com/id/1332100919/sv/vektor/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=nZXNRgFBEnAqMdV7fYbVeWHfz20FCZzpEypOGka8vSg="
                         alt=""/>
                </div>
                <div className="flex flex-col gap-6 mt-2 ml-4">
                    <div className="  text3 ">Vyr. buhalterė</div>
                    <div>Sandra Ilevičienė</div>
                    <div>Tel. numeris: <span className="text tracking-wide">+370 615 53711</span></div>
                </div>
            </div>
            <div className="w-full h-auto bg-secondary rounded-lg flex gap-2 text2 text-accent shadow-2xl p-5 ">
                <div className=" flex items-center ">
                    <img className=" rounded h-[150px] w-[150px] "
                         src="https://media.istockphoto.com/id/1332100919/sv/vektor/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=nZXNRgFBEnAqMdV7fYbVeWHfz20FCZzpEypOGka8vSg="
                         alt=""/>
                </div>
                <div className="flex flex-col gap-6 mt-2 ml-4">
                    <div className="  text3 ">Transporto vadybininkas</div>
                    <div>Vytautas Poškus</div>
                    <div>Tel. numeris: <span className="text tracking-wide">+370 611 10981</span></div>
                </div>
            </div>

            <div className="w-full h-auto bg-secondary rounded-lg flex gap-2 text2 text-accent shadow-2xl p-5 ">
                <div className=" flex items-center p-5 ">
                    <img className=" rounded h-[100px] w-[100px] "
                         src='./images/dark_justlogo.png'
                         alt=""/>
                </div>
                <div className="flex flex-col gap-6 mt-2 ml-4">
                    <div>UAB "Girile ir Ko"</div>
                    <div>Įmonės kodas: 302325732</div>
                    <div>PVM mokėtojo kodas: LT100004614215</div>
                    <div>Adresas: Gegužinės g. 43, Giedraičių k., Radviliškio r.</div>

                </div>
            </div>

            {/*<div className="text2 text-secondary">*/}
            {/*    <div>UAB "Girile ir Ko"</div>*/}
            {/*    <div>Įmonės kodas: 302325732</div>*/}
            {/*    <div>PVM mokėtojo kodas: LT100004614215</div>*/}
            {/*    <div>Adresas: Gegužinės g. 43, Giedraičių k., Radviliškio r.</div>*/}

            {/*</div>*/}

        </div>
    )
}

export default Contacts