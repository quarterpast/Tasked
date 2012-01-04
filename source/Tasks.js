enyo.kind({
	name: "North52.Tasks",
	kind: enyo.Pane,
	flex:1,
	components: [
		{name: "slidingPane", kind: "SlidingPane", flex: 1, components: [
			{width: "320px", name: "listSliding", dragAnywhere: false, fixedWidth: true, components: [
				{name: "accounts", kind: "ListList", flex: 1}
			]},
			{width: "320px", name: "taskSliding", dragAnywhere: false, fixedWidth: true, showing: true, components: [
				{name: "mail",kind: "TaskList",flex:1}
			]},
			{flex: 1, name: "viewSliding", dragAnywhere: false, onResize: "resizeBody", showing: true, components: [
				{name: "body",kind: "TaskView",flex:1}
			]}
		]}
	]
});
