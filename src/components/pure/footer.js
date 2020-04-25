import React from "react"
import social from "./social.json"

export default () => (
  <>
    <span>
      © All rights are reserved | {new Date().getFullYear()} | 
      Made with{' '}<span role="img" aria-label="love">❤️</span>{' '}
      by{' '}Fones Vittorio
    </span>
    <div aria-label="Follow me on ">
      {social.map(({ id, link, icon, name }) =>(
        <a key={id} href={link}>
          <img width="24" src={icon} alt={name} />
        </a>
      ))}
    </div>
  </>
)
