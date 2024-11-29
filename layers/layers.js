var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Region_1 = new ol.format.GeoJSON();
var features_Region_1 = format_Region_1.readFeatures(json_Region_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region_1.addFeatures(features_Region_1);
var lyr_Region_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Region_1, 
                style: style_Region_1,
                popuplayertitle: "Region",
                interactive: true,
    title: 'Region<br />\
    <img src="styles/legend/Region_1_0.png" /> Chubu<br />\
    <img src="styles/legend/Region_1_1.png" /> Chugoku<br />\
    <img src="styles/legend/Region_1_2.png" /> Hokkaido<br />\
    <img src="styles/legend/Region_1_3.png" /> Kansai<br />\
    <img src="styles/legend/Region_1_4.png" /> Kanto<br />\
    <img src="styles/legend/Region_1_5.png" /> Kyushu-Okin<br />\
    <img src="styles/legend/Region_1_6.png" /> Shikoku<br />\
    <img src="styles/legend/Region_1_7.png" /> Tohoku<br />'
        });
var format_DensidadPrefecturahabKm2_2 = new ol.format.GeoJSON();
var features_DensidadPrefecturahabKm2_2 = format_DensidadPrefecturahabKm2_2.readFeatures(json_DensidadPrefecturahabKm2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DensidadPrefecturahabKm2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DensidadPrefecturahabKm2_2.addFeatures(features_DensidadPrefecturahabKm2_2);
var lyr_DensidadPrefecturahabKm2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DensidadPrefecturahabKm2_2, 
                style: style_DensidadPrefecturahabKm2_2,
                popuplayertitle: "Densidad Prefectura hab/Km2",
                interactive: true,
    title: 'Densidad Prefectura hab/Km2<br />\
    <img src="styles/legend/DensidadPrefecturahabKm2_2_0.png" /> 62 - 190<br />\
    <img src="styles/legend/DensidadPrefecturahabKm2_2_1.png" /> 190 - 354<br />\
    <img src="styles/legend/DensidadPrefecturahabKm2_2_2.png" /> 354 - 643<br />\
    <img src="styles/legend/DensidadPrefecturahabKm2_2_3.png" /> 643 - 1215<br />\
    <img src="styles/legend/DensidadPrefecturahabKm2_2_4.png" /> 1215 - 1932<br />\
    <img src="styles/legend/DensidadPrefecturahabKm2_2_5.png" /> 1932 - 4607<br />\
    <img src="styles/legend/DensidadPrefecturahabKm2_2_6.png" /> 4607 - 6454<br />'
        });
var format_DensidadDistritohabKm2_3 = new ol.format.GeoJSON();
var features_DensidadDistritohabKm2_3 = format_DensidadDistritohabKm2_3.readFeatures(json_DensidadDistritohabKm2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DensidadDistritohabKm2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DensidadDistritohabKm2_3.addFeatures(features_DensidadDistritohabKm2_3);
var lyr_DensidadDistritohabKm2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DensidadDistritohabKm2_3, 
                style: style_DensidadDistritohabKm2_3,
                popuplayertitle: "Densidad Distrito hab/Km2",
                interactive: true,
    title: 'Densidad Distrito hab/Km2<br />\
    <img src="styles/legend/DensidadDistritohabKm2_3_0.png" /> 0 - 1000<br />\
    <img src="styles/legend/DensidadDistritohabKm2_3_1.png" /> 1000 - 2013<br />\
    <img src="styles/legend/DensidadDistritohabKm2_3_2.png" /> 2013 - 4118<br />\
    <img src="styles/legend/DensidadDistritohabKm2_3_3.png" /> 4118 - 6817<br />\
    <img src="styles/legend/DensidadDistritohabKm2_3_4.png" /> 6817 - 10425<br />\
    <img src="styles/legend/DensidadDistritohabKm2_3_5.png" /> 10425 - 15651<br />\
    <img src="styles/legend/DensidadDistritohabKm2_3_6.png" /> 15651 - 23150<br />'
        });
var format_Rutas_4 = new ol.format.GeoJSON();
var features_Rutas_4 = format_Rutas_4.readFeatures(json_Rutas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rutas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rutas_4.addFeatures(features_Rutas_4);
var lyr_Rutas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rutas_4, 
                style: style_Rutas_4,
                popuplayertitle: "Rutas",
                interactive: true,
    title: 'Rutas<br />\
    <img src="styles/legend/Rutas_4_0.png" /> Carretera<br />\
    <img src="styles/legend/Rutas_4_1.png" /> Primaria<br />'
        });
var format_Lagos_5 = new ol.format.GeoJSON();
var features_Lagos_5 = format_Lagos_5.readFeatures(json_Lagos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lagos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lagos_5.addFeatures(features_Lagos_5);
var lyr_Lagos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lagos_5, 
                style: style_Lagos_5,
                popuplayertitle: "Lagos",
                interactive: true,
                title: '<img src="styles/legend/Lagos_5.png" /> Lagos'
            });
var format_Ferrocarril_6 = new ol.format.GeoJSON();
var features_Ferrocarril_6 = format_Ferrocarril_6.readFeatures(json_Ferrocarril_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ferrocarril_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferrocarril_6.addFeatures(features_Ferrocarril_6);
var lyr_Ferrocarril_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferrocarril_6, 
                style: style_Ferrocarril_6,
                popuplayertitle: "Ferrocarril",
                interactive: true,
                title: '<img src="styles/legend/Ferrocarril_6.png" /> Ferrocarril'
            });
var format_Rios_7 = new ol.format.GeoJSON();
var features_Rios_7 = format_Rios_7.readFeatures(json_Rios_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rios_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_7.addFeatures(features_Rios_7);
var lyr_Rios_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rios_7, 
                style: style_Rios_7,
                popuplayertitle: "Rios",
                interactive: true,
                title: '<img src="styles/legend/Rios_7.png" /> Rios'
            });
var format_CiudadCapital_8 = new ol.format.GeoJSON();
var features_CiudadCapital_8 = format_CiudadCapital_8.readFeatures(json_CiudadCapital_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CiudadCapital_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CiudadCapital_8.addFeatures(features_CiudadCapital_8);
var lyr_CiudadCapital_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CiudadCapital_8, 
                style: style_CiudadCapital_8,
                popuplayertitle: "Ciudad Capital",
                interactive: true,
                title: '<img src="styles/legend/CiudadCapital_8.png" /> Ciudad Capital'
            });

lyr_ESRIGraylight_0.setVisible(true);lyr_Region_1.setVisible(true);lyr_DensidadPrefecturahabKm2_2.setVisible(true);lyr_DensidadDistritohabKm2_3.setVisible(true);lyr_Rutas_4.setVisible(true);lyr_Lagos_5.setVisible(true);lyr_Ferrocarril_6.setVisible(true);lyr_Rios_7.setVisible(true);lyr_CiudadCapital_8.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_Region_1,lyr_DensidadPrefecturahabKm2_2,lyr_DensidadDistritohabKm2_3,lyr_Rutas_4,lyr_Lagos_5,lyr_Ferrocarril_6,lyr_Rios_7,lyr_CiudadCapital_8];
lyr_Region_1.set('fieldAliases', {'Nombre': 'Nombre', '地域': '地域', });
lyr_DensidadPrefecturahabKm2_2.set('fieldAliases', {'Nombre': 'Nombre', '名前': '名前', 'Poblacion': 'Poblacion', 'Area': 'Area', 'Densidad': 'Densidad', 'Region': 'Region', '地域': '地域', });
lyr_DensidadDistritohabKm2_3.set('fieldAliases', {'JCODE': 'JCODE', 'KEN': 'KEN', 'GUN': 'GUN', 'SEIREI': 'SEIREI', '名前': '名前', 'Nombre': 'Nombre', 'P_NUM': 'P_NUM', 'H_NUM': 'H_NUM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Poblacion': 'Poblacion', 'Area': 'Area', 'Area KM/2': 'Area KM/2', 'Densidad': 'Densidad', });
lyr_Rutas_4.set('fieldAliases', {'Pavimento': 'Pavimento', 'Tipo': 'Tipo', });
lyr_Lagos_5.set('fieldAliases', {'nam': 'nam', 'Tipo': 'Tipo', });
lyr_Ferrocarril_6.set('fieldAliases', {'Localizaci': 'Localizaci', 'Tipo': 'Tipo', });
lyr_Rios_7.set('fieldAliases', {'nam': 'nam', 'Categoria': 'Categoria', });
lyr_CiudadCapital_8.set('fieldAliases', {'Nombre': 'Nombre', '名前': '名前', });
lyr_Region_1.set('fieldImages', {'Nombre': 'TextEdit', '地域': 'TextEdit', });
lyr_DensidadPrefecturahabKm2_2.set('fieldImages', {'Nombre': 'TextEdit', '名前': 'TextEdit', 'Poblacion': '', 'Area': 'TextEdit', 'Densidad': 'TextEdit', 'Region': '', '地域': '', });
lyr_DensidadDistritohabKm2_3.set('fieldImages', {'JCODE': 'TextEdit', 'KEN': 'TextEdit', 'GUN': 'TextEdit', 'SEIREI': 'TextEdit', '名前': 'TextEdit', 'Nombre': 'TextEdit', 'P_NUM': 'TextEdit', 'H_NUM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Poblacion': 'TextEdit', 'Area': 'TextEdit', 'Area KM/2': 'TextEdit', 'Densidad': 'TextEdit', });
lyr_Rutas_4.set('fieldImages', {'Pavimento': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Lagos_5.set('fieldImages', {'nam': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Ferrocarril_6.set('fieldImages', {'Localizaci': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Rios_7.set('fieldImages', {'nam': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_CiudadCapital_8.set('fieldImages', {'Nombre': 'TextEdit', '名前': 'TextEdit', });
lyr_Region_1.set('fieldLabels', {'Nombre': 'inline label - always visible', '地域': 'inline label - always visible', });
lyr_DensidadPrefecturahabKm2_2.set('fieldLabels', {'Nombre': 'inline label - always visible', '名前': 'inline label - always visible', 'Poblacion': 'inline label - always visible', 'Area': 'hidden field', 'Densidad': 'inline label - always visible', 'Region': 'hidden field', '地域': 'hidden field', });
lyr_DensidadDistritohabKm2_3.set('fieldLabels', {'JCODE': 'hidden field', 'KEN': 'hidden field', 'GUN': 'hidden field', 'SEIREI': 'hidden field', '名前': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'P_NUM': 'hidden field', 'H_NUM': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Poblacion': 'inline label - always visible', 'Area': 'hidden field', 'Area KM/2': 'hidden field', 'Densidad': 'inline label - always visible', });
lyr_Rutas_4.set('fieldLabels', {'Pavimento': 'inline label - always visible', 'Tipo': 'inline label - always visible', });
lyr_Lagos_5.set('fieldLabels', {'nam': 'inline label - always visible', 'Tipo': 'inline label - always visible', });
lyr_Ferrocarril_6.set('fieldLabels', {'Localizaci': 'inline label - always visible', 'Tipo': 'inline label - always visible', });
lyr_Rios_7.set('fieldLabels', {'nam': 'inline label - always visible', 'Categoria': 'inline label - always visible', });
lyr_CiudadCapital_8.set('fieldLabels', {'Nombre': 'inline label - always visible', '名前': 'inline label - always visible', });
lyr_CiudadCapital_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});