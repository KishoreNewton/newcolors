export default {
    root: {
        backgroundColor: "blue",
        height: "135vh !important",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        height: "100%",
        width: "70%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: 'wrap',
    },
    nav: {
      display: "flex",
      width: "100%",
      color: "white"
      justifyContent: "space-between",
      alignItems: "center"
    },
    palettes: {
      boxSizing: "border-box",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(3, 30%)",
      gridGap: "5%"
    }

}
