import '../styles/globals.css'
import {UserContext, UserProvider} from './../lib/context'
import React, {Component, useState} from 'react'
import App, {Container} from 'next/app'

class MyApp extends App {

  render() {
    const {Component, pageProps} = this.props
    return (
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
    )
  }
}

export default MyApp
