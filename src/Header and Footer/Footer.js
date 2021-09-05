import React from 'react'
import gmail from '../gmail.png'
import instagram from '../instagram.png'
import vk from '../vk.png'

function Footer({night,setNight}) {
    return (
        <footer className={!night ? "dark-mode MainFooter" : "day-mode MainFooter"}>
            <ul id="icon-list">
                <li>
                   <a href="mailto:nuraliisatai555@gmail.com"><img src={gmail} alt="" /></a> 
                </li>
                <li>
                   <a href="https://www.instagram.com/nuraliisatai/" target="_blank"><img src={instagram} alt="" /></a>
                </li>
                <li>
                  <a href="https://vk.com/stillkick" target="_blank"><img src={vk} alt="" /></a> 
                </li>
            </ul>
            <h1>Created Stillkick</h1>
        </footer>
    )
}

export default Footer
