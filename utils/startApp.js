/* eslint-disable object-curly-newline */
import { htmlStructure, header, startSortingBtn, events } from './studentData';

function startApp() {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
}

export default startApp;
