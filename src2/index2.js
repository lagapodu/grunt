"use strict";
(function() {
    angular.module("hede1111")
        .factory("quotationDataService", quotationDataService);

    quotationDataService.$inject = ["$http","configService"];

    function quotationDataService(http, configService) {
        var service = {
            getAQuote: getAQuote,
            getAProspectQuote: getAProspectQuote
        };

        function getQuote(url, model) {
            return http({
                method: "POST",
                url: url,
                data: {
                    CodasProductCode: model.FuelType.CodasProductCode,
                    Quantity: model.Quantity
                }
            });
        }

        function getAQuote(model) {
            return getQuote(configService.navUrl + "GetAQuote/GetAQuote", model);
        }

        function getAProspectQuote(model) {
            return getQuote(configService.navUrl + "GetAQuote/GetAProspectQuote", model);
        }

        return service;
    }
})();
