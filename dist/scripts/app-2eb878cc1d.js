!function(){"use strict";angular.module("formioSalesQuoteApp",["formio","ngFormioHelper","ui.router","ngMap","bgf.paginateAnything"]).config(["FormioProvider","FormioResourceProvider","FormioAuthProvider","$stateProvider","$urlRouterProvider","AppConfig",function(o,r,t,e,s,i){o.setAppUrl(i.appUrl),o.setBaseUrl(i.apiUrl),t.setStates("auth.login","home"),t.setForceAuth(!0),t.register("login","user"),e.state("home",{url:"/?",templateUrl:"views/main.html",controller:["$scope","$rootScope",function(o,r){o.contracts=[],o.contractsUrl=r.contractForm+"/submission",o.customers=[],o.customersUrl=r.customerForm+"/submission",o.opportunities=[],o.opportunitiesUrl=r.opportunityForm+"/submission",o.quotes=[],o.quotesUrl=r.quoteForm+"/submission",o.agents=[],o.agentsUrl=r.agentForm+"/submission"}]}),r.register("contract",i.forms.contractForm),r.register("customer",i.forms.customerForm,{templates:{view:"views/customer/view.html"},controllers:{view:["$scope",function(o){o.position={lat:0,lng:0},o.currentResource.loadSubmissionPromise.then(function(r){r.data.address&&r.data.address.geometry&&(o.position=r.data.address.geometry.location)})}]}}),r.register("opportunity",i.forms.opportunityForm),r.register("agent",i.forms.agentForm),r.register("quote",i.forms.quoteForm),s.otherwise("/")}]).run(["$rootScope","$state","Formio","FormioAlerts","AppConfig","FormioAuth",function(o,r,t,e,s,i){i.init(),o.company=s.company,angular.forEach(s.forms,function(r,t){o[t]=r})}])}();