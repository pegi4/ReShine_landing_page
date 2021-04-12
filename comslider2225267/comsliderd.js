if ((typeof cmsGGI2225267 !== 'undefined') && (cmsGGI2225267 != null) && (typeof cmsGGI2225267.Destroy !== 'undefined')){cmsGGI2225267.Destroy();}function comSlider2225267() { 
var self = this; 
var g_HostRoot = "";
var jssor_slider2225267 = null;cmsGGI2225267 = this;this.Destroy = function(){ if (self.jssor_slider2225267 != null) { self.jssor_slider2225267.$Destroy(); self.jssor_slider2225267 = null;} };  	this.jssor_slider2225267_starter = function (containerId) { 
            var _SlideshowTransitions = [ 
{$Duration:700,$Opacity:2,$Brother:{$Duration:1000,$Opacity:2}}];
			
					var options = {
										$AutoPlay: true,                                   //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
										$Idle: 0,
										$LazyLoading: 1,
										$PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, default value is 1
										$DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
										$FillMode: 2,										//[Optional] The way to fill image in slide, 0: stretch, 1: contain (keep aspect ratio and put all inside slide), 2: cover (keep aspect ratio and cover whole slide), 4: actual size, 5: contain for large image and actual size for small image, default value is 0 
										$Loop: 1,										//[Optional] Enable loop(circular) of carousel or not, 0: stop, 1: loop, 2 rewind, default value is 1 
										$PauseOnHover: 0, 							//[Optional] Whether to pause when mouse over if a slider is auto playing, 0: no pause, 1: pause for desktop, 2: pause for touch device, 3: pause for desktop and touch device, 4: freeze for desktop, 8: freeze for touch device, 12: freeze for desktop and touch device, default value is 1 
										$StartIndex: 0,	//[Optional] Index of slide to display when initialize, default value is 0 
 
									$SlideshowOptions: {                                //[Optional] Options to specify and enable slideshow or not
										$Class: $JssorSlideshowRunner$,                 //[Required] Class to create instance of slideshow
										$Transitions: _SlideshowTransitions,            //[Required] An array of slideshow transitions to play slideshow
										$TransitionsOrder: 0,       //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
									}										
									
					, $ArrowNavigatorOptions: {
						$Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
						$ChanceToShow: 1       //[Required] 0 Never, 1 Mouse Over, 2 Always
					}
				, $BulletNavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
						$Class: $JssorBulletNavigator$,                       //[Required] Class to create navigator instance
						$ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
						$AutoCenter: 1,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
						$Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
						$Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
						$SpacingX: 10,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
						$SpacingY: 10,                                   //[Optional] Vertical space between each item in pixel, default value is 0
						$Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
					}						
									};

									self.jssor_slider2225267 = new $JssorSlider$(containerId, options);										
									
										}; 
							
									//responsive code begin
									//you can remove responsive code if you do not want the slider scales while window resizes
									this.ScaleSlider = function() {		
										var  parentWidth = jqCS2225267("#comSContainer2225267_").parent().width();
										if (parentWidth) {
											self.jssor_slider2225267.$ScaleWidth(Math.min(parentWidth, 1320));
										}
										else
											window.setTimeout(self.ScaleSlider, 30);											
									};
				
					this.scriptLoaded = function(options)
					{
				   jqCS2225267 = jQuery2225267.noConflict(false);jqCS2225267("#comslider_in_point_2225267").html('<div id="comSContainer2225267_" name="comSContainer2225267_" style="display: flex;  justify-content: center; align-items: center; text-align: center;  border:0px; border-radius: 38px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.4); width:1000px; height:725px; position: relative;"><div data-u="slides" style="position: absolute; left: 0px; top: 0px; width:1000px; height:725px; border-radius: 30px; overflow: hidden;"><div idle="10000" id="imgidle_2225267_1320207"><img class="cmskb_image_0" data-u="image" imgw="1661" imgh="725" src2="comslider2225267/img/210411131927119.jpg?ot=1618139985"></img></div><div idle="10000" id="imgidle_2225267_1320205"><img class="cmskb_image_1" data-u="image" imgw="1000" imgh="725" src2="comslider2225267/img/210411131927117.jpg?ot=1618139985"></img></div><div idle="10000" id="imgidle_2225267_1320204"><img class="cmskb_image_2" data-u="image" imgw="1000" imgh="1194" src2="comslider2225267/img/210411131927116.jpg?ot=1618139985"></img></div><div idle="10000" id="imgidle_2225267_1320206"><img class="cmskb_image_3" data-u="image" imgw="1000" imgh="725" src2="comslider2225267/img/210411131927118.jpg?ot=1618139985"></img></div><div idle="10000" id="imgidle_2225267_1320208"><img class="cmskb_image_4" data-u="image" imgw="1000" imgh="1760" src2="comslider2225267/img/210411131927120.jpg?ot=1618139985"></img></div><div data-u="any" class="cmspu" style="display:block; position:absolute; top:10px; right:10px;"></div></div><!-- Bullet Navigator Skin Begin --><!-- jssor slider bullet navigator skin 01 --><style>	/*	.	 div           (normal)	.jssorb2225267 div:hover     (normal mouseover)	.jssorb2225267 .av           (active)	.jssorb2225267 .av:hover     (active mouseover)	.jssorb2225267 .dn           (mousedown)	*/	.jssorb2225267 div, .jssorb2225267 div:hover, .jssorb2225267 .av {		filter: alpha(opacity=90);		opacity: 0.9;		overflow: hidden;		cursor: pointer;	border-radius: 24px;  border: 2px solid #FFFFFF;	background-color: transparent;		margin: 0px !important;	}	.jssorb2225267 div {		margin: 0px !important;		background-repeat:no-repeat;		background-position:center; 	}		.jssorb2225267 div:hover, 		.jssorb2225267 .av:hover {			background-color: #FFFFFF;  border: 2px solid #FFFFFF;		margin: 0px !important;		background-image: url(comslider2225267/imgnav/navs2.png?timstamp=1618140457);		background-repeat:no-repeat;		background-position:center; 		}	.jssorb2225267 .av {		background-color: #FFFFFF;  border: 2px solid #FFFFFF;		margin: 0px !important;		background-image: url(comslider2225267/imgnav/navs2.png?timstamp=1618140457);		background-repeat:no-repeat;		background-position:center; 	}</style><!-- bullet navigator container -->         <div data-u="navigator" class="jssorb2225267" style="position: absolute; bottom: 30px; left: 10px;">        	<!-- bullet navigator item prototype -->        	<div data-u="prototype" style="box-sizing:content-box; POSITION: absolute; WIDTH: 12px; HEIGHT: 12px;"></div>        </div>				 <!-- Bullet Navigator Skin End -->	<!-- Arrow Navigator Skin Begin --><style>/* jssor slider arrow navigator skin 02 css *//*.jssora2225267l              (normal).jssora2225267r              (normal).jssora2225267l:hover        (normal mouseover).jssora2225267r:hover        (normal mouseover).jssora2225267ldn            (mousedown).jssora2225267rdn            (mousedown)*/.jssora2225267l, .jssora2225267r, .jssora2225267ldn, .jssora2225267rdn{		filter: alpha(opacity=80);		opacity: 0.8;	position: absolute;	cursor: pointer;	display: block;    overflow:hidden;}.jssora_back_2225267 { filter: alpha(opacity=80);opacity: 0.8; background-repeat: no-repeat;  background-position: center; position:absolute; background-image: url("data:image/svg+xml;utf8,<svg version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' x=\'0px\' y=\'0px\' width=\'66px\' height=\'66px\' viewBox=\'0 0 59.414 59.414\' style=\'enable-background:new 0 0 59.414 59.414;\' xml:space=\'preserve\'><g> <polygon style=\'fill:%23FFFFFF;\' points=\'43.854,59.414 14.146,29.707 43.854,0 45.268,1.414 16.975,29.707 45.268,58  \'/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>");}.jssora_back_2225267:hover {cursor:pointer;  filter: alpha(opacity=100);opacity: 1; background-image: url("data:image/svg+xml;utf8,<svg version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' x=\'0px\' y=\'0px\' width=\'66px\' height=\'66px\' viewBox=\'0 0 59.414 59.414\' style=\'enable-background:new 0 0 59.414 59.414;\' xml:space=\'preserve\'><g> <polygon style=\'fill:%23FFFFFF;\' points=\'43.854,59.414 14.146,29.707 43.854,0 45.268,1.414 16.975,29.707 45.268,58  \'/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>");}.jssora_forward_2225267 { filter: alpha(opacity=80);opacity: 0.8; background-repeat: no-repeat;  background-position: center; position:absolute; background-image: url("data:image/svg+xml;utf8,<svg version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' x=\'0px\' y=\'0px\' width=\'66px\' height=\'66px\' viewBox=\'0 0 59.414 59.414\' style=\'enable-background:new 0 0 59.414 59.414;\' xml:space=\'preserve\'><g> <polygon style=\'fill:%23FFFFFF;\' points=\'15.561,59.414 14.146,58 42.439,29.707 14.146,1.414 15.561,0 45.268,29.707  \'/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>");}.jssora_forward_2225267:hover {cursor:pointer;  filter: alpha(opacity=100);opacity: 1; background-image: url("data:image/svg+xml;utf8,<svg version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' x=\'0px\' y=\'0px\' width=\'66px\' height=\'66px\' viewBox=\'0 0 59.414 59.414\' style=\'enable-background:new 0 0 59.414 59.414;\' xml:space=\'preserve\'><g> <polygon style=\'fill:%23FFFFFF;\' points=\'15.561,59.414 14.146,58 42.439,29.707 14.146,1.414 15.561,0 45.268,29.707  \'/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>");} </style><!-- Arrow Left --><div data-u="arrowleft" class="jssora_back_2225267" style="width:66px;height:66px;top:0px;left:0px;" data-autocenter="2" data-scale="0.75" data-scale-left="0.75"></div><!-- Arrow Right --><div data-u="arrowright" class="jssora_forward_2225267" style="width:66px;height:66px;top:0px;right:0px;" data-autocenter="2" data-scale="0.75" data-scale-left="0.75"></div></div>');
                    jqCS2225267("#comslider_in_point_2225267 a").bind('click',  function() { if ((this.name.length > 0) && (isNaN(this.name) == false)) {  self.switchToFrame(parseInt(this.name)); return false;} });
                
					self.jssor_slider2225267_starter("comSContainer2225267_");
							
						self.ScaleSlider();
						jqCS2225267(document).ready(function() {				
							self.ScaleSlider();
						});
						jqCS2225267(window).bind("load", self.ScaleSlider);
						jqCS2225267(window).bind("resize", self.ScaleSlider);
						jqCS2225267(window).bind("orientationchange", self.ScaleSlider);						
					
}
var g_CSIncludes = new Array();
var g_CSLoading = false;
var g_CSCurrIdx = 0; 
 this.include = function(src, last) 
                {
                    if (src != '')
                    {				
                            var tmpInclude = Array();
                            tmpInclude[0] = src;
                            tmpInclude[1] = last;					
                            //
                            g_CSIncludes[g_CSIncludes.length] = tmpInclude;
                    }            
                    if ((g_CSLoading == false) && (g_CSCurrIdx < g_CSIncludes.length))
                    {


                            var oScript = null;
                            if (g_CSIncludes[g_CSCurrIdx][0].split('.').pop().substring(0,3) == 'css')
                            {
                                oScript = document.createElement('link');
                                oScript.href = g_CSIncludes[g_CSCurrIdx][0];
                                oScript.type = 'text/css';
                                oScript.rel = 'stylesheet';

                                oScript.onloadDone = true; 
                                g_CSLoading = false;
                                g_CSCurrIdx++;								
                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                        self.scriptLoaded(); 
                                else
                                        self.include('', false);
                            }
                            else
                            {
                                oScript = document.createElement('script');
                                oScript.src = g_CSIncludes[g_CSCurrIdx][0];
                                oScript.type = 'text/javascript';

                                //oScript.onload = scriptLoaded;
                                oScript.onload = function() 
                                { 
                                        if ( ! oScript.onloadDone ) 
                                        {
                                                oScript.onloadDone = true; 
                                                g_CSLoading = false;
                                                g_CSCurrIdx++;								
                                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                                        self.scriptLoaded(); 
                                                else
                                                        self.include('', false);
                                        }
                                };
                                oScript.onreadystatechange = function() 
                                { 
                                        if ( ( "loaded" === oScript.readyState || "complete" === oScript.readyState ) && ! oScript.onloadDone ) 
                                        {
                                                oScript.onloadDone = true;
                                                g_CSLoading = false;	
                                                g_CSCurrIdx++;
                                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                                        self.scriptLoaded(); 
                                                else
                                                        self.include('', false);
                                        }
                                }
                                
                            }
                            //
                            document.getElementsByTagName("head").item(0).appendChild(oScript);
                            //
                            g_CSLoading = true;
                    }

                }
                

}
objcomSlider2225267 = new comSlider2225267();
objcomSlider2225267.include('comslider2225267/js/jquery-1.10.1.js?ts=1618140457', false);
objcomSlider2225267.include('comslider2225267/js/jquery-ui-1.10.3.effects.js?ts=1618140457', false);
objcomSlider2225267.include('comslider2225267/js/jssor.slider.min_27_5_0.js?ts=1618140457', false);
objcomSlider2225267.include('comslider2225267/js/jssorcap.min.js?ts=1618140457', true);
