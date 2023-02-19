import { Link } from "react-router-dom";
import ScreenContainer from "../components/ScreenContainer";

function NoRouteMatch() {
  return (
    <ScreenContainer>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </ScreenContainer>
  );
}
export default NoRouteMatch;