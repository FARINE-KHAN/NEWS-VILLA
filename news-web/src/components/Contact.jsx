
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from './NavBar';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9k0jijd', 'template_ybkop7a', form.current, 'k3JwP9f9E0yiM9Aj9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (<>
  <NavBar/>
    <section className="bg-gray-900">
       <div className="py-[7rem] px-4  lg:px-4 mx-auto max-w-screen-md">
   <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
    <form ref={form} onSubmit={sendEmail}  className="space-y-8" >
      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" placeholder="Your Name..." >Name</label>
      <input type="text" name="to_name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"  />
      <label className="block mb-2 text-sm font-medium text-gray-300">Email</label>
      <input type="email" name="user_email" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="name@gmail.com" />
      <label className="block mb-2 text-sm font-medium  text-gray-300">Message</label>
      <textarea name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."/>
      <input type="submit" value="Send" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800" />
    </form>
    </div>
    </section></>
  );
};

































// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// import NavBar from './NavBar'

// const Contact = () => {

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_9k0jijd', 'template_ybkop7a', form.current, 'k3JwP9f9E0yiM9Aj9')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//     }

//   return (<>
//   <NavBar/>
//     <section className="bg-white bg-gray-900">
//     <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
//         <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 text-white">Contact Us</h2>
//         <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
//         <form action="#" className="space-y-8" ref={form} onSubmit={sendEmail}>
//             <div>
//                 <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >Name</label>
//                 <input type="text" name="user_name"  required/>
//             </div>
//             <div>
//                 <label for="email" >Email</label>
//                 <input type="email" name="user_email"  required/>
//             </div>
//             <div className="sm:col-span-2">
//                 <label for="message" >Your message</label>
//                 <textarea id="message"  name="message" ></textarea>
//             </div>
//             <input type="submit" value="Send message"  />
//         </form>
//     </div>
//   </section></>
//   )
// }

 export default Contact