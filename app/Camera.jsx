import '@tensorflow/tfjs-react-native'; // must be imported first for initialization
import * as tf from '@tensorflow/tfjs';
import * as blazeface from '@tensorflow-models/blazeface';
import { useEffect, useState } from 'react';
import { Camera as Camo, useCameraDevices } from 'react-native-vision-camera';
import { View, Text, StyleSheet } from 'react-native';

const Camera = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [model, setModel] = useState(null);
  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    (async () => {
      const status = await Camo.requestCameraPermission();
      setHasPermission(status === 'authorized');

      await tf.ready();
      const loadedModel = await blazeface.load();
      setModel(loadedModel);
    })();
  }, []);

  const handleCameraStream = async (frame) => {
    if (!model || !frame) return;

    const faces = await model.estimateFaces(frame);
    console.log(faces);
    // Process the detected faces (draw bounding boxes, etc.)
  };

  if (!device) return <Text>Loading...</Text>;
  if (!hasPermission) return <Text>Camera permission is required</Text>;

  return (
    <View style={styles.container}>
      <Camo
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        onFrameProcessor={handleCameraStream}
        frameProcessorFps={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Camera;
