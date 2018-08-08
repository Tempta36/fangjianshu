<template>
  <div class="main">
     <div class="main-left">
        <div class="mainCarousel">
           <div class="carouselshow">
              <ul>
                 <li v-for="(img,index) in carouselImg" :key="index">
                    <a href="#"><img :src="img"/></a>
                 </li>
              </ul>
           </div>
           <div class="carousel-bar">
              <span v-for="(item,index) in carouselImg" :key="index"></span>
           </div>
        </div>
     </div>
     <div class="main-right">

     </div>
  </div>
</template>

<script>

<script>
