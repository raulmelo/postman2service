<template>
 
  <transform-code
      :variables="variables"
      :request="request"
  ></transform-code>
   
</template>


<script>
import transformCode from './transform-code'
import { removeSubFolder, getdataParams, slugify, verifyToken, paramsClear, urlPath }  from './utils/index'
export default {
    props: ['dataCollection'], 
    data () { 
        return {
            variables: {},
            request: []
        }
    },
    components: {
        'transform-code': transformCode
    },
    mounted () { 
        if(!!this.dataCollection.variable) {
            this.SetVariables(this.dataCollection.variable)
        }
        if(!!this.dataCollection.item) { 
          this.SetRequest(this.dataCollection.item)
        }
    },
    methods: { 
        async SetRequest(list) { 
          let newList = list
          newList = await removeSubFolder(newList)
          newList = await getdataParams(newList)
          newList = await slugify(newList)
          newList = await verifyToken(newList)
          newList = await paramsClear(newList)
          newList = await urlPath(newList)
          this.request = newList
        },
        SetVariables(payload) {
            let _variables = payload.filter( variable => variable.disabled !== true )
            _variables.map((item,index) => { 
                this.variables[index] = {
                    id: index,
                    key: item.key,
                    value: item.value
                }
            })
        }
    }
}
</script>

