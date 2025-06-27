import React from "react"
import { useBlog } from "../../hooks"
import BlogGrid from "./BlogGrid/BlogGrid"
import BlogArticle from "./BlogArticle/BlogArticle"
import Seo from "../Seo/Seo"
import "./BlogContainer.scss"
import Layout from "../layout"
import Banner from "../Banner/Banner"

const Blog = () => {
  const blogData = useBlog()
  const categorias = blogData?.allStrapiBlogCategory?.nodes || []
  const articulos = blogData?.allStrapiArticle?.nodes || []
  const { seo, banner } = blogData?.allStrapiBlogPage?.nodes?.[0] || {}
  const callToAction = blogData?.allStrapiBlogPage?.callToActionArticle

  // Agrupa artículos destacados por categoría (máximo 3 por categoría)
  const articulosDestacadosPorCategoria = categorias.map(categoria => {
    const destacados = articulos
      .filter(articulo =>
        articulo?.blog_category?.name === categoria.name &&
        articulo?.Destacado === true
      )
      .slice(0, 3)

    return {
      categoria: categoria.name,
      articulos: destacados,
    }
  }).filter(grupo => grupo.articulos.length > 0) // Solo mostrar si hay destacados

  return (
    <Layout>
      <Seo
        title={seo.pageTitle}
        description={seo.pageDescription}
        keywords={seo.pageKeywords}
      />
      <Banner data={banner} />

      <div className="blog__container container">
        {articulosDestacadosPorCategoria.map(({ categoria, articulos }) => (
          <BlogGrid key={categoria} title={categoria}>
            {articulos.map(item => (
              <BlogArticle
                key={item.id}
                image={item?.image || item?.imagePage}
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



