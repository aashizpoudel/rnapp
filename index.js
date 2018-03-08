import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header,Content,Button,Icon} from 'native-base';
import {Grid,Row,Col} from 'react-native-easy-grid';

export  class Index extends React.Component {
  
  render() {
    return (
      
      
      <View style={{flex:1}}>
        <View style={{flex:3,backgroundColor:'blue'}}>
          
        </View>
        <View style={{flex:2}}>
          <View style={{flex:1,flexDirection: 'row',alignItems: 'center'}}>
              <View style={{flex:1,alignItems:'stretch'}}>
              <Button iconCenter full transparent>
            <Icon name='home' />
            <Text>Home</Text>
          </Button></View>
              <View style={{flex:1}}>
                  <Button iconLeft block>
            <Icon name='home' />
            <Text>Home</Text>
          </Button>
              </View>
          </View>
          <View style={{flex:1,flexDirection: 'row',alignItems: 'stretch'}}>
              <View style={{flex:1}}>
                <Button iconLeft block>
            <Icon name='home' />
            <Text>Home</Text>
          </Button>

              </View>
              <View style={{flex:1}}>
              <Button iconLeft block>
            <Icon name='home' />
            <Text>Home</Text>
          </Button>

              </View>
          </View>

        </View>
          
      </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
  },
});
