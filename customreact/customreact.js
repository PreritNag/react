// function customRender(element, container) {
//   const domelement = document.createElement(element.type);
//   domelement.innerHTML = element.children;
//   domelement.setAttribute('href', element.props.href);
//   domelement.setAttribute('target', element.props.target);
//  container.appendChild(domelement);
// }


const element = {
  type: 'a',
  props: {
    href: 'http://google.com',
    target: "_blank",
  },
  children: "click me to visit",
};

const container = document.querySelector(".root");
customRender(element, container);
