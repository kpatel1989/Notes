Meteor.publish('Notes', function(limit) {
    return Notes.find({}, { limit: limit });
});

Meteor.publish("Tags",function(){
  return Tags.find();
})
