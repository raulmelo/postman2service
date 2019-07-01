<template>
    <label class="button-file-upload" for="datafile">
      <input type="file" id="datafile" name="datafile"  directory  @change="handleFileChange"/>
      <span>
        <img src="@/assets/img/upload-icon.svg" alt="icon upload">
        <span>Envar arquivo</span>
      </span>
    </label>
</template>



<script>
export default { 
    name: 'file-upload',
    data() {
        return {
            ObjectPostman: {}
        }
    },
    methods: {
      handleFileChange(e) {
          let ComponentFile = document.getElementById('datafile')
          let file = ComponentFile.files[0]
          let _FileReader = new FileReader()
          // Iniciar componte browser 
          _FileReader.readAsText(file)
          // Leitura do file
          _FileReader.onloadend = (event) => {
              this.ObjectPostman = _FileReader.result
              if(!!_FileReader.result) { 
                  let toJson = JSON.parse(_FileReader.result)
                  this.CompleteInput(toJson)
              }   
          }
      },
      CompleteInput (jsonFile) {
        console.log(jsonFile)
        setTimeout(() => {
            this.$emit('handlerCollection', jsonFile)
        }, 300);
      }
  }
}
</script>



<style lang="scss">
.button-file-upload { 
  display: inline-flex;
  align-items: center;
  background-color: var(--c-primary);
  box-shadow: 0px 4px 0px #227f7b;
  border: none;
  padding: 10px 30px 10px 15px ;
  border-radius: 9px;
  input { 
    display: none
  }
  > span { 
    display: flex;
    align-items: center;
    span { 
      font-size: 18px;
      font-weight: 900;
      color: white;
      margin-left: 6px;
    }
    svg { 
      width: 70px;
    }
  }
}
</style>


