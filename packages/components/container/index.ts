import Container from "./container.vue";
import Header from "./header.vue";
import Footer from "./footer.vue";
import Main from "./main.vue";
import Aside from "./aside.vue";
import { withInstall } from "../../utils";

const DvContainer = withInstall(Container, { Header, Footer, Main, Aside });
export default DvContainer;
