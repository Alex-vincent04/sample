import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import MapScreen from './MapScreen'; // Import your MapScreen component
import LocationService from './LocationService'; // Import the LocationService

const App = () => {
  useEffect(() => {
    // Start tracking when the app loads
    LocationService.startTracking();

    return () => {
      LocationService.stopTracking(); // Stop tracking on unmount
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapScreen /> {/* Display the map with bus location */}
    </SafeAreaView>
  );
};

export default App; // Export the App component
