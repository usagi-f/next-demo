import React from 'react'
import Link from 'next/link'
import css from 'styled-jsx/css'

const style = css`
a {
  color: green;
}
div {
  background: #fafafa;
}
`

const event = (msg) => {
  console.log(msg)
}

const Index = () => (
  <div>
    <p>Hello Next.js</p>
    <Link href="/about">
      <a href>About Page</a>
    </Link>
    <button onClick={() => event('foo')}>click</button>
    <br />
    <img src="/static/usagi.png" alt="usagi" />
    <style jsx>{style}</style>
  </div>
)

export default Index
