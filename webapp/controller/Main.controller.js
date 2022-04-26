sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "capacitacionnamespace/capacitacionui5/utils/Services",
    "sap/ui/model/json/JSONModel",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, Services, JSONModel) {
        "use strict";

        return Controller.extend("capacitacionnamespace.capacitacionui5.controller.Main", {
            onInit: async function () {
               await this.loadModel("data.json", "modeloPrueba");
                 console.log(this.getView().getModel("modeloPrueba").getData())


            },
            Alert: function () {
                MessageToast.show("Alert")

            },
            loadModel: async function (json, path) {
                const oResponse = await Services.getLocalJSON(
                    json
                );
                const oDataOrders = oResponse[0];
                let oModel = new JSONModel();
                oModel.setData(oDataOrders);
                this.getView().setModel(oModel, path);
            },

        });
    });
