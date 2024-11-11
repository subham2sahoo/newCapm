using my from '../db/model';


service myService {

    entity getVariant as projection on my.Variant;
    function saveVariant(items:String,flag:String) returns String;

}
