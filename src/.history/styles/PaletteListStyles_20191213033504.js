export default {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        width: "70%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: 'wrap',
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
      gridGap: "5%"
    }

}