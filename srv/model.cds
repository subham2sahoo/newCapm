using my from '../db/model';


service myService {

    entity getVariant as projection on my.Variant;
    entity getProductionData as projection on my.ProductionData;
    function saveVariant(items:String,flag:String) returns String;
}
