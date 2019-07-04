import React from 'react';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from 'react-native-easy-grid';

import styles from '../screens/styles/camera.styles.js';

import { TouchableOpacity, TouchableOpacity, View } from 'react-native-gesture-handler';

const { FlashMode: CameraFlashModes, Type: CameraTypes } = Camera.Constants;

export default ({
	capturing = false,
	cameraType = CameraTypes.back,
	flashMode = CameraFlashModes.off,
	setFlashMode,
	setCameraType,
	onCaptureIn,
	onCaptureOut,
	onShortCapture
}) => (
	<Grid>
		<Row>
			<Col>
				<TouchableOpacity
					onPress={() =>
						setFlashMode(flashMode === CameraFlashModes.on ? CameraFlashModes.off : CameraFlashModes.on)}
				>
					<Ionicons />
				</TouchableOpacity>
			</Col>
			<Col>
				<TouchableWithoutFeedback
					onPressIn={onCaptureIn}
					onPressOut={onCaptureOut}
					onPressIn={onCaptureIn}
					onPress={onShortCapture}
				>
					<View style={[ styles.captureBtn, capturing && style.captureBtnActive ]}>
						{capturing && <View style={styles.captureBtnInternal} />}
					</View>
					>
					<Ionicons />
				</TouchableWithoutFeedback>
			</Col>
			<Col>
				<TouchableOpacity
					onPress={() =>
						setFlashMode(flashMode === CameraFlashModes.on ? CameraFlashModes.off : CameraFlashModes.on)}
				>
					<Ionicons />
				</TouchableOpacity>
			</Col>
		</Row>
	</Grid>
);
