import json
import numpy as np

# open data from geojson file
# original format was a .shp file, see conversion notes here: https://github.com/GeoAIR-lab/abqMaps-v2/blob/main/src/index.html
with open('./abqContours.geojson', 'r') as load_from_geojson:
    contours = json.load(load_from_geojson)

# this is how many contours are in the geojson file
print('Number of features to start: ', len(contours['features']), '\n')

# extract elevation values (non-unique)
contour_values_list = []
for contour in contours['features']:
    contour_values_list.append(contour['properties']['ELEV'])

# get list of unique elevation values
sorted_contours = sorted(set(contour_values_list))
min_elev = np.min(sorted_contours)
max_elev = np.max(sorted_contours)
print("Min elevation: ", min_elev)
print("Max elevation: ", max_elev, '\n')

# could use topo colormap from this package: https://matplotlib.org/cmocean/
# or BrBG from here https://matplotlib.org/stable/tutorials/colors/colormaps.html
# this is a custom filter for which elevations we would like to keep
# right now, it saves the minimum and maximum elevations, plus contours every 10 ft
altitude_keep_list = sorted([min_elev, max_elev] + list(range(4870, 8590, 10)))

# kep only those contours that are in altitude_keep_list
contour_keep_list = []
print('Begin removing contours...')
for i, contour in enumerate(contours['features']):
    if(i%25000==0):
        print(f'Through processing contour {i}...')
    if(contour['properties']['ELEV'] in altitude_keep_list):
        contour_keep_list.append(contour)
    else:
        continue
print('Done', '\n')

# let's see how many features we kept, should be << than we started with
print('Number of features after filtering: ', len(contour_keep_list))

# create a dict that we can save to a json file that still maintains
# header information of input file
json_header = dict()
for key in contours.keys():
    if key != "features":
        json_header[key] = contours[key]
    else:
        json_header[key] = contour_keep_list

# save file both as json and geojson
with open("abqContours_10ft.json", 'w') as save_to_json:
    json.dump(json_header, save_to_json)

with open("abqContours_10ft.geojson", 'w') as save_to_geojson:
    json.dump(json_header, save_to_geojson)