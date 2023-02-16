# *abqMaps*: an interactive environmental justice map for Albuquerque, New Mexico


## About
This repository is for my Master's thesis project completed at the University of New Mexico, in the Department of [Geography and Environmental Studies](https://geography.unm.edu/), as a member of the [GeoAIR Lab](https://geoair.lipingyang.org/).

### Acknowledgements
Thank you to the following people and organizations who have helped support this project: 
- Thesis project committee: Dr Liping Yang (chair), Dr Maria Lane, Dr Chris Lippitt
- The [R.H. Mallory Center for Community Geography](https://communitygeography.unm.edu/) (CCG) and support from the [Graduate Fellowships for Community Engagement](https://communitygeography.unm.edu/funding/grad-fellowships.html)
- The [New Mexico Geographic Information Council](https://nmgic.com/) (NMGIC) and support from the [Jesse Rossbach Memorial Scholarship](https://nmgic.com/education/scholarships/)


## Purpose
This map aggregates data for Albuquerque, New Mexico and the surrounding area and serves as a communal resource for municipal, environmental, and demographic data. The site is a place where people can make maps and visually explore different environmental justice issues, regardless of prior geographic information science (GIS) knowledge. *abqMaps* was developed with the belief that that spatial questions are often better answered when paired with a visual component. The functionality and data included on the site were carefully chosen after reviewing the environmental justice literature and other interactive environmental justice web maps and can be used to explore questions related to data sovereignty, information accessibility, self-representation, and civil participation.

The site is a case-study on the current state of particular open-source web-mapping technologies (in this case, Leaflet) and highlights the tradeoffs between web-mapping and creating maps using traditional GIS software. All of the code for *abqMaps* is freely-available to view, download, modify, and share, providing a template for communities interested in creating their own interactive web maps to explore environmental justice issues.

## Data sources
- City limits, police beats, police incidents data, neighborhoods, contours, bike trails, walking trails, parks, open spaces, historic places, transit routes and stops, land use, landfills, landfill buffers, recycling dropoff locations, free wifi spots [[ABQ Data]](https://www.cabq.gov/abq-data/) and [[City of Albuquerque GIS data]](https://www.cabq.gov/gis/geographic-information-systems-data)
- Water cover data from 2010 [[data.gov]](https://catalog.data.gov/dataset/2010-bernalillo-county-nm-current-area-hydrography)
- Active state cleanup sites [[New Mexico Environment Department]](https://data-nmenv.opendata.arcgis.com/datasets/85f43fe83e564d89a1d3b4b2d6a7129b_0/explore?layer=0&location=34.988414%2C-106.360958%2C10.00)
- Superfund sites [[U.S. Environmental Protection Agency]](https://edg.epa.gov/metadata/catalog/search/resource/details.page?uuid=%7BFC07D75C-8596-434B-B1A6-0688C9CD45B5%7D)
- Major state dams, soil and water conservation districts, state public libraries, underserved broadband areas [[NM RGIS]](https://rgis.unm.edu/)
- 2019 census tract shapefiles (used for 2020 census data) [[Census.gov 2019]](https://www.census.gov/geographies/mapping-files/time-series/geo/cartographic-boundary.2019.html#list-tab-U8W68AR8I1HHUECUZN), Tribal Areas boundaries, and New Mexico state outline [[Census.gov 2021]](https://www.census.gov/geographies/mapping-files/time-series/geo/cartographic-boundary.2021.html#list-tab-7W5ZY8M0UTPAY2TMZE)
- 2020 census statistics for Bernalillo County [[UNM Geospatial and Population Studies Center]](https://gps.unm.edu/census2020/NewMexicoCountyCCCDataPortal)
- Tree Canopy data [[The Nature Conservancy New Mexico]](https://www.nmconservation.org/field-notes/abq-canopy-2020)


## Code references
- Bootstrap navbar [[link]](https://getbootstrap.com/docs/4.6/components/navbar/)
- Leaflet [[link]](https://leafletjs.com/)
- Leaflet.Control.Layers.Tree [[GitHub]](https://github.com/jjimenezshaw/Leaflet.Control.Layers.Tree)
- leaflet-coord-projection [[GitHub]](https://github.com/edihasaj/leaflet-coord-projection)
- leaflet-easyPrint [[GitHub]](https://github.com/rowanwins/leaflet-easyPrint)
- leaflet.fullscreen [[GitHub]](https://github.com/brunob/leaflet.fullscreen)
- leaflet-ruler [[GitHub]](https://github.com/gokertanrisever/leaflet-ruler)
- Prettify for formatting code cells in HTML [[GitHub]](https://github.com/googlearchive/code-prettify)
