(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
  var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
  var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-IBJG7TYKTFKF-2");

$( function() {
    $( ".dragred").draggable({
            stop : function r() {aptrinsic('track','DragCustomevent',{"name":"red drag", "color" : 'red'});}
    })
  } );
  $( function() {
    $( ".dragblue").draggable({
          stop : function r() {aptrinsic('track','DragCustomevent',{"name":"blue drag", "color" : 'blue'});}
    })
  } );
  $( function() {
    $( ".draggreen").draggable({
          stop : function r() {aptrinsic('track','DragCustomevent',{"name":"green drag", "color" : 'green'});}
    })
  } );
