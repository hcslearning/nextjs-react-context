import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {UserContext} from './../lib/context'
import React, {useContext} from 'react'
import Link from 'next/link'

export default class Home extends React.Component {

  render(){
    return (
      <UserContext.Consumer>
        { ({username, setUsername}) => (
      <div>
        <Head>
          <title>React Context</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        Bienvenido { username }

          <br /><br />
        <input type="text" onChange={(e) => {setUsername(e.target.value)}} />
        <br /><br />
        <Link href="/other">
          <a>Other</a>
        </Link>
      </div>
        )}
      </UserContext.Consumer>
    )
  }
  
}
