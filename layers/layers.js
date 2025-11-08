var wms_layers = [];

var lyr_OrtofototosnmkyZBGISGK_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://zbgisws.skgeodesy.sk/zbgis_ortofoto_wms/service.svc/get",
                              attributions: ' ',
                              params: {
                                "LAYERS": "1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortofototo snímky - ZBGIS GKÚ',
                            popuplayertitle: 'Ortofototo snímky - ZBGIS GKÚ',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrtofototosnmkyZBGISGK_0, 0]);
var lyr_DMR50TieovanrelifZBGISGK_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://zbgisws.skgeodesy.sk/zbgis_dmr_wms/service.svc/get",
                              attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'DMR 5.0 - Tieňovaný reliéf - ZBGIS GKÚ',
                            popuplayertitle: 'DMR 5.0 - Tieňovaný reliéf - ZBGIS GKÚ',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_DMR50TieovanrelifZBGISGK_1, 0]);

        var lyr_PodkladovmapaCartoLight_2 = new ol.layer.Tile({
            'title': 'Podkladová mapa - Carto Light',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_Biotopy_3 = new ol.format.GeoJSON();
var features_Biotopy_3 = format_Biotopy_3.readFeatures(json_Biotopy_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biotopy_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biotopy_3.addFeatures(features_Biotopy_3);
var lyr_Biotopy_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Biotopy_3, 
                style: style_Biotopy_3,
                popuplayertitle: 'Biotopy',
                interactive: true,
    title: 'Biotopy<br />\
    <img src="styles/legend/Biotopy_3_0.png" /> *6230<br />\
    <img src="styles/legend/Biotopy_3_1.png" /> *6230, 6510<br />\
    <img src="styles/legend/Biotopy_3_2.png" /> *6230, 6510, NDV<br />\
    <img src="styles/legend/Biotopy_3_3.png" /> *6230, Lk6<br />\
    <img src="styles/legend/Biotopy_3_4.png" /> *6230, NDV<br />\
    <img src="styles/legend/Biotopy_3_5.png" /> *7220<br />\
    <img src="styles/legend/Biotopy_3_6.png" /> *7220, 7230<br />\
    <img src="styles/legend/Biotopy_3_7.png" /> *9180<br />\
    <img src="styles/legend/Biotopy_3_8.png" /> *91D0<br />\
    <img src="styles/legend/Biotopy_3_9.png" /> *91E0<br />\
    <img src="styles/legend/Biotopy_3_10.png" /> *91E0, 7140<br />\
    <img src="styles/legend/Biotopy_3_11.png" /> *91E0, vodný tok<br />\
    <img src="styles/legend/Biotopy_3_12.png" /> 3240<br />\
    <img src="styles/legend/Biotopy_3_13.png" /> 4030, *6230<br />\
    <img src="styles/legend/Biotopy_3_14.png" /> 6210<br />\
    <img src="styles/legend/Biotopy_3_15.png" /> 6430<br />\
    <img src="styles/legend/Biotopy_3_16.png" /> 6430, 7230, 7140<br />\
    <img src="styles/legend/Biotopy_3_17.png" /> 6430, Kr8<br />\
    <img src="styles/legend/Biotopy_3_18.png" /> 6430, Lk6<br />\
    <img src="styles/legend/Biotopy_3_19.png" /> 6430, Pr2<br />\
    <img src="styles/legend/Biotopy_3_20.png" /> 6430, vodný tok<br />\
    <img src="styles/legend/Biotopy_3_21.png" /> 6510<br />\
    <img src="styles/legend/Biotopy_3_22.png" /> 6510, *6230<br />\
    <img src="styles/legend/Biotopy_3_23.png" /> 6510, Lk6<br />\
    <img src="styles/legend/Biotopy_3_24.png" /> 6510, NDV<br />\
    <img src="styles/legend/Biotopy_3_25.png" /> 6510,*6230<br />\
    <img src="styles/legend/Biotopy_3_26.png" /> 6520<br />\
    <img src="styles/legend/Biotopy_3_27.png" /> 7140<br />\
    <img src="styles/legend/Biotopy_3_28.png" /> 7140, *6230<br />\
    <img src="styles/legend/Biotopy_3_29.png" /> 7140, *6230, Lk6<br />\
    <img src="styles/legend/Biotopy_3_30.png" /> 7140, 6430<br />\
    <img src="styles/legend/Biotopy_3_31.png" /> 7140, 6430, Lk6<br />\
    <img src="styles/legend/Biotopy_3_32.png" /> 7140, Lk6<br />\
    <img src="styles/legend/Biotopy_3_33.png" /> 7220<br />\
    <img src="styles/legend/Biotopy_3_34.png" /> 7230<br />\
    <img src="styles/legend/Biotopy_3_35.png" /> 7230, 7140<br />\
    <img src="styles/legend/Biotopy_3_36.png" /> 7230, Lk6<br />\
    <img src="styles/legend/Biotopy_3_37.png" /> 8310<br />\
    <img src="styles/legend/Biotopy_3_38.png" /> 9110<br />\
    <img src="styles/legend/Biotopy_3_39.png" /> 9130<br />\
    <img src="styles/legend/Biotopy_3_40.png" /> 9140<br />\
    <img src="styles/legend/Biotopy_3_41.png" /> 91D0<br />\
    <img src="styles/legend/Biotopy_3_42.png" /> 9410<br />\
    <img src="styles/legend/Biotopy_3_43.png" /> 9410 (Ls9.1)<br />\
    <img src="styles/legend/Biotopy_3_44.png" /> 9410 (Ls9.2)<br />\
    <img src="styles/legend/Biotopy_3_45.png" /> Intenzifikovaná lúka<br />\
    <img src="styles/legend/Biotopy_3_46.png" /> Kr8<br />\
    <img src="styles/legend/Biotopy_3_47.png" /> Kr8, NDV<br />\
    <img src="styles/legend/Biotopy_3_48.png" /> Lk6<br />\
    <img src="styles/legend/Biotopy_3_49.png" /> Ls4<br />\
    <img src="styles/legend/Biotopy_3_50.png" /> Ls5.1<br />\
    <img src="styles/legend/Biotopy_3_51.png" /> Ls5.2<br />\
    <img src="styles/legend/Biotopy_3_52.png" /> Ls8<br />\
    <img src="styles/legend/Biotopy_3_53.png" /> NDV<br />\
    <img src="styles/legend/Biotopy_3_54.png" /> NDV, Stavby<br />\
    <img src="styles/legend/Biotopy_3_55.png" /> Ostatná plocha<br />\
    <img src="styles/legend/Biotopy_3_56.png" /> Ostatné lesy<br />\
    <img src="styles/legend/Biotopy_3_57.png" /> Stavba<br />\
    <img src="styles/legend/Biotopy_3_58.png" /> VN Nová Bystrica<br />\
    <img src="styles/legend/Biotopy_3_59.png" /> Vodná plocha<br />' });
var format_zemiaeurpskehovznamu_4 = new ol.format.GeoJSON();
var features_zemiaeurpskehovznamu_4 = format_zemiaeurpskehovznamu_4.readFeatures(json_zemiaeurpskehovznamu_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zemiaeurpskehovznamu_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zemiaeurpskehovznamu_4.addFeatures(features_zemiaeurpskehovznamu_4);
var lyr_zemiaeurpskehovznamu_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zemiaeurpskehovznamu_4, 
                style: style_zemiaeurpskehovznamu_4,
                popuplayertitle: 'Územia európskeho významu',
                interactive: false,
                title: '<img src="styles/legend/zemiaeurpskehovznamu_4.png" /> Územia európskeho významu'
            });
var format_HraniceCHKOKysuce_5 = new ol.format.GeoJSON();
var features_HraniceCHKOKysuce_5 = format_HraniceCHKOKysuce_5.readFeatures(json_HraniceCHKOKysuce_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HraniceCHKOKysuce_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HraniceCHKOKysuce_5.addFeatures(features_HraniceCHKOKysuce_5);
var lyr_HraniceCHKOKysuce_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HraniceCHKOKysuce_5, 
                style: style_HraniceCHKOKysuce_5,
                popuplayertitle: 'Hranice CHKO Kysuce',
                interactive: false,
                title: '<img src="styles/legend/HraniceCHKOKysuce_5.png" /> Hranice CHKO Kysuce'
            });

lyr_OrtofototosnmkyZBGISGK_0.setVisible(false);lyr_DMR50TieovanrelifZBGISGK_1.setVisible(true);lyr_PodkladovmapaCartoLight_2.setVisible(true);lyr_Biotopy_3.setVisible(true);lyr_zemiaeurpskehovznamu_4.setVisible(true);lyr_HraniceCHKOKysuce_5.setVisible(true);
var layersList = [lyr_OrtofototosnmkyZBGISGK_0,lyr_DMR50TieovanrelifZBGISGK_1,lyr_PodkladovmapaCartoLight_2,lyr_Biotopy_3,lyr_zemiaeurpskehovznamu_4,lyr_HraniceCHKOKysuce_5];
lyr_Biotopy_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'KOD_UEV': 'KOD_UEV', 'NAZOV_UEV': 'NAZOV_UEV', 'POSOBNOST': 'POSOBNOST', 'na_vode': 'na_vode', 'EFP': 'EFP', 'Manazment': 'Manazment', 'Biotop_spo': 'Biotop', });
lyr_zemiaeurpskehovznamu_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'KOD_UEV': 'Kód ÚEV', 'NAZOV_UEV': 'Názov ÚEV', 'POSOBNOST': 'Pôsobnosť', 'VYMERA_HA': 'Výmera v ha', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'na_vode': 'na_vode', });
lyr_HraniceCHKOKysuce_5.set('fieldAliases', {'HECTARES': 'HECTARES', 'NAZOV': 'NAZOV', 'VYM_CHKO': 'VYM_CHKO', 'VYM_HA': 'VYM_HA', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', });
lyr_Biotopy_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'KOD_UEV': 'TextEdit', 'NAZOV_UEV': 'TextEdit', 'POSOBNOST': 'TextEdit', 'na_vode': 'TextEdit', 'EFP': 'TextEdit', 'Manazment': 'TextEdit', 'Biotop_spo': 'TextEdit', });
lyr_zemiaeurpskehovznamu_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'KOD_UEV': 'TextEdit', 'NAZOV_UEV': 'TextEdit', 'POSOBNOST': 'TextEdit', 'VYMERA_HA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'na_vode': 'TextEdit', });
lyr_HraniceCHKOKysuce_5.set('fieldImages', {'HECTARES': 'TextEdit', 'NAZOV': 'TextEdit', 'VYM_CHKO': 'TextEdit', 'VYM_HA': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', });
lyr_Biotopy_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'KOD_UEV': 'hidden field', 'NAZOV_UEV': 'hidden field', 'POSOBNOST': 'hidden field', 'na_vode': 'hidden field', 'EFP': 'hidden field', 'Manazment': 'hidden field', 'Biotop_spo': 'header label - visible with data', });
lyr_zemiaeurpskehovznamu_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'KOD_UEV': 'hidden field', 'NAZOV_UEV': 'inline label - visible with data', 'POSOBNOST': 'hidden field', 'VYMERA_HA': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'na_vode': 'hidden field', });
lyr_HraniceCHKOKysuce_5.set('fieldLabels', {'HECTARES': 'no label', 'NAZOV': 'no label', 'VYM_CHKO': 'no label', 'VYM_HA': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', });
lyr_HraniceCHKOKysuce_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});