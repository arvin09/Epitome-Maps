//Variables
var mapSW = [0, 1024],
    mapNE = [1024,0];

//Declare map object
var map = L.map('map').setView([0,0],1);

// Refrence the tiles 
L.tileLayer('map/{z}/{x}/{y}.png',{
	minZoom: 1,
	maxZoom: 2,
	continuousWorld: false,
	noWrap: true,
	crs: L.CRS.Simple
}).addTo(map);

map.setMaxBounds(new L.LatLngBounds(
	map.unproject(mapSW, map.getMaxZoom()),
	map.unproject(mapNE, map.getMaxZoom())		
));