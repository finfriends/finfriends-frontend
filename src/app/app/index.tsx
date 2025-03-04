import { Button, View, Alert } from 'react-native';


export default function Index() {
  const showAlert = () =>
    Alert.alert(
      '알림 제목',
      '안녕하세용가리',
      [
        {
          text: '확인',
          onPress: () => Alert.alert('확인하셨나용?'),
          style: 'default',
        },
      ],
    );

  return (
    <View>
      <Button
        onPress={showAlert}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
    // <WebViewCont />
  );
}
