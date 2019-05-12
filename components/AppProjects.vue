<template>
  <section class="container">
     
     <h1 class='title mt2'> Projects </h1>

     <div class='badges'>
       <div v-bind:class='activeAll()' @click="changeAll()" > 
        all
       </div>
      <div v-for="( badge, index ) in badges" :key="index" @click="changeBadge( badge )" v-bind:class='activeBadge( badge )' > 
        {{ badge.name }}
       </div>
     </div>

     <div class='projects' >

        <div class='project'  v-for="( project, index ) in showProjects() " :key="index">

          <img v-bind:src="project.image" class="project-image">


          <div class='project-info' >

               <h3 class="project-name">{{ project.name }}</h3>

               <div class="project-description" v-html="project.description" >

               </div>

               <div class="project-technologies">
                        <span class="project-technology" v-for="technology in project.technologies" :key="technology" >{{ technology }}</span>
                        <span class="project-technology finished">{{ project.status }}</span>
               </div>

               <div class='project-links'>

                  <a v-for="( link, index ) in project.links " :key="index" v-bind:href="project.href" class="project-link" target="_blank">{{ link.name }}</a>

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

       badges: [
         {
            name: "websites",
            active: false
         },
         {
           name: "games",
           active: false
         },
         {
           name: "web apps",
           active: false
         },
         {
           name: "desktop_apps",
           active: false
         }
       ],

       projects: [
         {
           name: "Socialler",
           image: "https://socialler.pl/img/bg-cta.png",
           description:"Social Service for classes!",
           status: "finished",
           badge: "web apps",
           technologies: [
             "PHP", "LARAVEL"
           ],
           links: [
             {
               name: "LIVE",
               href: "",
             },
             {
               name: "GITHUB",
               href: ""
             }
           ]
         }
       ]

     }

   },

   methods: {
     
      changeBadge( badge ) {

         this.badges.filter( ( badge ) => badge.active = false );

         this.badges[ this.badges.indexOf( badge ) ].active = true;

      },

      changeAll() {

         this.badges.filter( ( badge ) => badge.active = false );

      },

      activeAll() {

        let active = false;
          
          this.badges.filter( ( badge ) => { if( badge.active ) { 
            
            active = true;
            
         } });

         if( !active ) {

          return "badge active";

         } else {

           return "badge";

         }

      },

      activeBadge( badge ) {

         if( this.badges[ this.badges.indexOf( badge ) ].active ) {

          return "badge active";

         } else {

           return "badge";

         }

      },

      showProjects() {

          let active = false;

          let badge = { };
          
          this.badges.filter( ( e ) => { if( e.active ) { 
            
            active = true;

            badge = e;
            
         } });

         if( !active ) {

          return this.projects;

         } else {

           let projects = [ ];

           this.projects.filter( ( project ) => { 

            if( project.badge == badge.name ) {
             
               projects.push( project ); 

            }
             
           });

           return projects;

         }

      }

   }

 }

</script>

<style scoped>

.title {
  color: #000;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: bold;
}

.subtitle {
  color: #000;
  text-transform: uppercase;
}

.container {
  
  min-height: 100vh;
  display: block;
  text-align: center;

}

.mt2 {
  margin-top: 50px;
}

.badges {
    display: inline-flex;
    justify-content: center;
    width: 100%;
    list-style-type: none;
    margin-bottom: 30px;
    margin-top: 20px;
}

.badges > .badge {
    padding: 5px 15px;
    margin: 0 10px;
    font-size: 1.4em;
    cursor: pointer;
    transition: all .2s ease-in;
    border-bottom: 3px solid transparent;
}

.badges > .badge:hover,
.badges > .active {
  border-color: #8c0202;
}

.projects {
    width: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 13px;
}

.project-image {
  width: 100%;
  display: block;
}

.project {
    width: 100%;
    position: relative;
    display: block;
    -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.5);
}

.project-info {

    text-align: center;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background-color: rgb(193, 5, 5, 0.85 );
    opacity: 0;
    transition: opacity .2s ease-in; 

}

.project:hover > .project-info {

   opacity: 1;

}

.project-info > .project-name {

   font-size: 1.7rem;

}

.project-info > .project-description {
  
    font-size: 0.9em;
    width: 80%;
    margin: 0 auto;

}

.project-info > .project-technologies {

    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

}

.project-info > .project-technologies > .project-technology {

    background-color: white;
    font-size: 0.8em;
    color: #000051;
    margin-right: 5px;
    margin-top: 5px;
    padding: 5px 8px;
    border-radius: 5px;

}

.project-info > .project-technologies > .finished {

  background-color: green;
  color: white;

}

.project-info > .project-technologies > .progress {

  background-color: orange;
  color: white;

}

.project-description > a, .project-description > a:visited {
    color: white;
}

.project-link:first-child {

    margin-right: 5px;

}

.project-info > .project-links > .project-link {

    color: white;
    text-decoration: none;
    padding: 5px 20px;
    font-size: 0.9em;
    font-weight: 700;
    border: solid 2px white;
    position: relative;
    z-index: 2;

}

.project-info > .project-links > .project-link:hover {

    color: #c10505; 

    cursor: pointer;

}

.project-info > .project-links > .project-link:hover:before {

     width: 100%;

}

.project-info > .project-links > .project-link:before {

      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      z-index: -1;
      background-color: white;
      transition: width .2s ease-in;

}



</style>