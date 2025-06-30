// src/components/BlogPage/BlogContainer.js
import React from "react"
import { useBlog } from "../../hooks"
import BlogGrid from "./BlogGrid/BlogGrid"
import BlogArticle from "./BlogArticle/BlogArticle"
import Seo from "../Seo/Seo"
import Layout from "../layout"
import Banner from "../Banner/Banner"
import "./BlogContainer.scss"

const Blog = () => {
  const blogData = useBlog()
  const categorias = blogData?.allStrapiBlogCategory?.nodes || []
  const articulos = blogData?.allStrapiArticle?.nodes || []
  const { seo, banner } = blogData?.allStrapiBlogPage?.nodes?.[0] || {}
  const callToAction = blogData?.allStrapiBlogPage?.callToActionArticle

  // Para cada categoría, tomar hasta 3 artículos (flag destacado opcional)
  const articulosPorCategoria = categorias
    .map(categoria => {
      // Filtrar artículos de esta categoría
      const articulosCat = articulos.filter(
        articulo => articulo.blog_category?.name === categoria.name
      )
      // Si hay flag 'destacado', priorizar; sino tomar primeros 3
      const destacados = articulosCat.some(a => a.destacado)
        ? articulosCat.filter(a => a.destacado).slice(0, 3)
        : articulosCat.slice(0, 3)

      return {
        categoria: categoria.name,
        slug: categoria.slug,
        articulos: destacados,
      }
    })
    .filter(grupo => grupo.articulos.length > 0)

  return (
    <Layout>
      <Seo
        title={seo.pageTitle}
        description={seo.pageDescription}
        keywords={seo.pageKeywords}
      />
      <Banner data={banner} />

      <div className="blog__container container">
        {articulosPorCategoria.map(({ categoria, slug, articulos }) => (
          <BlogGrid
            key={categoria}
            title={categoria}
            viewAllHref={`/blog/category/${slug}`}
          >
            {articulos.map(item => (
              <BlogArticle
                key={item.id}
                destacado={item.destacado}
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








