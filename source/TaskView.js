enyo.kind({
	name: "TaskView",
	kind: "VFlexBox",
	components: [
		{
			style: "background: white; height: 56px; font-size: 1.2rem",
			className:"enyo-box-input header-input",
			alwaysLooksFocused: true,
			kind:"Input",
			value:"Task",
			changeOnInput: true
		},
		{kind:"Scroller", flex:1,components:[
		{kind:"DividerDrawer",caption:"Notes",components:[
			{kind: "VirtualRepeater",onSetupRow:"setupRow", components:[
				{kind:"Item",layoutKind:"HFlexLayout",components:[
					{type:"Image", name:"image"},
					{name:"caption"}
				]}
			]}
		]},
		{kind:"DividerDrawer",caption:"Date & Time",components:[
			{kind: "VFlexBox",className: "calendar",components:[
				{kind:"Header",className:"enyo-toolbar-light",components:[
					{kind:"ToolButton",icon:"images/Dark/go-first.png"},
					{kind:"ToolButton",icon:"images/Dark/go-previous.png"},
					{content:"September 2012",style:"text-align:center;line-height: 8px;",flex:1},
					{kind:"ToolButton",icon:"images/Dark/go-next.png"},
					{kind:"ToolButton",icon:"images/Dark/go-last.png"}
				]}
			]}
		]},
		{kind:"DividerDrawer",caption:"Reminders",components:[
			
		]},
		]},
		{kind: "Toolbar", components:[
			{kind:"GrabButton"},
			{icon:"images/Light/dialog-ok.png"},
			{icon:"images/Light/tag-new.png"},
			{icon:"images/Light/haguichi-connected.png"},
			{name:"important",icon:"images/Light/importance-low.png",onclick:"toggleImportant"},
			{icon:"images/Light/list-remove.png"}
		]}
	],
	toggleImportant: function() {
		if(this.$.important.getIcon() == "images/Light/importance-low.png") {
			this.$.important.setIcon("images/Light/importance-high.png");
		} else {
			this.$.important.setIcon("images/Light/importance-low.png");
		}
	},
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
	}
});