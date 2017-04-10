var mapContacts, mapOptions;

function initMap() {
	mapOptions = {
		zoom: 15,
		center: {
			lat: 48.409968,
			lng: 35.036143,
		},
		disableDefaultUI: true,
		styles: mapStyle
	};

	mapContacts = new google.maps.Map(document.querySelector('#map'), mapOptions);

	var marker = new google.maps.Marker({
		position: {
			lat: 48.409968,
			lng: 35.036143
		},
		map: mapContacts,
		icon: symbol
	});

};





var symbol = {
	path: "M768 896q0 106 -75 181t-181 75t-181 -75t-75 -181t75 -181t181 -75t181 75t75 181zM1024 896q0 -109 -33 -179l-364 -774q-16 -33 -47.5 -52t-67.5 -19t-67.5 19t-46.5 52l-365 774q-33 70 -33 179q0 212 150 362t362 150t362 -150t150 -362z",
	fillColor: '#8b0000',
	scale: 1,
	fillOpacity: 1,
	scale: 0.03,
	strokeColor: '#8b0000',
	strokeWeight: 0,
	rotation: 180,
};




var mapStyle = [
	{
		"featureType": "administrative",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#fffff0"
      }
    ]
  },
	{
		"featureType": "administrative.land_parcel",
		"elementType": "labels",
		"stylers": [
			{
				"visibility": "off"
      }
    ]
  },
	{
		"featureType": "landscape",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#fffff0"
      }
    ]
  },
	{
		"featureType": "poi",
		"stylers": [
			{
				"visibility": "off"
      }
    ]
  },
	{
		"featureType": "poi",
		"elementType": "labels.icon",
		"stylers": [
			{
				"visibility": "off"
      }
    ]
  },
	{
		"featureType": "poi",
		"elementType": "labels.text",
		"stylers": [
			{
				"visibility": "off"
      }
    ]
  },
	{
		"featureType": "poi.business",
		"stylers": [
			{
				"visibility": "off"
      }
    ]
  },
	{
		"featureType": "road",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#2e1706"
      }
    ]
  },
	{
		"featureType": "road",
		"elementType": "labels.icon",
		"stylers": [
			{
				"visibility": "off"
      }
    ]
  },
	{
		"featureType": "road.highway",
		"elementType": "labels",
		"stylers": [
			{
				"visibility": "off"
      }
    ]
  },
	{
		"featureType": "road.highway",
		"elementType": "labels.text",
		"stylers": [
			{
				"visibility": "off"
      }
    ]
  },
	{
		"featureType": "road.local",
		"stylers": [
			{
				"visibility": "simplified"
      }
    ]
  },
	{
		"featureType": "road.local",
		"elementType": "labels",
		"stylers": [
			{
				"visibility": "off"
      }
    ]
  },
	{
		"featureType": "transit",
		"stylers": [
			{
				"visibility": "off"
      }
    ]
  },
	{
		"featureType": "water",
		"stylers": [
			{
				"saturation": 25
      },
			{
				"lightness": 65
      }
    ]
  }
]
