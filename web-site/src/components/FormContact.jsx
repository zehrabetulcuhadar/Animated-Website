import React, { useState } from 'react'
import './FormStyle.css'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { motion } from 'framer-motion';

const FormContact = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="center-container">
      <div className="letter">
        <div className='form-and-img-container'>
        <motion.div 
        className={`form-container ${isFormVisible ? 'visible' : ''}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isFormVisible ? 1 : 0, y: isFormVisible ? 0 : 100 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        onClick={toggleFormVisibility}
        >
          <div className="form-header">
            <h2>Send Message</h2>
          </div>

          <div className="message-form">
            <Formik
              initialValues={{
                name: '',
                surname: '',
                email: '',
                message: '',
              }}
              validationSchema={
                Yup.object({
                  name: Yup.string().required('İsim boş bırakılamaz !'), 
                  surname: Yup.string().required('Soyad boş bırakılamaz !'),
                  email: Yup.string().email().required('Email boş bırakılamaz !'), 
                  message: Yup.string().required('Lütfen mesajınızı yazın !'),
                })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log(values); 
                setTimeout(() => {
                  setSubmitting(false); 
                  resetForm(); 
                }, 2000); 
              }}
            >
              {({
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleSubmit,
                handleReset,
                handleChange,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <label htmlFor="name">İsim</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="İsminiz..."
                    className="input"
                    value={values.name}
                    onChange={handleChange}
                  />
                  {errors.name && touched.name && (
                    <div className="input-feedback">{errors.name}</div>
                  )}

                  <label htmlFor="surname">Soyad</label>
                  <input
                    id="surname"
                    type="text"
                    placeholder="Soyadınız.."
                    className="input"
                    value={values.surname}
                    onChange={handleChange}
                  />
                  {errors.surname && touched.surname && (
                    <div className="input-feedback">{errors.surname}</div>
                  )}

                  <label htmlFor="email" className="topMargin">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="ornek@gmail.com"
                    className="input"
                    value={values.email}
                    onChange={handleChange}
                  />

                  <label htmlFor="message" className="topMargin">
                    Mesajınız
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    placeholder="Mesajınızı yazın..."
                    className="input"
                  />
                  {errors.message && touched.message && (
                    <div className="input-feedback">{errors.message}</div>
                  )}

                  <motion.button
                    type="submit"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 90 
                    }}
                    whileTap={{ scale: 0.8,
                      rotate: -90,
                      borderRadius: '100%' 
                    }}
                  >
                    Gönder
                  </motion.button>
                </Form>
              )}
            </Formik>
          </div>
        </motion.div>
        <motion.img
          src="img/letter2.png" 
          alt="Mektup"
          className={`letter-image ${isFormVisible ? 'visible' : ''}`}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: isFormVisible ? 0 : 1, y: isFormVisible ? 0 : 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          onClick={toggleFormVisibility}
        />
        </div>
      </div>
    </div>
  )
}

export default FormContact