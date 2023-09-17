sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/proy/ejerciciosapui5/util/Formatter",
    "com/proy/ejerciciosapui5/util/Constants",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Formatter, Constants, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("com.proy.ejerciciosapui5.controller.Main", {
            Formatter: Formatter,
            onInit: function () {
                const sPath = jQuery.sap.getModulePath(Constants.model.module) + Constants.model.productsJSON;
                console.log(sPath);
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.loadData(sPath);
                console.log(oModel);
                this.getView().setModel(oModel, Constants.model.mockModel);
                const model = this.getView().getModel(Constants.model.mockModel)
                console.log(model)
                var oResourceModel = this.getOwnerComponent().getModel(Constants.model.i18n);
                oResourceModel.enhance({ bundleName: Constants.model.bundleName });
                sap.ui.getCore().getConfiguration().setLanguage(Constants.model.languageEn);
            },
            onSearch: function(oEvent) {
                var aFilter = [];
                const sQuery = oEvent.getSource().getValue();
                if (sQuery && sQuery.length > 0) {
                    var oFilter = new Filter(Constants.model.propertyToFilter, FilterOperator.Contains, sQuery);
                    aFilter.push(oFilter);
                }
                var oTable = this.byId(Constants.model.idProductsTable);
                var oBindingItems = oTable.getBinding(Constants.model.items);
                oBindingItems.filter(aFilter, Constants.model.FilterApplication);
            }                                
        });
    });
