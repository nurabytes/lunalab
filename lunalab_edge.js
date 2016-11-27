
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x12='nowrap',x3='6.0.0.400',x2='5.0.0',p='px',x5='rgba(0,0,0,0)',lf='left',g='image',x4='both',e19='${luna}',tp='top',e16='${Heartbeat_SOUND_EFFECT3}',xc='rgba(0,0,0,1)',l='normal',o='opacity',e18='${button}',x8='24',x='text',x11='break-word',x15='rgba(251,251,251,1.00)',x10='400',e17='${welkomdansmaurice}',x9='montserrat, sans-serif',w='width',i='none';var g14='Heartbeat%20SOUND%20EFFECT3.mp3',g6='welkomdansmaurice.gif';var s13="<p style=\"margin: 0px;\">​<span style=\"font-size: 68px; font-weight: 300; color: rgb(40, 57, 146);\">enter</span></p>",s7="<p style=\"margin: 0px;\">​<span style=\"font-size: 104px; color: rgb(40, 57, 146);\">Luna Lab</span></p>";var im='images/',aud='media/',vid='media/',js='js/',fonts={'montserrat, sans-serif':'<script src=\"http://use.edgefonts.net/montserrat:n4:all.js\"></script>'},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:w,cg:x4,rI:n,cn:{dom:[{id:'welkomdansmaurice',t:g,r:['0px','-93px','1920px','1080px','auto','auto'],o:'0',f:[x5,im+g6,'0px','0px']},{id:'luna',t:x,r:['723px','512px','auto','auto','auto','auto'],o:'0',text:s7,align:"left",n:[x9,[x8,p],xc,x10,i,l,x11,x12],ts:["","","","",i]},{id:'button',t:x,r:['857px','639px','206px','96px','auto','auto'],cu:'pointer',o:'0',text:s13,align:"left",n:[x9,[x8,p],xc,x10,i,l,x11,""],ts:["","","","",i]},{id:'Heartbeat_SOUND_EFFECT3',v:i,volume:'0',t:'audio',tag:'audio',r:['2350','428','320px','45px','auto','auto'],sr:[aud+g14],pr:'auto'}],style:{'${Stage}':{isStage:true,r:[undefined,undefined,'1920px','939px'],overflow:'hidden',f:[x15]}}},tt:{d:186587.143,a:y,l:{"open":1105,"close":2140},data:[["eid106","volume",130,370,"swing",e16,'0','1'],["eid102",o,0,305,"swing",e17,'0','1'],["eid67",o,500,500,"swing",e18,'0','1'],["eid90",tp,0,815,"swing",e19,'452px','512px'],["eid65",o,0,500,"swing",e19,'0.000000','1'],["eid107",tp,1000,0,"swing",e18,'639px','639px'],["eid95",lf,815,0,"swing",e19,'723px','723px'],["eid100","tr",130,function(e,d){this.eMA(e,d);},['play','${Heartbeat_SOUND_EFFECT3}',[2.8]]]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-22661036");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1060,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2075,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${button}","click",function(sym,e){window.open("dashboard.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${button}","touchstart",function(sym,e){window.open("http://www.adobe.com","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-22661036");