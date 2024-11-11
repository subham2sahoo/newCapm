namespace my;

entity Variant {
    key NAME        : String(100);
    key VARIANT_DATA : String(500);
        DEFAULT    : Boolean;
        APP_NAME:String(100);
        USER   : String(100);
}
