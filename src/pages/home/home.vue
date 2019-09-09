<template>
  <div class="grid">
    <header-layout>
      <file-upload @handlerCollection="createCode"></file-upload>
    </header-layout>
    <section class="grid-code">
      <div :class="`${!themeCode ? 'code-night' : ''}`" v-if="collection">
         <button @click="themeCode = !themeCode">Theme</button>
        <code-end  :dataCollection="collection"></code-end>
      </div>
      <img  src="@/assets/img/postman2service.png" style="width:100%" alt="">
    </section>
    <section class="grid-code"></section>
  </div>
</template>

<script>
import HeaderLayout from '../sections/header-layout'
import FileUpload from '@/components/file-upload'
import CodeComponents from '@/collection-convert/'

export default { 
  data () { 
    return { 
      themeCode: false,
      collection: null
    }
  },
  components: { 
    'header-layout': HeaderLayout,
    'file-upload': FileUpload,
    'code-end': CodeComponents
  },
  methods: { 
    createCode (event) { 
      this.collection = event
    }
  }
}
</script>



<style lang="scss">
  .grid { 
    .grid-code {
      grid-column: 1/full;
      margin-top: 20px;
      div:not(:empty) { 
        width: 100%;
        border: 6px solid #ffffff;
        box-shadow: 7px 20px 20px 4px #04030e;
        border-radius: 15px;
      }
    }
    .grid-step { 
      grid-column: 1/full;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      text-align: center;
    }
  }
</style>

