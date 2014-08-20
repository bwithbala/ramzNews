jQuery.sap.require("locals.resources.feedList");

        var savedListPage = new sap.m.Page("savedListPage", {
				title : "Saved Articles",
				BackgroundDesign: sap.m.BackgroundDesign.Transparent,
				showHeader : true,
				enableScrolling : true,
				showNavButton: true,
				navButtonPress: function(){ appFeedList.back(); },
			});
        
     
		var data = {
				chunks : []
			};
    	//Create Model
    	var oModel = new sap.ui.model.json.JSONModel();
    	oModel.setData(data);


    	//Check if there is data into the Storage
    	if (oStorage.get("myLocalData")) {
    		//console.log("Data is from Storage!");
    		//alert("Data From Storage");
    		var oData = oStorage.get("myLocalData");
    		oModel.setData(oData);
    	}
    	
		oSavedFeedList.setModel(oModel);
		// bind Aggregation
		oSavedFeedList.bindAggregation("items", "/chunks", oSavedListItemTemplate);	
    	
    	
        savedListPage.addContent(oSavedFeedList);    
