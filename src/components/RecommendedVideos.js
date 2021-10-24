import React from 'react';
import VideoCard from './VideoCard.js';
import '../styles/RecommendedVideos.css';

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos__videos'>
        <VideoCard
          title='How To Become A Coding God'
          views='13.2M Views'
          timestamp='3 days ago'
          channelImage='https://avatars.githubusercontent.com/u/26021509?s=40&v=4'
          channel='Yasin Khan'
          image='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        />
        <VideoCard
          title='Are Robots Our Friends?'
          views='1M Views'
          timestamp='3 days ago'
          channelImage='https://yt3.ggpht.com/a-/AOh14Gj9IN5ckfM8Z7FJpAY5qwFN04yu3IJeOBWp7g=s68-c-k-c0x00ffffff-no-rj-mo'
          channel='Animated Ginger'
          image='https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9ib3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        />

        <VideoCard
          title='🔴 Late Nights At The Coffee Shop'
          views='22K Views'
          timestamp='Streamed 1 month ago'
          channelImage='https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo'
          channel='Clever PRogrammer'
          image='https://i.ytimg.com/vi/-5KAN9_CzSA/hq720_live.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCmg_ZMIF4U1sUNLZ93lS-B2aO0Iw'
        />

        <VideoCard
          title='Data Analysis with Python: Part 1 of 5 (Live Course)'
          views='278 Views'
          timestamp='1 hour ago'
          channelImage='https://yt3.ggpht.com/a-/AOh14GgwaiCp63JOClbTXswJ4u8x9IXpD_qDn3tt3g=s68-c-k-c0x00ffffff-no-rj-mo'
          channel='Animated Ginger'
          image='https://i.ytimg.com/vi/EsDFiZPljYo/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBDQqwdSEPTxEiaYxoFxQkAwaalaw'
        />

        <VideoCard
          title='lofi hip hop radio - beats to relax/study to'
          views='3.7M Views'
          timestamp='10 days ago'
          channelImage='https://yt3.ggpht.com/a-/AOh14Gj1ME7zG6pJG6689WU13fYHmafnUGK7IMeWIg=s68-c-k-c0x00ffffff-no-rj-mo'
          channel='Streaming Cow'
          image='https://i.ytimg.com/vi/5qap5aO4i9A/hq720_live.jpg?sqp=CJDI3vkF-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDQgUjKJIY__tDOcp1UZKkz5NqBNg'
        />

        <VideoCard
          title='Are Bears Cute Or Deadly?'
          views='20.2M Views'
          timestamp='8 months ago'
          channelImage='https://yt3.ggpht.com/a-/AOh14Ghx42IpK24SHjB994Lg5mJbVIdPC1q5upcaKg=s68-c-k-c0x00ffffff-no-rj-mo'
          channel='Bear Enthusiast'
          image='https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
        />

        <VideoCard
          title='US History: Last Week Tonight with John Oliver (HBO)'
          views='7.1M Views'
          timestamp='3 months ago'
          channelImage='https://yt3.ggpht.com/a-/AOh14Gjz6io9RJjTqDd5jAj1ZB9vQIbkMtHZAy1p6Q=s68-c-k-c0x00ffffff-no-rj-mo'
          channel='LastWeekTonight'
          image='https://i.ytimg.com/vi/hsxukOPEdgg/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAyNGxHI4DxYQKUl5M2__uffQbaAw'
        />

        <VideoCard
          title='Barry Allen Meets Justice League Flash (Ezra Miller) | Crisis on Infinite Earths Crossover'
          views='6M Views'
          timestamp='7 days ago'
          channelImage='https://yt3.ggpht.com/a-/AOh14GgXU-P7iSwZek51vN4YXqItLM49G7SPn2lPwg=s68-c-k-c0x00ffffff-no-rj-mo'
          channel='Crisis Clips'
          image='https://i.ytimg.com/vi/sFbIHFZAGhc/mqdefault.jpg'
        />

        <VideoCard
          title='Trump Plainly Admits Plan to Limit Mail-In Voting | The Daily Social Distancing Show'
          views='492K Views'
          timestamp='1 day ago'
          channelImage='https://yt3.ggpht.com/a-/AOh14Ghb_ywcHCQ4QOx0odAVd4gh0cQp1BzE54X5jg=s68-c-k-c0x00ffffff-no-rj-mo'
          channel='They Daily Show with Trevor Noah'
          image='https://i.ytimg.com/sh/aDmMbMNp-xdAsQ31d1Urng/market.jpg'
        />

        <VideoCard
          title='iPhone 69 Review'
          views='3.3M Views'
          timestamp='1 year ago'
          channelImage='https://yt3.ggpht.com/a-/AOh14Gj_kD_9yNI9KrmU5NYGdMfZuekjcdAg1MNGjw=s68-c-k-c0x00ffffff-no-rj-mo'
          channel='Patriot Act'
          image='https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        />

        <VideoCard
          title='Best Of Arijit Singh And Atif Aslam Songs 2019 | NEW HINDI ROMANTIC LOVE SONGS | Bollywood SonGS'
          views='31.2M Views'
          timestamp='23 days ago'
          channelImage='https://yt3.ggpht.com/a-/AOh14GiXm-7_-WONCtrCwkEj_DPzLbxI7l7YqriByA=s68-c-k-c0x00ffffff-no-rj-mo'
          channel='Best of Bollywood'
          image='https://i.ytimg.com/vi/JmU3og5n8pw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBfjna35ETT2s4eeSXUNRE48ZM9Fg'
        />
        <VideoCard
          title='he saved my life'
          views='114K Views'
          timestamp='5 days ago'
          channelImage='https://yt3.ggpht.com/a-/AOh14Ggt5K1cZd9JJ67vlxWpAHbOKdioCAj1_QBTaQ=s68-c-k-c0x00ffffff-no-rj-mo'
          channel='Will Smith'
          image='https://i.ytimg.com/vi/IwBS6QGsH_4/mqdefault.jpg'
        />
        <VideoCard
          title='The One Piece Timeline'
          views='301.2M Views'
          timestamp='8 days ago'
          channelImage='https://yt3.ggpht.com/a-/AOh14Gi1sPYoDbCYxqVZGwQzDTd5L5ZrZphEQG9JaQ=s68-c-k-c0x00ffffff-no-rj-mo'
          channel='One Piece'
          image='https://images.unsplash.com/photo-1621478374422-35206faeddfb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b25lJTIwcGllY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        />
        <VideoCard
          title='flex with my lambo'
          views='2B Views'
          timestamp='7 years ago'
          channelImage='https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b25lJTIwcGllY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
          channel='Lambo Lover'
          image='https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        />
        <VideoCard
          title='come at me bro'
          views='354K Views'
          timestamp='11 days ago'
          channelImage='https://yt3.ggpht.com/a-/AOh14GhJLQz9kDewIgQNDKe4N-LQcD-7sXgp5Oe0pw=s68-c-k-c0x00ffffff-no-rj-mo'
          channel='Studio Ghibli'
          image='https://images.unsplash.com/photo-1589456506629-b2ea1a8576fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJveGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
