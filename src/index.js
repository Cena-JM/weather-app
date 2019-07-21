import _ from 'lodash';
import './styles/styles.css';
import { weatherForm } from "./render_form";
import { errorContainer } from "./render_error_container";
import { outputContainer } from "./render_output_container";
import { pageloader } from "./render_loading_gif";


weatherForm();
errorContainer();
outputContainer();
pageloader();