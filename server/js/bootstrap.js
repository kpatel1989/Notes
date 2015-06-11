Meteor.startup(function(){

    var defaultNotes = [
        {
            "title" : "Note",
            "description" : "This is a note",
            "tags" : [
                {
                  "name" :"notes"
                },
                {
                  "name" : "note1"
                },
                {
                  "name" : "tag"
                }
              ],
            "created-on" : "12-Apr-2015"
        },
        {
            "title" : "Note1",
            "description" : "This is note 1.",
            "tags" : [
                {
                  "name" :"notes"
                },
                {
                  "name" : "note1"
                },
                {
                  "name" : "tag"
                }
              ],
            "created-on" : "10-Mar-2015"
        },
        {
            "title" : "Note1",
            "description" : "This is note 1.",
            "tags" : [
                {
                  "name" :"notes"
                },
                {
                  "name" : "note1"
                },
                {
                  "name" : "tag"
                }
              ],
            "created-on" : "12-Apr-2015"
        },
    ];
    var tags = ["notes","note","mumbai","linkwok","tag"];
    if (Notes.find().count() == 0){
      i = 0;
      var note = defaultNotes[0];
      var title = note.title;
      for (var i=0;i<500;i++) {
          note.title = title + Math.round(Math.random()*2);
          var tagCount = Math.round(Math.random() * 2) % tags.length;
          tagCount  = tagCount == 0 ? 1 : tagCount;
          var noteTags = [];
          for(var j=0;j<tagCount;j++){
            var index = Math.round(Math.random() * 2) % tags.length;
            var tag = tags[index];
            noteTags.push({"name" :tag});
          }
          note.tags = noteTags;
          Notes.insert(note);
      }
    }
});
