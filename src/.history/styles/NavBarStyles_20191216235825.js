import sizes from "./sizes" 

export default {
    slider: {
        width: "340px",
        margin: "0 10px",
        display: "inline-block",
        "& .rc-slider-track": {
            backgroundColor: "black !important",
        },
        [sizes.down("xs")]
    },
    NavBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh",
    },
    
    logo: {
        marginRight: "15px",
        padding: "0 30px",
        fontSize: "22px",
        backgroundColor: "#ECEFF1",
        fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "black",
        },
        [sizes.down("xs")]:{
            display: "none",
        }
    },
    selectContainer: {
        marginLeft: "auto",
        marginRight: "1rem",

    },
}