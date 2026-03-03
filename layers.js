var wms_layers = [];


        var lyr_YandexMaps22_0 = new ol.layer.Tile({
            'title': 'Yandex Maps 22',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="">Yandex Maps</a>',
                url: 'https://core-renderer-tiles.maps.yandex.net/tiles?l=map&v=3.2008.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'районы',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> районы'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'здания',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> здания'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'плотность застройки',
                interactive: true,
    title: 'плотность застройки<br />\
    <img src="styles/legend/_3_0.png" /> 0 - 0,01<br />\
    <img src="styles/legend/_3_1.png" /> 0,01 - 0,02<br />\
    <img src="styles/legend/_3_2.png" /> 0,02 - 0,04<br />\
    <img src="styles/legend/_3_3.png" /> 0,04 - 0,06<br />' });

lyr_YandexMaps22_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_YandexMaps22_0,lyr__1,lyr__2,lyr__3];
lyr__1.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'NAME_EN': 'NAME_EN', 'NAME_RU': 'NAME_RU', 'ADMIN_LVL': 'ADMIN_LVL', 'OSM_TYPE': 'OSM_TYPE', 'OSM_ID': 'OSM_ID', 'ADMIN_L1D': 'ADMIN_L1D', 'ADMIN_L1': 'ADMIN_L1', 'ADMIN_L2D': 'ADMIN_L2D', 'ADMIN_L2': 'ADMIN_L2', 'ADMIN_L3D': 'ADMIN_L3D', 'ADMIN_L3': 'ADMIN_L3', 'ADMIN_L4D': 'ADMIN_L4D', 'ADMIN_L4': 'ADMIN_L4', 'ADMIN_L5D': 'ADMIN_L5D', 'ADMIN_L5': 'ADMIN_L5', 'ADMIN_L6D': 'ADMIN_L6D', 'ADMIN_L6': 'ADMIN_L6', 'ADMIN_L7D': 'ADMIN_L7D', 'ADMIN_L7': 'ADMIN_L7', 'ADMIN_L8D': 'ADMIN_L8D', 'ADMIN_L8': 'ADMIN_L8', 'ADMIN_L9D': 'ADMIN_L9D', 'ADMIN_L9': 'ADMIN_L9', 'ADMIN_L10D': 'ADMIN_L10D', 'ADMIN_L10': 'ADMIN_L10', 'oktmo': 'oktmo', 'okato': 'okato', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'BUILDING': 'BUILDING', 'ADDR_CITY': 'ADDR_CITY', 'A_STRT': 'A_STRT', 'A_SBRB': 'A_SBRB', 'A_HSNMBR': 'A_HSNMBR', 'A_PLACE': 'A_PLACE', 'A_PSTCD': 'A_PSTCD', 'B_LEVELS': 'B_LEVELS', 'NAME': 'NAME', 'NAME_EN': 'NAME_EN', 'NAME_RU': 'NAME_RU', 'OSM_TYPE': 'OSM_TYPE', 'OSM_ID': 'OSM_ID', 'parent_tid': 'parent_tid', 'a_date': 'a_date', 'LAT': 'LAT', 'LON': 'LON', 'HOUSE_ID': 'HOUSE_ID', 'ADDRESS': 'ADDRESS', 'FIAS': 'FIAS', 'YEAR_BLD': 'YEAR_BLD', 'YEAR_EXPL': 'YEAR_EXPL', 'SERIE': 'SERIE', 'HOUSE_TYPE': 'HOUSE_TYPE', 'CAPFOND': 'CAPFOND', 'MGMT': 'MGMT', 'MGMT_LINK': 'MGMT_LINK', 'AVAR': 'AVAR', 'LEVELS': 'LEVELS', 'DOORS': 'DOORS', 'LIFTS': 'LIFTS', 'RMC': 'RMC', 'RMC_LIVE': 'RMC_LIVE', 'RMC_NLIVE': 'RMC_NLIVE', 'INHAB': 'INHAB', 'AREA': 'AREA', 'AREA_LIVE': 'AREA_LIVE', 'AREA_NLIVE': 'AREA_NLIVE', 'AREA_GEN': 'AREA_GEN', 'AREA_LAND': 'AREA_LAND', 'AREA_PARK': 'AREA_PARK', 'CADNO': 'CADNO', 'ENRG_CLASS': 'ENRG_CLASS', 'BLAG_PLAY': 'BLAG_PLAY', 'BLAG_SPORT': 'BLAG_SPORT', 'BLAG_OTHER': 'BLAG_OTHER', 'OTHER': 'OTHER', 'COLD_WATER': 'COLD_WATER', 'HOT_WATER': 'HOT_WATER', 'FUNDAMENT': 'FUNDAMENT', 'PEREKRYT': 'PEREKRYT', 'MAT_NES': 'MAT_NES', 'INOE_OBOR': 'INOE_OBOR', 'ELECT_TYPE': 'ELECT_TYPE', 'ELECT_VVOD': 'ELECT_VVOD', 'TEPLO_TYPE': 'TEPLO_TYPE', 'GORVODA_TY': 'GORVODA_TY', 'HOLVODA_TY': 'HOLVODA_TY', 'VOTV_TYPE': 'VOTV_TYPE', 'VOTV_YAM': 'VOTV_YAM', 'GAZ_TYPE': 'GAZ_TYPE', 'VSTK_TYPE': 'VSTK_TYPE', 'VNTL_TYPE': 'VNTL_TYPE', 'FIRE_TYPE': 'FIRE_TYPE', 'reg': 'reg', 'test': 'test', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'NAME_EN': 'NAME_EN', 'NAME_RU': 'NAME_RU', 'ADMIN_LVL': 'ADMIN_LVL', 'OSM_TYPE': 'OSM_TYPE', 'OSM_ID': 'OSM_ID', 'ADMIN_L1D': 'ADMIN_L1D', 'ADMIN_L1': 'ADMIN_L1', 'ADMIN_L2D': 'ADMIN_L2D', 'ADMIN_L2': 'ADMIN_L2', 'ADMIN_L3D': 'ADMIN_L3D', 'ADMIN_L3': 'ADMIN_L3', 'ADMIN_L4D': 'ADMIN_L4D', 'ADMIN_L4': 'ADMIN_L4', 'ADMIN_L5D': 'ADMIN_L5D', 'ADMIN_L5': 'ADMIN_L5', 'ADMIN_L6D': 'ADMIN_L6D', 'ADMIN_L6': 'ADMIN_L6', 'ADMIN_L7D': 'ADMIN_L7D', 'ADMIN_L7': 'ADMIN_L7', 'ADMIN_L8D': 'ADMIN_L8D', 'ADMIN_L8': 'ADMIN_L8', 'ADMIN_L9D': 'ADMIN_L9D', 'ADMIN_L9': 'ADMIN_L9', 'ADMIN_L10D': 'ADMIN_L10D', 'ADMIN_L10': 'ADMIN_L10', 'oktmo': 'oktmo', 'okato': 'okato', 'Area_sum': 'Area_sum', 'Density': 'Density', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_RU': 'TextEdit', 'ADMIN_LVL': 'TextEdit', 'OSM_TYPE': 'TextEdit', 'OSM_ID': 'TextEdit', 'ADMIN_L1D': 'TextEdit', 'ADMIN_L1': 'TextEdit', 'ADMIN_L2D': 'TextEdit', 'ADMIN_L2': 'TextEdit', 'ADMIN_L3D': 'TextEdit', 'ADMIN_L3': 'TextEdit', 'ADMIN_L4D': 'TextEdit', 'ADMIN_L4': 'TextEdit', 'ADMIN_L5D': 'TextEdit', 'ADMIN_L5': 'TextEdit', 'ADMIN_L6D': 'TextEdit', 'ADMIN_L6': 'TextEdit', 'ADMIN_L7D': 'TextEdit', 'ADMIN_L7': 'TextEdit', 'ADMIN_L8D': 'TextEdit', 'ADMIN_L8': 'TextEdit', 'ADMIN_L9D': 'TextEdit', 'ADMIN_L9': 'TextEdit', 'ADMIN_L10D': 'TextEdit', 'ADMIN_L10': 'TextEdit', 'oktmo': 'TextEdit', 'okato': 'TextEdit', });
lyr__2.set('fieldImages', {'fid': 'TextEdit', 'BUILDING': 'TextEdit', 'ADDR_CITY': 'TextEdit', 'A_STRT': 'TextEdit', 'A_SBRB': 'TextEdit', 'A_HSNMBR': 'TextEdit', 'A_PLACE': 'TextEdit', 'A_PSTCD': 'TextEdit', 'B_LEVELS': 'TextEdit', 'NAME': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_RU': 'TextEdit', 'OSM_TYPE': 'TextEdit', 'OSM_ID': 'TextEdit', 'parent_tid': 'TextEdit', 'a_date': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'HOUSE_ID': 'TextEdit', 'ADDRESS': 'TextEdit', 'FIAS': 'TextEdit', 'YEAR_BLD': 'TextEdit', 'YEAR_EXPL': 'TextEdit', 'SERIE': 'TextEdit', 'HOUSE_TYPE': 'TextEdit', 'CAPFOND': 'TextEdit', 'MGMT': 'TextEdit', 'MGMT_LINK': 'TextEdit', 'AVAR': 'TextEdit', 'LEVELS': 'TextEdit', 'DOORS': 'TextEdit', 'LIFTS': 'TextEdit', 'RMC': 'TextEdit', 'RMC_LIVE': 'TextEdit', 'RMC_NLIVE': 'TextEdit', 'INHAB': 'TextEdit', 'AREA': 'TextEdit', 'AREA_LIVE': 'TextEdit', 'AREA_NLIVE': 'TextEdit', 'AREA_GEN': 'TextEdit', 'AREA_LAND': 'TextEdit', 'AREA_PARK': 'TextEdit', 'CADNO': 'TextEdit', 'ENRG_CLASS': 'TextEdit', 'BLAG_PLAY': 'TextEdit', 'BLAG_SPORT': 'TextEdit', 'BLAG_OTHER': 'TextEdit', 'OTHER': 'TextEdit', 'COLD_WATER': 'TextEdit', 'HOT_WATER': 'TextEdit', 'FUNDAMENT': 'TextEdit', 'PEREKRYT': 'TextEdit', 'MAT_NES': 'TextEdit', 'INOE_OBOR': 'TextEdit', 'ELECT_TYPE': 'TextEdit', 'ELECT_VVOD': 'TextEdit', 'TEPLO_TYPE': 'TextEdit', 'GORVODA_TY': 'TextEdit', 'HOLVODA_TY': 'TextEdit', 'VOTV_TYPE': 'TextEdit', 'VOTV_YAM': 'TextEdit', 'GAZ_TYPE': 'TextEdit', 'VSTK_TYPE': 'TextEdit', 'VNTL_TYPE': 'TextEdit', 'FIRE_TYPE': 'TextEdit', 'reg': 'TextEdit', 'test': 'TextEdit', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_RU': 'TextEdit', 'ADMIN_LVL': 'TextEdit', 'OSM_TYPE': 'TextEdit', 'OSM_ID': 'TextEdit', 'ADMIN_L1D': 'TextEdit', 'ADMIN_L1': 'TextEdit', 'ADMIN_L2D': 'TextEdit', 'ADMIN_L2': 'TextEdit', 'ADMIN_L3D': 'TextEdit', 'ADMIN_L3': 'TextEdit', 'ADMIN_L4D': 'TextEdit', 'ADMIN_L4': 'TextEdit', 'ADMIN_L5D': 'TextEdit', 'ADMIN_L5': 'TextEdit', 'ADMIN_L6D': 'TextEdit', 'ADMIN_L6': 'TextEdit', 'ADMIN_L7D': 'TextEdit', 'ADMIN_L7': 'TextEdit', 'ADMIN_L8D': 'TextEdit', 'ADMIN_L8': 'TextEdit', 'ADMIN_L9D': 'TextEdit', 'ADMIN_L9': 'TextEdit', 'ADMIN_L10D': 'TextEdit', 'ADMIN_L10': 'TextEdit', 'oktmo': 'TextEdit', 'okato': 'TextEdit', 'Area_sum': 'TextEdit', 'Density': 'TextEdit', });
lyr__1.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'NAME_EN': 'no label', 'NAME_RU': 'no label', 'ADMIN_LVL': 'no label', 'OSM_TYPE': 'no label', 'OSM_ID': 'no label', 'ADMIN_L1D': 'no label', 'ADMIN_L1': 'no label', 'ADMIN_L2D': 'no label', 'ADMIN_L2': 'no label', 'ADMIN_L3D': 'no label', 'ADMIN_L3': 'no label', 'ADMIN_L4D': 'no label', 'ADMIN_L4': 'no label', 'ADMIN_L5D': 'no label', 'ADMIN_L5': 'no label', 'ADMIN_L6D': 'no label', 'ADMIN_L6': 'no label', 'ADMIN_L7D': 'no label', 'ADMIN_L7': 'no label', 'ADMIN_L8D': 'no label', 'ADMIN_L8': 'no label', 'ADMIN_L9D': 'no label', 'ADMIN_L9': 'no label', 'ADMIN_L10D': 'no label', 'ADMIN_L10': 'no label', 'oktmo': 'no label', 'okato': 'no label', });
lyr__2.set('fieldLabels', {'fid': 'no label', 'BUILDING': 'no label', 'ADDR_CITY': 'no label', 'A_STRT': 'no label', 'A_SBRB': 'no label', 'A_HSNMBR': 'no label', 'A_PLACE': 'no label', 'A_PSTCD': 'no label', 'B_LEVELS': 'no label', 'NAME': 'no label', 'NAME_EN': 'no label', 'NAME_RU': 'no label', 'OSM_TYPE': 'no label', 'OSM_ID': 'no label', 'parent_tid': 'no label', 'a_date': 'no label', 'LAT': 'no label', 'LON': 'no label', 'HOUSE_ID': 'no label', 'ADDRESS': 'no label', 'FIAS': 'no label', 'YEAR_BLD': 'no label', 'YEAR_EXPL': 'no label', 'SERIE': 'no label', 'HOUSE_TYPE': 'no label', 'CAPFOND': 'no label', 'MGMT': 'no label', 'MGMT_LINK': 'no label', 'AVAR': 'no label', 'LEVELS': 'no label', 'DOORS': 'no label', 'LIFTS': 'no label', 'RMC': 'no label', 'RMC_LIVE': 'no label', 'RMC_NLIVE': 'no label', 'INHAB': 'no label', 'AREA': 'no label', 'AREA_LIVE': 'no label', 'AREA_NLIVE': 'no label', 'AREA_GEN': 'no label', 'AREA_LAND': 'no label', 'AREA_PARK': 'no label', 'CADNO': 'no label', 'ENRG_CLASS': 'no label', 'BLAG_PLAY': 'no label', 'BLAG_SPORT': 'no label', 'BLAG_OTHER': 'no label', 'OTHER': 'no label', 'COLD_WATER': 'no label', 'HOT_WATER': 'no label', 'FUNDAMENT': 'no label', 'PEREKRYT': 'no label', 'MAT_NES': 'no label', 'INOE_OBOR': 'no label', 'ELECT_TYPE': 'no label', 'ELECT_VVOD': 'no label', 'TEPLO_TYPE': 'no label', 'GORVODA_TY': 'no label', 'HOLVODA_TY': 'no label', 'VOTV_TYPE': 'no label', 'VOTV_YAM': 'no label', 'GAZ_TYPE': 'no label', 'VSTK_TYPE': 'no label', 'VNTL_TYPE': 'no label', 'FIRE_TYPE': 'no label', 'reg': 'no label', 'test': 'no label', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'NAME_EN': 'no label', 'NAME_RU': 'no label', 'ADMIN_LVL': 'no label', 'OSM_TYPE': 'no label', 'OSM_ID': 'no label', 'ADMIN_L1D': 'no label', 'ADMIN_L1': 'no label', 'ADMIN_L2D': 'no label', 'ADMIN_L2': 'no label', 'ADMIN_L3D': 'no label', 'ADMIN_L3': 'no label', 'ADMIN_L4D': 'no label', 'ADMIN_L4': 'no label', 'ADMIN_L5D': 'no label', 'ADMIN_L5': 'no label', 'ADMIN_L6D': 'no label', 'ADMIN_L6': 'no label', 'ADMIN_L7D': 'no label', 'ADMIN_L7': 'no label', 'ADMIN_L8D': 'no label', 'ADMIN_L8': 'no label', 'ADMIN_L9D': 'no label', 'ADMIN_L9': 'no label', 'ADMIN_L10D': 'no label', 'ADMIN_L10': 'no label', 'oktmo': 'no label', 'okato': 'no label', 'Area_sum': 'no label', 'Density': 'no label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});