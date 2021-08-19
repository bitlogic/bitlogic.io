import * as React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { useForm } from "react-hook-form";
import "./Contact.scss"

import Layout from "../../components/layout"

import { Seo } from "../index"

const Contact = ({image}) => {

  // const image = getImage(image);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  console.log({ errors })

  return (
    <Layout>
      <Seo />
      <div className="contact">
        <div className="contact__group">
          <h2 className="contact__title">Te invitamos a <span><p>CREAR</p></span></h2>
        {/* <BannerBgImage
            key={idx}
            title={section.title}
            banner={section.banner}
          /> */}
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
        <div className="contact__image"></div>
        

          {/* <div>
            <GatsbyImage 
              image={image} 
              // alt={} 
            />
          </div> */}
      </div>
     

    </Layout>
    )
}

export default Contact
