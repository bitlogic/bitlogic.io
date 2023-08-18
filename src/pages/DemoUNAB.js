import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/typography.css";

const DemoUNAB = () => {
    return (

        <div style={{
            width: "100vw",  // El 100vw ocupa el 100% del ancho de la ventana
            height: "100vh", // El 100vh ocupa el 100% de la altura de la ventana
            overflow: "hidden", // Para evitar barras de desplazamiento
        }}>
            <iframe
                src="http://18.230.192.64:8501/"
                title={"Demo UNAB"}
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                webkitallowfullscreen='true'
                mozallowfullscreen='true'
                allowFullScreen
                width="100%"
                height="100%"
            />
        </div>

    )
}

export default DemoUNAB