var wms_layers = [];


        var lyr_VWorldSatellite_0 = new ol.layer.Tile({
            'title': 'VWorld Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://xdworld.vworld.kr/2d/Satellite/service/{z}/{x}/{y}.jpeg'
            })
        });
var format_MergedRoute230829_1 = new ol.format.GeoJSON();
var features_MergedRoute230829_1 = format_MergedRoute230829_1.readFeatures(json_MergedRoute230829_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MergedRoute230829_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MergedRoute230829_1.addFeatures(features_MergedRoute230829_1);
var lyr_MergedRoute230829_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MergedRoute230829_1, 
                style: style_MergedRoute230829_1,
                interactive: true,
    title: 'MergedRoute230829<br />\
    <img src="styles/legend/MergedRoute230829_1_0.png" /> 210803_Suwon_Ginkgo_route<br />\
    <img src="styles/legend/MergedRoute230829_1_1.png" /> 210803_Suwon_Zelkova_route<br />\
    <img src="styles/legend/MergedRoute230829_1_2.png" /> 210811_Suwon_Mixed_route<br />\
    <img src="styles/legend/MergedRoute230829_1_3.png" /> 210811_Suwon_Prunus_route<br />\
    <img src="styles/legend/MergedRoute230829_1_4.png" /> 210811_Suwon_Zelkova_route<br />\
    <img src="styles/legend/MergedRoute230829_1_5.png" /> 210826_Suwon_Mixed1_route<br />\
    <img src="styles/legend/MergedRoute230829_1_6.png" /> 210826_Suwon_Mixed2_route<br />\
    <img src="styles/legend/MergedRoute230829_1_7.png" /> 210826_Suwon_Mixed3_route<br />\
    <img src="styles/legend/MergedRoute230829_1_8.png" /> 210830_Suwon_Mixed1_route<br />\
    <img src="styles/legend/MergedRoute230829_1_9.png" /> 210910_Suwon_Mixed1_route<br />\
    <img src="styles/legend/MergedRoute230829_1_10.png" /> 210924_Suwon_Mixed1_route<br />\
    <img src="styles/legend/MergedRoute230829_1_11.png" /> 210924_Suwon_Mixed2_route<br />\
    <img src="styles/legend/MergedRoute230829_1_12.png" /> 210924_Suwon_Mixed3_route<br />\
    <img src="styles/legend/MergedRoute230829_1_13.png" /> 210924_Suwon_Mixed4_route<br />\
    <img src="styles/legend/MergedRoute230829_1_14.png" /> 210927_Suwon_Mixed1_route<br />\
    <img src="styles/legend/MergedRoute230829_1_15.png" /> 210927_Suwon_Mixed2_route<br />\
    <img src="styles/legend/MergedRoute230829_1_16.png" /> 210927_Suwon_Mixed3_route<br />\
    <img src="styles/legend/MergedRoute230829_1_17.png" /> 211001_Suwon_Mixed1_route<br />\
    <img src="styles/legend/MergedRoute230829_1_18.png" /> 211001_Suwon_Mixed2_route<br />\
    <img src="styles/legend/MergedRoute230829_1_19.png" /> 211001_Suwon_Mixed4_route<br />\
    <img src="styles/legend/MergedRoute230829_1_20.png" /> 211001_Suwon_Mixed5_route<br />\
    <img src="styles/legend/MergedRoute230829_1_21.png" /> 211013_Suwon_Mixed1_route<br />\
    <img src="styles/legend/MergedRoute230829_1_22.png" /> 211013_Suwon_Mixed2_route<br />\
    <img src="styles/legend/MergedRoute230829_1_23.png" /> 211013_Suwon_Mixed3_route<br />\
    <img src="styles/legend/MergedRoute230829_1_24.png" /> 211013_Suwon_Mixed4_route<br />\
    <img src="styles/legend/MergedRoute230829_1_25.png" /> 211021_Suwon_Mixed1_route<br />\
    <img src="styles/legend/MergedRoute230829_1_26.png" /> 211021_Suwon_Mixed2_route<br />\
    <img src="styles/legend/MergedRoute230829_1_27.png" /> 230428_Suwon_Zone1_route<br />\
    <img src="styles/legend/MergedRoute230829_1_28.png" /> 230428_Suwon_Zone2_route<br />\
    <img src="styles/legend/MergedRoute230829_1_29.png" /> 230827_Suwon_1200hr_route<br />\
    <img src="styles/legend/MergedRoute230829_1_30.png" /> 230827_Suwon_1500hr_route<br />\
    <img src="styles/legend/MergedRoute230829_1_31.png" /> <br />'
        });

lyr_VWorldSatellite_0.setVisible(true);lyr_MergedRoute230829_1.setVisible(true);
var layersList = [lyr_VWorldSatellite_0,lyr_MergedRoute230829_1];
lyr_MergedRoute230829_1.set('fieldAliases', {'Name': 'Name', 'length(km)': 'length(km)', });
lyr_MergedRoute230829_1.set('fieldImages', {'Name': 'TextEdit', 'length(km)': 'TextEdit', });
lyr_MergedRoute230829_1.set('fieldLabels', {'Name': 'inline label', 'length(km)': 'inline label', });
lyr_MergedRoute230829_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});