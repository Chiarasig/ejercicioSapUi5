sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "com/proy/ejerciciosapui5/util/Commons"
    ],
    function(BaseController, Commons) {
      "use strict";
  
      return BaseController.extend("com.proy.ejerciciosapui5.controller.View3", {
        navBack: function(){
          Commons.navBack()
      }
      });
    }
  );