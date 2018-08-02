# CustomButton
| props                          | 描述    |
| ------------------------------ | ----- |
| backgroundColor                | 背景颜色  |
| pressBackgroundColor           | 按下背景色 |
| textColor                      | 文字色   |
| pressTextColor                 | 按下文字色 |
| fontSize                       | 文字大小  |
| radius                         | 圆角    |
| onPressFunc                    | 按下回调  |
| onLongPressFunc                | 长按下回调 |
| padding（left，right，top，bottom） | 内边距   |

## usage

```javascript
render() {
        console.log('render')
        return (
            <View style={styles.content}>
                <CommonButton
                              // paddingLeft={30}
                              // paddingRight={30}
                              // paddingTop={15}
                              // paddingBottom={15}
                              width={300}
                              height={300}
                              backgroundColor={'#FF0099'}//背景色
                              pressBackgroundColor={'#FF9999'}//按下背景色
                              textColor={'#330099'}//文字色
                              pressTextColor={'#00a056'}//按下文字色
                              // text={'CommonButton'}
                              onPressFunc={this._onPress}
                              onLongPressFunc={this._onLongPress}
                              ref={
                                  e => this._commonButton = e
                              }/>
            </View>
        )
    }
```

<img src="https://fenganblogimgs.oss-cn-beijing.aliyuncs.com/blog/button.gif" width="400"/>
