import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AnimatedIntro from '@/components/AnimatedIntro'
import ButtonLoginSheet from '@/components/ButtonLoginSheet'

export default function index() {
  return (
    <View>
     <ButtonLoginSheet/>
     <AnimatedIntro/>
    </View>
  )
}

const styles = StyleSheet.create({})