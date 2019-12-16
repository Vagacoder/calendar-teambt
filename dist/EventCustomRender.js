import Tooltip from 'tooltip.js';
export var EventCustomRender = function EventCustomRender(info) {
  if (info.event.extendedProps.status === "LEAD") {
    info.el.style.backgroundColor = 'rgba(196, 200, 204, 0.7)';
    info.el.style.borderColor = 'rgba(196, 200, 204, 0.8)';
    info.el.style.color = '#000';
  } else if (info.event.extendedProps.status === "BOOKED") {
    info.el.style.backgroundColor = 'rgba(150, 185, 152, 0.7)';
    info.el.style.borderColor = 'rgba(129, 199, 132, 0.8)';
    info.el.style.color = '#000';
  }

  ;
  var tooltipTemplate = "\n    <div class=\"tooltip\" role=\"tooltip\">\n      <div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\"></div>\n    </div>\n    ";
  var tooltipContent = "\n    <div class=\"tooltip_title\">Name:</div>\n    <div class=\"tooltip_content\">".concat(info.event.title ? info.event.title : "", "</div>\n    <div class=\"tooltip_title\">Date:</div>\n    <div class=\"tooltip_content\">").concat(info.event.start ? info.event.start.toLocaleString() : "", "</div>\n      <br/>\n    <div class=\"tooltip_title\">Budget:</div>\n    <div class=\"tooltip_content\">$ ").concat(info.event.extendedProps.budget ? info.event.extendedProps.budget : 0, "</div>\n    <div class=\"tooltip_title\">Total:</div>\n    <div class=\"tooltip_content\">$ ").concat(info.event.extendedProps.total ? info.event.extendedProps.total : 0, "</div>\n      <br/>\n    <div class=\"tooltip_title\">Timeline:</div>\n    <ul>\n      <li class=\"tooltip_content\">case #1: info</li>\n      <li class=\"tooltip_content\">case #2: info</li>\n      <li class=\"tooltip_content\">case #3: info</li>\n    </ul>\n    ");
  new Tooltip(info.el, {
    template: tooltipTemplate,
    title: tooltipContent,
    html: true,
    placement: 'top',
    trigger: 'hover',
    container: 'body',
    delay: {
      show: 500,
      hide: 100
    }
  });
};