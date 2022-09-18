import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {authApi} from 'api/auth';
import {stacks} from 'constants/stacks';
import {authProviders} from 'constants/auth';

export const Auth = ({navigation}) => {
  useEffect(() => {
    const getCurrentUserInfo = async () => {
      try {
        // debugger;
        const userInfo = await GoogleSignin.signInSilently();

        const data = {
          provider: {
            provider_name: authProviders.google,
            token: userInfo.idToken,
            external_id: userInfo.user.id,
            image_path: userInfo.user.photo,
          },
          user: {
            email: userInfo.user.email,
          },
        };
        const request = authApi.signIn(data);
        console.dir(request);
        navigation.navigate(stacks.dashboard);
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_REQUIRED) {
          navigation.navigate(stacks.signIn);
          // user has not signed in yet
        } else {
          navigation.navigate(stacks.signIn);
          // some other error
        }
      }
    };

    getCurrentUserInfo();
  }, [navigation]);
  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};
