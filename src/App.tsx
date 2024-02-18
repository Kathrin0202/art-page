import AppRoutes from "./routes";
import * as S from "./styled/App.style";
function App() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.StyLeGlobal />
        <AppRoutes />
      </S.Container>
    </S.Wrapper>
  );
}

export default App;
