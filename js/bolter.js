(function($){
	var bolter={
		loaded:function(callback){
			$(window).on("load", function() {
				setTimeout(function(){
					$("body").removeClass("loading");
				},1750);
				setTimeout(function(){
					$("body").removeClass("disabled");
					callback();
				},2000);
			});
		},
		bootstrap:function(self){
			self.navigation();
			self.appear();
			self.mobileNav();
		},
		navigation:function(){
			var navTo=function(anchor){
				anchor=anchor.replace("#","");
				var $navAnchor=$('[b-nav-anchor="'+anchor+'"]');
				if($navAnchor.length===0){
					return;
				}
				window.location.hash = anchor;
				$('html, body').animate({
					scrollTop: $navAnchor.offset().top-100
				}, 300);
			}
			$("[b-nav]").click(function(e){
				var $navE=$(e.target);
				navTo($navE.attr("b-nav"));
			});
			navTo(window.location.hash);
		},
		appear:function(){
			$(".section,.b-section").bind('appear', function(e){
				var $section=$(e.target);
				$section.addClass("visible");
			});
		},
		mobileNav:function(){
			var $header=$(".header");
			$header.click(function(e){
				$("body").toggleClass("mobileNav");
			});
			$header.find(".pages a").click(function(e){
				$("body").removeClass("mobileNav");
				e.stopPropagation();
			});
			$("*").click(function(e){
				var $target=$(e.target);
				if(!$.contains(document.querySelector(".header"),e.target)){
					$("body").removeClass("mobileNav");	
				}
			});
		}
	};
	bolter.loaded(function(){
		bolter.bootstrap(bolter);
	});
})(jQuery);
