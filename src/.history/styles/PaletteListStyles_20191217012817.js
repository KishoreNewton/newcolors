import sizes from "./sizes"
import bg from "./bg.svg"
export default {
    root: {
        height: "100vh",
        overflow: "scroll",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#0d00ff";
        backgroundImage: `url(${bg})`
    },
    container: {
        width: "70%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: 'wrap',
        [sizes.down("xl")]:{
          width: "70 %",
        }
    },
    nav: {
      display: "flex",
      width: "100%",
      color: "white",
      justifyContent: "space-between",
      alignItems: "center",
      "& a": {
          color: "white",
          textDecoration: "none"
      }
    },
    palettes: {
      boxSizing: "border-box",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(3, 30%)",
      gridGap: "1.5rem",
      [sizes.down("md")]: {
        gridTemplateColumns: "repeat(2, 50%)",
      },
      [sizes.down("xs")]: {
        gridTemplateColumns: "repeat(1, 100%)",
      }
    }

}
