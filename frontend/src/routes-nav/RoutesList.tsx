import { Routes, Route } from "react-router-dom";
import GuessGame from "../guessgame/GuessGame";
import NotFound from "../common/NotFound";
/** Routes for sharebandb app.
 *
 * Props:
 * - None
 *
 * States:
 * - None
 *
 * App -> RoutesList -> {NotFound}
 */

function RoutesList() {
    return(
        <div>
        <Routes>
            <Route path="/" element={<GuessGame />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
    );
}

export default RoutesList;