import React from 'react'
import Scrollspy from 'react-scrollspy'
import './Toc.css'

export default function Toc(props) {
  const { post } = props
  let url = post.items.map(function(post) {
    return post['url'].substring(1)
  })

  return (
    /* Step 1: Testing with Props Only */
    // <nav>
    //   {post.items.map(p => (
    //     <li key={p.url}>
    //       <a href={p.url}>{p.title}</a>
    //     </li>
    //   ))}
    // </nav>
    /* Step 2: Import Scrollspy and Pass The Props*/
    <nav>
      <Scrollspy items={url} currentClassName="is-current" className="toc-list">
        {post.items.map(p => (
          <li key={p.url}>
            <a href={p.url}>{p.title}</a>
          </li>
        ))}
      </Scrollspy>
    </nav>
  )
}
