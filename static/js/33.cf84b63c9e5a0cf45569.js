(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1749:function(t,i,e){"use strict";e.r(i);var s=e(8),a=e.n(s),n={props:{type:{type:String,validator:function(t){return["initialized","authenticated","user"].includes(t)}}},components:{},data:function(){return{initialized:!1,satisfied:!1}},created:function(){this.authenticate()},watch:{type:function(){this.authenticate()},"$store.state.auth.accessToken":function(t){t&&this.authenticate()},"$store.state.auth.user":function(t){t&&this.$store.dispatch("profiles/find",{query:{accountId:this.$store.state.auth.user.id,$sort:{createdAt:-1},$limit:25}})},"$store.state.profiles.ids":function(t){t&&(this.$store.state.application.activeProfile=this.$store.state.profiles.keyedById[this.$store.state.application.activeProfile&&this.$store.state.application.activeProfile.id||1],this.$store.state.application.developerMode=this.$store.state.application.activeProfile&&"developer"===this.$store.state.application.activeProfile.role,this.$store.state.application.editorMode="viewing",this.$store.state.application.signedIn=!0,"user"===this.type&&(this.satisfied=!0),window.BlockHub.Bridge.updateState({module:"application",state:{activeProfile:this.$store.state.application.activeProfile,profiles:a()(this.$store.state.profiles.keyedById)}}).then(function(){}))}},computed:{},methods:{authenticate:function(){var t=this;this.$store.state.auth.accessToken?"authenticated"===this.type&&(this.satisfied=!0):this.$store.dispatch("auth/authenticate").then(function(){"authenticated"===t.type&&(t.satisfied=!0)}).catch(function(i){i.message.includes("Could not find stored JWT")?"authenticated"===t.type&&(t.satisfied=!0):console.error(i)}),this.initialize()},initialize:function(){this.initialized?"initialized"===this.type&&(this.satisfied=!0):(this.initialized=window.BlockHub.initialized=!0,this.$store.commit("updateSingle",["application/initialized",!0]),"initialized"===this.type&&(this.satisfied=!0))}}},o=e(0),c=Object(o.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",[this.satisfied?this._t("default"):this._e()],2)},[],!1,null,null,null);i.default=c.exports}}]);