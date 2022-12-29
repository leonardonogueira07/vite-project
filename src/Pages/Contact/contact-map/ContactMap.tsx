import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import style from './MapPage.module.css';

export const MapPage = () => {

  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  const position = {
    lat: -19.975582832810982,
    lng: -43.93959248474285,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDRUycAKeRXUdNq-xhlRQbiyc2u5sCwxMY"
  });

  return (
    <>
      <div className={style.MapPage}>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={15}
          /* onLoad={onLoad}
          onUnmount={onUnmount} */
          >
            <Marker
              position={position}
              options={{
                label: {
                  text: 'Reviva Imoveis',
                  className: 'markPage',
                }
              }}
            />
          </GoogleMap>
        ) : <></>}

      </div>
    </>
  );
}