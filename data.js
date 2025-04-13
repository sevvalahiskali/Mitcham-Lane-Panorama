var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen-and-living-room",
      "name": "Kitchen and Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.2517944398261207,
        "pitch": 0.006861464413276508,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.4849704195988735,
          "pitch": 0.034634259164032954,
          "rotation": 0,
          "target": "1-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-garden",
      "name": "Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.04692326259904789,
        "pitch": -0.059594552865053885,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.17360027310842163,
          "pitch": -0.002584767867308102,
          "rotation": 0,
          "target": "0-kitchen-and-living-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Mitcham Lane Panorama",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
