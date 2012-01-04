enyo.kind({
	name: "ListList",
	kind: "VFlexBox",
	components: [
		{kind: "Header",components:[
			{content:"Lists",flex:1,name:"headerLabel"},
			{kind:"RoundedSearchInput",style: "width:160px", onfocus:"searchFocus", onblur:"searchBlur"}
		]},
		{kind: "VirtualList",flex:1,onSetupRow:"setupRow", components:[
			{kind:"Item",layoutKind:"HFlexLayout",components:[
				{type:"Image", name:"image"},
				{name:"caption"}
			]}
		]},
		{kind: "Toolbar", components:[
			{flex:1},
			{icon:"images/Light/list-add.png"}
		]}
	],
	data: [
		"Lorem",
		"Ipsum",
		"Dolor",
		"Sit",
		"Amet"
	],
	setupRow: function(inSender, inIndex) {
		var row = this.data[inIndex];
		if (row) {
			this.$.image.src = "images/Dark/view-list-compact-symbolic.png";
			this.$.caption.setContent(row);
			return true;
		}
	},
	searchFocus: function() {
		this.$.headerLabel.hide();
		this.$.roundedSearchInput.forceFocus();
	},
	searchBlur: function() {
		this.$.headerLabel.show();
	}
});