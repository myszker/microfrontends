import ReactWebComponent from 'react-web-component';
import {App} from "./app";

// 🔥 z shadow DOMem:
// ReactWebComponent.create(<App isWebComponent />, 'employees-list', true);
// 🔥 bez shadow DOM:
ReactWebComponent.create(<App />, 'products-list', false);
