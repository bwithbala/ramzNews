      
jQuery.sap.require("locals.resources.feedList");

 

       var newsLink;
       var newsPage = new sap.m.Page("newsPage", {
				//title : "Saved Articles",
				BackgroundDesign: sap.m.BackgroundDesign.Transparent,
				showHeader : true,
				enableScrolling : true,
				showNavButton: true,
				navButtonPress: function(){ appFeedList.back(); },
			}).addEventDelegate({
				onBeforeShow: function(evt) {
					newsLink = evt.data.payloadInfo;
					//$("#iframeiframe").attr('src', newsLink);	
/*					var page = newsLink;

				var $dialog = $('<div></div>')
					               .html('<iframe style="border: 0px; " src="' + page + '" width="100%" height="100%"></iframe>')
					               .dialog({
					                   autoOpen: false,
					                   modal: true,
					                   height: 625,
					                   width: 500,
					                   title: "Some title"
					               });
					$dialog.dialog('open');			*/	
					
				//	alert("News Link from News Page:" +newsLink);
				}
			});
 