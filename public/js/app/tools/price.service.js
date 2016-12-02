(function () {
    angular
        .module('routesApp')
        .factory('price', Service);
    Service.$inject = [];
    function Service() {
        return {
            priceToNumber: priceToNumber
        };

        function priceToNumber(price){
            if (!price){
                return null;
            }
            var priceString = price;
            if (price.contains("R$")){
                priceString = cut(price, price.indexOf("R$"), price.indexOf("R$") + 2);
            }
            priceString = priceString.replace(/\./g, "");
            priceString = priceString.replace(",", ".");
            return parseFloat(priceString);
        }

        function cut(str, cutStart, cutEnd){
            return str.substr(0,cutStart) + str.substr(cutEnd+1);
        }
    }
})();