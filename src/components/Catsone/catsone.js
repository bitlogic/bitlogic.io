import React from "react"
import Helmet from "react-helmet"
import "./catsone.scss"

const Catsone = () => {
    return (
        <>
            <div id="cats-portal-widget" className="container widget-container"></div>
            <Helmet>
                <script>
                    {`window.cjw=window.cjw||function(){(cjw.instance=cjw.instance||[]).push(arguments[0])};
                        cjw({"id":91646,"domain":"catsone.com","target":"#cats-portal-widget"});`}
                </script>
                <script
                    async
                    src="https://app.catsone.com/resources/entry-jobwidget.js"
                ></script>
            </Helmet>
        </>
    )
}

export default Catsone
