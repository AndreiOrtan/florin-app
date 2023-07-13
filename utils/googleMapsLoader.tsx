import { Loader } from "@googlemaps/js-api-loader";
const loader = new Loader({
  apiKey: "AIzaSyBzx6K-1plLHOMcq4QlUPSgQeyi_JGMWjA",
  version: "weekly",
  libraries: ["places"],
});
export default loader;
