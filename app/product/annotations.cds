using myService as service from '../../srv/model';

annotate service.getProductionData with @UI: {SelectionFields: [
    LOCATION_ID,
    PRODUCT_ID,
    ASSEMBLY
]};

define view locations as
    select from service.getProductionData distinct {
        key LOCATION_ID
    };

annotate service.getProductionData with {
    LOCATION_ID @Common: {ValueList: {
        DistinctValuesSupported: true,
        $Type                  : 'Common.ValueListType',
        CollectionPath         : 'getProductionData',
        Parameters             : [{
            $Type            : 'Common.ValueListParameterInOut',
            LocalDataProperty: LOCATION_ID,
            ValueListProperty: 'LOCATION_ID'
        }]
    }, }

};
// annotate service.getProductionData with {
//     LOCATION_ID @Common : {  ValueListWithFixedValues: true} // For DropDown
// };

annotate service.getProductionData with {
    PRODUCT_ID @Common: {ValueList: {
        $Type         : 'Common.ValueListType',
        CollectionPath: 'getProductionData',
        Parameters    : [{
            $Type            : 'Common.ValueListParameterInOut',
            LocalDataProperty: PRODUCT_ID,
            ValueListProperty: 'PRODUCT_ID',
        }],
    }, }

};

annotate service.getProductionData with {
    ASSEMBLY @Common: {ValueList: {
        $Type         : 'Common.ValueListType',
        CollectionPath: 'getProductionData',
        Parameters    : [{
            $Type            : 'Common.ValueListParameterInOut',
            LocalDataProperty: ASSEMBLY,
            ValueListProperty: 'ASSEMBLY'
        }],
    }, }
};


// annotate service.getProductionData with {
//     LOCATION_ID @Core.
// };
