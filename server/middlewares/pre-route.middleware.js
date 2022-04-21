import helmet from "helmet";
import morgan from "morgan";
import { withMiddleware } from "./../utils/withMiddleware";

export const withPreRouteHandlers = handler => {
    // use pre-route express middleware
    return withMiddleware(helmet(), withMiddleware(morgan("common"), handler));
};
