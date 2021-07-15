import * as React from "react"
import { Link } from "gatsby"
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

          {/* <div>
            <GatsbyImage 
              image={image} 
              // alt={article.title} 
            />
          </div> */}
      </div>
     

    </Layout>
    )
}

export default Contact
