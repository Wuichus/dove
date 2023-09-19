import { getAuth } from "firebase/auth";
import app from "../providers/firebase";

const auth = getAuth(app);

export default auth;
