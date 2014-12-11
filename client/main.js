// //https://developers.google.com/chart/interactive/docs/gallery/linechart

// function onOpen() {
//     var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
//     if (sheets.length >= 1) {
//         sheets.forEach(function(sheet) {
//             Logger.log(sheet.getName());
//             //      var sheet = SpreadsheetApp.getActiveSheet();
//             sheet.setColumnWidth(1, 275);
//             sheet.setColumnWidth(2, 140);
//             sheet.setColumnWidth(3, 160);
//             sheet.setColumnWidth(4, 250);
//             sheet.setColumnWidth(5, 400);
//             sheet.setColumnWidth(9, 140);


//             var title = sheet.getName();
//             //      Logger.log(title);

//             var completed = sheet.getRange(1,5);

//             if (completed.search('completed') != 1) {

//                 if (title.search('Report') != -1) {
//                     var lastRow = sheet.getLastRow();
//                     var lastColumn = sheet.getLastColumn();
//                     letterColumn = {
//                         1: "A",
//                         2: "B",
//                         3: "C",
//                         4: "D",
//                         5: "E",
//                         6: "F",
//                         7: "G",
//                         8: "H",
//                         9: "I",
//                         10: "J",
//                         11: "K",
//                         12: "L",
//                         13: "M",
//                         14: "N",
//                         15: "O",
//                         16: "P",
//                         17: "Q",
//                         18: "R",
//                         19: "S",
//                         20: "T",
//                         21: "U",
//                         22: "V",
//                         23: "W",
//                         24: "X",
//                         25: "Y",
//                         26: "Z"
//                     }
//                     var lastColumnLetter = "D";
//                     //        Logger.log(lastRow);
//                     //        Logger.log(lastColumn);

//                     var range = sheet.getRange(1, 1, lastRow, 1);
//                     Logger.log(range);

//                     var value = "Best Times To Engage";

//                     function find(value, range) {
//                         var data = range.getValues();
//                         for (var i = 0; i < data.length; i++) {
//                             for (var j = 0; j < data[i].length; j++) {
//                                 if (data[i][j] == value) {
//                                     Logger.log(i);
//                                     return (i);
//                                 }
//                             }
//                         }
//                         return null;
//                     }

//                     var spot = find(value, range);

//                     var range = sheet.getRange("A" + (spot + 2) + ":" + lastColumnLetter + lastRow);

//                     range.sort(1);

//                     var range = sheet.getRange("B" + (spot + 1) + ":" + lastColumnLetter + lastRow);

//                     var chartBuilder = sheet.newChart();
//                     chartBuilder.addRange(range)
//                         .setChartType(Charts.ChartType.AREA)
//                         .setOption('title', "Engagement Timeline")
//                         .setOption('titleTextStyle', {
//                             color: 'black',
//                             fontName: 'arial',
//                             fontSize: '24'
//                         })
//                         .setOption('chartArea', {
//                             left: 80,
//                             top: 80,
//                             width: '75%',
//                             height: '70%'
//                         })
//                         .setOption('enableInteractivity', true)
//                         .setOption('isStacked', true)
//                         .setOption('hAxis.title', "Date / Time")
//                         .setOption('hAxis.slantedText', "True")
//                         .setOption('hAxis.slantedTextAngle', 90)
//                         .setOption('hAxis.titleTextStyle', {
//                             color: 'black',
//                             fontName: 'arial',
//                             fontSize: '16'
//                         })
//                         .setOption('hAxis.viewWindowMode', 'pretty')
//                         .setOption('lineWidth', 1)
//                         .setOption('vAxis.viewWindow.max', 201)
//                         .setOption('vAxis.viewWindow.min', 0)
//                         .setOption('tooltip', {
//                             trigger: 'selection'
//                         })
//                         .setOption('series', {
//                             0: {
//                                 color: 'red',
//                                 visibleInLegend: false,
//                                 annotations: {
//                                     textStyle: {
//                                         fontSize: '10',
//                                         color: 'black'
//                                     }
//                                 }
//                             },
//                             1: {
//                                 color: 'blue',
//                                 visibleInLegend: false,
//                                 annotations: {
//                                     textStyle: {
//                                         fontSize: '10',
//                                         color: 'black'
//                                     }
//                                 }
//                             }
//                         })

//                     .setOption('curveType', 'function')
//                         .setOption('height', 800)
//                         .setOption('width', 1200)

//                     sheet.insertChart(chartBuilder.setPosition((spot), 1, 10, 25).build());
//                     var cell = sheet.getRange("A" + spot + ":" + lastColumnLetter + lastRow);
//                     cell.setFontColor("white");

//                     var wrap_range = sheet.getRange('E1:' + 'E' + lastRow);
//                     wrap_range.setWrap(true);

//                     var topLeft = sheet.getRange(1, 1);
//                     topLeft.setFontWeight("bold");
//                     topLeft.setFontSize(24);

//                     var firstColumnRange = sheet.getRange(1, 1, lastRow, 1);

//                     var seedInfluencerTerm = "Seed Influencer's Handle";
//                     var seedStartingSpot = find(seedInfluencerTerm, firstColumnRange);
//                     //        Logger.log(seedStartingSpot);
//                     var seedChartTopLeft = "A" + (seedStartingSpot + 1);
//                     //        Logger.log(seedChartTopLeft);
//                     var seedChartTopRow = sheet.getRange(seedChartTopLeft + ":" + "L" + (seedStartingSpot + 1));
//                     seedChartTopRow.setFontWeight("bold");
//                     seedChartTopRow.setFontSize(12);
//                     var seedChartRange = sheet.getRange((seedStartingSpot + 1), 1, 2, 12);
//                     seedChartRange.setBorder(true, true, true, true, true, true);

//                     var circleOfInfluenceHeader = sheet.getRange('A8');
//                     circleOfInfluenceHeader.setFontWeight("bold");
//                     circleOfInfluenceHeader.setFontSize(16);

//                     var relevantInfluencersTerm = "Twitter Handle";
//                     var relevantInfluencerStartingSpot = find(relevantInfluencersTerm, firstColumnRange);

//                     //        Logger.log(relevantInfluencerStartingSpot);
//                     var relevantInfluencersChartTopLeft = "A" + (relevantInfluencerStartingSpot + 1);
//                     var relevantInfluencersTopRow = sheet.getRange(relevantInfluencersChartTopLeft + ":" + "I" + (relevantInfluencerStartingSpot + 1));
//                     relevantInfluencersTopRow.setFontWeight("bold");
//                     relevantInfluencersTopRow.setFontSize(12);

//                     var timeLineStatisticsSearchTerm = "Timeline Statistics";
//                     var timeLineStatisticsStartingSpot = find(timeLineStatisticsSearchTerm, firstColumnRange);
//                     var timeLineStatisticsStartingSpotCell = sheet.getRange(timeLineStatisticsStartingSpot + 1, 1);
//                     timeLineStatisticsStartingSpotCell.setFontWeight("bold");

//                     var relevantInfluencersBottomRow = timeLineStatisticsStartingSpot - 1;
//                     var relevantInfluencersChartRange = sheet.getRange((relevantInfluencerStartingSpot + 1), 1, (relevantInfluencersBottomRow - (relevantInfluencerStartingSpot + 1)), 9);
//                     relevantInfluencersChartRange.setBorder(true, true, true, true, true, true);

//                     var friendsStatisticsSearchTerm = "Friends Statistics";
//                     var friendsStatisticsStartingSpot = find(friendsStatisticsSearchTerm, firstColumnRange);
//                     var friendsStatisticsStartingSpotCell = sheet.getRange(friendsStatisticsStartingSpot + 1, 1);
//                     friendsStatisticsStartingSpotCell.setFontWeight("bold");

//                     var followersStatisticsSearchTerm = "Followers Statistics";
//                     var followersStatisticsStartingSpot = find(followersStatisticsSearchTerm, firstColumnRange);
//                     var followersStatisticsStartingSpotCell = sheet.getRange(followersStatisticsStartingSpot + 1, 1);
//                     followersStatisticsStartingSpotCell.setFontWeight("bold");

//                     var favouritesStatisticsSearchTerm = "Favorites Statistics";
//                     var favouritesStatisticsStartingSpot = find(favouritesStatisticsSearchTerm, firstColumnRange);
//                     var favouritesStatisticsStartingSpotCell = sheet.getRange(favouritesStatisticsStartingSpot + 1, 1);
//                     favouritesStatisticsStartingSpotCell.setFontWeight("bold");
//                     //        Logger.log(seedChartRange.getValues());

//                 };

//                 var types = ["External Influencers", "Community Builders", "Like-minded Influencers", "Internal Influencers"];

//                 if (types.indexOf(title) > -1) {
//                     var lastRow = sheet.getLastRow();
//                     var lastColumn = sheet.getLastColumn();
//                     letterColumn = {
//                         1: "A",
//                         2: "B",
//                         3: "C",
//                         4: "D",
//                         5: "E",
//                         6: "F",
//                         7: "G",
//                         8: "H",
//                         9: "I",
//                         10: "J",
//                         11: "K",
//                         12: "L",
//                         13: "M",
//                         14: "N",
//                         15: "O",
//                         16: "P",
//                         17: "Q",
//                         18: "R",
//                         19: "S",
//                         20: "T",
//                         21: "U",
//                         22: "V",
//                         23: "W",
//                         24: "X",
//                         25: "Y",
//                         26: "Z"
//                     }

//                     var range = sheet.getRange(1, 1, lastRow, 1);
//                     Logger.log(range);


//                     function find(value, range) {
//                         var data = range.getValues();
//                         for (var i = 0; i < data.length; i++) {
//                             for (var j = 0; j < data[i].length; j++) {
//                                 if (data[i][j] == value) {
//                                     Logger.log(i);
//                                     return (i);
//                                 }
//                             }
//                         }
//                         return null;
//                     }

//                     var lastColumnLetter = "D";
//                     //        Logger.log(lastRow);
//                     //        Logger.log(lastColumn);


//                     var firstColumnRange = sheet.getRange(1, 1, lastRow, 1);
//                     var relevantInfluencersTerm = "Twitter Handle";
//                     var relevantInfluencerStartingSpot = find(relevantInfluencersTerm, firstColumnRange);

//                     //        Logger.log(relevantInfluencerStartingSpot);
//                     var relevantInfluencersChartTopLeft = "A" + (relevantInfluencerStartingSpot + 1);
//                     var relevantInfluencersTopRow = sheet.getRange(relevantInfluencersChartTopLeft + ":" + "I" + (relevantInfluencerStartingSpot + 1));
//                     relevantInfluencersTopRow.setFontWeight("bold");
//                     relevantInfluencersTopRow.setFontSize(12);



//                     var value = "Best Times To Engage";

//                     var spot = find(value, range);

//                     var relevantInfluencersBottomRow = spot - 4;
//                     var relevantInfluencersChartRange = sheet.getRange((relevantInfluencerStartingSpot + 1), 1, (relevantInfluencersBottomRow - (relevantInfluencerStartingSpot + 1)), 9);
//                     relevantInfluencersChartRange.setBorder(true, true, true, true, true, true);

//                     var range = sheet.getRange("A" + (spot + 2) + ":" + lastColumnLetter + lastRow);

//                     range.sort(1);

//                     var range = sheet.getRange("B" + (spot + 1) + ":" + lastColumnLetter + lastRow);

//                     var chartBuilder = sheet.newChart();
//                     chartBuilder.addRange(range)
//                         .setChartType(Charts.ChartType.AREA)
//                         .setOption('title', "Engagement Timeline")
//                         .setOption('titleTextStyle', {
//                             color: 'black',
//                             fontName: 'arial',
//                             fontSize: '24'
//                         })
//                         .setOption('chartArea', {
//                             left: 80,
//                             top: 80,
//                             width: '75%',
//                             height: '70%'
//                         })
//                         .setOption('enableInteractivity', true)
//                         .setOption('isStacked', true)
//                         .setOption('hAxis.title', "Date / Time")
//                         .setOption('hAxis.slantedText', "True")
//                         .setOption('hAxis.slantedTextAngle', 90)
//                         .setOption('hAxis.titleTextStyle', {
//                             color: 'black',
//                             fontName: 'arial',
//                             fontSize: '16'
//                         })
//                         .setOption('hAxis.viewWindowMode', 'pretty')
//                         .setOption('lineWidth', 1)
//                         .setOption('vAxis.viewWindow.max', 201)
//                         .setOption('vAxis.viewWindow.min', 0)
//                         .setOption('tooltip', {
//                             trigger: 'selection'
//                         })
//                         .setOption('series', {
//                             0: {
//                                 color: 'red',
//                                 visibleInLegend: false,
//                                 annotations: {
//                                     textStyle: {
//                                         fontSize: '10',
//                                         color: 'black'
//                                     }
//                                 }
//                             },
//                             1: {
//                                 color: 'blue',
//                                 visibleInLegend: false,
//                                 annotations: {
//                                     textStyle: {
//                                         fontSize: '10',
//                                         color: 'black'
//                                     }
//                                 }
//                             }
//                         })

//                     .setOption('curveType', 'function')
//                         .setOption('height', 800)
//                         .setOption('width', 1200)

//                     sheet.insertChart(chartBuilder.setPosition((spot), 1, 10, 25).build());
//                     var cell = sheet.getRange("A" + spot + ":" + lastColumnLetter + lastRow);
//                     cell.setFontColor("white");

//                     var wrap_range = sheet.getRange('E1:' + 'E' + lastRow);
//                     wrap_range.setWrap(true);

//                     var topLeft = sheet.getRange(1, 1);
//                     topLeft.setFontWeight("bold");
//                     topLeft.setFontSize(24);

//                     var firstColumnRange = sheet.getRange(1, 1, lastRow, 1);



//                 };

//                 completed.setValue('completed');
//             };
//         });
//     }
// };