import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
	return (
		<Tabs>
			<Tabs.Screen name="home" options={{headerShown: false}}/>
			<Tabs.Screen name="plushie" options={{headerShown: false}}/>
		</Tabs>
	)
}

export default _layout