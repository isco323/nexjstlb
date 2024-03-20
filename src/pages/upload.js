import Head from "next/head";
import { YMaps, Map } from '@pbe/react-yandex-maps';

const UploadPage = () => (
    <YMaps>
        <div>
            My awesome application with maps!
            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
        </div>
    </YMaps>
);

export default UploadPage;
