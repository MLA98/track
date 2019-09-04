import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
    return{
        timestamp: 10000000,
        coords:{
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 121.627801 + increment * tenMetersWithDegrees,
            latitude: 29.855559 + increment * tenMetersWithDegrees
        }
    };
};

let counter = 0;
setInterval(()=>{
    counter ++;
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
}, 1000);