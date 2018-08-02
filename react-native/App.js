/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {
    View,
    Alert,
    StyleSheet,
} from 'react-native';
import CommonButton from './CommonButton';

let count = 0;
export default class App extends Component<Props> {

    // 构造
    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this)
        this._onLongPress = this._onLongPress.bind(this)
    }

    _onPress() {
        count++;
        this._commonButton.setButtonText("click:"+count)
    }

    _onLongPress() {
        Alert.alert("long click")
        this._commonButton.setDisabled(true)
    }


    render() {
        console.log('render')
        return (
            <View style={styles.content}>
                <CommonButton
                              // paddingLeft={30}
                              // paddingRight={30}
                              // paddingTop={15}
                              // paddingBottom={15}
                              width={250}
                              height={70}
                              backgroundColor={'#FF0099'}//背景色
                              pressBackgroundColor={'#FF9999'}//按下背景色
                              textColor={'#330099'}//文字色
                              pressTextColor={'#00a056'}//按下文字色
                              text={'CommonButton'}
                              onPressFunc={this._onPress}
                              onLongPressFunc={this._onLongPress}
                              ref={
                                  e => this._commonButton = e
                              }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#0000004D',
        alignItems: 'center',
    },
})

