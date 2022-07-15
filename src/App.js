import { ThemeProvider } from "styled-components";
import Flex from "./components/styles/Flex.styled";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import GlobalStyles from "./components/styles/GlobalStyles.styled";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Flex>
        <Sidebar />
        <Content />
      </Flex>
    </ThemeProvider>
  );
}

export default App;
