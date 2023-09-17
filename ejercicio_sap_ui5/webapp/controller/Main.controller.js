sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/proy/ejerciciosapui5/util/Formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Formatter , Filter, FilterOperator ) {
        "use strict";

        return Controller.extend("com.proy.ejerciciosapui5.controller.Main", {
            Formatter: Formatter,
            onInit: function () {
                const sPath = jQuery.sap.getModulePath("com.proy.ejerciciosapui5") + "/localService/Products.json";
                console.log(sPath);
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.loadData(sPath);
                console.log(oModel);
                this.getView().setModel(oModel, "mock");
                const model = this.getView().getModel("mock")
                console.log(model)
            },
            onSearch: function(oEvent) {
                var aFilter = [];
                const sQuery = oEvent.getSource().getValue();
                if (sQuery && sQuery.length > 0) {
                    var oFilter = new Filter("Name", FilterOperator.Contains, sQuery);
                    aFilter.push(oFilter);
                }
                var oTable = this.byId("idProductsTable"); // Asegúrate de que el ID sea el correcto
                var oBindingItems = oTable.getBinding("items");
                oBindingItems.filter(aFilter, "Application");
            }            
        });
    });
