import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: ''});
    const { name, email, subject, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };    

    return (
        <div class="container contact-form d-flex justify-content-center mt-5">
            <div class="w-50 mb-4">
                <h2 class="h1-responsive font-weight-bold text-center my-4">Contact me </h2>
                <p class="text-center w-responsive mx-auto mb-5">Have any questions? Do not hesitate to contact me directly. I will get back to you within
                    a matter of hours to help.</p>
                <div class="row">
                    <div class="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" onSubmit={handleSubmit}>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" name="name" class="form-control" defaultValue={name} onChange={handleChange} />
                                        <label htmlFor="name">Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="email" name="email" class="form-control" defaultValue={email} onChange={handleChange} />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <input type="text"  id="subject" name="subject" class="form-control" defaultValue={subject} onChange={handleChange} />
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" defaultValue={message}></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center text-md-left">
                                <button className="btn btn-secondary" type="submit">Submit</button>
                            </div>
                            <div class="status"></div>
                        </form>
                    </div>
                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                <p>Toronto, Canada</p>
                            </li>
                            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                <p>+1 416 669 7451</p>
                            </li>
                            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                <p>raposo.ryan@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Contact;