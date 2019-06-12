var wms_layers = [];
var format_cities_0 = new ol.format.GeoJSON();
var features_cities_0 = format_cities_0.readFeatures(json_cities_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cities_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_cities_0.addFeatures(features_cities_0);var lyr_cities_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cities_0, 
                style: style_cities_0,
                title: '<img src="styles/legend/cities_0.png" /> cities'
            });var format_coastline_1 = new ol.format.GeoJSON();
var features_coastline_1 = format_coastline_1.readFeatures(json_coastline_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coastline_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_coastline_1.addFeatures(features_coastline_1);var lyr_coastline_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_coastline_1, 
                style: style_coastline_1,
                title: '<img src="styles/legend/coastline_1.png" /> coastline'
            });

lyr_cities_0.setVisible(true);lyr_coastline_1.setVisible(true);
var layersList = [lyr_cities_0,lyr_coastline_1];
lyr_cities_0.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'Población': 'Población', });
lyr_coastline_1.set('fieldAliases', {'fid': 'fid', });
lyr_cities_0.set('fieldImages', {'fid': '', 'Nombre': '', 'Población': '', });
lyr_coastline_1.set('fieldImages', {'fid': '', });
lyr_cities_0.set('fieldLabels', {'fid': 'no label', 'Nombre': 'no label', 'Población': 'no label', });
lyr_coastline_1.set('fieldLabels', {'fid': 'no label', });
lyr_coastline_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});