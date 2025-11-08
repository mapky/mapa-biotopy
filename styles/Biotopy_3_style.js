var size = 0;
var placement = 'point';
function categories_Biotopy_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '*6230':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(223,119,112,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '*6230, 6510':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(136,230,166,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '*6230, 6510, NDV':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(13,178,223,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '*6230, Lk6':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(203,51,175,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '*6230, NDV':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(136,59,212,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '*7220':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(90,234,95,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '*7220, 7230':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(221,20,224,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '*9180':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(187,204,90,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '*91D0':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(179,221,125,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '*91E0':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(95,229,218,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '*91E0, 7140':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(169,208,41,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '*91E0, vodný tok':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(119,230,210,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '3240':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,29,77,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '4030, *6230':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(222,180,130,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '6210':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(29,134,209,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '6430':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(46,169,226,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '6430, 7230, 7140':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(59,24,202,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '6430, Kr8':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(127,234,34,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '6430, Lk6':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(229,78,98,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '6430, Pr2':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(83,97,222,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '6430, vodný tok':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(166,206,227,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '6510':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(213,165,20,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '6510, *6230':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(29,229,52,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '6510, Lk6':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(141,101,200,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '6510, NDV':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(52,214,152,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '6510,*6230':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(201,59,121,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '6520':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(122,230,60,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '7140':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(95,228,68,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '7140, *6230':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(129,218,166,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '7140, *6230, Lk6':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(13,13,203,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '7140, 6430':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(183,33,224,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '7140, 6430, Lk6':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(200,38,138,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '7140, Lk6':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(142,233,189,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '7220':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(64,209,95,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '7230':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(62,239,189,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '7230, 7140':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(208,34,231,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '7230, Lk6':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(132,173,217,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '8310':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,95,16,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '9110':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(134,24,207,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '9130':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(40,109,220,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '9140':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(202,114,43,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '91D0':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(217,130,159,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '9410':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(210,203,73,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '9410 (Ls9.1)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(163,213,64,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '9410 (Ls9.2)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(235,139,208,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Intenzifikovaná lúka':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,231,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kr8':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(238,220,119,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kr8, NDV':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(146,238,139,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lk6':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,32,39,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ls4':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(205,160,76,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ls5.1':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(204,210,86,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ls5.2':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(222,78,210,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ls8':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(218,81,32,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'NDV':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(222,124,174,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'NDV, Stavby':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,115,94,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ostatná plocha':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(125,125,125,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ostatné lesy':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(23,167,14,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Stavba':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(251,154,153,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'VN Nová Bystrica':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(65,50,201,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Vodná plocha':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(78,114,207,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Biotopy_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Biotop_spo");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Biotopy_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
