browser.storage.local.get("pattern").then((item) => {
  if (item.pattern && window.location.href.match(new RegExp(item.pattern))) {
    window.location.replace("x-choosy://open/" + window.location.href);
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.close();
    }
  }
});