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
		{kind: "Scroller",flex:1},
		{kind: "Toolbar", components:[
			{kind:"GrabButton"},
			{icon:"images/Light/dialog-ok.png"},
			{icon:"images/Light/tag-new.png"},
			{icon:"images/Light/haguichi-connected.png"},
			{name:"important",icon:"images/Light/software-update-available.png",onclick:"toggleImportant"},
			{icon:"images/Light/list-remove.png"}
		]}
	],
	toggleImportant: function() {
		if(this.$.important.getIcon() == "images/Light/software-update-available.png") {
			this.$.important.setIcon("images/Light/software-update-urgent.png");
		} else {
			this.$.important.setIcon("images/Light/software-update-available.png");
		}
	}
});