var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,d,b){a instanceof String&&(a=String(a));for(var c=a.length,e=0;e<c;e++){var f=a[e];if(d.call(b,f,e,a))return{i:e,v:f}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,d,b){a!=Array.prototype&&a!=Object.prototype&&(a[d]=b.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,d,b,c){if(d){b=$jscomp.global;a=a.split(".");for(c=0;c<a.length-1;c++){var e=a[c];e in b||(b[e]={});b=b[e]}a=a[a.length-1];c=b[a];d=d(c);d!=c&&null!=d&&$jscomp.defineProperty(b,a,{configurable:!0,writable:!0,value:d})}};$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,b){return $jscomp.findInternal(this,a,b).v}},"es6","es3");
jQuery(function(a){function d(f){"resize"===f.type&&(a(c.BODY).removeClass(b.DROPDOWN_OPEN),a(c.BASE).find(".navbar-collapse").removeClass("show"),a(c.BASE).removeClass(b.OPENED).find(c.TOGGLER).each(function(){a(a(this).attr("data-target")).removeClass(b.IN).add(this).attr("aria-expanded","false")}));var d=a(this).scrollTop();a(c.BASE).each(function(){a(this).is(c.FIXED_TOP)&&(a(this).is(c.TRANSPARENT)&&!a(this).hasClass(b.OPENED)&&(0<d?a(this).removeClass(b.BG_COLOR):a(this).addClass(b.BG_COLOR)),
0<d?a(this).addClass(b.SHORT):a(this).removeClass(b.SHORT))})}var b={IN:"in",OPENED:"opened",BG_COLOR:"bg-color",DROPDOWN_OPEN:"navbar-dropdown-open",SHORT:"navbar-short"},c={BODY:"body",BASE:".navbar-dropdown",TOGGLER:'.navbar-toggler[aria-expanded="true"]',TRANSPARENT:".transparent",FIXED_TOP:".navbar-fixed-top"},e;a(window).on("scroll.bs.navbar-dropdown.data-api resize.bs.navbar-dropdown.data-api",function(a){clearTimeout(e);e=setTimeout(function(){d(a)},10)}).trigger("scroll.bs.navbar-dropdown.data-api");
a(document).on("click.bs.navbar-dropdown.data-api",c.BASE,function(a){a.targetWrapper=this}).on("show.bs.collapse hide.bs.collapse",function(d){a(d.target).closest(c.BASE).each(function(){"show"==d.type?(a(c.BODY).addClass(b.DROPDOWN_OPEN),a(this).addClass(b.OPENED)):(a(c.BODY).removeClass(b.DROPDOWN_OPEN),a(this).removeClass(b.OPENED),a(window).trigger("scroll.bs.navbar-dropdown.data-api"),a(this).trigger("collapse.bs.navbar-dropdown"))})}).on("collapse.bs.nav-dropdown",function(b){a(b.relatedTarget).closest(c.BASE).find(c.TOGGLER).trigger("click")})});


}
/*
     FILE ARCHIVED ON 13:55:54 Feb 24, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:55:15 Nov 26, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 250.253
  exclusion.robots: 0.071
  exclusion.robots.policy: 0.064
  cdx.remote: 0.065
  esindex: 0.01
  LoadShardBlock: 174.645 (3)
  PetaboxLoader3.datanode: 208.914 (4)
  CDXLines.iter: 14.43 (3)
  load_resource: 172.64
  PetaboxLoader3.resolve: 74.595
*/