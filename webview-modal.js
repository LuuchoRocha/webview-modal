import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getStatusBarHeight, renderLoading } from './utils';

const WebViewModal = (props) => {
  return (
    <Modal visible={props.visible} transparent={true} animationType="slide" onRequestClose={props.onRequestClose}>
      <View style={styles.modalStyle}>
        <WebView source={{ uri: props.source }}
          startInLoadingState={true}
          renderLoading={renderLoading}
          containerStyle={styles.contentStyle}
        />
      </View>
      <View style={styles.closeButton}>
        <Icon name="close" color="#000000" size={16} onPress={props.onRequestClose} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  closeButton: { 
    position: 'absolute', 
    right: 16, 
    top: 4 + getStatusBarHeight(true), 
    borderRadius: 24,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  modalStyle: { 
    backgroundColor: 'rgba(50, 50, 50, 0.6)', 
    padding: 16, 
    paddingTop: 34 + getStatusBarHeight(true) 
  },
  contentStyle: { 
    flex: 0, 
    height: '100%', 
    width: '100%', 
    borderRadius: 4 
  }
});

export default WebViewModal;
