import $ from 'jquery';
import whatInput from 'what-input';
import {widgetNumbers} from './lib/widget';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';


$(document).foundation();

widgetNumbers($,$('.widget-ticket-numbers'));
widgetNumbers($,$('.widget-ticket-bnumbers'));

