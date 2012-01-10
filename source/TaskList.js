enyo.kind({
	name: "TaskList",
	kind: "VFlexBox",
	components: [
		{name: "header", kind: "Header", components:[
			{content:"All tasks",flex:1,name:"headerLabel"},
			{kind:"RoundedSearchInput", onfocus:"searchFocus", onblur:"searchBlur",name:"search"}
		]},
		{
			style: "-webkit-border-image: none; background: white;",
			className:"enyo-box-input",
			kind:"Input",
			hint:"New task...",
			name:"newTask",
			changeOnInput: true,
			components:[{kind:"Image",src:"images/symbolic/list-add-symbolic.png"}]
		},
		{kind: "VirtualList",flex:1,onSetupRow:"setupRow", components:[
			{kind:"Item",layoutKind:"HFlexLayout",components:[
				{name:"caption",flex:1},
				{kind: "CheckBox"}
			]}
		]},
		{kind: "Toolbar", components:[
			{kind:"GrabButton"},
			{kind:"ToolButton",icon:"images/Light/list-add.png",onclick:"focusNewTask"},
			{kind:"RadioToolButtonGroup",components:[
				{icon: "sort-time", iconIsClassName: true},
				{icon: "sort-alphabetical", iconIsClassName: true},
				{icon: "sort-importance", iconIsClassName: true}
			]}
		]},
		{name:"sortMenu", kind:"Menu",className:'enyo-icon-menu',showing:false,components:[
			
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
			this.$.caption.setContent(row);
			return true;
		}
	},
	showSortMenu: function() {
		this.$.sortMenu.openAroundControl(this.$.sortButton);
	},
	focusNewTask: function() {
		this.$.newTask.forceFocus();
	},
	searchFocus: function() {
		this.$.search.addClass("wide");
		this.$.headerLabel.hide();
	},
	searchBlur: function() {
		this.$.search.removeClass("wide");
		this.$.headerLabel.show();
	}
});