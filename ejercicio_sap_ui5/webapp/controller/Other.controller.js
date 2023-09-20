sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "com/proy/ejerciciosapui5/util/Constants",
        "com/proy/ejerciciosapui5/util/Commons"
    ],
    function(BaseController, Constants, Commons) {
      "use strict";
  
      return BaseController.extend("com.proy.ejerciciosapui5.controller.Other", {
        navBack: function(){
            Commons.navBack()
        },
        navTo: function(){
            Commons.navTo(this, Constants.model.routeView3)
        }  
      });
    }
  );