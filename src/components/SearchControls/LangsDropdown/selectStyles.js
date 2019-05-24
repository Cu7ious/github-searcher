export default {
  option: (base, state) => ({
    ...base,
    // borderBottom: "1px dotted pink",
    padding: 20
  }),
  control: base => ({
    ...base,
    border: 0,
    backgroundColor: "transparent",
    color: "#3d4255",
    height: 40,
    padding: "0 15px 0 30px",
    background: "transparent",
    fontSize: 30,
    boxShadow: "0 0 0 0",
    borderRadius: 0,
    fontWeight: 100,

    '@media (max-width: 1299px)': {
      fontSize: 22
    },
    '@media (max-width: 1023px)': {
      fontSize: 18
    },
    '@media (max-width: 800px)': {
      fontSize: 16
    }
  }),
  input: base => ({
    ...base,
    fontWeight: "lighter"
  }),
  menu: base => ({
    ...base,
    borderRadius: 0
  }),
};