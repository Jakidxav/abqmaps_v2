import gdal
from gdalconst import GA_ReadOnly

from shapely.geometry import Point
import pandas as pd
import geopandas as gpd
from geopandas import GeoDataFrame

# first get the x-y bounds from the original data file
# https://gis.stackexchange.com/questions/104362/how-to-get-extent-out-of-geotiff
data = gdal.Open('./abq_tree_canopy.tif', GA_ReadOnly)
geoTransform = data.GetGeoTransform()
min_x = geoTransform[0]
max_y = geoTransform[3]
max_x = min_x + geoTransform[1] * data.RasterXSize
min_y = max_y + geoTransform[5] * data.RasterYSize
data = None

# next, create a dataframe for the top-left and bottom-right points
top_left = [min_x, min_y]
bottom_right = [max_x, max_y]

# https://stackoverflow.com/questions/65123410/plot-points-from-a-csv-file-onto-a-geopandas-map
df = pd.DataFrame([top_left, bottom_right], columns=["x", "y"])
geometry = [Point(xy) for xy in zip(df["x"], df["y"])]
gdf = GeoDataFrame(df, geometry=geometry, crs=26913) 
gdf = gdf.to_crs(4326)
print("Converting from CRS 26913 to 4326: ")
print(gdf)

