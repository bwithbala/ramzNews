
jQuery.sap.require("locals.resources.feedList");

        var feedListPage = new sap.m.Page("feedListPage", {
				title : "Ballz News",
				BackgroundDesign: sap.m.BackgroundDesign.Transparent,
				showHeader : true,
				enableScrolling : true
			});
			
			
			feedListPage.addContent(oFeedList);
			
			
			jQuery.sap.require("sap.ui.core.IconPool");
			var sURI = sap.ui.core.IconPool.getIconURI("personnel-view");
			
			var slider = new sap.m.Slider("opacitySlider", {
				width : "50%",
				min : 0,
				max : 1,
				step : 0.01,
				liveChange : function(oEvent) {
					var value = oEvent.getParameter("value");
					appFeedList.setBackgroundOpacity(value);
				}
			});
			
			//Create a ColorPicker Control without parameters
			var oColorPicker1 = new sap.ui.commons.ColorPicker();

			//Attach eventhandler for change event
			oColorPicker1.attachChange(handleColorPickerChange);

			function handleColorPickerChange(oEvent) {
				var colors = oEvent.getParameters();
				appFeedList.setBackgroundColor(colors.hex);
				appFeedList.setBackgroundOpacity(0.6);
				sap.ui.getCore().byId("opacitySlider")
						.setValue(0.6);
				appFeedList.setBackgroundRepeat(true);

			};
					

				var oPopover = new sap.m.Popover(
						{
							placement : sap.m.PlacementType.Bottom,
							title : "Settings",
							showHeader : true,
							//		beginButton: oBeginButton,
							//	endButton: oEndButton,
							beforeOpen : function(oEvent) {
								jQuery.sap.log.info("before popover opens!!!");
							},
							afterOpen : function(oEvent) {
								jQuery.sap.log.info("popover is opened finally!!!");
							},
							beforeClose : function(oEvent) {
								jQuery.sap.log.info("before popover closes!!!");
							},
							afterClose : function(oEvent) {
								jQuery.sap.log.info("popover is closed properly!!!");
							},
							//	footer: footer,
							content : [
									oColorPicker1,
									// background image switches
									new sap.m.Button(
											{
												text : "Stretched Cheetah",
												press : function() {
													appFeedList
															.setBackgroundImage("images/Telangana_logo.jpg");
													appFeedList.setBackgroundColor("");
													appFeedList.setBackgroundOpacity(1);
													appFeedList.ui.getCore().byId("opacitySlider")
															.setValue(1);
													appFeedList.setBackgroundRepeat(false);

												}
											}),

									new sap.m.Button(
											{
												text : "Repeating translucent Cheetah",
												press : function() {
													appFeedList
															.setBackgroundImage("images/Telangana_logo.jpg");
													appFeedList.setBackgroundColor("#67E02B");
													appFeedList.setBackgroundOpacity(0.6);
													sap.ui.getCore().byId("opacitySlider")
															.setValue(0.6);
													appFeedList.setBackgroundRepeat(true);

												}
											}),

									new sap.m.Button({
										text : "Clear Background",
										press : function() {
											appFeedList.setBackgroundImage("");
											appFeedList.setBackgroundColor("");
											appFeedList.setBackgroundOpacity(1);
											sap.ui.getCore().byId("opacitySlider").setValue(1);
											appFeedList.setBackgroundRepeat(false);

										}
									}),
									
									slider

							],
							initialFocus : "focusInput"
						});	     	
				
				
				//Create the Accordion control
				var oAccordion = new sap.ui.commons.Accordion("NewsCatAccordion"); 
				
				  var oDivider = new sap.ui.commons.HorizontalDivider("divider");	  
				  oDivider.setHeight(sap.ui.commons.HorizontalDividerHeight.Large);
				  oDivider.setType(sap.ui.commons.HorizontalDividerType.Area);
				  oDivider.setWidth("100%");
				  
				  var oDivider1 = new sap.ui.commons.HorizontalDivider("divider1");	
				  oDivider1.setHeight(sap.ui.commons.HorizontalDividerHeight.Large);
				  oDivider1.setType(sap.ui.commons.HorizontalDividerType.Area);		
				  oDivider1.setWidth("100%");
				  
				  var oDivider2 = new sap.ui.commons.HorizontalDivider("divider2");	
				  oDivider2.setHeight(sap.ui.commons.HorizontalDividerHeight.Large);
				  oDivider2.setType(sap.ui.commons.HorizontalDividerType.Area);		
				  oDivider2.setWidth("100%");
				  
				  var oDivider3 = new sap.ui.commons.HorizontalDivider("divider3");	  
				  oDivider3.setHeight(sap.ui.commons.HorizontalDividerHeight.Large);
				  oDivider3.setType(sap.ui.commons.HorizontalDividerType.Area);		
				  oDivider3.setWidth("100%");				  
				  
				  
				
				//Building Section 1
				var onewsSection = new sap.ui.commons.AccordionSection( "newsSection" );		
				  onewsSection.setTitle("News");		
				  onewsSection.setTooltip("News");
				  onewsSection.setMaxHeight("100px");
				  
				  
				  var oHeadLines = new sap.m.Button({
					    text : "Head Lines",
					    style: sap.ui.commons.ButtonStyle.Emph,
					    press : function() {
 	
					    	selectedNews = "http://www.maalaimalar.com/RSS/SectionRssFeed.aspx?Id=1&Main=18";    	
					    	fillFeedListData(selectedNews);
					    }
					});

					var oNational = new sap.m.Button({
					    text : "National",
					    style: sap.ui.commons.ButtonStyle.Emph,
					    press : function() {
					    	selectedNews = "http://www.maalaimalar.com/RSS/SectionRssFeed.aspx?Id=19&Main=18";    	
					    	fillFeedListData(selectedNews);
					    }
					
					
					});

					var oWorld = new sap.m.Button({
					    text : "World News",
					    style: sap.ui.commons.ButtonStyle.Emph,
					    press : function() {
					    	selectedNews = "http://www.maalaimalar.com/RSS/SectionRssFeed.aspx?Id=20&Main=18";    	
					    	fillFeedListData(selectedNews);
					    }
					
					
					});					
					
					var oState = new sap.m.Button({
					    text : "State News",
					    style: sap.ui.commons.ButtonStyle.Emph,
					    press : function() {
					    	selectedNews = "http://www.maalaimalar.com/RSS/SectionRssFeed.aspx?Id=28&Main=18";    	
					    	fillFeedListData(selectedNews);
					    }
					});							
					
					var oVLNewsLay = new sap.ui.commons.layout.VerticalLayout("oVLNewsLay", {
						content: [oHeadLines, oDivider, oNational,oDivider1, oWorld,oDivider2, oState, oDivider3]
					});
					onewsSection.addContent( oVLNewsLay);
					  
					oAccordion.addSection( onewsSection );		
					
					
					var oActionSheet = new sap.m.ActionSheet("actionSheet1", {
						showCancelButton: false,
						buttons: [
                             oHeadLines,
                             oNational,
                             oWorld,
                             oState
						],
						placement: sap.m.PlacementType.Bottom,
						cancelButtonPress: function(){
							jQuery.sap.log.info("sap.m.ActionSheet: cancelButton is pressed");
						}
					});
					
					

/*				var oNewsCatPopOver = new sap.m.Popover(
						{
							placement : sap.m.PlacementType.right,
							title : "Select News",
							showHeader : true,
							//		beginButton: oBeginButton,
							//	endButton: oEndButton,
							beforeOpen : function(oEvent) {
								jQuery.sap.log.info("before popover opens!!!");
							},
							afterOpen : function(oEvent) {
								jQuery.sap.log.info("popover is opened finally!!!");
							},
							beforeClose : function(oEvent) {
								jQuery.sap.log.info("before popover closes!!!");
							},
							afterClose : function(oEvent) {
								jQuery.sap.log.info("popover is closed properly!!!");
							},
							//	footer: footer,
							content : [
									
                               oActionSheet,
							],
							//initialFocus : "focusInput"
						});	  */
				
				
			var d = sap.ui.Device;
			var Bar = new sap.m.Bar({
				contentLeft : [ new sap.m.Button('SelectNews', {
					icon : sap.ui.core.IconPool.getIconURI("menu2"),
					press : function() {
						
						oActionSheet.setPlacement(sap.m.PlacementType.Vertical);
						oActionSheet.setShowCancelButton(false);
						oActionSheet.openBy(this);
	
						//app.to("page2", "slide");
					}
				}) ],
				
				contentMiddle : [ 
				                //  oSelect0
				],
			    contentRight: [
					new sap.m.Button('settings', {
						icon : sap.ui.core.IconPool.getIconURI("settings"),
						press : function() {
					
							oPopover.setPlacement(sap.m.PlacementType.Left);
							oPopover.openBy(this);
						}
					}),
					new sap.m.Button('SavedList', {
						icon : sap.ui.core.IconPool.getIconURI("save"),
						press : function() {
							appFeedList.to("savedListPage", "slide");

						}
					})					
			]
			});
			
			feedListPage.setCustomHeader(Bar);  	
			
			

			