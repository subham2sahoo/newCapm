namespace my;

entity Variant {
    key NAME         : String(100);
    key VARIANT_DATA : String(500);
        DEFAULT      : Boolean;
        APP_NAME     : String(100);
        USER         : String(100);
}

entity ProductionData {
    key LOCATION_ID   : String;
        LOCATION_DESC : String;
    key PRODUCT_ID    : String;
        PROD_DESC     : String;
        ITEM_NUM      : String;
    key ASSEMBLY      : String;
        ASM_DESC      : String;
    key WEEK_DATE     : String;
    key MODEL_VERSION : String;
    key VERSION       : String;
    key SCENARIO      : String;
        RULE_TYPE     : String;
        REF_PRODID    : String;
        FACTORY_LOC   : String;
        MRP_GROUP     : String;
        PHANTOM_IND   : String;
        CONFIGURABLE  : String;
        REQ_TYPE      : String;
        ASMB_QTY      : String;
        CIR_QTY       : String;
        CIR_ASMB_QTY  : String;
};
