sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/m/VariantItem"
],
    function (Controller, JSONModel, MessageToast, VariantItem) {
        "use strict";
        var that;
        return Controller.extend("com.variant.controller.Home", {
            onInit: function () {
                that = this;
                that.oModel = that.getOwnerComponent().getModel();
                that._oVM = that.byId("vm");
                that.oFilterBar = that.byId("filterbar");
                that.appName = "Variant";
                that._DialogLoc = sap.ui.xmlfragment(
                    "com.variant.fragments.loc",
                    that
                );
                that._DialogVer = sap.ui.xmlfragment(
                    "com.variant.fragments.ver",
                    that
                );
                that._DialogSce = sap.ui.xmlfragment(
                    "com.variant.fragments.sce",
                    that
                );
                that.fetchVariant()
            },
            onValueHelpRequest: async function (oEvent) {
                const selectId = oEvent.getSource().getId(),
                    selLoc = that.byId("idManLoc").getValue(),
                    selVer = that.byId("idVer").getValue();
                let entitySet, filter, oResults, model;
                that.selectDialog = oEvent.getSource();
                if (selectId.includes("idManLoc")) {

                    that._DialogLoc.open();
                    sap.ui.getCore().byId("idValueHelpLoc").setBusy(true);
                    model = [
                        { title: "New York", desc: "Demand location in New York", select: false },
                        { title: "Los Angeles", desc: "Demand location in Los Angeles", select: false },
                        { title: "Chicago", desc: "Demand location in Chicago", select: false },
                        { title: "Houston", desc: "Demand location in Houston", select: false },
                        { title: "Phoenix", desc: "Demand location in Phoenix", select: false },
                        { title: "Philadelphia", desc: "Demand location in Philadelphia", select: false },
                        { title: "San Antonio", desc: "Demand location in San Antonio", select: false },
                        { title: "San Diego", desc: "Demand location in San Diego", select: false },
                        { title: "Dallas", desc: "Demand location in Dallas", select: false },
                        { title: "San Jose", desc: "Demand location in San Jose", select: false },
                        { title: "Austin", desc: "Demand location in Austin", select: false },
                        { title: "Jacksonville", desc: "Demand location in Jacksonville", select: false },
                        { title: "Fort Worth", desc: "Demand location in Fort Worth", select: false },
                        { title: "Columbus", desc: "Demand location in Columbus", select: false },
                        { title: "Charlotte", desc: "Demand location in Charlotte", select: false },
                        { title: "San Francisco", desc: "Demand location in San Francisco", select: false },
                        { title: "Indianapolis", desc: "Demand location in Indianapolis", select: false },
                        { title: "Seattle", desc: "Demand location in Seattle", select: false },
                        { title: "Denver", desc: "Demand location in Denver", select: false },
                        { title: "Washington", desc: "Demand location in Washington", select: false }
                    ];
                    sap.ui.getCore().byId("idValueHelpLoc").setBusy(false);
                    sap.ui.getCore().byId("idValueHelpLoc").setModel(new JSONModel({ items: model }));
                }
                else if (selectId.includes("idVer")) {
                    if (!selLoc)
                        return MessageToast.show("Select a Location");

                    that._DialogVer.open();
                    sap.ui.getCore().byId("idValueHelpVer").setBusy(true);
                    model = [
                        { title: "v1.0", desc: "Initial Release" },
                        { title: "v1.1", desc: "Minor Bug Fixes" },
                        { title: "v1.2", desc: "Performance Improvements" },
                        { title: "v1.3", desc: "Added New Features" },
                        { title: "v2.0", desc: "Major Update" },
                        { title: "v2.1", desc: "Security Enhancements" },
                        { title: "v2.2", desc: "UI Improvements" },
                        { title: "v2.3", desc: "Backend Optimizations" },
                        { title: "v3.0", desc: "New Interface Design" },
                        { title: "v3.1", desc: "Patch Update" },
                        { title: "v3.2", desc: "Deprecated Old Features" },
                        { title: "v4.0", desc: "Complete Overhaul" },
                        { title: "v4.1", desc: "Support for New Platforms" },
                        { title: "v4.2", desc: "Extended Language Support" },
                        { title: "v5.0", desc: "Next Generation Release" },
                        { title: "v5.1", desc: "Critical Bug Fixes" },
                        { title: "v5.2", desc: "Enhanced User Experience" },
                        { title: "v6.0", desc: "Revised Architecture" },
                        { title: "v6.1", desc: "Optimized for Mobile" },
                        { title: "v6.2", desc: "Advanced Security Features" }
                    ];

                    sap.ui.getCore().byId("idValueHelpVer").setBusy(false);
                    sap.ui.getCore().byId("idValueHelpVer").setModel(new JSONModel({ items: model }));
                } else if (selectId.includes("idSce")) {
                    if (!selVer)
                        return MessageToast.show("Select a Verion");
                    that._DialogSce.open();
                    sap.ui.getCore().byId("idValueHelpSce").setBusy(true);
                    model = [
                        { title: "Scenario 1", desc: "First scenario description" },
                        { title: "Scenario 2", desc: "Second scenario description" },
                        { title: "Scenario 3", desc: "Third scenario description" },
                        { title: "Scenario 4", desc: "Fourth scenario description" },
                        { title: "Scenario 5", desc: "Fifth scenario description" },
                        { title: "Scenario 6", desc: "Sixth scenario description" },
                        { title: "Scenario 7", desc: "Seventh scenario description" },
                        { title: "Scenario 8", desc: "Eighth scenario description" },
                        { title: "Scenario 9", desc: "Ninth scenario description" },
                        { title: "Scenario 10", desc: "Tenth scenario description" },
                        { title: "Scenario 11", desc: "Eleventh scenario description" },
                        { title: "Scenario 12", desc: "Twelfth scenario description" },
                        { title: "Scenario 13", desc: "Thirteenth scenario description" },
                        { title: "Scenario 14", desc: "Fourteenth scenario description" },
                        { title: "Scenario 15", desc: "Fifteenth scenario description" },
                        { title: "Scenario 16", desc: "Sixteenth scenario description" },
                        { title: "Scenario 17", desc: "Seventeenth scenario description" },
                        { title: "Scenario 18", desc: "Eighteenth scenario description" },
                        { title: "Scenario 19", desc: "Nineteenth scenario description" },
                        { title: "Scenario 20", desc: "Twentieth scenario description" }
                    ];

                    sap.ui.getCore().byId("idValueHelpSce").setBusy(false);
                    sap.ui.getCore().byId("idValueHelpSce").setModel(new JSONModel({ items: model }));
                }
            },
            handleSelection: function (oEvent) {
                const selValue = oEvent.mParameters.selectedItem.getTitle(),
                    title = oEvent.getSource().getTitle(),
                    model = oEvent.getSource().getModel().getData().items;
                if (title === "Location") {
                    that.byId("idManLoc").setValue(selValue);
                    that.byId("idVer").setValue();
                    that.byId("idSce").setValue();
                    sap.ui.getCore().byId("idValueHelpVer").setModel(new JSONModel({ items: [] }));
                    sap.ui.getCore().byId("idValueHelpSce").setModel(new JSONModel({ items: [] }));
                }
                else if (title === "Version") {
                    that.byId("idVer").setValue(selValue);
                    that.byId("idSce").setValue();
                    sap.ui.getCore().byId("idValueHelpSce").setModel(new JSONModel({ items: [] }));
                } else if (title === "Scenario") {
                    that.byId("idSce").setValue(selValue);
                }
            },
            fetchVariant: async function () {
                const filter =
                    new sap.ui.model.Filter(
                        "APP_NAME",
                        sap.ui.model.FilterOperator.EQ,
                        that.appName
                    );
                that.variantData = await that.modelOpt("getVariant", [filter], "read");
                that._oVM.removeAllItems();
                that._oVM.addItem(new VariantItem({
                    key: "Standard",
                    title: "Standard",
                    visible: true,
                    executeOnSelect: false,
                    rename: false,
                    changeable: false,
                    remove: false
                }));
                that.variantData.forEach(obj => {
                    obj.key = "key_" + obj.NAME;
                    that._oVM.addItem(new VariantItem({
                        key: obj.key,
                        title: obj.NAME,
                        remove: true,
                        author: obj.USER
                    }));
                    if (obj.DEFAULT)
                        that._oVM.setDefaultKey(obj.key);
                })
                that.variantData.unshift({
                    "NAME": "Standard",
                    "key": "Standard",
                    "APP_NAME":that.appName
                });
                that.onSelect()
            },
            onSelect: function (event) {
                let key, params, item;
                if (!event) {
                    item = that.variantData.find(o => o.DEFAULT === true);
                    if (item)
                        that._oVM.setSelectedKey(item.key);
                    else {
                        that.oFilterBar.getFilterGroupItems().forEach((oFilterItem, index) => {
                            oFilterItem.getControl().setValue()
                        });
                    }
                } else {
                    params = event.mParameters;
                    key = params.key;
                    item = that.variantData.find(o => o.key === key);
                }
                if (item) {
                    const filters = JSON.parse(item.VARIANT_DATA);
                    that.oFilterBar.getFilterGroupItems().forEach((oFilterItem, index) => {
                        oFilterItem.getControl().setValue(filters[index].fieldData)
                    });
                } else if (key == "Standard") {
                    that.oFilterBar.getFilterGroupItems().forEach((oFilterItem, index) => {
                        oFilterItem.getControl().setValue()
                    });
                }
            },
            onSave: function (event) {
                that._oVM.setModified(false);
                var params = event.getParameters();
                if (params.overwrite) {
                    var aData = that.oFilterBar.getFilterGroupItems().reduce(function (aResult, oFilterItem) {
                        aResult.push({
                            fieldName: oFilterItem.getLabel(),
                            fieldData: oFilterItem.getControl().getValue()
                        });
                        return aResult;
                    }, []);
                    params.filters = aData;
                    that.updateVariant(params);
                } else {
                    var aData = that.oFilterBar.getFilterGroupItems().reduce(function (aResult, oFilterItem) {
                        aResult.push({
                            fieldName: oFilterItem.getLabel(),
                            fieldData: oFilterItem.getControl().getValue()
                        });

                        return aResult;
                    }, []);
                    params.filters = aData;
                    that._createNewItem(params);
                }

                that._oVM.setModified(false);
            },
            onManage: async function (event) {
                var params = event.getParameters();
                that._updateItems(params);
                if (params.deleted) {
                    const NAMES = [];
                    params.deleted.forEach(k => {
                        NAMES.push(that.variantData.find(o => o.key === k))
                    })
                    const urlParameters = { items: JSON.stringify(NAMES), flag: "delete" };
                    await that.modelOpt("saveVariant", [], "callFunction", urlParameters);
                }
                if (params.def) {
                    const item = that.variantData.find(o => o.key === params.def)
                    if (item) {
                        that._oVM.setSelectedKey(item.key);
                        const urlParameters = { items: JSON.stringify(item), flag: "updateDefault" };
                        await that.modelOpt("saveVariant", [], "callFunction", urlParameters);
                    }
                }
                if (params.renamed) {
                    const NAMES = [];
                    params.renamed.forEach(k => {
                        NAMES.push({
                            NAME: k.name,
                            preName: that.variantData.find(o => o.key === k.key).NAME,
                            appname: that.appName
                        })
                    })
                    const urlParameters = { items: JSON.stringify(NAMES), flag: "rename" };
                    await that.modelOpt("saveVariant", [], "callFunction", urlParameters);
                }
                that.fetchVariant();
            },
            _updateItems: function (mParams) {
                if (mParams.deleted) {
                    mParams.deleted.forEach(function (sKey) {
                        var oItem = that._oVM.getItemByKey(sKey);
                        if (oItem) {
                            that._oVM.removeItem(oItem);
                            oItem.destroy();
                        }
                    }.bind(that));
                }

                if (mParams.hasOwnProperty("def")) {
                    that._oVM.setDefaultKey(mParams.def);
                }

                that._checkCurrentVariant();
            },
            _checkCurrentVariant: function () {
                var sSelectedKey = that._oVM.getSelectedKey();
                var oItem = that._oVM.getItemByKey(sSelectedKey);
                if (!oItem) {
                    var sKey = that._oVM.getStandardVariantKey();
                    if (sKey) {
                        that._oVM.setSelectedKey(sKey);
                    }
                }
            },
            _createNewItem: function (mParams) {
                const sKey = "key_" + mParams.name
                that._oVM.setSelectedKey(sKey);
                const variant = {
                    key: sKey,
                    NAME: mParams.name,
                    VARIANT_DATA: mParams.filters,
                    DEFAULT: mParams.def,
                    APP_NAME: that.appName
                };
                that.variantData.push(variant);
                var oItem = new VariantItem({
                    key: sKey,
                    title: mParams.name,
                    executeOnSelect: true,
                    author: "sample",
                    changeable: true,
                    remove: true
                });
                that.saveVarOnDb({
                    filter: mParams.filters,
                    Name: mParams.name,
                    default: mParams.def
                })

                if (mParams.hasOwnProperty("public") && mParams.public) {
                    oItem.setSharing(SharingMode.Public);
                }
                if (mParams.def) {
                    that._oVM.setDefaultKey(sKey);
                    // that._oVM.setDefaultKey(sKey);
                }

                that._oVM.addItem(oItem);
                // that._showMessagesMessage("New view '" + oItem.getTitle() + "' created with key:'" + sKey + "'.");
            },
            saveVarOnDb: async function (item) {
                const variant = {
                    NAME: item.Name,
                    VARIANT_DATA: JSON.stringify(item.filter),
                    DEFAULT: item.default,
                    APP_NAME: that.appName
                },
                    urlParameters = { items: JSON.stringify(variant), flag: "create" };
                await that.modelOpt("saveVariant", [], "callFunction", urlParameters);
            },
            makeFiterData: function (item) {
                const res = {};
                const allField = [...new Set(item.map(o => o.FieldName))];
                allField.forEach(field => {
                    res[field] = [...new Set(item.filter(i => i.FieldName === field).map(o => o.Value))]
                })
                return res;
            },
            onFilterChange: function (oEvent) {
                if (!(that._oVM.getSelectedKey() === 'Standard')) {
                    that._oVM.setModified(true);
                    that._oVM._createVariantList();
                    that._oVM.oVariantPopOver.getContent()[0].getFooter().getContent()[1].setVisible(true);
                }
            },
            updateVariant: async function (param) {
                const variant = {
                    NAME: param.name,
                    VARIANT_DATA: JSON.stringify(param.filters),
                    DEFAULT: param.def,
                    APP_NAME: that.appName
                },
                    urlParameters = { items: JSON.stringify(variant), flag: "updateVariant" };
                await that.modelOpt("saveVariant", [], "callFunction", urlParameters);
                that._oVM.oVariantPopOver.getContent()[0].getFooter().removeContent(that._oVM.oVariantSaveBtn);
                that._oVM.setModified(false);
            },
            modelOpt: function () {
                const [entity, filter, method, urlParameters] = arguments;
                let res;
                if (method === "read") {
                    res = new Promise((resolve, reject) => {
                        that.oModel.read(`/${entity}`, {
                            filters: filter,
                            success: function (oRes) {
                                resolve(oRes.results);
                            },
                            error: function (oError) {
                                reject(oError);
                            },
                        })
                    })
                } else {
                    res = new Promise((resolve, reject) => {
                        that.oModel.callFunction(`/${entity}`, {
                            urlParameters: urlParameters,
                            success: function (oRes) {
                                resolve(oRes.results);
                            },
                            error: function (oError) {
                                reject(oError);
                            },
                        })
                    })
                }
                return res;
            }
        });
    });
