import React from 'react'
import "./Topbar.css"
import { Search , Person } from '@material-ui/icons'

const Topbar = () => {
    return (
        <div className = "topbarContainer">
              <div className="topbarLeft">
                <span className = "logo"> socialapp </span>
              </div> 
              <div className="topbarCenter">
                  <div className="searchbar">
                      <Search/>
                     <input placeholder ="search for friends"  className = "searchInput" />
                  </div>
              </div> 
              <div className="topbarRight">
                <div className="topbarLinks">
                    <span className = "topbarLink" > HomePage </span>
                    <span className = "topbarLink" > TimeLine </span>
                </div>
                <div className="topbarIcons">
                   <Person/> 
                   <span className="topbasrIconBadge"> </span>
                </div>

              </div> 
            
        </div>
    )
}

export default Topbar
