<template>
  <section class="grid-header">
      <div class="grid-header--ballon"></div>
      <div class="grid-header--text">
        <h2 class="fs-45 font-1 _cl-1 _mb-3">PostmanToService</h2>
        <p>Transform collection do postman para service</p>
        <h4 class="lh-20 _mb-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, beatae veritatis sed eveniet esse eos labore, quasi necessitatibus alias fugiat officiis repudiandae quis voluptatum! Expedita facilis eaque delectus unde earum?
        </h4>
        <div class="grid-header--file ">
        <slot></slot>
        </div>
      </div>
      <div class="grid-header--robot">
        <robotin></robotin>
      </div>
  </section >
</template>



<script>
import RobotIn from '@/components/robo'
import IconTech from '@/components/icon-tech'
export default { 
    name: 'header-layout',
    components: { 
      'robotin': RobotIn,
      IconTech
    }
}
</script>



<style lang="scss">
.grid-header { 
  position: relative;
  margin-top: 90px;
  grid-column: 1/full;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  &--ballon { 
    position: absolute;
    top: -33%;
    right: -50%;
    height: 800px;
    width: 800px;
    z-index: -1;
    border-radius: 50%;
    background-image: var(--dg-1)
  }
  &--text { 
    margin-top: 50px;
  }
}
</style>

