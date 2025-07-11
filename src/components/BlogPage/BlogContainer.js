// src/components/BlogContainer/BlogContainer.js

import React from "react"
import { useBlog } from "../../hooks"
import BlogGrid from "./BlogGrid/BlogGrid"
import BlogArticle from "./BlogArticle/BlogArticle"
import Seo from "../Seo/Seo"
import Layout from "../layout"
import Banner from "../Banner/Banner"
import "./BlogContainer.scss"

const Blog = () => {
  const { allStrapiBlogCategory, allStrapiArticle, allStrapiBlogPage } = useBlog()
  const categorias = allStrapiBlogCategory.nodes
  const articulos = allStrapiArticle.nodes
  const { seo, banner } = allStrapiBlogPage.nodes[0] || {}
  const callToAction = allStrapiBlogPage.nodes[0]?.callToActionArticle

  // Para cada categoría, tomo los primeros 3 artículos sin lógica de destacados
  const articulosPorCategoria = categorias
  .map(categoria => {
    const articulosCat = articulos
      .filter(art => art.blog_category?.slug === categoria.slug)
      .sort((a, b) => {
        // Primero los destacados (true = 1, false = 0)
        if (a.destacado !== b.destacado) {
          return a.destacado ? -1 : 1
        }

        // Si ambos son igual en destacado, ordenar por fecha (más nuevo primero)
        const fechaA = new Date(a.publishedAt)
        const fechaB = new Date(b.publishedAt)
        return fechaB - fechaA
      })  // <-- cierra el sort

    return {
      name: categoria.name,
      slug: categoria.slug,
      items: articulosCat.slice(0, 3),  // Tomar solo los primeros 3
    }
  })  // <-- cierra el map
  .filter(grupo => grupo.items.length > 0)  // <-- cierra el filter


  return (
    <Layout>
      <Seo
        title={seo?.pageTitle}
        description={seo?.pageDescription}
        keywords={seo?.pageKeywords}
      />
      <Banner data={banner} />

      <div className="blog__container container">
        {articulosPorCategoria.map(({ name, slug, items }) => (
          <BlogGrid
            key={slug}
            title={name}
            viewAllHref={`/blog/${slug.toLowerCase()}`}  // ruta actualizada
          >
            {items.map(item => (
              <BlogArticle
                key={item.id}
                image={item.image || item.imagePage}
                title={item.title}
                summary={item.summary}
                slug={`/blog/${item.slug}`}
                text={callToAction}
              />
            ))}
          </BlogGrid>
        ))}
      </div>
    </Layout>
  )
}

export default Blog


