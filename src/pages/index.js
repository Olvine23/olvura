 import React from 'react'
 import {Link} from 'gatsby'
 import Layout from '../components/layout'
 import { StaticImage} from 'gatsby-plugin-image';
 import '../styles/Merriweather-Regular.ttf';
 import {Content} from '../components/content'
 
 
 const IndexPage = () => {
   return (
     <div class="container mx-auto">
       <Layout />
       <Content />
       
       <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <StaticImage class="w-full" src="https://cdn.pixabay.com/photo/2017/10/28/07/47/woman-2896389_960_720.jpg" alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
     </div>
   )
 }
 


 export default IndexPage