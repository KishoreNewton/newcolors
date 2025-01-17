import sizes from "./sizes" 

export default {
    Palette: {
        height: "100vh",
        display:  "flex",
        flexDirection: "column",
        overflow: 'hidden',
    },
    colors: {
        height: "94.9%",
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.9px",
        opacity: "1",
        backgroundColor: "white",
        "&a": {
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            left: "50%",
            marginLeft: "-50px",
            marginTop: "-15px",
            textAlign: "center",
            outline: "none",
            background: "rgba(255, 255, 255, 0.3)",
            fontSize: "1rem",
            lineHeight: "30px",
            textTransform: "uppercase",
            border: "none",
            cursor: "pointer",
        },
        [sizes.down("xs")]: {
            width: "25%",
            height: "33.33%",
        },
        [sizes.down("md")]: {
            width: "50%",
            height: "20%",
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "33.333%",
        },
    }
}