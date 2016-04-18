FlowRouter.wait();

document.addEventListener("WebComponentsReady", function() {

  FlowRouter.initialize({
  });
});

FlowRouter.route("/:view?", {
  name:'landing',
  triggersEnter:[function(c,r){
    if(!c.params.view)
      r("/home");
  }],
  action:function(params,queryParams){
    mwcLayout.render("todo-landing",{"main":"todo-view"});
  }
});



import '../../ui/bower_components/webcomponentsjs/webcomponents-lite.min.js'
import "../../ui/bower_components/polymer/polymer.html";
import '../../ui';
import "../../ui/bower_components/mwc-layout/mwc-layout.html";



