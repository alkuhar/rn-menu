import {
  ToggleContainer,
  ToggleItem,
} from 'deco-ride-share-demo'

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native'

class Project extends Component {
  _renderAction(option) {
    this.setState({option})
    
  }
  render() {
    return (
      <View style={styles.container}>
        <ToggleContainer
          value={(this.state && this.state.option) || 'One'}
          options={['Start', 'Calendar', 'Settings']}
          style={{padding: 10}}
          orientation={"vertical"}
          spacing={10}
          renderItem={(option, active) => (
            <ToggleItem
              option={option}
              active={active}
              onPress={() => this._renderAction}
              color={"rgb(74,144,226)"}
              backgroundColor={"rgb(255,255,255)"}
              borderColor={"rgb(74,144,226)"}
              activeColor={"rgba(255,255,255,1)"}
              activeBackgroundColor={"rgb(74,144,226)"}
              borderRadius={5}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('Project', () => Project);
