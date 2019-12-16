import Tooltip from 'tooltip.js';

export const EventCustomRender = (info) => {
  if (info.event.extendedProps.status === "LEAD") {
    info.el.style.backgroundColor = 'rgba(196, 200, 204, 0.7)';
    info.el.style.borderColor = 'rgba(196, 200, 204, 0.8)';
    info.el.style.color = '#000';
  } else if ((info.event.extendedProps.status === "BOOKED")) {
    info.el.style.backgroundColor = 'rgba(150, 185, 152, 0.7)';
    info.el.style.borderColor = 'rgba(129, 199, 132, 0.8)';
    info.el.style.color = '#000';
  };

  let tooltipTemplate = `
    <div class="tooltip" role="tooltip">
      <div class="tooltip-arrow"></div><div class="tooltip-inner"></div>
    </div>
    `;

  let tooltipContent = `
    <div class="tooltip_title">Name:</div>
    <div class="tooltip_content">${info.event.title ? info.event.title : ""}</div>
    <div class="tooltip_title">Date:</div>
    <div class="tooltip_content">${(info.event.start) ? info.event.start.toLocaleString() : ""}</div>
      <br/>
    <div class="tooltip_title">Budget:</div>
    <div class="tooltip_content">$ ${info.event.extendedProps.budget ? info.event.extendedProps.budget : 0}</div>
    <div class="tooltip_title">Total:</div>
    <div class="tooltip_content">$ ${info.event.extendedProps.total ? info.event.extendedProps.total : 0}</div>
      <br/>
    <div class="tooltip_title">Timeline:</div>
    <ul>
      <li class="tooltip_content">case #1: info</li>
      <li class="tooltip_content">case #2: info</li>
      <li class="tooltip_content">case #3: info</li>
    </ul>
    `;

  new Tooltip(info.el, {
    template: tooltipTemplate,
    title: tooltipContent,
    html: true,
    placement: 'top',
    trigger: 'hover',
    container: 'body',
    delay: { show: 500, hide: 100 }
  });

};
