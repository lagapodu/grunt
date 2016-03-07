"use strict";
(function() {
    angular.module("quotationApp").directive("isDomestic",  ["configService",isDomestic]);

    function isDomestic(configService) {
        return {
            restrict: "AEC",
            templateUrl: configService.baseUrl + "mvc/templates/isDomestic.html"
        };
    }
})();
