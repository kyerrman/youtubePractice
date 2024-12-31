import {videos} from './videos.js'
import {toggleSearchBar, toggleSidebar, hamburgerMenu, searchButtonMobile} from './header-sidebar.js'

let videosHTML = ''

videos.forEach((video) => {
  videosHTML += `
    <div class="video-preview">

      <!-- thumbnail preview -->
      <div class="thumbnail-div">
        <img class="thumbnail" src="${video.thumbnail}" alt="${video.channelName}">

        <!-- length of video -->
        <div class="video-length">
          ${video.videoLength}
        </div>
      </div>

      <!-- Video title, channel photo
      and other details of video -->
      <div class="video-info-div">
        <div class="channel-photo-div">
          <img class="profile-picture" src="${video.channelPhoto}" alt="">

          <!-- tooltip upon hover -->
          <div class="channel-tooltip">
            <div class="channel-profile">
              <img src="${video.channelPhoto}" alt="">
            </div>

            <div class="channel-info">
              <div class="channel-name">
                ${video.channelName}
              </div>
              <div class="channel-stats">
                ${video.channelStats} Subscribers
              </div>
            </div>
          </div>
        </div>

        <div class="video-info">

          <!-- video title -->
          <p class="video-title">
            ${video.videoTitle}
          </p>
          
          <!-- video author -->
          <p class="video-author">
            ${video.channelName}
          </p>

          <!--  -->
          <p class="video-stats">
            ${video.videoStats.views} views &#183; ${video.videoStats.datePosted} ago
          </p>
        </div>
      </div>
    </div>
  
  `
})

document.querySelector('.js-video-previews-grid')
  .innerHTML = videosHTML

console.log(videos.length)

hamburgerMenu.addEventListener('click', () => {
  toggleSidebar()
  hamburgerMenu.classList.toggle('clicked')
})

searchButtonMobile.addEventListener('click', () => {
  toggleSearchBar()
})