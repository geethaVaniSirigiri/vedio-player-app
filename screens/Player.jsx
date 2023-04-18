import React from 'react';
import { View, Text } from 'react-native';
import VideoPlayer from 'react-native-video-player';


export default function Player() {
    return (
        <View>
            <VideoPlayer
                video={require('../assets/videos/dummy_video.mp4')}
                thumbnail={{ uri: "http://qaavengers.redbangle.com.s3-website.ap-south-1.amazonaws.com/assets/logo/logo.png" }}
                videoWidth={1500}
                videoHeight={1000}
                showDuration={true}
            />
        </View>
    )
}