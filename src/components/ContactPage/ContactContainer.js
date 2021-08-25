import * as React from "react"
import { useContactPage } from "../../hooks/index"
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { useForm } from "react-hook-form";
import MarkdownView from 'react-showdown';
import "./Contact.scss"

import Layout from "../../components/layout"

import { Seo } from "../index"

const Contact = () => {

  const contactData = useContactPage()


  const contactImage = contactData.allStrapiContactPage.nodes[0].image
  const title = contactData.allStrapiContactPage.nodes[0].title

  const image = getImage(contactImage);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  // console.log({ errors })

  return (
    <Layout>
      <Seo />
      <div className="contact">
        <div className="contact__group">
          <div className="contact__title">
            <MarkdownView markdown={title} />
          </div>
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="contactForm"
          >
            
            <input 
              className="contactForm__input"
              type="text"
              placeholder="Nombre"
              {...register("name", { required: true, maxLength: 50 })}
            />
          
            <input 
              className="contactForm__input"
              type="text"
              placeholder="Apellido"
              {...register("lastName", { required: true, maxLength: 50 })}
            />

            <input 
              className="contactForm__input"
              type="text"
              placeholder="Correo"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />

            <input 
              className="contactForm__input"
              type="text"
              placeholder="Institución"
              {...register("institution", { required: true, maxLength: 50 })}
            />      

            <input type="submit" value="Enviar" className="contactForm__inputSubmit" />
          </form>
        </div>
            <GatsbyImage 
              className="contact__image"
              image={image} 
              // alt={} 
            />

        


      </div>
     

    </Layout>
    )
}

export default Contact
