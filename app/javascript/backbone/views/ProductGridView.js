(function (dw, Backbone, $, _, dust) {

  dw.ProductGridView = Backbone.View.extend({

    initialize: function () {
      _.bindAll(this, 'render');
    },

    render: function () {
      var $products = $('ul.products'),
        data = { products: this.collection.toJSON() };
      dust.render("product_grid", data, function (err, output) {
        if (err) {
          throw err;
        }
        $products.html(output);
      });
    }

  });

}(window.app.dw, Backbone, jQuery, _, dust));
