    // Google Map Customization
    (function(){

        var map;

        map = new GMaps({
            el: '#gmap',
            lat: 4.628698500,
            lng: -74.117217900,
            scrollwheel:false,
            zoom: 4,
            zoomControl : true,
            panControl : false,
            streetViewControl : false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false,
        });

        var image = '';
        map.addMarker({
            lat: 4.628698500, 
            lng: -74.117217900,
            icon: image,
            animation: google.maps.Animation.DROP,
            verticalAlign: 'bottom',
            horizontalAlign: 'center',
            backgroundColor: '#d3cfcf',
        });

        var image = '';
        map.addMarker({
            lat: -12.1170591, 
            lng: -76.9815174,
            icon: image,
            animation: google.maps.Animation.DROP,
            verticalAlign: 'bottom',
            horizontalAlign: 'center',
            backgroundColor: '#d3cfcf',
        });

        var styles = [ 

        {
            "featureType": "road",
            "stylers": [
            { "color": "#eac6cd" }
            ]
        },{
            "featureType": "water",
            "stylers": [
            { "color": "#c1d6f9" }
            ]
        },{
            "featureType": "landscape",
            "stylers": [
            { "color": "#edece9" }
            ]
        },{
            "elementType": "labels.text.fill",
            "stylers": [
            { "color": "#0000ff" }
            ]
        },{
            "featureType": "poi",
            "stylers": [
            { "color": "#d8e8cf" }
            ]
        },{
            "elementType": "labels.text",
            "stylers": [
            { "saturation": 1 },
            { "weight": 0.1 },
            { "color": "#000000" }
            ]
        }



        ];

        map.addStyle({
            styledMapName:"Styled Map",
            styles: styles,
            mapTypeId: "map_style"  
        });

        map.setStyle("map_style");
    }());