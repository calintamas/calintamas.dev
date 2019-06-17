import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from "./index.module.css"

const IndexPage = () => (
  <div className={styles.container}>
    <SEO title="Home" />
    <h1 style={{fontSize: '50px'}}>Hello <span role='img' aria-label="Wave">👋</span></h1>
    <div className={styles.footer}>
      <a href='https://github.com/calintamas'>github</a>
      <a href='https://twitter.com/calintamas2'>twitter</a>
      <a href=''>resume</a>
    </div>
  </div>
)

export default IndexPage
