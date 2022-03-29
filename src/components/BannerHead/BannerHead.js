import React from "react"
import "./BannerHead.scss"
import MarkdownView from "react-showdown"

const BannerHead = ({ data }) => {
    console.log(data)
    const title = data?.title
    return (
        <div class="banner">
            {title && (
                <MarkdownView markdown={title} />
            )}
        </div>
    )
}

export default BannerHead
