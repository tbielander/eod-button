(function(){
  "use strict";
  'use strict';
  
  var app = angular.module('viewCustom', ['angularLoad']);
  
  //Auto generated code by primo app store DO NOT DELETE!!! -START-
  // ...
  //Auto generated code by primo app store DO NOT DELETE!!! -END-
    
  
  // =====================================================================================
  //  EOD: order button in full view, section "Loan and request options" (above locations)
  // =====================================================================================
  
  app.controller('RequestServicesAfterController', [function (){
  
    var vm = this;
  
    this.$onInit = function(){
      {
        const TERM_OF_PROTECTION = 1900;
        const LIBRARY = /A100/;
        const LIBRARY_NAME = {
          "de":"Universitätsbibliothek Basel",
          "en":"University Library Basel",
          "fr":"Bibliothèque universitaire de Bâle",
          "it":"Biblioteca universitaria di Basilea"
        };
        
        function getYears(strings) {
          var yrs = [];
          if (strings) {
            var yr = /\d{4}/g;
            var yrsNested = strings.map(string => string.match(yr));
            for (var arr of yrsNested) {
              !Array.isArray(arr) || arr.forEach(y => yrs.push(parseInt(y)));
            }
          }
          return yrs;
        }
      
        function getShelfmark(hold) {
          var shelfmark;
          if (hold.callNumber && hold.callNumber != "-") {
            shelfmark = hold.callNumber;
          } else if (hold.mainLocation && hold.subLocation) {
            shelfmark = hold.mainLocation.concat(", ", hold.subLocation);
          } else {
            shelfmark = "-";
          }
          return shelfmark;
        }
      
        var eod = function (lib, lowerBound) {
          var item = vm.parentCtrl.item;
          var deliveryCategory = item.delivery.deliveryCategory;
          var physicalTitle = deliveryCategory.some(category => category === "Alma-P");
          if (!physicalTitle) {
            return false;
          }
          var holding = item.delivery.holding;
          vm.shelfmarks = [];
          holding.forEach(h => !h.libraryCode.match(lib) || vm.shelfmarks.push(getShelfmark(h)));
          var providingLibrary = (vm.shelfmarks.length > 0);
          if (!providingLibrary) {
            return false;
          }
          var lds01 = item.pnx.display.lds01;
          var hanTitle = Boolean(lds01) && lds01.some(code => code === "HANunikat");
          var lds92 = item.pnx.display.lds92;
          var exclusion = /Abteilung|Bestand|Serie/i;
          var applicableLevel = !Boolean(lds92) || lds92.every(level => level.match(exclusion) === null);
          if (hanTitle && !applicableLevel) {
            return false;
          }
          var date = item.pnx.addata.date;
          var years = getYears(date);
          var allReleased = years.length > 0 && years.every(year => year < lowerBound);
          var continued = date.some(entry => entry.match(/-$/));
          if(!allReleased || continued) {
            return false;
          }
          return true;
        };
      
        if (eod(LIBRARY, TERM_OF_PROTECTION)) {
          vm.recordID = vm.parentCtrl.item.pnx.control.sourcerecordid[0];
          vm.lang = document.getElementById("primoExploreRoot").lang;
          vm.translateLibraryName = LIBRARY_NAME[vm.lang];
          vm.toggleEODInfo = function () {
            var eodInfo = document.getElementById("eod-info");
            if (window.getComputedStyle(eodInfo).display === "none") {
              eodInfo.style.display = "block";
            } else {
              eodInfo.style.display = "none";
            }
          }
          vm.showEODButton = true;
        } else {
          vm.showEODButton = false;
        }
      }
    };
  }]);
  
  app.component('prmRequestServicesAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'RequestServicesAfterController',
    // template url contains name of customization package!
    templateUrl: 'custom/41SLSP_UBS-eod/js/templates/eod-info.html'
  });
  
  // =====================================================================================
  //  EOD: END
  // =====================================================================================
    
  })();
  