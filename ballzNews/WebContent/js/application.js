oApplication = { // Application is an object
	
	views: {}, // Application views	
		
	load: function(src, id, libs, theme, callback) {		
		var opts = {
			length: 12, // The length of each line
			width: 4, // The line thickness
			radius: 12, // The radius of the inner circle
		};
		var target = document.getElementById('content');
		this.spinner = new Spinner(opts).spin(target);		
		setTimeout(this.loadSAPUI5(src, id, libs, theme, callback));		
	},

	loadSAPUI5: function (src, id, libs, theme, callback)
	{
		var s,r,t;
		r = false;
		s = document.createElement('script');
		s.type = 'text/javascript';
		s.src = src;
		s.id = id;
		s.setAttribute("data-sap-ui-libs", libs);
     	s.setAttribute("data-sap-ui-theme", theme);
		s.onload = s.onreadystatechange = function() {
		    //console.log( this.readyState ); //uncomment this line to see which ready states are called.
			if ( !r && (!this.readyState || this.readyState == 'complete') ){
				r = true;
				callback();
			}
		};
		t = document.getElementsByTagName('script')[0];
		t.parentElement.insertBefore(s, t);
	},

	onSAPUI5Loaded: function(){	
		oApplication.initializeUI5(); 
		$("body").fadeOut("slow",function(){
			$("#content").empty(); 
			$("#content").removeAttr('style');
		//	oApplication.app.placeAt("content");	
			appFeedList.placeAt("content");		
			$(this).fadeIn("slow");
		});		
	},
	
	initializeUI5: function(){
		
    	 sap.ui.localResources("locals");
		 jQuery.sap.require("locals.resources.jgfeed");
		 jQuery.sap.require("locals.resources.feedList");
	     jQuery.sap.require("locals.resources.newsPage");
		 jQuery.sap.require("locals.resources.app");
		 jQuery.sap.require("locals.resources.mainPage");
		 jQuery.sap.require("locals.resources.savedListPage");

		 
		 
	     appFeedList.addPage(feedListPage);			
	     appFeedList.addPage(savedListPage);
	     appFeedList.addPage(newsPage);
    	
    	
    	selectedNews = "http://www.maalaimalar.com/RSS/SectionRssFeed.aspx?Id=1&Main=18";    	
    	fillFeedListData(selectedNews);

	}	
}	