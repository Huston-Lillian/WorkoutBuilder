export function pageview(title, url) {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("config", "G-KNR9R5SQKQ", {
    page_title: title,
    page_location: url,
  });
}
