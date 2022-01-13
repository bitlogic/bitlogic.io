import React from 'react'
import Layout from '../layout'
import Helmet from 'react-helmet'
import { useJobsPage } from '../../hooks'
import MarkdownView from "react-showdown"
import './JobsPage.scss'

export default function JobsPage() {
    const jobsData = useJobsPage()
    const banner = jobsData.strapiJobsPage.banner
    
    return (
        <Layout>
            <MarkdownView markdown={banner} className="banner__head" />
            <div id="cats-portal-widget" className="container widget-container"></div>
            <Helmet>
                <script>
                    {`window.cjw=window.cjw||function(){(cjw.instance=cjw.instance||[]).push(arguments[0])};
                    cjw({"id":91646,"domain":"catsone.com","target":"#cats-portal-widget"});`}
                </script>
                <script
                    async
                    src="https://app.catsone.com/resources/entry-jobwidget.js">
                </script>
            </Helmet>

        </Layout>
    )
}

//Pasar lo que esta dentro helmet a strapi. crear otro campo para helmet
