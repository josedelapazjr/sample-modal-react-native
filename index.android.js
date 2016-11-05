/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 'use strict';

 var React = require('react');
 var ReactNative = require('react-native');
 var {
   AppRegistry,
   Modal,
   StyleSheet,
   Text,
   TouchableHighlight,
   View,
 } = ReactNative;

 class SampleModal extends React.Component {
   constructor(props){
     super(props);

     this._onPressButton = this._onPressButton.bind(this);

     this.state = {
       modalVisible: false,
     };
   }

   _setModalVisible = (visible) => {
     this.setState({modalVisible: visible});
   };

   _onPressButton(){
     this._setModalVisible(true);
   }

   render() {
     var modalBackgroundStyle = {
       backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
     };
     var innerContainerTransparentStyle = this.state.transparent
       ? {backgroundColor: '#fff', padding: 20}
       : null;

     return (
       <View>
         <Modal
           animationType={'slide'}
           visible={this.state.modalVisible}
           onRequestClose={() => this._setModalVisible(false)}
           >
           <View style={[styles.container, modalBackgroundStyle]}>
             <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
               <Text>This modal was presented {this.state.animationType === 'none' ? 'without' : 'with'} animation.</Text>
               <Text>It is currently displayed in {this.state.currentOrientation} mode.</Text>
               <TouchableHighlight onPress={this._setModalVisible.bind(this, false)}>
                 <Text>Close</Text>
               </TouchableHighlight>
             </View>
           </View>
         </Modal>
         <View>
           <TouchableHighlight onPress={this._onPressButton}>
             <Text>Click me!</Text>
           </TouchableHighlight>
         </View>
       </View>
     );
   }
 }

 var styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     padding: 20,
   },
   innerContainer: {
     borderRadius: 10,
     alignItems: 'center',
   },
 });

AppRegistry.registerComponent('SampleModal', () => SampleModal);
