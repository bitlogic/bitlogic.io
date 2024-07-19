import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./../components/HomePage/HomeContainer/HomeContainer"
import PropTypes from "prop-types"
import "../styles/typography.css";

const IndexPage = ({location}) => <Home location={location} />

IndexPage.propTypes = {
    location: PropTypes.object.isRequired
}


export default IndexPage
