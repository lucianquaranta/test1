var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Lyon_iris_1 = new ol.format.GeoJSON();
var features_Lyon_iris_1 = format_Lyon_iris_1.readFeatures(json_Lyon_iris_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lyon_iris_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lyon_iris_1.addFeatures(features_Lyon_iris_1);
var lyr_Lyon_iris_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lyon_iris_1, 
                style: style_Lyon_iris_1,
                popuplayertitle: 'Lyon_iris',
                interactive: true,
    title: 'Lyon_iris<br />\
    <img src="styles/legend/Lyon_iris_1_0.png" /> 1 - 37<br />\
    <img src="styles/legend/Lyon_iris_1_1.png" /> 37 - 73<br />\
    <img src="styles/legend/Lyon_iris_1_2.png" /> 73 - 109<br />\
    <img src="styles/legend/Lyon_iris_1_3.png" /> 109 - 146<br />\
    <img src="styles/legend/Lyon_iris_1_4.png" /> 146 - 182<br />\
    <img src="styles/legend/Lyon_iris_1_5.png" /> 182 - 218<br />\
    <img src="styles/legend/Lyon_iris_1_6.png" /> 218 - 254<br />' });

lyr_GoogleRoad_0.setVisible(true);lyr_Lyon_iris_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Lyon_iris_1];
lyr_Lyon_iris_1.set('fieldAliases', {'cleabs': 'cleabs', 'code_insee': 'code_insee', 'nom_commun': 'nom_commun', 'iris': 'iris', 'code_iris': 'code_iris', 'nom_iris': 'nom_iris', 'type_iris': 'type_iris', 'NUMPOINTS': 'NUMPOINTS', });
lyr_Lyon_iris_1.set('fieldImages', {'cleabs': 'TextEdit', 'code_insee': 'TextEdit', 'nom_commun': 'TextEdit', 'iris': 'TextEdit', 'code_iris': 'TextEdit', 'nom_iris': 'TextEdit', 'type_iris': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_Lyon_iris_1.set('fieldLabels', {'cleabs': 'no label', 'code_insee': 'no label', 'nom_commun': 'no label', 'iris': 'no label', 'code_iris': 'no label', 'nom_iris': 'no label', 'type_iris': 'no label', 'NUMPOINTS': 'no label', });
lyr_Lyon_iris_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});