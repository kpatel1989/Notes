Meteor.publish('Notes', function(limit) {
    return Notes.find({}, { limit: limit });
  });
