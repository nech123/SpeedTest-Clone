import React from 'react'
import './styles.css'
import styled from 'styled-components'
import { IoLogoApple } from 'react-icons/io'
import { FaAndroid } from 'react-icons/fa'
import { SiMacos, SiAppletv, SiEclipsejetty } from 'react-icons/si'
import { AiFillWindows, AiOutlineChrome } from 'react-icons/ai'
import { MdVpnKey } from 'react-icons/md'

const IconIos = styled(IoLogoApple)`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
`

const IconAndroid = styled(FaAndroid)`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
`

const IconMac = styled(SiMacos)`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
`

const IconWin = styled(AiFillWindows)`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
`

const IconChrome = styled(AiOutlineChrome)`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
`

const IconAppleTV = styled(SiAppletv)`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
`
const IconCLI = styled(SiEclipsejetty)`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
  font-weight: 100;
`
const IconVPN = styled(MdVpnKey)`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
`

function MenuDropFirst() {
  return (
    <div className="dropMenuTotal">
      <div className="dropdown">
        <button className="dropbtn">Apps</button>
        <div className="dropdown-content">
          <div className="icon">
            <IconIos />
            <a href="/">iOS</a>
          </div>

          <div className="icon">
            <IconAndroid />
            <a href="/">Android</a>
          </div>
          <div className="icon">
            <IconMac />
            <a href="/">Mac</a>
          </div>
          <div className="icon">
            <IconWin />
            <a href="/">Windows</a>
          </div>
          <div className="icon">
            <IconChrome />
            <a href="/">Chrome</a>
          </div>

          <div className="icon">
            <IconAppleTV />
            <a href="/">Apple TV</a>
          </div>

          <div className="icon">
            <IconCLI />
            <a href="/">CLI</a>
          </div>

          <div className="icon">
            <IconVPN />
            <a href="/">VPN</a>
          </div>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">Analysis</button>
        <div className="dropdown-content">
          <a href="/">Article</a>
          <a href="/">Speedtest Global index®</a>
          <a href="/">Performance Directory</a>
          <a href="/">Ookla 5G Map®</a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">NetWork</button>
      </div>

      <div className="dropdown">
        <button className="dropbtn">Developers</button>
      </div>

      <div className="dropdown">
        <button className="dropbtn">Enterprise</button>
        <div className="dropdown-content">
          <a href="/">Speedtest Intelligence</a>
          <a href="/">Cell Analytics</a>
          <a href="/">Ookla Wind</a>
          <a href="/">Sapatialbuzz</a>
          <a href="/">Speedtest Powered</a>
          <a href="/">GIS Datasets</a>
          <a href="/">Speedtest Custom</a>
          <a href="/">Cell Maps</a>
          <a href="/">Tower Source</a>
          <a href="/">Map Elements</a>
          <a href="/">Partners & Programs</a>
          <a href="/">Downdetector Enterprise</a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">About</button>
        <div className="dropdown-content">
          <a href="/">Press</a>
          <a href="/">Knowledge Base</a>
          <a href="/">Advertise</a>
          <a href="/">Careers</a>
        </div>
      </div>

      <div className="dropdown">
        <div className="photo">
          <img src="https://avatars.githubusercontent.com/u/45881098?v=4" />
          <button className="dropbtn">Log In</button>
        </div>
        <div className="dropdown-content">
          <a href="/">Results History</a>
          <a href="/">Settings</a>
          <a href="/">Help</a>
          <a href="/">Create Account</a>
        </div>
      </div>
    </div>
  )
}

export { MenuDropFirst }
