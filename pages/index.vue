<template>
  <section class="container">
    <div>

      <AppInfo>

      </AppInfo>

      <AppProjects>


      </AppProjects>

      <AppSkills>


      </AppSkills>

      <AppData>


      </AppData>

      <AppFooter>


      </AppFooter>

    </div>
  </section>
</template>

<script>

import AppInfo from '@/components/AppInfo';

import AppProjects from '@/components/AppProjects';

import AppSkills from '@/components/AppSkills';

import AppData from '@/components/AppData';

import AppFooter from '@/components/AppFooter';

export default {
  components: {
    AppInfo,
    AppProjects,
    AppSkills,
    AppData,
    AppFooter
  }
}
</script>

<style>

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: rgb(255, 255, 255, 1 );
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  color: rgb(255, 255, 255, 1 );
  padding-bottom: 15px;
}

</style>

