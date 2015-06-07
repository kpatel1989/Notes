Meteor.startup(function(){
    
    var defaultNotes = [
        {
            "title" : "Note1",
            "description" : "This is note 1.",
            "tag" : "notes note1 tag",
            "created-on" : "12-Apr-2015"
        },
        {
            "title" : "Note1",
            "description" : "This is note 1.",
            "tag" : "notes note1 tag",
            "created-on" : "10-Mar-2015"
        }
    ];
    if (Notes.find().count() == 0){
        _.each(defaultNotes,function(note){
            Notes.insert(note);
        })
    } 
});

