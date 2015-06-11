
var ITEMS_INCREMENT = 20;
Session.setDefault('itemsLimit', ITEMS_INCREMENT);
Deps.autorun(function() {
  Meteor.subscribe('Notes', Session.get('itemsLimit'));
});

Template.notes.helpers({
    notes : function(){
        return Notes.find();
    }
});

Template.notes.moreResults = function() {
    return !(Notes.find().count() < Session.get("itemsLimit"));
}


function showMoreVisible() {
		var threshold, target = $('#showMoreResults');
		if (!target.length) return;

		threshold = $(window).scrollTop() + $(window).height() - target.height() + 150;

		if (target.offset().top < threshold) {
			if (!target.data('visible')) {
				target.data('visible', true);
				Session.set('itemsLimit',
					Session.get('itemsLimit') + ITEMS_INCREMENT);
			}
		} else {
			if (target.data('visible')) {
				target.data('visible', false);
			}
		}
	}
	$(window).scroll(showMoreVisible);
