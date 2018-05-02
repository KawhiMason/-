(function($){

	function preLoad(imgs,options){
		this.imgs = (typeof imgs === "string") ? [imgs] : imgs;
		this.opts = $.extend({}, defaults,options);

		this._picLoadEvent();
	}

	defaults = {
		each:null,
		all:null

	}

	preLoad.prototype._picLoadEvent  =function (){ //无序加载
		var imgs = this.imgs,
		opts = this.opts,
		count = 0,
		len = imgs.length;

		$.each(imgs,function(i,src){
			if(typeof src!= 'string') return;

			var imgObj = new Image();

			$(imgObj).on('load error',function(){
				console.log(222);
				opts.each && opts.each(count);
				if(count >= len-1){
					opts.all&&opts.all();

				}
				count++;
			});
				imgObj.src = src;	
		})
	};

	$.extend({
		preLoad : function (imgs,opts){
			new preLoad(imgs,opts);
		}
	});
	
})(jQuery)
