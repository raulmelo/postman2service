<template>
    <prism-editor language="javascript">
import axios from 'axios'
        
{{HeaderVariables()}}

const _refreshToken = localStorage.getItem('refresh_token')

const APIService = {

{{MountRequesr()}}
    LoginSuccess: (data) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`
    },
    ErrorAuth: (status) => {
        /// deslogar usuario
        if (status === 401 || status === 403) {
            axios.defaults.headers.common['Authorization'] = null
        }
    }
}

export default APIService
    </prism-editor>
</template>


<script>

import Prism from 'vue-prism-component'
import { VARIABLE_API_DECLARE, RESQUEST_API } from './tools'
export default {
    props: ['variables', 'request'],
    components: {
        'prism-editor': Prism
    },
    methods: { 
        HeaderVariables () { 
            let variable = ''
            if(!!this.variables[0]) {
               variable = VARIABLE_API_DECLARE(this.variables)
            }
            return variable
        },
        MountRequesr () { 
            let response = RESQUEST_API(this.request)
            return response
        }
        
     }
}
</script>
