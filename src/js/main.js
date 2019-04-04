window.deps = {
  'react-native-web' : require('react-native-web'),
  'qrcode.react' : require('qrcode.react'),
  'web3-utils' : require('web3-utils')
};

window.ReactNativeWeb = window.deps['react-native-web'];
window.QRCode = window.deps['qrcode.react'];
window.Web3Utils = window.deps['web3-utils'];