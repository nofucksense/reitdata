var reitDatas = [
{ "code": "O5RU", "descr": "AIMSAMP Cap Reit", "prevClosed": "1.290", "period": "Q2 - Sep16", "dpu": "2.750", "ttlDpu": "11.300", "yield": "8.760%", "nav": "$1.466", "gearing": "34.00%", "assetType": "Industrial (26) : Singapore + Australia" }
, { "code": "A17U", "descr": "Ascendas Reit", "prevClosed": "2.280", "period": "1H - Sep16", "dpu": "7.791", "ttlDpu": "15.147", "yield": "6.643%", "nav": "$2.030", "gearing": "34.20%", "assetType": "Industrial (131) : Singapore (85%) + Australia (13%) + China (2%) by Valuation" }
, { "code": "A68U", "descr": "Ascott Reit", "prevClosed": "1.130", "period": "Q3 - Sep16", "dpu": "2.350", "ttlDpu": "8.293", "yield": "7.275%", "nav": "$1.300", "gearing": "41.00%", "assetType": "Serviced Apts (90) : Key Mkt (87.8%) + R.O.W (12.2%) by Valuation" }
, { "code": "BMGU", "descr": "BHG Retail Reit", "prevClosed": "0.640", "period": "Q3 - Sep16", "dpu": "1.290", "ttlDpu": "5.160", "yield": "8.063%", "nav": "$0.800", "gearing": "30.50%", "assetType": "Retail (China) - 5" }
, { "code": "K2LU", "descr": "Cache Log Trust", "prevClosed": "0.805", "period": "Q3 - Sep16", "dpu": "1.847", "ttlDpu": "7.348", "yield": "8.961%", "nav": "$0.830", "gearing": "41.20%", "assetType": "Industrial (19) : Singapore (85%) + Australia (14%) + China (1%) by Gross Revenue" }
, { "code": "J91U", "descr": "Cambridge Ind Tr", "prevClosed": "0.530", "period": "Q3 - Sep16", "dpu": "0.987", "ttlDpu": "3.948", "yield": "7.449%", "nav": "$0.669", "gearing": "36.90%", "assetType": "Industrial (50)" }
, { "code": "C61U", "descr": "CapitaCom Trust", "prevClosed": "1.470", "period": "Q3 - Sep16", "dpu": "2.300", "ttlDpu": "9.200", "yield": "6.195%", "nav": "$1.720", "gearing": "37.80%", "assetType": "Office (69%) + Retail (18%) + Hotel (13%) by Gross Rental Income" }
, { "code": "C38U", "descr": "CapitaMall Trust", "prevClosed": "1.890", "period": "Q3 - Sep16", "dpu": "2.780", "ttlDpu": "11.130", "yield": "5.889%", "nav": "$1.860", "gearing": "35.40%", "assetType": "Retail (16) + Office" }
, { "code": "AU8U", "descr": "CapitaR China Tr", "prevClosed": "1.365", "period": "Q3 - Sep16", "dpu": "2.360", "ttlDpu": "9.390", "yield": "6.956%", "nav": "$1.540", "gearing": "36.70%", "assetType": "Retail (China) - 11" }
, { "code": "AW9U", "descr": "First Reit", "prevClosed": "1.265", "period": "Q3 - Sep16", "dpu": "2.120", "ttlDpu": "8.470", "yield": "6.749%", "nav": "$1.029", "gearing": "30.00%", "assetType": "Hospitals (12 - 1 in S Korea) + Hotel (Indonesia - 2) + Nursing Home (Singapore - 3)" }
, { "code": "F25U", "descr": "Fortune Reit HKD", "prevClosed": "8.580", "period": "1H - Jun16", "dpu": "24.780", "ttlDpu": "265.202", "yield": "5.796%", "nav": "$12.770", "gearing": "29.80%", "assetType": "Retail (HK) - 17" }
, { "code": "ND8U", "descr": "Frasers Com Tr", "prevClosed": "1.250", "period": "Q4 - Sep16", "dpu": "2.453", "ttlDpu": "9.812", "yield": "7.850%", "nav": "$1.520", "gearing": "36.00%", "assetType": "Singapore (55%) + Australia (45%) by NPI" }
, { "code": "J69U", "descr": "Frasers Cpt Tr", "prevClosed": "1.895", "period": "Q4 - Sep16", "dpu": "2.815", "ttlDpu": "11.807", "yield": "6.231%", "nav": "$1.930", "gearing": "28.30%", "assetType": "Retail (6) + 31.17% of Hektar (MREIT)" }
, { "code": "BUOU", "descr": "Frasers L&I Tr", "prevClosed": "0.915", "period": "1H - Sep16", "dpu": "1.840", "ttlDpu": "6.520", "yield": "7.049%", "nav": "$0.910", "gearing": "28.20%", "assetType": "Industrial (Australia) - 53" }
, { "code": "UD1U", "descr": "IREIT Global", "prevClosed": "0.725", "period": "Q3 - Sep16", "dpu": "1.570", "ttlDpu": "6.280", "yield": "8.722%", "nav": "$0.635", "gearing": "42.50%", "assetType": "Offices : Germany (5)" }
, { "code": "AJBU", "descr": "Keppel DC Reit", "prevClosed": "1.170", "period": "Q3 - Sep16", "dpu": "1.900", "ttlDpu": "7.600", "yield": "6.307%", "nav": "$0.889", "gearing": "29.40%", "assetType": "Data Centres - 9 + 1 (Under Devt)" }
, { "code": "K71U", "descr": "Keppel Reit", "prevClosed": "1.000", "period": "Q3 - Sep16", "dpu": "1.600", "ttlDpu": "6.400", "yield": "6.337%", "nav": "$1.410", "gearing": "39.00%", "assetType": "Office (8) : Singapore (90%) + Australia (10%) by Asset Value" }
, { "code": "D5IU", "descr": "Lippo Malls Tr", "prevClosed": "0.365", "period": "Q3 - Sep16", "dpu": "0.860", "ttlDpu": "3.440", "yield": "9.425%", "nav": "$0.392", "gearing": "32.70%", "assetType": "Retail (Indonesia) - 19" }
, { "code": "BTOU", "descr": "ManulifeReit USD", "prevClosed": "0.830", "period": "FY16 - IPO", "dpu": "3.650", "ttlDpu": "3.75126", "yield": "6.552%", "nav": "$0.780", "gearing": "36.80%", "assetType": "Offices : USA (3)" }
, { "code": "N2IU", "descr": "Mapletree Com Tr", "prevClosed": "1.390", "period": "Q2 - Sep16", "dpu": "2.050", "ttlDpu": "8.180", "yield": "5.864%", "nav": "$1.320", "gearing": "37.30%", "assetType": "Retail + Office" }
, { "code": "RW0U", "descr": "Mapletree GCC Tr", "prevClosed": "0.935", "period": "2H - Sep16", "dpu": "3.610", "ttlDpu": "7.220", "yield": "7.722%", "nav": "$1.190", "gearing": "39.90%", "assetType": "Retail + Office : HK (69.4%) + China (30.6%) by NPI" }
, { "code": "ME8U", "descr": "Mapletree Ind Tr", "prevClosed": "1.620", "period": "Q2 - Sep16", "dpu": "2.830", "ttlDpu": "11.320", "yield": "6.988%", "nav": "$1.370", "gearing": "29.00%", "assetType": "Industrial (85)" }
, { "code": "M44U", "descr": "Mapletree Log Tr", "prevClosed": "0.995", "period": "Q2 - Sep16", "dpu": "1.860", "ttlDpu": "7.440", "yield": "7.403%", "nav": "$0.990", "gearing": "37.60%", "assetType": "Industrial (124)" }
, { "code": "TS0U", "descr": "OUE Com Reit", "prevClosed": "0.695", "period": "Q3 - Sep16", "dpu": "1.320", "ttlDpu": "5.280", "yield": "7.708%", "nav": "$0.890", "gearing": "40.80%", "assetType": "Office (83.1%) + Retail (16.9%) ; Singapore (79.9%) + China (20.1%) by Revenue" }
, { "code": "C2PU", "descr": "ParkwayLife Reit", "prevClosed": "2.350", "period": "Q3 - Sep16", "dpu": "3.060", "ttlDpu": "12.240", "yield": "5.165%", "nav": "$1.640", "gearing": "38.20%", "assetType": "Hospitals + Nursing Homes = 48 : Singapore 58% + Japan 42% by Gross Revenue" }
, { "code": "M1GU", "descr": "Sabana Reit", "prevClosed": "0.380", "period": "Q3 - Sep16", "dpu": "1.200", "ttlDpu": "4.770", "yield": "10.841%", "nav": "$0.790", "gearing": "41.50%", "assetType": "Industrial (21)" }
, { "code": "T8JU", "descr": "Saizen Reit", "prevClosed": "0.050", "period": "2H - Jun15", "dpu": "2.930", "ttlDpu": "0.000", "yield": "0.000%", "nav": "$1.210", "gearing": "35.00%", "assetType": "Residential (Japan) - 136" }
, { "code": "SV3U", "descr": "SoilbuildBizReit", "prevClosed": "0.635", "period": "Q3 - Sep16", "dpu": "1.399", "ttlDpu": "5.596", "yield": "8.744%", "nav": "$0.770", "gearing": "36.00%", "assetType": "Industrial (12) : Business Park 35% + Industrial 65% by NPI" }
, { "code": "SK6U", "descr": "SPHREIT", "prevClosed": "0.935", "period": "Q4 - Aug16", "dpu": "1.410", "ttlDpu": "5.500", "yield": "5.820%", "nav": "$0.940", "gearing": "25.70%", "assetType": "Retail (2)" }
, { "code": "P40U", "descr": "StarhillGbl Reit", "prevClosed": "0.735", "period": "Q1 - Sep16", "dpu": "1.300", "ttlDpu": "5.170", "yield": "6.986%", "nav": "$0.910", "gearing": "35.10%", "assetType": "Retail (87.2%) + Office (12.8%) ; Singapore (63.4%) + Australia (21.2%) + Malaysia (12.7%) + Others (2.7%) by Revenue" }
, { "code": "T82U", "descr": "Suntec Reit", "prevClosed": "1.635", "period": "Q3 - Sep16", "dpu": "2.535", "ttlDpu": "10.157", "yield": "6.137%", "nav": "$2.102", "gearing": "37.80%", "assetType": "Office (68%) + Retail (26%) + Convention (6%) by Income" }
, { "code": "T8B", "descr": "Viva Ind Tr", "prevClosed": "0.750", "period": "Q3 - Sep16", "dpu": "1.810", "ttlDpu": "7.201", "yield": "9.538%", "nav": "$0.803", "gearing": "39.80%", "assetType": "Industrial (8) : Biz Park (59%) + Light Industrial (25%) + Hotel (10%) + Logistics (6%) by Revenue" }
, { "code": "ACV", "descr": "Frasers HTrust", "prevClosed": "0.650", "period": "2H - Sep16", "dpu": "2.335", "ttlDpu": "4.670", "yield": "7.184%", "nav": "$0.829", "gearing": "37.70%", "assetType": "Hotel (9) + Serviced Apt (6) : Australia (30%) + Singapore (25%) + UK (21%) + Japan (12%) + Malaysia (7%) + Germany (5%) by NPI" }
, { "code": "Q5T", "descr": "Far East HTrust", "prevClosed": "0.585", "period": "Q3 - Sep16", "dpu": "1.120", "ttlDpu": "4.380", "yield": "7.424%", "nav": "$0.928", "gearing": "32.80%", "assetType": "Hotels (65%) + Commercial (20.9%) + Serviced Apts (14.1%) by Revenue" }
, { "code": "SK7", "descr": "OUE HTrust", "prevClosed": "0.650", "period": "Q3 - Sep16", "dpu": "1.230", "ttlDpu": "4.920", "yield": "7.569%", "nav": "$0.800", "gearing": "37.30%", "assetType": "Hotel (77.6%) + Retail (22.4%) by NPI" }
, { "code": "Q1P", "descr": "Ascendas-hTrust", "prevClosed": "0.700", "period": "1H - Sep16", "dpu": "2.670", "ttlDpu": "5.340", "yield": "7.739%", "nav": "$0.880", "gearing": "32.40%", "assetType": "Hotels (11) : Australia (52%) + Japan (26%) + Singapore (13%) + China (9%) by NPI" }
, { "code": "J85", "descr": "CDL HTrust", "prevClosed": "1.325", "period": "Q3 - Sep16", "dpu": "2.440", "ttlDpu": "9.900", "yield": "7.500%", "nav": "$1.559", "gearing": "36.70%", "assetType": "Hotels : Singapore (62.9%) + Australia (10.1%) + Maldives (7.3%) + NZ (8.1%) + Japan (3.7%) + UK (7.9%) by NPI" }
];
