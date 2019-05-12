<template>
  <section class="container">

      <div class='overlay-image' />

      <div class='overlay container'>

        <div>

         <h1 class='title mt2'> Skills </h1>

         <div class='skills mt5'>

             <div class='skills-card mb2' v-for="skill in skills" :key="skill" >

               <h3 class='skill-title'> {{ skill.name }} </h3>

               <div class='skill-content'> 
                
                 <div class='skill' v-for="item in skill.items" :key="item" @mouseover="mouseOver( item )" @mouseleave="mouseLeave( item )" >

                   <i v-bind:class="item.icon" v-bind:style="{ color: item.color }" ></i>

                   <div class='name'>

                    {{ item.name }}

                   </div>

                 </div>
               
               </div>

             </div>
            
         </div>

        </div>

      </div>

  </section>
</template>

<script>

 export default {

   data() {

      return {
        
         skills: [
            {
              name: "Advanced level",
              items: [
                {
                  name: "HTML5",
                  color: "#fff",
                  color_alernative: "#e54d26",
                  icon: "fab fa-html5 5x"
                }
              ]
            },
            {
              name: "Intermediate level",
              items: [

              ]
            },
            {
              name: "Beginner level",
              items:[

              ]
            }
         ]

      }

   },

   methods: {

       mouseOver( item ) {

         let color = item.color;

         let color_alernative = item.color_alernative;

         item.color = color;

         item.color_alernative = color_alernative;

         this.skills.filter( ( skill ) => {

             if ( skill.items.indexOf( item ) ) {

                 skill.items[ skill.items.indexOf( item ) ] = item;

             }

         } );

       },

      mouseLeave( item ) {

         let color = item.color;

         let color_alernative = item.color_alernative;

         item.color = color_alernative;

         item.color_alernative = color;

         this.skills.filter( ( skill ) => {

             if ( skill.items.indexOf( item ) ) {

                 skill.items[ skill.items.indexOf( item ) ] = item;

             }

         } );

       }

   }

 }

</script>

<style scoped>

.overlay {

  background:
     linear-gradient(
       to right top, 
       rgb(17, 24, 35, 0.7 ), 
       rgb(17, 24, 35, 0.7 ), 
       rgb(17, 24, 35, 0.7 ), 
       rgb(15, 15, 18, 0.7 ), 
       rgb(11, 11, 11, 0.9 ) 
      );

   background-size: cover;

   position: absolute;

   z-index: 1;

   height: 90vh;

   width: 100%;
    
}

.overlay-image {

  z-index: -1;

  background-image: url( '~assets/images/skills.jpg' );

  height: 90vh;

  width: 100%;

  position: absolute;
  
}

.container {
  min-height: 90vh;
  text-align: center;
}

.row {
  flex-flow: row wrap;
}

.col-md-3 {

  flex: 1 30%;

}

.btn {

  padding: 3%;

  padding-left: 12%;

  padding-right: 12%;
  

}

.ml2 {

  margin-left: 20px;


}

.mt2 {

  margin-top: 20px;

}

.skills > .skills-card {

  background: linear-gradient(
    to right top, 
    #282b2e, 
    #2c2f31,
    #303234, 
    #353638, 
    #393a3b
  );

  margin-left: 10%;
  margin-right: 10%;

  height: 17vh;

  box-shadow: 6px 4px 17px 0px black;

}

.skills > .skills-card > .skill-title {

  color: white;

  padding: 1%;

  background: linear-gradient(
    to right top, 
    #460714, 
    #3f0513, 
    #390411, 
    #32030f, 
    #2c000c
  )

}

.skills > .skills-card > .skill-content {

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

}

.mb2 {

  margin-bottom: 20px;

}

.mt5 {

  margin-top: 50px;

}

.skill > i {

    font-size:4.5em;
    display: inline-block;
    transition: all .2s ease-in-out;

    color: #ffff;

    margin-bottom: 1rem;

}

.skill > .name {

    display: inline-block;
    text-align: center;
    font-size: 0.9em;
    position: absolute;
    bottom: 20%;
    opacity: 0;
    color:white;
    left:0;
    right:0;
    bottom: 0;
    transition: all .2s ease-in;

}

.skill {

    padding: 10px 10px;
    position: relative;
    transition: all .2s ease-in;

}

.skill:hover {

  background-color: rgb(0, 0, 0, 0.5 );

  box-shadown: none;

  width: 10%;

  cursor:pointer;

}

.skill:hover > .name {

   opacity: 1;

}

</style>