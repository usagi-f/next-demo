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
  alert(msg)
}

const index = () => (
  <div>
    <p>Hello Next.js</p>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <button onClick={() => event('foo')}>click</button>
    <br/>
    <img src="/static/usagi.png" />
    <style jsx>{style}</style>
  </div>
)

export default index
