import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';

const Contact = () => {

  const { t, i18n } = useTranslation()

    useEffect(()=>{
        Aos.init({duration: 2500});
      },[])
    
      const [data, setData] = useState({
        username: '',
        email: '',
        message: ''
      })

      console.log(data);
    
      const refForm = useRef();
    
      const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value })
      }

      const messageSuccess = i18n.language == 'en' ?  'Your message has been successfully sent!' : '¡Su consulta ha sido enviada con éxito!'
      const messageError = i18n.language == 'en' ?  'Your message could not be sent' : 'No se ha podido enviar su consulta'
    
      const handleSubmit = (e) => {
          e.preventDefault();
    
          const serviceId = 'service_1e58job'
          const templateId = 'template_d2dy5qd'
          const publicKey = '94sDCibUuaXwmSlcV'
    
          emailjs.sendForm(serviceId, templateId, refForm.current, publicKey, data)
            .then((result) => {
            Swal.fire({
              title: messageSuccess,
              icon: 'success',
            })
            console.log(result.text);
            }, () => {
              Swal.fire({
                title: messageError,
                icon: 'error',
              })
            });
          setData({
            username: '',
            email: '',
            message: ''
          })
      }

    return (
        <div className='px-8 pt-10 lg:pt-24 relative'>
          <div className="flex justify-center items-center">
            <h2 className="text-2xl text-palette-500 font-bold border-b-2 rounded-lg border-palette-500 xl:text-4xl w-max">{t("contactTitle")}</h2>
          </div>
            <section className='flex flex-col justify-center items-center gap-5 pt-10 xl:pt-16 lg:flex-row'>
                <div className='z-10 hidden lg:w-[35rem] lg:flex lg:justify-center lg:items-center' >
                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1707276815/Portfolio%20FR/chat-monochromatic_sxd0zj.svg" alt="" className='w-[25rem]'/>
                </div>
                <div className="bg-accent rounded-lg p-8 shadow-lg max-w-sm lg:w-1/3 z-10">
                    <form ref={refForm} onSubmit={handleSubmit}>
                      <h2 className='text-center text-xl font-semibold'>{t("consult")}</h2>
                    <div className="mb-4 pt-5">
                        <label
                        htmlFor="username"
                        className="block text-white text-sm font-semibold mb-2"
                        >
                        {t("name")}
                        </label>
                        <input
                        type="text"
                        name='username'
                        id="username"
                        value={data.username}
                        onChange={handleChange}
                        className="form-input w-full px-2 py-2 border text-gray-700 focus:outline-none focus:ring-2 focus:ring-palette-600 rounded-lg"
                        required
                        placeholder={t("placeholderName")}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                        htmlFor="email"
                        className="block text-white text-sm font-semibold mb-2"
                        >
                        {t("email")}
                        </label>
                        <input
                        type="email"
                        name='email'
                        id="email"
                        value={data.email}
                        onChange={handleChange}
                        className="form-input w-full px-2 py-2 border text-gray-700 focus:outline-none focus:ring-2 focus:ring-palette-600 rounded-lg"
                        required
                        placeholder={t("placeholderMail")}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                        htmlFor="message"
                        className="block text-white text-sm font-semibold mb-2"
                        >
                        {t("message")}
                        </label>
                        <textarea
                        name='message'
                        id="message"
                        value={data.message}
                        onChange={handleChange}
                        className="form-input w-full p-2 border text-gray-700 focus:outline-none focus:ring-2 focus:ring-palette-600 rounded-lg"
                        placeholder={t("placeholderMessage")}
                        required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full font-bold bg-destructive rounded-lg text-white py-2 transform hover:scale-105 duration-300 hover:opacity-80 shadow-sombra-btn-proyects"
                    >
                        {t("send")}
                    </button>
                    </form>
                </div>
            </section>
            
        </div>
    );
};

export default Contact;