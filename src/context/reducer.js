const theme = {
  default: {
    mainColor: "#eaeaea",
    secondaryColor: "#fff",
    borderColor: "#c1c1c1",
    mainText: "black",
    secondaryText: "#4b5156",
    themeDotBorder: "#24292e",
    previewBackground: "rgb(251, 249, 243, 0.8)",
    previewShadow: "#f0ead6",
    buttonColor: "black",
  },
  blue: {
    mainColor: "#15202B",
    secondaryColor: "#192734",
    borderColor: "#164D56",
    mainText: "#fff",
    secondaryText: "#eeeeee",
    themeDotBorder: "#FFF",
    previewBackground: "rgb(25, 39, 52, 0.8)",
    previewShadow: "#111921",
    buttonColor: "#17a2b8",
  },
  green: {
    mainColor: "#606B56",
    secondaryColor: "#515a48",
    borderColor: "#161914",
    mainText: "#fff",
    secondaryText: "#eeeeee",
    themeDotBorder: "#FFF",
    previewBackground: "rgb(81, 90, 72, 0.8)",
    previewShadow: "#2a2f25",
    buttonColor: "#669966",
  },
  purple: {
    mainColor: "#46344e",
    secondaryColor: "#382a3f",
    borderColor: "#1d1520",
    mainText: "#fff",
    secondaryText: "#eeeeee",
    themeDotBorder: "#FFF",
    previewBackground: "rgb(29, 21, 32, 0.8)",
    previewShadow: "#2b202f",
    buttonColor: "#8534a3",
  }
};

export default (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      console.log('changing theme to ', action.payload)
      return {
        ...state,
        theme: theme[action.payload]
      }
    default:
      return state;
  }
};
