(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['finalFortune'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"display-fortune\">\r\n    <div class=\"fortune-title\">\r\n        <h1>Final Fortune</h1>\r\n    </div>\r\n    <div id=\"player_name\">\r\n       "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":7},"end":{"line":6,"column":15}}}) : helper)))
    + "\r\n    </div>\r\n    <div class=\"fortune-box\">\r\n    <div class=\"fortune_text\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":10,"column":16}}}) : helper)))
    + "\r\n    </div>\r\n    </div>\r\n    <div id=\"fortune-teller-img\">\r\n                <img src=\"http://cdn.shopify.com/s/files/1/0262/0971/4198/products/cd12091-cat-fortune-teller-pop-up-birthday-card_1200x1200.jpg?v=1601655207\" alt=\"Fortune Teller Animation!!\">\r\n                </div>\r\n</div>\r\n";
},"useData":true});
})();