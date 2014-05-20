var config = {
    host: 'homebeauty.co.il',
    path: '/api/xmlrpc/',
    login: 'empeeric',
    pass: 'e1m2p3e4e5r6i7c8',
    port: 80
};

var magento = require('MagentoJS')(config);


magento.init(function(err) {
    if (err) throw err;
    magento.sales_order.list(function(err, orders) {
        if (err) throw err;
        console.log(orders);
    });
});
