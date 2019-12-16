import sizes from "./sizes" 

const styles = {
    root: {
            width: "20%",
            height: "25%",
            margin: "0 auto",
            display: "inline-block",
            position: "relative",
            cursor: "pointer",
            marginBottom: "-3.9px",
            "&:hover svg": {
                color: "white",
                transform: "scale(1.3)"
            },
            [sizes.down("lg")]:{
                width: "25%",
                height: "20%",
            },
            [sizes.down("md")]:{
                width: "50%",
                height: "10%"
            },
            [sizes.down("md")]:{
                width: "50%",
                height: "10%"
            }
        },
        boxContent: {
            position: "absolute",
            width: "100%",
            left: "0px",
            bottom: "0px",
            padding: "10px",
            color: "rgba(0,0,0,0.5)",
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontSize: "12px",
            display: "flex",
            justifyContent: "space-between",
        },
        deleteIcon:{
            color: "black",
            transition: "all 0.3s ease-in-out"
        }
    }

    export default styles